import Navigation from "app/(introduction-page)/components/navigation";
import ExternalLink from "app/components/external-link";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/public">Кучарский Иван</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Frontend Разработчик
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Я разрабатываю сложные, масштабируемые веб-приложения.
        </p>
        <Navigation />
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 shrink-0 text-xs">
          <ExternalLink
            href={"https://github.com/johnkucharsky"}
            className={"block"}
            title="GitHub"
          >
            <FaGithub className={"h-6 w-6"} size={"16px"} />
          </ExternalLink>
        </li>
      </ul>
    </header>
  );
}
