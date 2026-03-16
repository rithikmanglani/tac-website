"use client";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#181818]">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.jpg" width={60} height={60} alt="Logo" className="rounded-full select-none" />
          </Link>
        </div>
        <ul className="flex items-center gap-8 text-lg">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-[#E6C674]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#episodes"
              className="transition-colors hover:text-[#E6C674]"
            >
              Episodes
            </Link>
          </li>
          <li>
            <Link
              href="/sponsors"
              className="transition-colors hover:text-[#E6C674]"
            >
              Sponsors
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 py-16 text-center max-w-3xl w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Partner with The AT Corner</h1>
        <p className="text-lg sm:text-xl font-medium text-slate-300">
          Reach a highly engaged, Tier-1 creator economy audience. Our listeners are 65% founders and 35% high-growth creators.
        </p>
      </section>

      {/* Metrics */}
      <section className="w-full max-w-4xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <span className="block text-2xl font-bold text-[#E6C674] mb-1">10K+</span>
            <span className="block text-base text-slate-300">Monthly Listeners</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#E6C674] mb-1">High</span>
            <span className="block text-base text-slate-300">Engagement Rate</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#E6C674] mb-1">Direct</span>
            <span className="block text-base text-slate-300">Audience ROI</span>
          </div>
        </div>
      </section>

      {/* Sponsor Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 py-14">
        <div className="w-full max-w-xl bg-[#101010] rounded-xl shadow-lg p-8 border border-[#181818]">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sponsor Inquiry</h2>
          <form
            className="space-y-5"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="d4d7c80d-57d1-4a89-a996-ad9aaf9c457b" />
            <input type="hidden" name="redirect" value="http://localhost:3000" />

            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-[#111111] border border-[#232323] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#E6C674] transition"
                autoComplete="name"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label htmlFor="company" className="block mb-1 text-sm font-medium">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-[#111111] border border-[#232323] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#E6C674] transition"
                autoComplete="organization"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-md bg-[#111111] border border-[#232323] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#E6C674] transition"
                autoComplete="email"
                placeholder="Enter your work email"
              />
            </div>
            <div>
              <label htmlFor="tier" className="block mb-1 text-sm font-medium">
                Sponsorship Tier
              </label>
              <select
                id="tier"
                name="tier"
                required
                className="w-full px-4 py-2 rounded-md bg-[#111111] border border-[#232323] outline-none focus:ring-2 focus:ring-[#E6C674] text-slate-50 transition"
                defaultValue=""
              >
                <option value="">Select a Tier</option>
                <option value="bronze">Bronze - ₹50k</option>
                <option value="silver">Silver - ₹1.5L</option>
                <option value="gold">Gold - ₹3L</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-md bg-[#111111] border border-[#232323] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#E6C674] transition resize-none"
                placeholder="Your message…"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#E6C674] text-black font-semibold text-lg transition hover:bg-[#d4b462] disabled:opacity-60"
            >
              Submit Partnership Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
