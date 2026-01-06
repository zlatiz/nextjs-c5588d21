import React from "react";
import Image from "next/image";
import Card from "../components/ui/card";
import Button from "../components/ui/button";

const IMAGES: string[] = [
  "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg"
];

export default function HomePage(): JSX.Element {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1] ?? images[0];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <h1 id="hero-title" className="text-3xl md:text-4xl font-semibold leading-snug">Garber Bros Inc</h1>
          <p className="mt-4 text-base text-gray-700">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="mt-6 flex gap-3">
            <Button href="/vessels">View Our Fleet of Vessels</Button>
            <Button variant="ghost" href="/contact">Contact Us</Button>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-lg overflow-hidden shadow-subtle bg-gray-50">
            <div className="relative w-full h-64 md:h-80">
              {heroImage && (
                (() => {
                  const safeSrc = encodeURI(heroImage);
                  return (
                    <Image src={safeSrc} alt="Hero - Garber Bros vessels" unoptimized width={1200} height={700} className="object-cover w-full h-full" />
                  );
                })()
              )}
            </div>
            <div className="p-4 border-t border-border flex items-center justify-between bg-white">
              <div className="text-sm text-gray-600">Official fleet imagery</div>
              <div className="text-sm">
                <a href="javascript:previousSlide6347994()" className="text-sm mr-3 underline">Prev</a>
                <a href="javascript:nextSlide6347994()" className="text-sm underline">Next</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three feature tiles */}
      <section className="mt-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Our Vessels" href="/vessels">
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden border border-border">
              {images[1] && (() => { const safeSrc = encodeURI(images[1]); return <Image src={safeSrc} alt="Our Vessels" unoptimized width={800} height={600} className="object-cover w-full h-full" /> })()}
            </div>
            <p className="mt-3 text-gray-700">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <a href="/vessels" className="mt-4 inline-block text-sm text-primary">View Our Vessels »</a>
          </Card>

          <Card title="Employment" href="/websites/garberbrosinc/images/application.pdf">
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden border border-border">
              {images[2] && (() => { const safeSrc = encodeURI(images[2]); return <Image src={safeSrc} alt="Employment application" unoptimized width={800} height={600} className="object-cover w-full h-full" /> })()}
            </div>
            <p className="mt-3 text-gray-700">Interested in working at Garber Bros? Download our employment application.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://garberbrosinc.com/websites/garberbrosinc/images/application.pdf" className="text-sm text-primary">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm text-gray-700 underline">Apply Online</a>
            </div>
          </Card>

          <Card title="Contact Us" href="/contact">
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden border border-border">
              {images[3] && (() => { const safeSrc = encodeURI(images[3]); return <Image src={safeSrc} alt="Contact Garber Bros" unoptimized width={800} height={600} className="object-cover w-full h-full" /> })()}
            </div>
            <p className="mt-3 text-gray-700">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <a href="/contact" className="mt-4 inline-block text-sm text-primary">Contact Garber Bros Inc »</a>
          </Card>
        </div>
      </section>

      {/* Gallery / secondary image grid */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <p className="text-sm text-gray-600 mt-1">Imagery from the Garber Bros fleet and operations.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Array.isArray(images) ? images : []).map((src, idx) => {
            const safeSrc = encodeURI(src);
            return (
              <div key={idx} className="rounded-md overflow-hidden border border-border bg-white">
                <div className="relative w-full h-40">
                  <Image src={safeSrc} alt={`Image ${idx + 1}`} unoptimized width={600} height={400} className="object-cover w-full h-full" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional info and links area */}
      <section className="mt-12 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium">About</h3>
            <p className="text-sm text-gray-700 mt-2">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry.</p>
          </div>
          <div className="flex gap-3">
            <a href="/about" className="inline-flex items-center justify-center h-10 px-4 bg-primary text-black rounded-md">About Us</a>
            <a href="/lock-status" className="inline-flex items-center justify-center h-10 px-4 border border-border rounded-md">Lock Status</a>
            <a href="/barges" className="inline-flex items-center justify-center h-10 px-4 border border-border rounded-md">Barges</a>
          </div>
        </div>
      </section>

      {/* Back to top link as required (#) */}
      <div className="mt-8 text-right">
        <a href="#" className="text-sm text-gray-600">Back to top</a>
      </div>
    </div>
  );
}
