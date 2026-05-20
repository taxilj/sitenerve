"use client";
import Image from "next/image";
import { useRef } from "react";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import { Navbar } from "@/components/Navbar";
import { About } from "@/page/About";
import { Connect } from "@/page/Connect";
import { Footer } from "@/page/Footer";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Parihar Madhukar",
    role: "Co-Founder & CTO",
    description: "Owns frontend architecture, scalable system design, API integration, backend workflows, and performance optimization.",
    image: "/team/parihar-madhukar.png?v=2",
  },
  {
    id: 2,
    name: "Taxil Prajapati",
    role: "Chief Marketing Officer (CMO) & COO",
    description: "Leads UI/UX strategy, branding, marketing systems, creative direction, client communication, and operational execution.",
    image: "/team/taxil-prajapati.png?v=2",
  },
];

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useLocomotiveScroll(scrollContainerRef);

  return (
    <main
      ref={scrollContainerRef}
      className="min-h-screen w-full overflow-x-hidden font-Neue text-[#212121]"
    >
      <Navbar />

      <section className="pt-32 pb-36 px-6 md:px-16 lg:px-24 font-Neue">
        <p className="uppercase text-lg tracking-[0.4em] text-emerald-600 mb-6">
          About SiteNerve
        </p>
        <h1 className="text-4xl md:text-8xl font-bold leading-tight max-w-7xl">
          We design and build bold digital products for ambitious teams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          From strategy to shipped experiences, we align engineering, design,
          and storytelling so brands look premium and feel effortless to use.
        </p>
      </section>

      <About />

      <section className="py-20 px-6 md:px-16 lg:px-24 font-Neue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-sm tracking-[0.4em] text-emerald-600 mb-4">
              Core Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              People behind the studio
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-600">
              Every launch is crafted by founders who stay hands-on—from first
              Figma frames to production deploys—so you always work with decision
              makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-3xl border border-white/30 bg-gradient-to-br from-white/80 via-white/60 to-emerald-50/30 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(5,150,105,0.15)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-emerald-400/20 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-56 md:h-48 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#212121]">
                      {member.name}
                    </h3>
                    <p className="text-emerald-600 font-semibold text-sm uppercase tracking-[0.2em] mt-1">
                      {member.role}
                    </p>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Connect />
      <Footer />
    </main>
  );
}
