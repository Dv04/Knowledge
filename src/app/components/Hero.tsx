// app/components/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

/* ------------------------------------------------------------------ */
/*                        tiny type-writer hook                        */
/* ------------------------------------------------------------------ */
const phrases = ['AI Engineer', 'Blockchain Developer', 'Researcher'];
function useTypewriter(delay = 120) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');

  useEffect(() => {
    const current = phrases[index];
    if (sub.length < current.length) {
      const t = setTimeout(() => setSub(current.slice(0, sub.length + 1)), delay);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(() => {
      setSub('');
      setIndex((index + 1) % phrases.length);
    }, 1500);
    return () => clearTimeout(pause);
  }, [sub, index, delay]);

  return `${sub}|`;
}

export default function Hero() {
  const text = useTypewriter();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black-50 to-black-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* 3-D background */}
      <div className="absolute inset-0  z-25">
        <HeroCanvas />
      </div>

      {/* radial gradient halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.25)_0%,transparent_70%)]"
      />

      {/* content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'anticipate' }}
        className="
          relative mx-6 w-full max-w-2xl rounded-3xl
          bg-white/70 p-10 backdrop-blur-md
          dark:bg-slate-900/60
          shadow-2xl
        "
      >
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Dev&nbsp;Sanghvi
        </h1>

        <h2 className="text-center text-xl font-medium text-teal-600 dark:text-teal-400 md:text-2xl">
          {text}
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          I craft intelligent software that bridges research and real-world
          impact — from transformer-driven vision systems to intrusion detection
          on IoT devices.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/Dev_Sanghvi.pdf"
            className="
              inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-2
              text-sm font-semibold text-white shadow hover:bg-teal-700
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-teal-500
            "
          >
            <ArrowDownTrayIcon className="h-4 w-4" /> Résumé
          </Link>
          <Link
            href="#contact"
            className="
              inline-flex items-center gap-2 rounded-md border border-teal-600
              px-5 py-2 text-sm font-semibold text-teal-600
              hover:bg-teal-50 dark:hover:bg-slate-700
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-teal-500
            "
          >
            Let’s Talk
          </Link>
        </div>
      </motion.div>
    </section>
  );
}