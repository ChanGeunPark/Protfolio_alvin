"use client";

import React, { useCallback, useEffect, useRef } from "react";

/** Portfolio accent #33EBBD */
const ACCENT_R = 0x33;
const ACCENT_G = 0xeb;
const ACCENT_B = 0xbd;

const IMG_SRC = "/images/aboutScene/myFace2.png";

const RIPPLE_DURATION_MS = 1000;
/** Max scale bump at ripple crest (1 + this at peak). */
const RIPPLE_GLYPH_SCALE_BUMP = 0.48;

const DARK = ["@", "#", "$", "M", "W"] as const;
const MID = ["x", "z", "c", "v", "i"] as const;
const BRIGHT = [".", ",", "'"] as const;

function cellHash(cx: number, cy: number, salt: number): number {
  let h = cx * 374761393 + cy * 668265263 + salt * 1442695041;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (h >>> 0) / 4294967296;
}

function pick<T extends readonly string[]>(arr: T, u: number): T[number] {
  return arr[Math.min(arr.length - 1, Math.floor(u * arr.length))];
}

function lumAt(
  data: Uint8ClampedArray,
  w: number,
  x: number,
  y: number,
): number {
  const i = (y * w + x) * 4;
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function saturationAt(
  data: Uint8ClampedArray,
  w: number,
  x: number,
  y: number,
): number {
  const i = (y * w + x) * 4;
  const r = data[i] / 255;
  const g = data[i + 1] / 255;
  const b = data[i + 2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max <= 1e-6) return 0;
  return (max - min) / max;
}

/** Grey wall–like background from edge samples (low saturation strips). */
function estimateBackgroundLum(
  data: Uint8ClampedArray,
  w: number,
  h: number,
): number {
  const edge: { lum: number; sat: number }[] = [];
  for (let x = 0; x < w; x++) {
    edge.push({ lum: lumAt(data, w, x, 0), sat: saturationAt(data, w, x, 0) });
    edge.push({
      lum: lumAt(data, w, x, h - 1),
      sat: saturationAt(data, w, x, h - 1),
    });
  }
  for (let y = 1; y < h - 1; y++) {
    edge.push({ lum: lumAt(data, w, 0, y), sat: saturationAt(data, w, 0, y) });
    edge.push({
      lum: lumAt(data, w, w - 1, y),
      sat: saturationAt(data, w, w - 1, y),
    });
  }
  const muted = edge.filter((e) => e.sat < 0.11);
  const pool = muted.length >= 6 ? muted : edge;
  const lums = pool.map((e) => e.lum).sort((a, b) => a - b);
  return lums[Math.floor(lums.length / 2)] ?? 128;
}

function isBackgroundWall(
  rawLum: number,
  rawSat: number,
  bgLum: number,
): boolean {
  const d = Math.abs(rawLum - bgLum);
  if (d < 14) return true;
  if (d < 30 && rawSat < 0.12) return true;
  return false;
}

type PointerState = { inside: boolean; nx: number; ny: number };

type RippleState = { nx: number; ny: number; start: number };

function MyFace() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const pointerRef = useRef<PointerState>({
    inside: false,
    nx: 0.5,
    ny: 0.5,
  });
  const rippleRef = useRef<RippleState | null>(null);
  const rafPaintRef = useRef<number | null>(null);
  const rippleRafRef = useRef<number | null>(null);
  const lastCanvasSizeRef = useRef<{ cssW: number; cssH: number; dpr: number }>(
    {
      cssW: 0,
      cssH: 0,
      dpr: 0,
    },
  );

  const paint = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!container || !canvas || !img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const cw = container.clientWidth;
    if (cw < 32) return;

    const dpr = Math.min(
      typeof window !== "undefined" ? (window.devicePixelRatio ?? 1) : 1,
      2,
    );

    const fontSize = 10;
    const lineHeight = fontSize * 1.18;
    ctx.font = `${fontSize}px ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace`;
    const charWidth = Math.max(4, ctx.measureText("M").width);

    const targetCols = Math.min(
      128,
      Math.max(56, Math.floor((cw * 0.98) / charWidth)),
    );

    // 샘플 그리드의 종횡비를 실제 화면의 셀 종횡비와 맞춰서 초상화가 원본 이미지의 가로:세로 비율과 일치하도록 함.
    // 각 셀은 이미지 상에서 (imgW/cols)×(imgH/rows) 영역을, 화면상에서는 charWidth×lineHeight 영역을 차지함.
    // 즉, (imgW/cols)/(imgH/rows) = charWidth/lineHeight 조건을 맞춰야 함.
    const rows = Math.max(
      10,
      Math.round(
        (targetCols * img.naturalHeight * charWidth) /
          (img.naturalWidth * lineHeight),
      ),
    );

    const sample = document.createElement("canvas");
    sample.width = targetCols;
    sample.height = rows;
    const sctx = sample.getContext("2d");
    if (!sctx) return;
    sctx.imageSmoothingEnabled = true;
    sctx.imageSmoothingQuality = "high";
    sctx.drawImage(img, 0, 0, targetCols, rows);
    const { data } = sctx.getImageData(0, 0, targetCols, rows);

    const cssW = targetCols * charWidth;
    const cssH = rows * lineHeight;

    const wPx = Math.max(1, Math.floor(cssW * dpr));
    const hPx = Math.max(1, Math.floor(cssH * dpr));
    const prev = lastCanvasSizeRef.current;
    if (prev.cssW !== cssW || prev.cssH !== cssH || prev.dpr !== dpr) {
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      canvas.width = wPx;
      canvas.height = hPx;
      lastCanvasSizeRef.current = { cssW, cssH, dpr };
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Setting canvas width/height resets the context; reapply text settings before drawing.
    const fontFamily = `ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace`;

    ctx.clearRect(0, 0, cssW, cssH);

    const bgLum = estimateBackgroundLum(data, targetCols, rows);

    const pcx = (targetCols - 1) / 2;
    const pcy = (rows - 1) / 2;
    const maxD = Math.hypot(pcx, pcy) || 1;

    const pointer = pointerRef.current;
    const influenceR = Math.hypot(cssW, cssH) * 0.36;
    let ptrX = 0;
    let ptrY = 0;
    if (pointer.inside) {
      ptrX = pointer.nx * cssW;
      ptrY = pointer.ny * cssH;
    }

    const ripple = rippleRef.current;
    let rippleT = 0;
    let ripCx = 0;
    let ripCy = 0;
    let maxRippleR = 1;
    if (ripple) {
      const elapsed = performance.now() - ripple.start;
      rippleT = Math.min(1, elapsed / RIPPLE_DURATION_MS);
      ripCx = ripple.nx * cssW;
      ripCy = ripple.ny * cssH;
      maxRippleR = Math.hypot(cssW, cssH) * 0.82;
    }

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${fontSize}px ${fontFamily}`;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < targetCols; x++) {
        const rawLum = lumAt(data, targetCols, x, y);
        const rawSat = saturationAt(data, targetCols, x, y);

        if (isBackgroundWall(rawLum, rawSat, bgLum)) continue;

        let lum = rawLum;
        const n = (cellHash(x, y, 7) - 0.5) * 26;
        lum += n;
        lum = Math.max(0, Math.min(255, lum));

        const dist = Math.hypot(x - pcx, y - pcy) / maxD;
        const edge = dist * dist;

        let bucket: "dark" | "mid" | "bright";
        if (lum < 92) bucket = "dark";
        else if (lum < 178) bucket = "mid";
        else bucket = "bright";

        if (edge > 0.52 && lum > 135 && cellHash(x, y, 19) < edge * 0.42)
          continue;
        if (edge > 0.72 && lum > 175 && cellHash(x + 3, y, 23) < 0.5) continue;

        const u = cellHash(x, y, 3);
        const ch =
          bucket === "dark"
            ? pick(DARK, u)
            : bucket === "mid"
              ? pick(MID, u)
              : pick(BRIGHT, u);

        const separation = Math.min(1, Math.abs(rawLum - bgLum) / 72);
        const a = 0.42 + separation * 0.48 + (1 - edge) * 0.12;
        const alpha = Math.min(1, a);

        const cellCX = x * charWidth + charWidth * 0.5;
        const cellCY = y * lineHeight + lineHeight * 0.5;

        let proximity = 0;
        if (pointer.inside && influenceR > 1) {
          const d = Math.hypot(cellCX - ptrX, cellCY - ptrY);
          const linear = Math.max(0, Math.min(1, 1 - d / influenceR));
          proximity = linear * linear;
        }

        let rippleBoost = 0;
        if (ripple && maxRippleR > 1) {
          const d = Math.hypot(cellCX - ripCx, cellCY - ripCy);
          const waveR = rippleT * maxRippleR;
          const band = Math.max(12, maxRippleR * 0.052);
          const delta = (d - waveR) / band;
          const ring = Math.exp(-delta * delta);
          const fade = 1 - rippleT * rippleT;
          rippleBoost = ring * ring * fade;
        }

        const proximityCombined = Math.min(1, proximity + rippleBoost);

        const gr = Math.round(255 + (ACCENT_R - 255) * proximityCombined);
        const gg = Math.round(255 + (ACCENT_G - 255) * proximityCombined);
        const gb = Math.round(255 + (ACCENT_B - 255) * proximityCombined);

        ctx.fillStyle = `rgba(${gr},${gg},${gb},${alpha})`;

        const glyphScale = 1 + RIPPLE_GLYPH_SCALE_BUMP * rippleBoost;
        if (glyphScale > 1.004) {
          ctx.save();
          ctx.translate(cellCX, cellCY);
          ctx.scale(glyphScale, glyphScale);
          ctx.fillText(ch, 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(ch, cellCX, cellCY);
        }
      }
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      imgRef.current = img;
      paint();
    };
    img.src = IMG_SRC;
  }, [paint]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => paint());
    ro.observe(el);
    return () => ro.disconnect();
  }, [paint]);

  const schedulePaint = useCallback(() => {
    if (rafPaintRef.current != null) return;
    rafPaintRef.current = requestAnimationFrame(() => {
      rafPaintRef.current = null;
      paint();
    });
  }, [paint]);

  const startRippleLoop = useCallback(() => {
    const step = () => {
      const rip = rippleRef.current;
      if (!rip) {
        rippleRafRef.current = null;
        return;
      }
      const elapsed = performance.now() - rip.start;
      if (elapsed >= RIPPLE_DURATION_MS) {
        rippleRef.current = null;
        rippleRafRef.current = null;
        paint();
        return;
      }
      paint();
      rippleRafRef.current = requestAnimationFrame(step);
    };
    rippleRafRef.current = requestAnimationFrame(step);
  }, [paint]);

  useEffect(() => {
    return () => {
      if (rafPaintRef.current != null) {
        cancelAnimationFrame(rafPaintRef.current);
        rafPaintRef.current = null;
      }
      if (rippleRafRef.current != null) {
        cancelAnimationFrame(rippleRafRef.current);
        rippleRafRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="bg-transparent "
        style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.12))" }}
      >
        <canvas
          ref={canvasRef}
          className="block mx-auto cursor-pointer"
          role="img"
          aria-label="ASCII text portrait"
          onPointerEnter={() => {
            pointerRef.current.inside = true;
          }}
          onPointerLeave={() => {
            pointerRef.current.inside = false;
            schedulePaint();
          }}
          onPointerDown={(e) => {
            if (e.button !== 0) return;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            if (rect.width < 1 || rect.height < 1) return;
            rippleRef.current = {
              nx: (e.clientX - rect.left) / rect.width,
              ny: (e.clientY - rect.top) / rect.height,
              start: performance.now(),
            };
            if (rippleRafRef.current != null) {
              cancelAnimationFrame(rippleRafRef.current);
              rippleRafRef.current = null;
            }
            startRippleLoop();
          }}
          onPointerMove={(e) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            if (rect.width < 1 || rect.height < 1) return;
            pointerRef.current.inside = true;
            pointerRef.current.nx = (e.clientX - rect.left) / rect.width;
            pointerRef.current.ny = (e.clientY - rect.top) / rect.height;
            schedulePaint();
          }}
        />
      </div>
    </div>
  );
}

export default MyFace;
