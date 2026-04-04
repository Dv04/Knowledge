'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Publication() {
  return (
    <section id="publication" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Publication
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A research milestone that best represents the overlap between my
            academic work and the way I approach practical model design.
          </p>
        </header>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.25)] dark:border-slate-700 dark:bg-slate-800/80 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_30%)]"
          />

          <div className="relative">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800 dark:bg-teal-500/15 dark:text-teal-300">
                2024
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:bg-slate-700/60 dark:text-slate-200">
                CASML 2024, IISc Bangalore
              </span>
            </div>

            <h3 className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
              Vision Transformer for Accelerated Design of Very Low-frequency
              Metasurface Absorber
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Applied a Vision Transformer architecture to optimize
              metasurface absorber design, improving the exploration process and
              reducing training time by 40 percent.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-end">
              <div className="rounded-2xl border border-teal-200 bg-teal-50 px-5 py-4 dark:border-teal-500/20 dark:bg-teal-500/10">
                <div className="text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-300">
                  40%
                </div>
                <div className="mt-1 text-sm text-teal-800 dark:text-teal-200">
                  training-time reduction
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700/60 dark:text-slate-200">
                  Vision Transformers
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700/60 dark:text-slate-200">
                  Research
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700/60 dark:text-slate-200">
                  Metasurface Design
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="https://github.com/Dv04/Vision_Transformer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                View related project repo <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
