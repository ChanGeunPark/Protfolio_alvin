"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineMail, HiOutlineExternalLink } from "react-icons/hi";

const CONTACT_EMAIL = "your.email@example.com"; // 실제 이메일로 교체하세요

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourhandle",
    Icon: SiGithub,
    description: "프로젝트 코드 보기",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: HiOutlineMail,
    description: CONTACT_EMAIL,
  },
];

const fadeUpTransition = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `포트폴리오 문의 — ${form.name || "익명"}`,
    );
    const body = encodeURIComponent(
      `이름: ${form.name}\n이메일: ${form.email}\n\n${form.message}`,
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls =
    "w-full rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-200 placeholder-zinc-600 px-4 py-3 text-sm outline-none focus:border-approveSub/50 focus:bg-white/[0.07] transition-all duration-200";

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-approveSub/5 blur-[120px]" />
        <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-approveSub/4 blur-[100px]" />
      </div>

      {/* Grid decoration */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#33EBBD 1px, transparent 1px), linear-gradient(90deg, #33EBBD 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <article className="container relative z-10 mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* ── Left: Info ── */}
        <div className="flex flex-col justify-center">
          <motion.p
            {...fadeUpTransition(0)}
            className="text-approveSub text-xs tracking-[0.35em] uppercase font-semibold mb-6"
          >
            Contact
          </motion.p>

          <motion.h2
            {...fadeUpTransition(0.1)}
            className="text-white text-4xl md:text-5xl font-bold leading-snug mb-4"
          >
            함께 만들어요
          </motion.h2>

          <motion.p
            {...fadeUpTransition(0.2)}
            className="text-zinc-400 text-sm md:text-base leading-relaxed mb-12"
          >
            새로운 기회, 협업 제안, 혹은 그냥 반가운 인사도 언제든 환영합니다.
            <br />
            메시지를 남겨주시면 빠르게 답변드리겠습니다.
          </motion.p>

          {/* Social cards */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                {...fadeUpTransition(0.3 + i * 0.1)}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/3 px-5 py-4 hover:bg-white/6 hover:border-approveSub/25 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-approveSub/10 group-hover:bg-approveSub/20 transition-colors duration-300">
                  <link.Icon className="text-approveSub text-lg" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-200 font-semibold text-sm">
                    {link.label}
                  </p>
                  <p className="text-zinc-500 text-xs truncate group-hover:text-zinc-400 transition-colors duration-300">
                    {link.description}
                  </p>
                </div>
                <HiOutlineExternalLink className="text-zinc-600 group-hover:text-approveSub/60 transition-colors duration-300 shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/[0.07] bg-white/3 p-8 backdrop-blur-sm"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-28 h-28 rounded-tr-3xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-approveSub/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <h3 className="text-white font-bold text-xl mb-1">메시지 보내기</h3>
          <p className="text-zinc-500 text-sm mb-7">
            양식을 작성하면 이메일 클라이언트가 열립니다.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-xs font-medium pl-1">
                  이름
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Park Changeun"
                  className={inputCls}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-xs font-medium pl-1">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className={inputCls}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs font-medium pl-1">
                메시지
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="안녕하세요, 협업 제안드리고 싶어서 연락드립니다..."
                className={`${inputCls} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-approveSub/15 border border-approveSub/30 hover:bg-approveSub/25 hover:border-approveSub/60 text-approveSub font-semibold py-3.5 text-sm transition-all duration-300 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <HiOutlineMail className="text-base" />
                {sent ? "이메일 클라이언트가 열렸습니다 ✓" : "이메일 보내기"}
              </span>
              {/* Shimmer on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-approveSub/10 to-transparent" />
            </button>
          </form>
        </motion.div>
      </article>
    </section>
  );
}
