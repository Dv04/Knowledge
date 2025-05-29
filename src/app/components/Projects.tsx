// app/components/Projects.tsx (or your existing path)
'use client';

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  period: string;
  org: string;
  description: string;
  tags: string[];
  repo: string;
}

/* ———————————————————————————————————————————————————————————
   COMPLETE DATA-SET  (derived from the descriptions you provided)
   Feel free to adjust copy or add more tags.
——————————————————————————————————————————————————————————— */
const projects: Project[] = [
  {
    title: 'Vision Transformer',
    period: 'Sep 2023 – Present',
    org: 'Adani University',
    description:
      'Vision-Transformer (ViT) model for image regression; compares transformer-based vision to CNN baselines.',
    tags: [
      'Vision Transformers',
      'Deep Learning',
      'Transformer Models',
      'Python',
      'Jupyter',
      'CNN',
    ],
    repo: 'https://github.com/Dv04/Vision_Transformer',
  },
  {
    title: 'GUI-based Machine-Learning Studio',
    period: 'May 2023 – Present',
    org: 'Adani University',
    description:
      'Desktop GUI that lets students tweak ML algorithms live and visualise metrics in real time.',
    tags: ['Machine Learning', 'GUI', 'Educational Tech'],
    repo: 'https://github.com/LutionsLab/Predictor',
  },
  {
    title: 'Text Detector (16-segment display)',
    period: 'Jan 2023 – Present',
    org: 'VMukti Solutions Pvt. Ltd.',
    description:
      'CNN + EasyOCR + OpenCV pipeline for real-time text extraction from industrial 16-segment displays.',
    tags: ['OCR', 'OpenCV', 'EasyOCR', 'Flask UI', 'CNN'], // Added CNN here if it's a primary skill for filtering
    repo: 'https://github.com/Dv04/Text_Detector',
  },
  {
    title: 'IoT Intrusion-Detection DL',
    period: 'Jul 2024',
    org: 'IIT Bombay',
    description:
      'Random-Forest & DL ensemble that flags intrusions in Internet-of-Medical-Things (IoMT) traffic.',
    tags: ['Cyber-security', 'Ensemble Learning', 'Deep Learning', 'IoT'], // Added Deep Learning
    repo: 'https://github.com/Dv04/GraphKAN',
  },
  {
    title: 'Alumni Management System',
    period: 'Sep 2023',
    org: 'Adani University',
    description:
      'Prototype platform for universities to maintain alumni data and networking features.',
    tags: ['Python', 'Django', 'Tailwind', 'PostgreSQL'],
    repo: 'https://github.com/Dv04/Alumni_Management',
  },
  {
    title: 'Hospital Management System',
    period: 'Jul 2023',
    org: 'Adani University',
    description:
      'Chatbot-assisted HMIS aimed at increasing adoption among clinical staff.',
    tags: ['Chatbot', 'Machine Learning', 'React', 'Node.js', 'AI'],
    repo: 'https://github.com/Dv04/Hospital_Management_System',
  },
  {
    title: 'Stock.Pi (Sentiment-driven Prediction)',
    period: 'Feb 2023',
    org: 'Adani University',
    description:
      'Scrapes news + social media, performs sentiment analysis and predicts equity / crypto moves.',
    tags: ['Web Scraping', 'Sentiment Analysis', 'React', 'Python', 'Sentiment', 'NLP', 'Puppeteer'],
    repo: 'https://github.com/Dv04/Stock.pi',
  },
  {
    title: 'Amazon Scrapper',
    period: 'Nov 2022',
    org: 'Adani University',
    description:
      'Full-stack crawler to collect Amazon product data and build a pricing dashboard.',
    tags: ['Node.js', 'Puppeteer', 'Pandas', 'Web Scraping', 'React', 'MongoDB'],
    repo: 'https://github.com/Dv04/Amazon_Scrapper',
  },
  {
    title: 'FRVT Research Bench',
    period: '2024',
    org: 'Personal R&D',
    description:
      'Self-hosted NIST Face-Recognition Vendor Test (FRVT) validation runs.',
    tags: ['Face Recognition', 'Docker'],
    repo: 'https://github.com/usnistgov/frvt',
  },
  {
    title: 'Activity Tracker',
    period: '2024',
    org: 'Personal',
    description:
      'Full-stack fitness tracker that logs workouts and visualises progress.',
    tags: ['Django', 'ChartJS', 'Python', 'React Native'],
    repo: 'https://github.com/Dv04/Activity_Tracker',
  },
  // …add Jal and Mail_Detection if/when those repos go public
];

/* ——————————————————————— helpers ——————————————————————— */
const tagOptions = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags))).sort()];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const visible = useMemo(
    () =>
      projects.filter(
        (p) => selectedTag === 'All' || p.tags.includes(selectedTag)
      ),
    [selectedTag]
  );

  return (
    <section id="projects" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Creative <span className="text-teal-500 dark:text-teal-400">Endeavors</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore a selection of projects I've passionately worked on. Filter by topic to find what interests you most.
          </p>
        </header>

        {/* tag dropdown */}
        <div className="mb-12 flex justify-center">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="
            rounded-md border border-slate-300 dark:border-slate-600
            bg-white dark:bg-slate-800
            py-2 px-3 text-sm
            focus:outline-none focus:ring-2 focus:ring-teal-500
          "
          >
            {tagOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>


        {/* Projects Grid */}
        {visible.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.title} // Key on the ProjectCard component itself
                title={project.title}
                period={project.period}
                org={project.org}
                description={project.description}
                tags={project.tags}
                repo={project.repo}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 py-10">
            No projects match the skill "{selectedTag}". Please try another filter.
          </p>
        )}
      </div>
    </section>
  );
}