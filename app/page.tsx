import About from "./_components/about/about";
import Career from "./_components/career/career";
import IntroLoader from "./_components/intro-loader";
import Navigation from "./_components/navigation";

export default function Home() {
  return (
    <div className="w-full">
      <main className="h-screen w-full">
        <Navigation />
        <IntroLoader /> {/* 인트로 */}
        <About /> {/* 소개 */}
        <Career /> {/* 경력 */}
      </main>
    </div>
  );
}
