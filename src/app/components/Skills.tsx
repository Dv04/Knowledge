// app/components/Skills.tsx (or your preferred path)
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Example icons

// Skill categories and their skills
// Derived from your Projects.tsx tags and LinkedIn data
// Feel free to adjust, add, or remove skills and categories
const skillData = [
  {
    category: 'AI & Machine Learning',
    description: 'Expertise in developing intelligent systems and algorithms.',
    skills: [
      'Deep Learning', 'Machine Learning', 'Artificial Intelligence (AI)', 'Neural Networks',
      'Transformer Models', 'Vision Transformers', 'Large Language Models (LLM)',
      'Natural Language Processing (NLP)', 'Sentiment Analysis', 'Optical Character Recognition (OCR)',
      'Image Processing', 'Face Recognition', 'Convolutional Neural Networks (CNN)',
      'Ensemble Learning', 'Supervised Learning', 'Reinforcement Learning',
      'Hyperparameter Optimization', 'Algorithm Optimization', 'TensorFlow', 'PyTorch', 'Scikit-learn'
    ],
    icon: '🧠' // Example emoji icon
  },
  {
    category: 'Programming Languages',
    description: 'Proficient in multiple languages for diverse applications.',
    skills: ['Python', 'JavaScript', 'C++', 'SQL', 'Go', 'Solidity', 'C'],
    icon: '💻'
  },
  {
    category: 'Web & Application Development',
    description: 'Building responsive and scalable web and mobile applications.',
    skills: [
      'React', 'React Native', 'Node.js', 'Django', 'Flask', 'Tailwind CSS', 'SASS',
      'HTML5', 'CSS3', 'PostgreSQL', 'MongoDB', 'Firebase',
      'GUI Development', 'Web Scraping', 'Chatbot Development', 'REST APIs'
    ],
    icon: '🌐'
  },
  {
    category: 'Tools & Platforms',
    description: 'Utilizing industry-standard tools for efficient development.',
    skills: ['Git', 'GitHub', 'Docker', 'Jira', 'Jupyter', 'Pandas', 'OpenCV', 'EasyOCR', 'Puppeteer'],
    icon: '🛠️'
  },
  {
    category: 'Blockchain & Cryptocurrency',
    description: 'Experience in decentralized technologies and smart contracts.',
    skills: ['Blockchain', 'Smart Contracts', 'Cryptocurrency', 'Solidity', 'Hardhat', 'Ethereum'],
    icon: '🔗'
  },
  {
    category: 'Cybersecurity',
    description: 'Focused on protecting systems and data from digital threats.',
    skills: ['Intrusion Detection', 'Cybersecurity Concepts', 'Network Security Basics'],
    icon: '🛡️'
  },
  {
    category: 'Cloud Computing',
    description: 'Leveraging cloud platforms for scalable solutions.',
    skills: ['Microsoft Azure', 'Cloud Computing Principles'],
    icon: '☁️'
  },
  {
    category: 'Research & Specialized Tech',
    description: 'Exploring cutting-edge technologies and research areas.',
    skills: ['Research and Development (R&D)', 'Design Research', 'Internet of Things (IoT)', 'Nanotechnology', 'Metamaterials', 'Virtual Reality Development'],
    icon: '🔬'
  }
];

const SKILLS_TO_SHOW_INITIALLY = 8; // Number of skills to show before "Show more"

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Technical <span className="text-teal-500 dark:text-teal-400">Proficiencies</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A curated list of my key technical skills and areas of expertise.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillData.map((categoryItem) => {
            const isExpanded = expandedCategories[categoryItem.category] || false;
            const skillsToShow = isExpanded ? categoryItem.skills : categoryItem.skills.slice(0, SKILLS_TO_SHOW_INITIALLY);
            const canShowMore = categoryItem.skills.length > SKILLS_TO_SHOW_INITIALLY;

            return (
              <motion.div
                key={categoryItem.category}
                layout
                className="relative flex flex-col h-full rounded-xl border
                           border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-800
                           shadow-lg hover:shadow-xl dark:hover:shadow-slate-900/40
                           p-6 transition-shadow duration-300"
              >
                <header className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 flex items-center">
                    <span className="mr-2 text-2xl">{categoryItem.icon}</span>
                    {categoryItem.category}
                  </h3>
                  {categoryItem.description && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {categoryItem.description}
                    </p>
                  )}
                </header>

                <motion.ul layout className="flex flex-wrap gap-2 mb-4">
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
                    className="mt-auto text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300
                               flex items-center self-start pt-2"
                  >
                    {isExpanded ? 'Show less' : `Show more (${categoryItem.skills.length - SKILLS_TO_SHOW_INITIALLY} more)`}
                    {isExpanded ?
                      <ChevronUpIcon className="ml-1 h-4 w-4" /> :
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    }
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