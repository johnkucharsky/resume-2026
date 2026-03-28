import ExternalLink from "app/components/external-link";

const linkClassName = "font-medium text-slate-400";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Написано на{" "}
        <ExternalLink
          className={linkClassName}
          href={"https://nextjs.org/"}
          title={"Next.js"}
        >
          Next.js
        </ExternalLink>{" "}
        и{" "}
        <ExternalLink
          className={linkClassName}
          href={"https://tailwindcss.com/"}
          title={"Tailwind CSS"}
        >
          Tailwind CSS
        </ExternalLink>
        , выложено на{" "}
        <ExternalLink
          className={linkClassName}
          href={"https://vercel.com/"}
          title={"Vercel"}
        >
          Vercel
        </ExternalLink>
        .
      </p>
    </footer>
  );
}
