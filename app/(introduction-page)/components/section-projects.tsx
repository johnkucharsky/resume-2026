import { introductionStyles } from "app/(introduction-page)/components/introduction-styles";
import ExternalLink from "app/components/external-link";
import { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function SectionProjects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Проекты
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <ProjectItem
            href={"https://github.com/johnkucharsky/advancedjavascript"}
            title={"Сайт"}
            arrowTitle={"Advanced Javascript"}
            description={
              "Проект предназначен для изучения JS/TS, написан на NextJS"
            }
            tags={["NextJS", "MDX", "Nextra"]}
          />
          <ProjectItem
            href={"https://react-redux-mui.vercel.app/"}
            title={"Pet проект"}
            arrowTitle={"Сравнение Redux Mobx Effector"}
            description={
              <>
                3 мини приложения, в которых используется{" "}
                <ExternalLink href={"https://jsonplaceholder.typicode.com/"}>
                  JSON Placeholder
                </ExternalLink>{" "}
                API. Каждая версия отличается только стэйт менеджером.{" "}
                <ExternalLink
                  className={"relative text-white font-bold inline-flex"}
                  href={"https://github.com/johnkucharsky/react-redux-mui"}
                >
                  Redux <GoArrowUpRight />
                </ExternalLink>
                ,{" "}
                <ExternalLink
                  className={"relative text-white font-bold inline-flex"}
                  href={"https://github.com/johnkucharsky/react-mobx-mui"}
                >
                  Mobx <GoArrowUpRight />
                </ExternalLink>
                ,{" "}
                <ExternalLink
                  className={"relative text-white font-bold inline-flex"}
                  href={"https://github.com/johnkucharsky/react-effector-mui"}
                >
                  Effector <GoArrowUpRight />
                </ExternalLink>
              </>
            }
            tags={[
              "Vite",
              "React",
              "Redux",
              "Mobx",
              "Effector",
              "Cypress",
              "Formik",
            ]}
          />
          <ProjectItem
            href={"https://github.com/johnkucharsky/golang-api"}
            title={"API"}
            arrowTitle={"Golang"}
            description={"API написанное на Golang, документация на redocly"}
            tags={["GO", "Fiber", "Postgres", "Redis", "Redocly", "Docker"]}
          />
          <ProjectItem
            href={"https://github.com/johnkucharsky/golang-api"}
            title={"API"}
            arrowTitle={"Golang"}
            description={"API написанное на Golang, документация на redocly"}
            tags={["GO", "Fiber", "Postgres", "Redis", "Redocly", "Docker"]}
          />
        </ul>
      </div>
    </section>
  );
}

const ProjectItem = ({
  href,
  title,
  arrowTitle,
  description,
  tags,
}: {
  href: string;
  title: string;
  arrowTitle: string;
  description: ReactNode;
  tags: string[];
}) => {
  return (
    <li className="mb-12">
      <div className={introductionStyles.listItemWrapper}>
        <div className={introductionStyles.backgroundOnHover} />
        <div className="z-10 sm:col-span-6">
          <h3>
            <ExternalLink
              className="inline-flex items-baseline font-medium leading-tight text-slate-200  group/link text-base"
              href={href}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}{" "}
                <span className="inline-block">
                  {arrowTitle}
                  <GoArrowUpRight
                    size={"20px"}
                    className={introductionStyles.arrowTopRight}
                  />
                </span>
              </span>
            </ExternalLink>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap">
            {tags.map((tag) => (
              <li className="mr-1.5 mt-2" key={tag}>
                <div className={introductionStyles.tagItem}>{tag}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
