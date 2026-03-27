import Link from "next/link";
import { PropsWithChildren } from "react";
import { UrlObject } from "url";

export default function Navigation() {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <LinkItem href="#about">Обо мне</LinkItem>
        </li>
        <li>
          <LinkItem href="#experience">Опыт</LinkItem>
        </li>
        <li>
          <LinkItem href="#projects">Проекты</LinkItem>
        </li>
      </ul>
    </nav>
  );
}

const LinkItem = ({
  href,
  children,
}: PropsWithChildren<{ href: string | UrlObject }>) => {
  return (
    <Link className="group flex items-center py-3 active" href={href}>
      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
        {children}
      </span>
    </Link>
  );
};
