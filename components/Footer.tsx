import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-border mt-8 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© Copyright 2015 by <span className="font-medium">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="mt-3 md:mt-0 text-sm" style={{ color: '#777', textAlign: 'right' }}>
          <a href="/transparency-in-coverage" className="underline">Transparency in Coverage</a>
        </div>
      </div>
    </footer>
  );
}
