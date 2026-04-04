// app/components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link from next/link
import React from 'react';

export interface ProjectCardProps {
  title: string;
  period: string;
  org: string;
  description: string;
  tags: string[];
  repo?: string;
  status?: string;
}

export default function ProjectCard({
  title,
  period,
  org,
  description,
  tags,
  repo,
  status,
}: ProjectCardProps) {
  const projectStatus = repo ? 'Public repo' : status;

  return (
    <motion.article
      whileHover={{
        y: -6,
        boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 12px -6px rgba(0, 0, 0, 0.07)"
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 26, duration: 0.2, ease: "easeInOut" }}
      className="
        relative flex flex-col h-full rounded-xl border
        border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800/80
        shadow-lg hover:shadow-xl dark:hover:shadow-slate-900/40
        focus-within:ring-2 focus-within:ring-teal-500
        p-6"
    >
      {/* Decorative gradient ring on hover */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-xl
          bg-gradient-to-br from-teal-400/20 to-purple-500/20
          opacity-0 blur-sm transition-opacity duration-300
          group-hover:opacity-40
        "
      />

      <header className="mb-3 z-10">
        <h3 className="text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="mt-0.5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {org} &bull; {period}
        </p>
      </header>

      <p className="z-10 mb-4 flex-grow text-sm text-slate-700 dark:text-slate-300">
        {description}
      </p>

      {/* tech-stack pills */}
      {tags.length > 0 && (
        <ul
          aria-label="Technology stack"
          className="z-10 mb-4 flex flex-wrap gap-2 text-xs"
        >
          {tags.map((t) => (
            <li key={t}>
              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 font-medium text-teal-700 dark:bg-teal-600/30 dark:text-teal-300">
                {t}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="z-10 mt-auto flex items-center justify-between gap-3">
        {projectStatus && (
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:bg-slate-700/60 dark:text-slate-300">
            {projectStatus}
          </span>
        )}

        {!!repo && (
          <Link
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1 text-sm font-semibold
              text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500
            "
          >
            View&nbsp;code <span aria-hidden className="translate-x-0.5">↗</span>
          </Link>
        )}
      </div>
    </motion.article>
  );
}
