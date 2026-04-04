'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface Entry {
  org: string;
  role: string;
  period: string;
  location?: string;
  mode: string;
  summary: string;
  bullets: string[];
  skills: string[];
  logo: string;
  link?: string;
}

const timeline: Entry[] = [
  {
    org: 'Rice University School of Engineering and Computing',
    role: 'Teaching Assistant',
    period: 'Jan 2026 - Present',
    location: 'Houston, TX',
    mode: 'Academic',
    logo: '/logos/rice.png',
    summary:
      'Support course delivery while giving students structured feedback and guidance in and after class.',
    bullets: [
      'Strengthened constructive feedback and professional communication through direct student support.',
    ],
    skills: ['Constructive Feedback', 'Professional Communication', 'Teaching'],
  },
  {
    org: 'Dhi-Tech',
    role: 'Co-Founder',
    period: 'Nov 2025 - Present',
    location: 'Houston, TX',
    mode: 'Startup',
    logo: '/logos/dhi.png',
    summary:
      'Building a privacy-first edge video analytics platform for existing CCTV systems.',
    bullets: [
      'Focused on no-cloud, low-latency inference for industrial, port, and transit environments using RTSP stream processing, real-time dashboards, and modular AI models.',
      'Built safety and hazard detection workflows for Raspberry Pi, NVIDIA Jetson, and similar edge devices while handling pilot outreach, go-to-market, and performance tuning.',
    ],
    skills: ['Vision Analytics', 'Edge AI', 'Business Development', 'Startup Leadership'],
  },
  {
    org: 'VMukti Solutions',
    role: 'R&D Intern -> AI Solutions Developer -> Team Lead',
    period: 'Jul 2021 - Jan 2025',
    location: 'India',
    mode: 'Industry',
    logo: '/logos/vmukti.png',
    summary:
      'Built deployment-focused AI for cloud VMS systems, edge CCTV software, and large-scale surveillance analytics.',
    bullets: [
      'Built production-ready C++ / ONNX inference systems, reduced edge latency by 50 to 70 percent, and delivered 60 to 80 percent model-size reduction with 2 to 5x faster inference while retaining more than 95 percent of original accuracy.',
      'Integrated GenAI video-forensics workflows with more than 95 percent precision, designed sub-second pipelines for thousands of concurrent streams across 10K+ IoT cameras, and moved AI features from research to deployment about 40 percent faster through cross-functional coordination.',
    ],
    skills: ['C++', 'ONNX', 'Python', 'Video Analytics', 'Deployment', 'Edge AI'],
    link: 'https://www.vmukti.com',
  },
  {
    org: 'Adiance Technologies Pvt. Ltd.',
    role: 'Product Development Team -> Project Manager / Team Lead',
    period: 'Jan 2025 - Jul 2025',
    location: 'India',
    mode: 'Industry',
    logo: '/logos/adiance.png',
    summary:
      'Worked on edge AI CCTV products and deployment pipelines for surveillance environments.',
    bullets: [
      'Optimized deep learning models for real-time video analytics on constrained devices and worked on Florence-2 / TimeSformer activity tracking for edge deployments.',
      'Built C++ ONNXRuntime face verification workflows and coordinated hardware-cloud integration and product deployment across surveillance use cases.',
    ],
    skills: ['Edge AI', 'ONNXRuntime', 'Computer Vision', 'Product Delivery'],
  },
  {
    org: 'Indian Space Research Organisation (ISRO)',
    role: 'Research Intern / Machine Learning Researcher',
    period: 'Jan 2025 - Apr 2025',
    location: 'Ahmedabad, India',
    mode: 'Research',
    logo: '/logos/isro.png',
    summary:
      'Built an offline-capable multilingual email-security pipeline combining OCR, transformer-based analysis, and privacy-preserving processing.',
    bullets: [
      'Worked on malicious content detection, emotional tone detection, attachment analysis, and offline-friendly execution.',
      'One version reached 95 percent accuracy with Tesseract + BERT, while another reached more than 98 percent multilingual detection accuracy and reduced false positives by about 70 percent versus a rule-based baseline.',
    ],
    skills: ['OCR', 'Transformers', 'BERT', 'RoBERTa', 'Python', 'Text Classification'],
  },
  {
    org: 'Indian Institute of Technology Bombay',
    role: 'Research Intern / Deep Learning Researcher',
    period: 'Jul 2024 - Aug 2024',
    location: 'Mumbai, India',
    mode: 'Research',
    logo: '/logos/iitb.png',
    summary:
      'Researched intrusion detection in IoMT networks with deep learning and reinforcement learning.',
    bullets: [
      'Worked on a 77 GB dataset and improved detection accuracy to 98 percent in the current resume version.',
      'Experimented with Random Forest, CNN, and Kolmogorov-Arnold Networks while addressing class imbalance and efficiency.',
    ],
    skills: ['Reinforcement Learning', 'Deep Learning', 'Cybersecurity', 'Algorithm Optimization'],
  },
  {
    org: 'Adani Student Programming and Development Club',
    role: 'Vice President',
    period: 'Mar 2023 - Aug 2024',
    location: 'Ahmedabad, India',
    mode: 'Leadership',
    logo: '/logos/aspdc.png',
    summary:
      'Scaled the largest programming club on campus through mentorship, workshops, hackathons, and repository stewardship.',
    bullets: [
      'Organized 10+ workshops and hackathons, mentored 250+ students, and helped the club reach 400+ members with demand regularly exceeding capacity.',
      'Managed club GitHub repositories and strengthened the campus coding culture.',
    ],
    skills: ['Mentoring', 'GitHub', 'Community Building', 'Leadership'],
    link: 'https://aspdc.tech/team',
  },
  {
    org: 'Adani University',
    role: 'Research Intern',
    period: 'Jul 2023 - Aug 2023',
    location: 'Ahmedabad, India',
    mode: 'Research',
    logo: '/logos/adaniuni.png',
    summary:
      'Worked on nanotechnology, metamaterials, camouflage, and design research.',
    bullets: [
      'This work became the foundation for the later metasurface absorber publication.',
    ],
    skills: ['Nanotechnology', 'Metamaterials', 'Design Research'],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Experience, Leadership, and Service
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Most of my work has come from a mix of research, production engineering,
            and building things that had to hold up in real settings. This is the
            version with the missing pieces put back in.
          </p>
        </header>

        <ol className="relative mx-auto mt-16 max-w-5xl border-l border-slate-300 px-4 dark:border-slate-600 sm:px-6 lg:px-8">
          {timeline.map((entry, index) => (
            <motion.li
              key={`${entry.org}-${entry.role}-${entry.period}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="mb-14 ml-6"
            >
              <span className="absolute -left-3 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-teal-600 ring-2 ring-teal-300 dark:border-slate-900 dark:ring-teal-700" />

              <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md backdrop-blur dark:border-slate-700 dark:bg-slate-800/70">
                <header>
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                      <Image
                        src={entry.logo}
                        alt={`${entry.org} logo`}
                        width={34}
                        height={34}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {entry.role}
                        </h3>
                        <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-500/15 dark:text-teal-300">
                          {entry.mode}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {entry.org}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDaysIcon className="h-4 w-4" />
                      {entry.period}
                    </span>
                    {entry.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        {entry.location}
                      </span>
                    )}
                  </div>
                </header>

                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {entry.summary}
                </p>

                {entry.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-0.5 text-teal-500">-</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {entry.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700/60 dark:text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {entry.link && (
                  <div className="mt-5 text-sm font-semibold">
                    <Link
                      href={entry.link}
                      target="_blank"
                      className="text-teal-600 hover:underline dark:text-teal-400"
                    >
                      Related link ↗
                    </Link>
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
