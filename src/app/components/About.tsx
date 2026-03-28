// app/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* decorative radial gradient */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -inset-px -z-10
          bg-gradient-to-br from-teal-400/10 via-fuchsia-500/10 to-indigo-600/10
          blur-3xl
        "
      />

      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
      >
        About&nbsp;Me
      </motion.h2>

      {/* content grid */}
      <div className="grid gap-12 md:grid-cols-2">
        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] w-full max-w-sm place-self-center overflow-hidden rounded-3xl shadow-xl"
        >

          <Image
            src="/Image.jpg"
            priority
            alt="Dev Sanghvi portrait"
            fill
            sizes="(max-width: 768px) 60vw, 30vw"
            className="object-cover"
          />

          {/* halo ring */}
          <span
            aria-hidden
            className="
              absolute inset-0 rounded-3xl
              ring-4 ring-teal-400/50
              transition duration-300 group-hover:ring-teal-300
            "
          />
        </motion.div>

        {/* bio card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="
            backdrop-blur-lg
            rounded-2xl border border-slate-200/70 bg-white/70
            dark:border-slate-700/50 dark:bg-slate-800/60
            p-8 shadow-lg
          "
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Hi, I&apos;m Dev Sanghvi, an AI Engineer &amp; Researcher
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            I build deep-learning systems that bridge academia and
            production - from Vision Transformers to
            Intrusion-Detection.
            My work sits at the intersection of edge AI, computer vision, and deployment engineering.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            A lot of my work has lived around cameras, edge devices, and
            systems that do not get the luxury of ideal conditions. I enjoy the
            part where a model has to become something usable: faster, cleaner,
            more reliable, and ready for the real world.
          </p>

          {/* fast-facts list */}
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-teal-500">▹</span>
              <span>
                <strong>Rice University</strong>, Master of Computer Science with
                an AI focus, expected December 2026, GPA 3.89/4.0.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-teal-500">▹</span>
              <span>
                <strong>Former Team Lead / AI Solutions Developer at VMukti</strong>,
                where I built production C++ / ONNX inference systems and deployed
                analytics across 10K+ IoT cameras.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-teal-500">▹</span>
              <span>
                <strong>Published Vision Transformer research</strong> presented
                at CASML 2024, IISc Bangalore, with a 40% training-time reduction.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-teal-500">▹</span>
              <span>
                Contributor to&nbsp;
                <a
                  href="https://github.com/Dv04?tab=repositories"
                  target="_blank"
                  className="font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  20+ open-source repos
                </a>
              </span>
            </li>
          </ul>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Dev_Sanghvi.pdf"
              className="
                rounded-md bg-teal-600 px-5 py-2 text-sm font-semibold
                text-white shadow hover:bg-teal-700 focus:outline-none
                focus:ring-2 focus:ring-teal-500
              "
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="
                rounded-md border border-teal-600 px-5 py-2 text-sm font-semibold
                text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-700
                focus:outline-none focus:ring-2 focus:ring-teal-500
              "
            >
              Let’s Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
