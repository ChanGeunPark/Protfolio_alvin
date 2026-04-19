"use client";

import { ScrollSmoother } from "@/lib/gsap/client";
import { cls } from "@/lib/utils";
import { useEffect, type ReactNode } from "react";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

export interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  isCloseButton?: boolean;
  zIndex?: number;
  title?: ReactNode;
  className?: string;
}

export default function BasicModal(props: BasicModalProps) {
  const {
    open,
    onClose,
    children,
    zIndex,
    className,
    isCloseButton = true,
  } = props;

  const z = zIndex ?? 99;

  useEffect(() => {
    if (!open) return;

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.paused(true);
      return () => {
        smoother.paused(false);
      };
    }

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className={cls(
          "max-w-[1200px] w-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "p-4 flex justify-center items-center pointer-events-none",
        )}
        style={{ zIndex: z }}
        role="presentation"
      >
        <div
          role="dialog"
          aria-modal="true"
          className={cls(
            "pointer-events-auto w-full min-h-[80vh] shadow-elevation02",
            className,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className={cls(
              "shrink-0 rounded-lg p-2 -mr-1 -mt-1 cursor-pointer",
              "absolute right-8 top-8 z-20",
              "text-gray-300 hover:bg-white/10",
            )}
            aria-label="Close dialog"
          >
            <HiOutlineX className="h-6 w-6" />
          </button>

          <section className="h-full max-h-[80vh] overflow-y-auto rounded-2xl">
            {children}
          </section>
        </div>
      </div>

      <motion.div
        className={cls("fixed w-screen h-screen top-0 left-0")}
        onClick={onClose}
        role="presentation"
        style={{ zIndex: z - 1 }}
        initial={{ color: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" }}
        animate={{ color: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}
        exit={{ color: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
