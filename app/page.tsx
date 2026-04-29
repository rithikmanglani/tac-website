'use client';
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Navigation */}<nav className="relative z-50 hidden w-full items-center justify-between border-b border-[#222] bg-black px-4 py-5 md:flex">
  <div>
    <Image src="/logo.jpg" alt="The AT Corner Logo" width={60} height={60} priority />
  </div>
  <div className="flex gap-4 md:gap-8 text-base font-medium">
    <a href="/" className="hover:text-[#E6C674]">Home</a>
    <a href="/#episodes" className="hover:text-[#E6C674]">Episodes</a>
    
    
    <a href="/sponsors" className="hover:text-[#E6C674]">Sponsors</a>
    
  </div>
</nav>

      <nav className="relative z-50 flex w-full items-center justify-between border-b border-[#222] px-6 py-5 pointer-events-auto md:hidden">
        <div>
          <Image
            src="/logo.jpg"
            alt="The AT Corner Logo"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className="flex gap-8">
          <a
            href="/"
            className="hover:text-[#E6C674] transition-colors"
          >
            Home
          </a>
          <a
            href="/#episodes"
            className="hover:text-[#E6C674] transition-colors"
          >
            Episodes
          </a>
          <a
            href="/sponsors"
            className="hover:text-[#E6C674] transition-colors"
          >
            Sponsors
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left column: headline, subheadline, button */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
              The AT Corner: Stories That Matter
            </h1>
            <p className="text-lg sm:text-xl text-[#C6C6C6] mb-6 max-w-xl">
              Exploring the creator economy, one story at a time.
            </p>
            {/* YouTube main button */}
            <a
              href="https://youtube.com/@theatcornerstories?si=Ce0tnbQ3cYpzuoa6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-bold rounded-full px-8 py-3 hover:bg-red-700 transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
          {/* Right column: Embla Carousel */}
          <div>
            <div
              className="overflow-hidden rounded-xl border border-[#E6C674]/30"
              ref={emblaRef}
            >
              <div className="flex">
                {Array.from({ length: 9 }, (_, i) => `/slide${i + 1}.jpg`).map((src, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <img
                      src={src}
                      alt={`The AT Corner Podcast Guest ${index + 1}`}
                      loading="lazy"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section
        id="episodes"
        className="w-full max-w-6xl mx-auto px-4 py-12"
      >
        <h2 className="text-2xl font-bold mb-8 text-center sm:text-left text-white">
          Latest Episodes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Episode Card 1 */}
          <div className="bg-[#111111] border border-[#E6C674]/30 rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src="https://img.youtube.com/vi/gcFQuGLHk7o/maxresdefault.jpg"
              alt="Astuti Anand"
              className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <div className="font-semibold text-lg mb-2 text-center text-white">
              From NEET Aspirant to Comedy Creator
            </div>
            <div className="text-[#E6C674]/70 mb-4 text-center">
              with Astuti Anand
            </div>
            <a
              href="https://youtu.be/gcFQuGLHk7o?si=4re_o_WWnkoUTTH4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-4 py-2 bg-[#E6C674] text-black rounded-full font-medium hover:bg-[#d4b462] transition-colors inline-block text-center"
            >
              Watch on YouTube
            </a>
          </div>
          {/* Episode Card 2 */}
          <div className="bg-[#111111] border border-[#E6C674]/30 rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src="https://img.youtube.com/vi/qZAx4ei9V4E/maxresdefault.jpg"
              alt="Jagriti Pahwa"
              className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <div className="font-semibold text-lg mb-2 text-center text-white">
              Unfiltered Journey from IIT to YouTube, Therapy, Love & Spirituality
            </div>
            <div className="text-[#E6C674]/70 mb-4 text-center">
              with Jagriti Pahwa
            </div>
            <a
              href="https://youtu.be/qZAx4ei9V4E?si=ZREq9scqmynLbh14"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-4 py-2 bg-[#E6C674] text-black rounded-full font-medium hover:bg-[#d4b462] transition-colors inline-block text-center"
            >
              Watch on YouTube
            </a>
          </div>
          {/* Episode Card 3 */}
          <div className="bg-[#111111] border border-[#E6C674]/30 rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src="https://img.youtube.com/vi/HK3_bfzGjxM/maxresdefault.jpg"
              alt="Jhanvi Malhotra"
              className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <div className="font-semibold text-lg mb-2 text-center text-white">
              Spiritual podcast debut | Vrindavan, Bhagavad Gita, Karma & Krishna Bhakti
            </div>
            <div className="text-[#E6C674]/70 mb-4 text-center">
              with Jhanvi Malhotra
            </div>
            <a
              href="https://youtu.be/HK3_bfzGjxM?si=54ROG0f4OJsPnAe9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-4 py-2 bg-[#E6C674] text-black rounded-full font-medium hover:bg-[#d4b462] transition-colors inline-block text-center"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
