'use client';

import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  startTransition,
  useDeferredValue,
  useMemo,
  useState,
} from 'react';
import {
  contactLinks,
  currentItems,
  educationEntries,
  educationNotes,
  experienceEntries,
  featuredSystems,
  focusAreas,
  metrics,
  projectFilters,
  projects,
  proofItems,
  publication,
  roleFits,
  skillGroups,
  awards,
  type ExperienceEntry,
  type FeaturedSystem,
  type ProjectEntry,
} from './data';

function startViewTransition(update: () => void) {
  if (
    typeof document !== 'undefined' &&
    'startViewTransition' in document
  ) {
    (
      document as Document & {
        startViewTransition: (callback: () => void) => void;
      }
    ).startViewTransition(update);
    return;
  }

  update();
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-pretty-wrap mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{body}</p>
    </div>
  );
}

function ProofPill({ label, logo }: { label: string; logo?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
      {logo ? (
        <Image
          src={logo}
          alt={`${label} logo`}
          width={18}
          height={18}
          className="h-[18px] w-[18px] object-contain"
        />
      ) : (
        <span className="h-2 w-2 rounded-full bg-teal-500" />
      )}
      {label}
    </span>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{label}</p>
    </div>
  );
}

function CurrentCard({
  label,
  title,
  description,
  href,
  hrefLabel,
}: {
  label: string;
  title: string;
  description: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {href && hrefLabel && (
        <div className="mt-5">
          <Link
            href={href}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            {hrefLabel} <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
          {entry.logo ? (
            <Image
              src={entry.logo}
              alt={`${entry.org} logo`}
              width={34}
              height={34}
              className="h-9 w-9 object-contain"
            />
          ) : (
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {entry.org
                .split(' ')
                .slice(0, 2)
                .map((part) => part[0])
                .join('')}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">
              {entry.role}
            </h3>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              {entry.mode}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-600">{entry.org}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDaysIcon className="h-4 w-4" />
              {entry.period}
            </span>
            {entry.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="h-4 w-4" />
                {entry.location}
              </span>
            )}
          </div>
        </div>
      </header>

      <p className="mt-5 text-sm leading-7 text-slate-700">{entry.summary}</p>

      {entry.bullets.length > 0 && (
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {entry.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {entry.href && (
        <div className="mt-5">
          <Link
            href={entry.href}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            Related link <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>
        </div>
      )}
    </article>
  );
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  const status = project.repo ? 'Public repo' : project.status;

  return (
    <article className="group flex h-full flex-col rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-teal-200">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
          {project.category}
        </span>
        {status && (
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            {status}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-slate-500">
        {project.org} · {project.period}
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-700">{project.summary}</p>

      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.repo && (
        <div className="mt-6">
          <Link
            href={project.repo}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            View code <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>
        </div>
      )}
    </article>
  );
}

function SkillCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <article className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function FeaturePreview({ feature }: { feature: FeaturedSystem }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(165deg,#f8fbfd_0%,#eff6f8_54%,#ffffff_100%)] p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.32)]">
      <div className="absolute inset-x-6 top-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-400">
        <span>{feature.label}</span>
        <span>{feature.metricValue}</span>
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {feature.previewTitle}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{feature.period}</p>
            </div>
            <div className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
              {feature.metricValue}
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-700">
            {feature.previewCaption}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {feature.diagram.map((step) => (
              <span
                key={step}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Focus stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {feature.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            {feature.summary}
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {feature.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {feature.href && feature.hrefLabel && (
            <div className="mt-6">
              <Link
                href={feature.href}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                {feature.hrefLabel} <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExampleShowcase() {
  const reduceMotion = useReducedMotion();
  const [selectedFeatureId, setSelectedFeatureId] = useState(featuredSystems[0].id);
  const [previewedFeatureId, setPreviewedFeatureId] = useState(featuredSystems[0].id);
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof projectFilters)[number]>('All');
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);

  const activeFeature = useMemo(
    () =>
      featuredSystems.find((item) => item.id === selectedFeatureId) ??
      featuredSystems[0],
    [selectedFeatureId]
  );

  const previewFeature = useMemo(
    () =>
      featuredSystems.find((item) => item.id === previewedFeatureId) ??
      activeFeature,
    [activeFeature, previewedFeatureId]
  );

  const visibleProjects = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === 'All' || project.category === selectedCategory;

      if (!categoryMatch) {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = [
        project.title,
        project.org,
        project.summary,
        ...project.bullets,
        ...project.tags,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [deferredSearch, selectedCategory]);

  const chooseFeature = (id: string) => {
    startViewTransition(() => {
      startTransition(() => {
        setSelectedFeatureId(id);
        setPreviewedFeatureId(id);
      });
    });
  };

  return (
    <main className="min-h-screen bg-[#f6f7f4] text-slate-950">
      <div className="example-grid min-h-screen">
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-600 shadow-sm"
          >
            <nav
              aria-label="Section navigation"
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#featured" className="hover:text-slate-900">
                Featured systems
              </a>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <a href="#experience" className="hover:text-slate-900">
                Experience
              </a>
              <a href="#projects" className="hover:text-slate-900">
                Projects
              </a>
              <a href="#publication" className="hover:text-slate-900">
                Publication
              </a>
              <a href="#contact" className="hover:text-slate-900">
                Contact
              </a>
            </nav>
          </motion.div>

          <div className="relative mt-10 overflow-hidden rounded-[2.6rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] sm:px-10 sm:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.6))]"
            />

            <div className="relative grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Dev Sanghvi
                </p>
                <h1 className="text-pretty-wrap mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  AI Engineer (Edge AI &amp; Computer Vision)
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  I&apos;m an AI engineer currently pursuing an MCS at Rice. Most
                  of my work sits around edge computer vision, OCR, real-time
                  video analytics, and deployment-focused ML under latency,
                  privacy, and real operational constraints.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  Across startup, research, and production roles, I keep moving
                  toward work that has to hold up outside the lab and run well
                  in the field.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/Dev_Sanghvi.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Resume
                  </Link>
                  <Link
                    href="https://github.com/Dv04"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-teal-200 hover:text-teal-700"
                  >
                    GitHub <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/dev-sanghvi-616843128/"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-teal-200 hover:text-teal-700"
                  >
                    LinkedIn <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {proofItems.map((item) => (
                    <ProofPill
                      key={item.label}
                      label={item.label}
                      logo={item.logo}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
                className="grid gap-4"
              >
                <div className="grid items-start gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative self-start overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#fbfdfe_0%,#eef5f7_100%)] p-3 shadow-sm sm:max-w-[22rem]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src="/Image.jpg"
                        alt="Dev Sanghvi portrait"
                        fill
                        sizes="(max-width: 640px) 100vw, 22rem"
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                      Working style
                    </p>
                    <ul className="mt-5 space-y-4 text-sm leading-7 text-white/82">
                      <li>I usually think about deployment early.</li>
                      <li>Latency, privacy, and edge constraints stay in view throughout the work.</li>
                      <li>I am comfortable taking research ideas far enough that they become usable systems.</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Best-fit roles
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {roleFits.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Core strengths
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {focusAreas.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {currentItems.map((item) => (
              <CurrentCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard
                key={`${metric.value}-${metric.label}`}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </section>

        <section
          id="featured"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <SectionHeader
              eyebrow="Featured systems"
              title="Selected systems where deployment constraints mattered as much as the model itself."
              body="These are the projects that best reflect how I like to work: start with the real constraint, build the model, and make the full pipeline reliable enough to use."
            />
          </motion.div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {featuredSystems.map((feature, index) => {
                const isActive = selectedFeatureId === feature.id;
                return (
                  <motion.button
                    key={feature.id}
                    type="button"
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.4,
                      delay: reduceMotion ? 0 : index * 0.05,
                      ease: 'easeOut',
                    }}
                    onMouseEnter={() => setPreviewedFeatureId(feature.id)}
                    onFocus={() => setPreviewedFeatureId(feature.id)}
                    onMouseLeave={() => setPreviewedFeatureId(selectedFeatureId)}
                    onBlur={() => setPreviewedFeatureId(selectedFeatureId)}
                    onClick={() => chooseFeature(feature.id)}
                    className={`w-full rounded-[1.8rem] border p-6 text-left transition-colors ${
                      isActive
                        ? 'border-slate-900 bg-slate-950 text-white'
                        : 'border-slate-200 bg-white text-slate-900 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                          isActive
                            ? 'bg-white/10 text-white/75'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {feature.label}
                      </span>
                      <span
                        className={`text-xs uppercase tracking-[0.18em] ${
                          isActive ? 'text-white/60' : 'text-slate-400'
                        }`}
                      >
                        {feature.metricValue}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        isActive ? 'text-white/80' : 'text-slate-600'
                      }`}
                    >
                      {feature.summary}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={activeFeature.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <FeaturePreview feature={previewFeature} />
            </motion.div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <SectionHeader
            eyebrow="Experience"
            title="Work across startups, production AI, and research."
            body="My experience sits across shipping edge AI, building video and OCR systems, and taking research work far enough that it can survive outside the lab."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {experienceEntries.map((entry) => (
              <ExperienceCard key={`${entry.org}-${entry.role}`} entry={entry} />
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <SectionHeader
            eyebrow="Project library"
            title="A broader project library across vision, OCR, privacy, and deployment-focused ML."
            body="This section includes both public repositories and non-public work. Where code is public, it is linked. Where it is not, the work is labeled clearly."
          />

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    startTransition(() => setSearch(nextValue));
                  }}
                  placeholder="Search projects, tools, domains, or topics"
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition focus:border-teal-300 focus:bg-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {projectFilters.map((filter) => {
                  const selected = filter === selectedCategory;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => startTransition(() => setSelectedCategory(filter))}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        selected
                          ? 'bg-slate-950 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Showing {visibleProjects.length} of {projects.length} projects.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={`${project.title}-${project.period}`} project={project} />
            ))}
          </div>
        </section>

        <section
          id="publication"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <SectionHeader
            eyebrow="Publication and awards"
            title="Publication, awards, and a few markers of technical recognition."
            body="Research matters most to me when it leads to something concrete. This section collects the paper, competitions, and milestones that shaped that side of my work."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.25)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_30%)]"
              />

              <div className="relative">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {publication.period}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {publication.venue}
                  </span>
                </div>

                <h3 className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                  {publication.title}
                </h3>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
                  {publication.summary}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-[auto_1fr] md:items-end">
                  <div className="rounded-2xl border border-teal-200 bg-teal-50 px-5 py-4">
                    <div className="text-3xl font-bold tracking-tight text-teal-700">
                      40%
                    </div>
                    <div className="mt-1 text-sm text-teal-900/80">
                      training-time reduction
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={publication.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
                  >
                    View related repo <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-5">
              {awards.map((award) => (
                <article
                  key={award.title}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                      {award.period}
                    </span>
                    <span className="text-sm text-slate-500">{award.issuer}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                    {award.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {award.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technical stack"
            title="Tools, frameworks, and systems I keep reaching for."
            body="Most of my work clusters around vision, OCR, edge inference, deployment, and production-facing ML, so the stack reflects that."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillCard
                key={group.title}
                title={group.title}
                description={group.description}
                items={group.items}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Education"
            title="Academic background that supports the work."
            body="Rice sharpened the systems and ML side of my path, while Adani gave me the early foundation across AI, engineering, and student-led technical work."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-5">
              {educationEntries.map((entry) => (
                <article
                  key={entry.school}
                  className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    {entry.logo && (
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                        <Image
                          src={entry.logo}
                          alt={`${entry.school} logo`}
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                        {entry.school}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{entry.degree}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDaysIcon className="h-4 w-4" />
                          {entry.period}
                        </span>
                        {entry.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPinIcon className="h-4 w-4" />
                            {entry.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                    {entry.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="grid gap-5">
              <article className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  Earlier academic background
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {educationNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.9rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Professional narrative
                </p>
                <p className="mt-5 text-sm leading-8 text-white/82">
                  An AI and software engineer currently pursuing an MCS at Rice,
                  with deep hands-on experience in edge computer vision,
                  real-time video analytics, OCR and text models,
                  deployment-focused ML, startup execution, and technical
                  leadership, supported by research, product, and systems work
                  across surveillance, cybersecurity, and applied AI.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <SectionHeader
            eyebrow="Contact"
            title="The contact section stays simple."
            body="This keeps the direct channels visible without turning the bottom of the page into a social wall."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                Direct contact
              </h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700">
                  Houston, TX
                </div>
                {contactLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="inline-flex items-center gap-2 text-right text-slate-500">
                      {item.value}
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 shrink-0" />
                    </span>
                  </Link>
                ))}
              </div>
            </article>

            <article className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                What I optimize for
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  <span>
                    Building AI that still works once latency, privacy, and deployment constraints become real.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  <span>
                    Closing the gap between research ideas and production-ready systems people can actually use.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  <span>
                    Communicating technical work clearly enough for engineers, recruiters, and founders to understand the value quickly.
                  </span>
                </li>
              </ul>

              <div className="mt-8 rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(150deg,#f7fbfc_0%,#eef5f7_100%)] p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Interaction style
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The interaction layer stays restrained and functional, with motion used mainly to guide focus, clarify transitions, and keep the page readable.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
