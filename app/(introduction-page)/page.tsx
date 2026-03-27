import "./styles.css";

import Footer from "app/(introduction-page)/components/footer";
import Header from "app/(introduction-page)/components/header";
import SectionAbout from "app/(introduction-page)/components/section-about";
import SectionExperience from "app/(introduction-page)/components/section-experience";
import SectionProjects from "app/(introduction-page)/components/section-projects";
import Spotlight from "app/(introduction-page)/components/spotlight";

export default function IntroductionPage() {
  return (
    <div
      className={
        "relative bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900"
      }
    >
      <Spotlight />

      <div
        className={
          "mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0"
        }
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <SectionAbout />
            <SectionExperience />
            <SectionProjects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
