"use client";

import MainLogo from "@/components/common/Icons/MainLogo";
import Link from "next/link";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap, ScrollSmoother, initGsapClient } from "@/lib/gsap/client";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Project", id: "project" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

function Navigation() {
  const [activeSection, setActiveSection] = useState<NavId>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 클릭으로 이동 중일 때 스크롤 이벤트가 덮어쓰지 않도록 잠금
  const scrollLockRef = useRef(false);
  const scrollLockTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    initGsapClient();

    // GSAP ticker를 사용해 ScrollSmoother의 transform 이동과 완벽하게 동기화
    const handleTick = () => {
      if (scrollLockRef.current) return;

      const threshold = window.innerHeight * 0.4;
      let current: NavId = "home";

      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (!el) continue;
        // getBoundingClientRect는 CSS transform을 반영한 실제 시각적 위치 반환
        const { top } = el.getBoundingClientRect();
        if (top <= threshold) {
          current = id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    gsap.ticker.add(handleTick);

    return () => {
      gsap.ticker.remove(handleTick);
    };
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (isMenuOpen) {
      smoother?.paused(true);
      document.body.style.overflow = "hidden";
    } else {
      smoother?.paused(false);
      document.body.style.overflow = "";
    }
    return () => {
      smoother?.paused(false);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((id: NavId) => {
    const el = document.getElementById(id);
    if (!el) return;

    // 클릭 즉시 활성 섹션 반영 + 스크롤 완료까지 이벤트 잠금
    setActiveSection(id);
    scrollLockRef.current = true;
    clearTimeout(scrollLockTimerRef.current);
    scrollLockTimerRef.current = setTimeout(() => {
      scrollLockRef.current = false;
    }, 1500);

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(el, true, "top top");
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <section className="h-24 fixed top-0 left-0 right-0 z-50 w-full overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none backdrop-blur-lg bg-black/10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="container h-full relative gap-4 px-4 w-full mx-auto">
          <h1 className="text-xl font-bold text-white absolute top-1/2 left-4 -translate-y-1/2">
            <Link href="/">
              <MainLogo />
            </Link>
          </h1>

          <nav
            className="h-14 px-2 min-w-[260px] absolute left-1/2 -translate-x-1/2 w-fit top-1/2 -translate-y-1/2
          rounded-full
          hidden lg:flex
          "
          >
            <span className="glass-filter" />
            <span className="glass-distortion" />
            <span className="glass-overlay" />
            <span className="glass-specular" />
            <div className="glass-content flex items-center justify-center px-2 gap-1 font-bold">
              {NAV_ITEMS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeSection === id
                      ? "text-white bg-white/15"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          <button
            className="h-12 px-2 w-12 absolute top-1/2 right-4 -translate-y-1/2 rounded-full
          lg:hidden cursor-pointer
        "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="glass-filter" />
            <span className="glass-distortion" />
            <span className="glass-overlay" />
            <span className="glass-specular" />
            <span className="glass-content relative gap-4 px-4 font-bold text-gray-300 ">
              {/* 햄버거 아이콘 */}
              <HiMenu className="text-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
            </span>
          </button>

          <span
            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-300
        hidden lg:block
        "
          >
            design795@naver.com
          </span>
        </div>
      </section>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full z-50 overflow-hidden bg-black/80 backdrop-blur-sm"
          >
            {/* Ambient glow orbs */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-approveSub/8 blur-[130px]"
              />
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-approveSub/5 blur-[100px]"
              />
            </div>

            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#33EBBD 1px, transparent 1px), linear-gradient(90deg, #33EBBD 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Close button — mirrors the nav bar container so it aligns with the hamburger */}
            <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none">
              <div className="container h-full relative px-4 w-full mx-auto">
                <motion.button
                  type="button"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="pointer-events-auto absolute top-1/2 right-4 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-approveSub hover:border-approveSub/40 hover:bg-approveSub/10 transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <HiOutlineX className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Nav items */}
            <nav className="relative flex flex-col items-start justify-center h-full px-10 gap-1">
              {NAV_ITEMS.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + i * 0.07,
                    ease: "easeOut",
                  }}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className="group relative flex items-center gap-5 py-4 w-full cursor-pointer"
                >
                  {/* Hover background line */}
                  <motion.span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-0 group-hover:w-full bg-linear-to-r from-approveSub/60 to-transparent rounded-full transition-all duration-500" />

                  {/* Index number */}
                  <span className="text-approveSub/25 font-mono text-xs font-bold tracking-widest group-hover:text-approveSub/60 transition-colors duration-300 w-6 shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Label */}
                  <span
                    className={`text-4xl font-bold tracking-tight transition-colors duration-300 ${
                      activeSection === id
                        ? "text-approveSub"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {label}
                  </span>

                  {/* Active indicator dot */}
                  {activeSection === id && (
                    <motion.span
                      layoutId="active-dot"
                      className="ml-auto w-2 h-2 rounded-full bg-approveSub shrink-0"
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Bottom email hint */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              className="absolute bottom-10 left-10 text-zinc-600 text-xs tracking-widest font-mono"
            >
              design795@naver.com
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
