import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'ghost';
};

export default function Button({ children, href = '#', variant = 'default' }: ButtonProps): JSX.Element {
  const base = 'inline-flex items-center justify-center px-4 rounded-md h-10 text-sm font-medium';
  const styles = variant === 'default'
    ? `${base} bg-primary text-black`
    : `${base} bg-transparent border border-border text-text`;
  return (
    <a href={href} className={styles}>{children}</a>
  );
}
