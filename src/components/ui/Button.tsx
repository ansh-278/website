import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "text";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };
type ButtonAsLink = BaseProps & { to: string; href?: undefined };
type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150 rounded-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

const variantClasses: Record<Variant, string> = {
  primary:
    "border border-border-strong text-text-primary px-6 py-3 transition-shadow hover:bg-accent-subtle hover:shadow-[0_0_20px_-2px_rgba(74,144,194,0.3)]",
  secondary:
    "border border-border text-text-secondary px-6 py-3 hover:border-accent hover:text-text-primary",
  text: "text-text-primary underline decoration-transparent hover:decoration-current underline-offset-4 px-0 py-0",
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = clsx(base, variantClasses[variant], props.className);

  if ("to" in props && props.to) {
    const { to, children } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, children, variant: _v, className: _c, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant: _v, className: _c, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}    const { to, children } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, children, variant: _v, className: _c, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant: _v, className: _c, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
