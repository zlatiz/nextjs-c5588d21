import React from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/lock-status", label: "Lock Status" },
  { href: "/vessels", label: "Vessels" },
  { href: "/barges", label: "Barges" },
  { href: "/websites/garberbrosinc/images/application.pdf", label: "Employment" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header(): JSX.Element {
  return (
    <header className="header-wrap w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="logo-wrapper w-36">
            {(() => { const safeSrc = encodeURI("https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png"); return <Image src={safeSrc} alt="Logo" unoptimized width={180} height={60} className="object-contain" /> })()}
          </div>
        </div>
        <nav>
          <ul className="hidden md:flex gap-6 text-sm">
            {Array.isArray(LINKS) ? (Array.isArray(LINKS) ? LINKS : []).map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:underline">{l.label}</Link></li>
            )) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
