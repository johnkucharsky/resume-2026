import ExternalLink from "app/components/external-link";
import { workExperience } from "app/utils/work-experience";

export default function SectionAbout() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Обо мне
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Frontend-инженер с опытом {workExperience}. Я создаю удобные и
          надежные web приложения, где безупречный пользовательский опыт
          сочетается с архитектурной чистотой и масштабируемостью.
        </p>
        <p className="mb-4">
          Моё последнее место работы, frontend разработчик проекта{" "}
          <ExternalLink
            className="font-medium text-slate-200"
            href="https://sellego.com//"
          >
            Sellego
          </ExternalLink>
          , где я занимался поддержанием существующих и написанием новых страниц
          и компонентов, а также развитием собственной UI библиотеки. До этого
          работал над проектом{" "}
          <ExternalLink
            className="font-medium text-slate-200"
            href="https://finchetko.ru/"
          >
            Finchetko
          </ExternalLink>
          , написанным на MUI.
        </p>
        <p className="mb-4">
          В свободное время создал и поддерживаю проект посвященный изучению
          Javascript/Typescript и React,{" "}
          <ExternalLink
            className="font-medium text-slate-200"
            href="https://advancedjavascript.vercel.app/"
          >
            Advanced Javascript
          </ExternalLink>
          .
        </p>
        <p>
          Также есть небольшой опыт создания API на NodeJS и Golang,
          использования Docker, работы с VPS и прочее, что связано с web
          разработкой
        </p>
      </div>
    </section>
  );
}
