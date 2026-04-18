import MainLogo from "@/components/common/Icons/MainLogo";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

function Navigation() {
  return (
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
          <div className="glass-content flex items-center justify-center px-4 font-bold text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Experience</Link>
            <Link href="/">Contact</Link>
          </div>
        </nav>

        <button
          className="h-12 px-2 w-12 absolute top-1/2 right-4 -translate-y-1/2 rounded-full
          lg:hidden
        "
        >
          <span className="glass-filter" />
          <span className="glass-distortion" />
          <span className="glass-overlay" />
          <span className="glass-specular" />
          <div className="glass-content relative gap-4 px-4 font-bold text-gray-300">
            {/* 햄버거 아이콘 */}
            <HiMenu className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
          </div>
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
  );
}

export default Navigation;
