import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

export default function ExternalLink({
  href,
  className,
  children,
  ...props
}: PropsWithChildren<{
  href: string;
  className?: string;
}> &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
