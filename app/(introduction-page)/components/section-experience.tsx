import { introductionStyles } from "app/(introduction-page)/components/introduction-styles";
import ExternalLink from "app/components/external-link";
import { GoArrowUpRight } from "react-icons/go";

export default function SectionExperience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Опыт
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <ExperienceItem
            datesString={"2025 — 2026"}
            href={"https://sellego.com/"}
            title={"Middle Frontend Разработчик"}
            arrowTitle={"Sellego"}
            description={
              "Главный разработчик. Поддержка и развитие проекта. Развитие и доработка собственной библиотеки компонентов. " +
              "Взаимодействие с дизайнерами и бэкенд разработчиками, оценка задач. Выполнение в очень сжатые сроки. Много нативного JS"
            }
            tags={[
              "JavaScript",
              "TypeScript",
              "React",
              "Zustand",
              "SWR",
              "Oleg UI",
              "Native HTML JS",
              "SCSS",
              "Storybook",
              "Motion",
            ]}
          />
          <ExperienceItem
            datesString={"2023 — 2025"}
            href={"https://finchetko.ru/"}
            title={"Frontend Разработчик"}
            arrowTitle={"Finchetko"}
            description={
              "Создание финансового приложения на MUI и NextJS с нуля. Использовал Zod и Cypress для автотестов(100% покрытие)"
            }
            tags={[
              "TypeScript",
              "React",
              "Next.js",
              "Effector",
              "Material UI",
              "ZOD",
              "Cypress",
              "Formik",
            ]}
          />
          <ExperienceItem
            datesString={"2022 — 2023"}
            href={"https://7winds.mobi/"}
            title={"Frontend Разработчик"}
            arrowTitle={"7winds"}
            description={"Работал над одним из модулей платформы Pragmacore"}
            tags={[
              "TypeScript",
              "React",
              "Create React App",
              "React Router",
              "Material UI",
              "Redux",
              "Formik",
            ]}
          />
        </ol>
        <div className="mt-12">
          <ExternalLink
            className="inline-flex items-baseline leading-tight text-slate-200 font-semibold group/link text-base"
            href="/resume.pdf"
          >
            <span>
              Смотреть полное{" "}
              <span className="inline-block">
                Резюме
                <GoArrowUpRight
                  size={"20px"}
                  className={introductionStyles.arrowTopRight}
                />
              </span>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

const ExperienceItem = ({
  datesString,
  href,
  title,
  arrowTitle,
  description,
  tags,
}: {
  datesString: string;
  href: string;
  title: string;
  arrowTitle: string;
  description: string;
  tags: (string | React.ReactNode)[];
}) => {
  return (
    <li className="mb-12">
      <div className={introductionStyles.listItemWrapper}>
        <div className={introductionStyles.backgroundOnHover} />
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {datesString}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <ExternalLink
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base"
                href={href}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {title} ·{" "}
                  <span className="inline-block">
                    {arrowTitle}
                    <GoArrowUpRight
                      size={"20px"}
                      className={introductionStyles.arrowTopRight}
                    />
                  </span>
                </span>
              </ExternalLink>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap">
            {tags.map((tag) => (
              <li className="mr-1.5 mt-2" key={tag.toString()}>
                <div className={introductionStyles.tagItem}>{tag}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
