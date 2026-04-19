import About from "./_components/about/about";
import Career from "./_components/career/career";
import Contact from "./_components/contact/contact";
import IntroLoader from "./_components/intro-loader";
import LoadingScreen from "./_components/loading";
import Navigation from "./_components/navigation";
import Project from "./_components/project/project";
import ProjectBackground from "./_components/project/projectBackground";
import SmoothScroll from "./_components/scroll/smooth-scroll";
import Skills from "./_components/skills/skills";

export default function Home() {
  return (
    <div className="w-full">
      <LoadingScreen />
      <main className="w-full">
        <Navigation />
        <ProjectBackground />
        <SmoothScroll smoothness={1}>
          <IntroLoader />
          <About /> {/* 소개 */}
          <Career /> {/* 경력 */}
          <Project /> {/* 프로젝트 */}
          <Skills /> {/* 기술 */}
          <Contact /> {/* 연락처 */}
        </SmoothScroll>
      </main>
    </div>
  );
}
