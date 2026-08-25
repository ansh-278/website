import type { AnchorHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

interface IconButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  label: string;
  href: string;
}

export function IconButton({ children, label, href, className, ...rest }: IconButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-text-primary transition-colors duration-150 hover:bg-accent-subtle hover:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
