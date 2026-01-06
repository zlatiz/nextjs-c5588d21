import React from "react";

type CardProps = {
  title: string;
  href?: string;
  children?: React.ReactNode;
};

export default function Card({ title, href = '#', children }: CardProps): JSX.Element {
  return (
    <article className="card flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="mt-3">{children}</div>
      </div>
      <div className="mt-4">
        <a href={href} className="text-sm text-primary">Learn more</a>
      </div>
    </article>
  );
}
