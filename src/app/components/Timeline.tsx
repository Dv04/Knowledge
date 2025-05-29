// app/components/Timeline.tsx
'use client';

import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface Entry {
  org: string;
  role: string;
  period: string;
  location: string;
  mode: 'Internship' | 'Full-time' | 'Self-employed' | 'Hybrid';
  description: string;
  skills: string[];
  link?: string;
  attachment?: { src: string; alt: string };
}

/* ------------------------------------------------------------------ */
/*                              DATASET                               */
/* ------------------------------------------------------------------ */
const timeline: Entry[] = [
  {
    org: 'VMukti Solutions Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Jul 2021 – Present',
    location: 'India · Hybrid',
    mode: 'Internship',
    description:
      'Building AI-powered CCTV analytics, blockchain micro-services and VR streaming apps.',
    skills: [
      'Python',
      'Go',
      'Blockchain',
      'ML',
      'CNN',
      'Image Processing',
      'Solidity',
    ],
    link: 'https://www.vmukti.com',
  },
  {
    org: 'Indian Space Research Organisation (ISRO)',
    role: 'Research Intern',
    period: 'Jan 2025 – Apr 2025',
    location: 'Ahmedabad, India · Hybrid',
    mode: 'Full-time',
    description:
      'Built an offline-capable, multilingual email-security pipeline combining OCR with transformer-based text analysis for threat detection.',
    skills: ['OCR', 'Transformers', 'LLM', 'Python'],
  },
  {
    org: 'ACM – Association for Computing Machinery',
    role: 'Treasurer',
    period: 'Mar 2024 – Mar 2025',
    location: 'Ahmedabad · Hybrid',
    mode: 'Full-time',
    description:
      'Managed chapter finances and organised nationwide hackathons & tech-talks.',
    skills: ['Leadership', 'Budgeting', 'Event Planning'],
  },
  {
    org: 'Indian Institute of Technology Bombay',
    role: 'Research Intern',
    period: 'Jul 2024 – Aug 2024',
    location: 'Mumbai · On-site',
    mode: 'Full-time',
    description:
      'Researched RL & DL-based intrusion-detection; optimised algorithms for real-world deployment.',
    skills: ['Reinforcement Learning', 'Deep Learning', 'Cyber-security'],

  },
  {
    org: 'Adani Student Programming & Dev Club',
    role: 'Vice President',
    period: 'Mar 2023 – Aug 2024',
    location: 'Ahmedabad · Hybrid',
    mode: 'Self-employed',
    description:
      'Led club strategy, mentored 50+ students, maintained OSS repos and hosted dev workshops.',
    skills: ['Management', 'GitHub', 'Mentoring'],
    link: 'https://aspdc.tech/team',
  },
  {
    org: 'Adani University',
    role: 'Research Intern',
    period: 'Jul 2023 – Aug 2023',
    location: 'Ahmedabad · On-site',
    mode: 'Internship',
    description:
      'Investigated nanomaterials & metamaterials for advanced camouflage tech; produced two conference submissions.',
    skills: ['Nanotechnology', 'Metamaterials', 'Research'],

  },
];

export default function Timeline() {
  const [active, setActive] = useState<Entry['attachment'] | null>(null);

  return (
    <section id="experience" className="py-24">
      <h2 className="mb-16 text-center text-4xl font-bold">Experience</h2>

      {/* ————— timeline spine ————— */}
      <ol
        className="
          relative mx-auto max-w-5xl
          border-l border-slate-300 dark:border-slate-600
          px-4 sm:px-6 lg:px-8
        "
      >
        {timeline.map((e, idx) => (
          <motion.li
            key={`${e.org}-${e.period}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="mb-14 ml-6"
          >
            {/* dot marker */}
            <span className="absolute -left-3 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-teal-600 ring-2 ring-teal-300 dark:border-slate-900 dark:ring-teal-700" />

            {/* card */}
            <div
              className="
                rounded-xl border border-slate-200 bg-white/70 p-6 backdrop-blur-lg
                dark:border-slate-700 dark:bg-slate-800/60
                shadow-md
              "
            >
              {/* header */}
              <header>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {e.role}{' '}
                  <span className="font-normal text-slate-600 dark:text-slate-400">
                    — {e.mode}
                  </span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {e.org}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDaysIcon className="h-4 w-4" />
                    {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    {e.location}
                  </span>
                </div>
              </header>

              {/* body */}
              <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {e.description}
              </p>

              {/* skills */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-600/30 dark:text-teal-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {/* links */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                {e.link && (
                  <Link
                    href={e.link}
                    target="_blank"
                    className="text-teal-600 hover:underline dark:text-teal-400"
                  >
                    Company site ↗
                  </Link>
                )}
                {e.attachment && (
                  <button
                    onClick={() => setActive(e.attachment!)}
                    className="text-teal-600 hover:underline dark:text-teal-400"
                  >
                    View photo ↗
                  </button>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>

      {/* lightbox */}
      <dialog
        open={!!active}
        onClose={() => setActive(null)}
        className="backdrop:bg-black/60"
      >
        {active && (
          <Fragment>
            <Image
              src={active.src}
              alt={active.alt}
              width={900}
              height={600}
              className="h-auto w-full max-w-4xl rounded-xl object-contain"
            />
            <button
              onClick={() => setActive(null)}
              className="mt-6 rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Close
            </button>
          </Fragment>
        )}
      </dialog>
    </section>
  );
}