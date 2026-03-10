"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50/30 pointer-events-none" />

      {/* Decorative star element */}
      <motion.div
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 0.06, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-32 right-10 lg:right-32 pointer-events-none"
      >
        <Image src="/images/deco-star.png" alt="" width={120} height={120} className="w-20 lg:w-28" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-[#FF1744] mb-8">
                <span className="h-2 w-2 rounded-full bg-[#FF1744] animate-pulse" />
                La formation #1 pour lancer ton agence IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6"
            >
              Crée ton agence IA.
              <br />
              <span className="text-[#FF1744]">10k€/mois</span> en 30 jours.
            </motion.h1>

            {/* Subtitle with floating neon logos Claude + OpenClaw */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg lg:text-xl text-[#6B7280] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Apprends à créer et vendre des services IA avec
              <span className="inline-flex items-center gap-1.5 mx-1.5 relative">
                <Image
                  src="/images/logos/claude-icon.svg"
                  alt="Claude"
                  width={24}
                  height={24}
                  className="h-6 w-6 inline-block"
                />
                <span className="text-[#C4956A] font-semibold">Claude</span>
                {/* Neon glow behind */}
                <span className="absolute inset-0 bg-[#D4A574]/10 blur-lg rounded-full -z-10" />
              </span>
              et
              <span className="inline-flex items-center gap-1.5 mx-1.5 relative">
                <Image
                  src="/images/logos/openclaw-icon.svg"
                  alt="OpenClaw"
                  width={24}
                  height={24}
                  className="h-6 w-6 inline-block"
                />
                <span className="text-[#6366F1] font-semibold">OpenClaw</span>
                <span className="absolute inset-0 bg-[#6366F1]/10 blur-lg rounded-full -z-10" />
              </span>
              . Pas besoin de coder.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-full bg-[#FF1744] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-xl hover:shadow-red-200"
              >
                Commencer maintenant
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/images/founder-igor.jpg" alt="" width={32} height={32} className="h-full w-full object-cover" />
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/images/founder-marius.png" alt="" width={32} height={32} className="h-full w-full object-cover" />
                  </div>
                  {[3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300" />
                  ))}
                </div>
                <div className="text-sm text-[#6B7280]">
                  <span className="text-[#FF1744] font-semibold">★★★★★</span>
                  <br />
                  Rejoint par +150 entrepreneurs
                </div>
              </div>
            </motion.div>
        </div>

        {/* Founders Badge — Dark pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 lg:mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-3 shadow-xl">
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full border-2 border-[#333] overflow-hidden">
                <Image
                  src="/images/founder-marius.png"
                  alt="Marius"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-[#333] overflow-hidden">
                <Image
                  src="/images/founder-igor.jpg"
                  alt="Igor"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Fondé par Marius &amp; Igor
              </p>
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Paris, France
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
