'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const skillData = [
  {
    category: 'AI, ML, and Modeling',
    description: 'Applied ML work across research, production, and evaluation.',
    skills: [
      'Deep Learning',
      'Machine Learning',
      'Artificial Intelligence',
      'Transformers',
      'Vision Transformers',
      'Large Language Models',
      'Natural Language Processing (NLP)',
      'Text Classification',
      'Multimodal AI',
      'Neural Networks',
      'Anomaly Detection',
      'Reinforcement Learning',
      'Model Evaluation',
      'Ensemble Learning',
      'Supervised Learning',
      'Algorithm Optimization',
      'Experimental Design',
      'Privacy-preserving Analytics',
      'Sentiment Analysis',
      'Optical Character Recognition (OCR)',
    ],
    icon: 'AI',
  },
  {
    category: 'Vision, OCR, and Video Intelligence',
    description: 'Computer vision systems for surveillance, OCR, and edge deployments.',
    skills: [
      'Computer Vision',
      'Real-time Video Analytics',
      'OCR',
      'OpenCV',
      'Tesseract',
      'EasyOCR',
      'RetinaFace',
      'Face Recognition',
      'FRVT-aligned Evaluation',
      'Florence-2',
      'TimeSformer',
      'SAM',
      'Object Tracking',
      'Person Tracking',
      'Image Processing',
      'Vision Analytics',
    ],
    icon: 'CV',
  },
  {
    category: 'Deployment, Edge, and Infrastructure',
    description: 'Production-oriented systems work for low-latency inference and scale.',
    skills: [
      'Edge AI',
      'ONNX',
      'ONNXRuntime',
      'TensorRT',
      'QAT / PTQ',
      'Edge Inference',
      'RTSP Stream Processing',
      'Cloud VMS',
      'Kubernetes',
      'Inferencing Infrastructure',
      'Docker',
      'REST APIs',
      'CI-like Workflows',
      'Production-minded Testing',
      'Resource-constrained Optimization',
      'Sub-second Latency Pipelines',
    ],
    icon: 'INFRA',
  },
  {
    category: 'Languages and Core Engineering',
    description: 'Languages and engineering tools used across AI and product work.',
    skills: [
      'Python',
      'C++',
      'C',
      'JavaScript',
      'TypeScript',
      'SQL',
      'MATLAB',
      'Go',
      'Java',
      'Solidity',
      'Git',
      'GitHub',
      'Jupyter',
      'NumPy',
      'Pandas',
      'Dask',
    ],
    icon: 'CODE',
  },
  {
    category: 'Frameworks and Product Engineering',
    description: 'Tools used for end-to-end product and application delivery.',
    skills: [
      'React',
      'TypeScript',
      'FastAPI',
      'Flask',
      'Node.js',
      'HTML',
      'CSS',
      'SASS',
      'Back-End Web Development',
      'Front-End Development',
      'Web Development',
      'Web Scraping',
      'GUI Development',
      'Chatbot Development',
      'PostgreSQL',
      'MongoDB',
    ],
    icon: 'APP',
  },
  {
    category: 'Research and Specialized Areas',
    description: 'Research-heavy areas and adjacent technical background.',
    skills: [
      'BERT',
      'RoBERTa',
      'PyTorch',
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'CNNs',
      'IoMT Security',
      'Nanotechnology',
      'Metamaterials',
      'Design Research',
      'Cybersecurity',
      'R&D',
      'Blockchain',
      'Smart Contracts',
      'Cryptocurrency',
      'Virtual Reality Development',
    ],
    icon: 'RND',
  },
];

const SKILLS_TO_SHOW_INITIALLY = 12;

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((previous) => ({
      ...previous,
      [categoryName]: !previous[categoryName],
    }));
  };

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Technical Stack
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            The skills section has been expanded to reflect the current stack:
            edge inference, video analytics, privacy-aware ML, and production
            systems work, not just the older academic projects.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillData.map((categoryItem) => {
            const isExpanded = expandedCategories[categoryItem.category] || false;
            const skillsToShow = isExpanded
              ? categoryItem.skills
              : categoryItem.skills.slice(0, SKILLS_TO_SHOW_INITIALLY);
            const canShowMore =
              categoryItem.skills.length > SKILLS_TO_SHOW_INITIALLY;

            return (
              <motion.div
                key={categoryItem.category}
                layout
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-slate-900/40"
              >
                <header className="mb-4">
                  <h3 className="flex items-center text-xl font-semibold text-slate-800 dark:text-slate-100">
                    <span className="mr-2 text-sm font-bold uppercase tracking-[0.15em] text-teal-600 dark:text-teal-400">
                      {categoryItem.icon}
                    </span>
                    {categoryItem.category}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {categoryItem.description}
                  </p>
                </header>

                <motion.ul layout className="mb-4 flex flex-wrap gap-2">
                  {skillsToShow.map((skill) => (
                    <motion.li
                      key={skill}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-600/30 dark:text-teal-300"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>

                {canShowMore && (
                  <button
                    onClick={() => toggleCategory(categoryItem.category)}
                    className="mt-auto flex items-center self-start pt-2 text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    {isExpanded
                      ? 'Show less'
                      : `Show more (${categoryItem.skills.length - SKILLS_TO_SHOW_INITIALLY} more)`}
                    {isExpanded ? (
                      <ChevronUpIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
