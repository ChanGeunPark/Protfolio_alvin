"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const CHAR_STAGGER = 0.06;

const IMAGE_COUNT = 40;
const GRAVITY = 900;
const AIR_DRAG = 0.999;
const FLOOR_RESTITUTION = 0.46;
const OBJECT_RESTITUTION = 0.68;
const FLOOR_FRICTION = 0.985;
const SPIN_DAMPING = 0.995;
const MAX_ANGULAR_SPEED = 140;
const MIN_BOUNCE_SPEED = 56;
const MAX_ASSISTED_BOUNCES = 2;
const MIN_COLLISION_IMPULSE = 45;

type ImageMeta = {
  src: string;
  width: number;
  height: number;
};

const PROJECT_IMAGES: ImageMeta[] = [
  {
    src: "/images/projectScene/ProjectIntroImage_01.png",
    width: 105,
    height: 90,
  },
  {
    src: "/images/projectScene/ProjectIntroImage_03.png",
    width: 90,
    height: 77,
  },
  {
    src: "/images/projectScene/ProjectIntroImage_07.png",
    width: 141,
    height: 142,
  },
];

const DROPPING_IMAGES: ImageMeta[] = Array.from(
  { length: IMAGE_COUNT },
  (_, index) => PROJECT_IMAGES[index % PROJECT_IMAGES.length]!,
);

type Body = {
  element: HTMLImageElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  width: number;
  height: number;
  radius: number;
  assistedBounceCount: number;
};

type DragState = {
  pointerId: number;
  body: Body;
  offsetX: number;
  offsetY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
};

function ProjectIntroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const images = imageRefs.current.filter(
      (item): item is HTMLImageElement => item !== null,
    );

    if (!images.length) {
      return;
    }

    let animationFrameId = 0;
    let previous = performance.now();
    let dragState: DragState | null = null;
    let hasStarted = false;

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const random = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const createBodies = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      return images.map((image, index): Body => {
        const meta = DROPPING_IMAGES[index]!;
        const imgW = meta.width;
        const imgH = meta.height;

        const body: Body = {
          element: image,
          x: random(16, Math.max(16, width - imgW - 16)),
          y: random(-height * 1.2, -imgH - index * 30),
          vx: random(-130, 130),
          vy: random(20, 80),
          rotation: random(-20, 20),
          vr: random(-20, 20),
          width: imgW,
          height: imgH,
          radius: Math.min(imgW, imgH) * 0.42,
          assistedBounceCount: 0,
        };

        image.style.opacity = "1";
        image.style.willChange = "transform";
        image.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.rotation}deg)`;
        return body;
      });
    };

    const resolveCircleCollision = (a: Body, b: Body, dt: number) => {
      const axCenter = a.x + a.width * 0.5;
      const ayCenter = a.y + a.height * 0.5;
      const bxCenter = b.x + b.width * 0.5;
      const byCenter = b.y + b.height * 0.5;
      const dx = bxCenter - axCenter;
      const dy = byCenter - ayCenter;
      const minDist = a.radius + b.radius;
      const distSq = dx * dx + dy * dy;

      if (distSq === 0 || distSq >= minDist * minDist) {
        return;
      }

      const dist = Math.sqrt(distSq);
      const nx = dx / dist;
      const ny = dy / dist;
      const overlap = minDist - dist;
      const isADragging = dragState?.body === a;
      const isBDragging = dragState?.body === b;

      if (isADragging && !isBDragging) {
        b.x += nx * overlap;
        b.y += ny * overlap;
      } else if (!isADragging && isBDragging) {
        a.x -= nx * overlap;
        a.y -= ny * overlap;
      } else {
        const separation = overlap * 0.5;
        a.x -= nx * separation;
        a.y -= ny * separation;
        b.x += nx * separation;
        b.y += ny * separation;
      }

      const rvx = b.vx - a.vx;
      const rvy = b.vy - a.vy;
      const velAlongNormal = rvx * nx + rvy * ny;

      if (velAlongNormal > 0) {
        return;
      }

      const inverseMassA = isADragging ? 0 : 1;
      const inverseMassB = isBDragging ? 0 : 1;
      const inverseMassSum = inverseMassA + inverseMassB;

      if (inverseMassSum === 0) {
        return;
      }

      let impulse =
        (-(1 + OBJECT_RESTITUTION) * velAlongNormal) / inverseMassSum;
      const minImpulse = MIN_COLLISION_IMPULSE * dt;
      if (Math.abs(impulse) < minImpulse) {
        impulse = minImpulse;
      }
      const impulseX = impulse * nx;
      const impulseY = impulse * ny;

      a.vx -= impulseX * inverseMassA;
      a.vy -= impulseY * inverseMassA;
      b.vx += impulseX * inverseMassB;
      b.vy += impulseY * inverseMassB;
    };

    const bodies = createBodies();
    const bodyMap = new Map<HTMLImageElement, Body>(
      bodies.map((body) => [body.element, body]),
    );

    const getPointerPosition = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const handlePointerDown = (event: PointerEvent) => {
      const element = event.currentTarget;
      if (!(element instanceof HTMLImageElement)) {
        return;
      }

      const body = bodyMap.get(element);
      if (!body) {
        return;
      }

      event.preventDefault();
      const pointer = getPointerPosition(event.clientX, event.clientY);
      dragState = {
        pointerId: event.pointerId,
        body,
        offsetX: pointer.x - body.x,
        offsetY: pointer.y - body.y,
        lastX: pointer.x,
        lastY: pointer.y,
        lastTime: event.timeStamp || performance.now(),
      };

      body.vx = 0;
      body.vy = 0;
      body.vr = 0;
      body.assistedBounceCount = 0;
      body.element.style.zIndex = "40";
      element.setPointerCapture(event.pointerId);
      window.addEventListener("pointermove", handlePointerMove, {
        passive: false,
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragState || dragState.pointerId !== event.pointerId) {
        return;
      }

      event.preventDefault();
      const pointer = getPointerPosition(event.clientX, event.clientY);
      const body = dragState.body;
      const dt = clamp(
        ((event.timeStamp || performance.now()) - dragState.lastTime) / 1000,
        0.008,
        0.05,
      );

      const nextX = clamp(
        pointer.x - dragState.offsetX,
        0,
        container.clientWidth - body.width,
      );
      const nextY = clamp(
        pointer.y - dragState.offsetY,
        -container.clientHeight * 1.3,
        container.clientHeight - body.height,
      );

      body.vx = (nextX - body.x) / dt;
      body.vy = (nextY - body.y) / dt;
      body.x = nextX;
      body.y = nextY;
      body.rotation += (pointer.x - dragState.lastX) * 0.02;
      body.vr = clamp((pointer.x - dragState.lastX) * 2.5, -120, 120);

      dragState.lastX = pointer.x;
      dragState.lastY = pointer.y;
      dragState.lastTime = event.timeStamp || performance.now();
    };

    const releaseDrag = (event: PointerEvent) => {
      if (!dragState || dragState.pointerId !== event.pointerId) {
        return;
      }

      dragState.body.element.style.zIndex = "0";
      if (dragState.body.element.hasPointerCapture(event.pointerId)) {
        dragState.body.element.releasePointerCapture(event.pointerId);
      }

      dragState = null;
      window.removeEventListener("pointermove", handlePointerMove);
    };

    for (const body of bodies) {
      body.element.addEventListener("pointerdown", handlePointerDown);
    }
    window.addEventListener("pointerup", releaseDrag);
    window.addEventListener("pointercancel", releaseDrag);

    const simulate = (now: number) => {
      const dt = clamp((now - previous) / 1000, 0.001, 0.034);
      previous = now;

      const worldWidth = container.clientWidth;
      const worldHeight = container.clientHeight;
      const floor = worldHeight;

      for (const body of bodies) {
        if (dragState?.body === body) {
          body.vx *= 0.94;
          body.vy *= 0.94;
          body.vr *= 0.92;
          continue;
        }

        body.vy += GRAVITY * dt;
        body.vx *= AIR_DRAG;
        body.vr = clamp(
          body.vr * SPIN_DAMPING,
          -MAX_ANGULAR_SPEED,
          MAX_ANGULAR_SPEED,
        );

        body.x += body.vx * dt;
        body.y += body.vy * dt;
        body.rotation += body.vr * dt;

        if (body.x <= 0) {
          body.x = 0;
          body.vx = Math.abs(body.vx) * FLOOR_RESTITUTION;
        } else if (body.x + body.width >= worldWidth) {
          body.x = worldWidth - body.width;
          body.vx = -Math.abs(body.vx) * FLOOR_RESTITUTION;
        }

        if (body.y + body.height >= floor) {
          body.y = floor - body.height;
          if (body.vy > 0) {
            let bouncedVy = -body.vy * FLOOR_RESTITUTION;
            const needsAssist = Math.abs(bouncedVy) < MIN_BOUNCE_SPEED;
            if (
              needsAssist &&
              body.assistedBounceCount < MAX_ASSISTED_BOUNCES
            ) {
              bouncedVy = -MIN_BOUNCE_SPEED;
              body.assistedBounceCount += 1;
            }
            body.vy = bouncedVy;
          }

          body.vx *= FLOOR_FRICTION;

          if (
            Math.abs(body.vy) < 8 &&
            body.assistedBounceCount >= MAX_ASSISTED_BOUNCES
          ) {
            body.vy = 0;
          }
        }
      }

      for (let i = 0; i < bodies.length; i += 1) {
        for (let j = i + 1; j < bodies.length; j += 1) {
          resolveCircleCollision(bodies[i], bodies[j], dt);
        }
      }

      for (const body of bodies) {
        body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.rotation}deg)`;
      }

      animationFrameId = requestAnimationFrame(simulate);
    };

    const startFalling = () => {
      if (hasStarted) {
        return;
      }
      hasStarted = true;
      previous = performance.now();
      animationFrameId = requestAnimationFrame(simulate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) {
          return;
        }
        if (entry.isIntersecting) {
          startFalling();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      for (const body of bodies) {
        body.element.removeEventListener("pointerdown", handlePointerDown);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", releaseDrag);
      window.removeEventListener("pointercancel", releaseDrag);
      dragState = null;
    };
  }, []);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    if (!title || !subtitle) return;

    const buildSpans = (element: HTMLElement, text: string) => {
      element.textContent = "";
      return text.split("").map((char) => {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(-40px)";
        span.textContent = char === " " ? "\u00A0" : char;
        element.appendChild(span);
        return span;
      });
    };

    const runDropIn = (spans: HTMLSpanElement[], startDelay = 0) => {
      spans.forEach((span, i) => {
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: startDelay + i * CHAR_STAGGER,
          ease: "power3.out",
        });
      });
    };

    const titleSpans = buildSpans(title, "Projects");
    const subtitleSpans = buildSpans(subtitle, "2020.10 ~ 2026.02");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        runDropIn(titleSpans, 0);
        runDropIn(subtitleSpans, 0.35);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      data-project-scene
      id="project-intro-scene"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        {DROPPING_IMAGES.map((meta, index) => (
          <Image
            key={`${meta.src}-${index}`}
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            src={meta.src}
            alt={`project intro image ${index + 1}`}
            unoptimized
            width={meta.width}
            height={meta.height}
            className="pointer-events-none md:pointer-events-auto absolute select-none rounded-xl object-cover shadow-2xl touch-none"
          />
        ))}
      </div>

      <h2
        ref={titleRef}
        className="relative z-10 text-[80px] font-bold text-white pointer-events-none text-shadow-[0_0_20px_rgba(0,0,0,1)]"
      >
        Projects
      </h2>
      <p
        ref={subtitleRef}
        className="relative z-10 mt-2 text-sm text-white opacity-70 md:text-base pointer-events-none"
      >
        2020.10 ~ 2026.02
      </p>
    </div>
  );
}

export default ProjectIntroScene;
