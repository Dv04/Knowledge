'use client';

import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  period: string;
  org: string;
  description: string;
  tags: string[];
  repo?: string;
}

const projects: Project[] = [
  {
    title: 'DP-accurate DAU/MAU Counter Under Deletions',
    period: 'Sep 2025 - Dec 2025',
    org: 'Rice University',
    description:
      'Designed a deletion-aware distinct-counting pipeline using KMV sketches, tombstone propagation, and RDP accounting for privacy-compliant DAU/MAU analytics.',
    tags: ['Python', 'Privacy', 'KMV Sketches', 'RDP', 'SQL', 'Backend'],
    repo: 'https://github.com/Dv04/DAU-MAU_counter',
  },
  {
    title: 'Editability and Faithfulness Metric for FEVER',
    period: 'Sep 2025 - Dec 2025',
    org: 'Rice University',
    description:
      'Evaluated editability-faithfulness tradeoffs on FEVER claims using GPT-2 and ROME edits across valid examples, comparing target and control flips to quantify localized model edits.',
    tags: ['LLM Evaluation', 'GPT-2', 'ROME', 'NLP', 'Transformers', 'Research'],
    repo: 'https://github.com/Dv04/ef_editability',
  },
  {
    title: 'Activity Identification and Triggering System',
    period: 'Jan 2025 - Apr 2025',
    org: 'Ahmedabad Research Project',
    description:
      'Built a real-time video activity detection and event-triggering system using YOLOv11, TimeSformer, FastAPI, React, and WebSockets with about 95% validation accuracy.',
    tags: ['YOLOv11', 'TimeSformer', 'FastAPI', 'React', 'WebSockets', 'Edge AI'],
  },
  {
    title: 'Face Recognition Pipeline',
    period: '2024 - 2025',
    org: 'VMukti / Adiance',
    description:
      'Developed a face verification pipeline with RetinaFace, ViT embeddings, ONNX and ONNXRuntime, FRVT-style evaluation goals, CVLFace / AdaFace migration, and low FMR / low FNMR deployment targets.',
    tags: ['RetinaFace', 'Vision Transformers', 'ONNX', 'ONNXRuntime', 'C++', 'Computer Vision'],
  },
  {
    title: 'Live Video Analytics with Florence-2 and SAM',
    period: '2025',
    org: 'VMukti / Adiance',
    description:
      'Implemented interactive live-stream intelligence for activity tracking, person and object tracking, and live feed summarization with Florence-2 and SAM style components.',
    tags: ['Florence-2', 'SAM', 'Video Analytics', 'Tracking', 'Multimodal AI', 'Python'],
  },
  {
    title: 'Vision Transformer for Metasurface Design',
    period: 'Sep 2023 - Sep 2024',
    org: 'Adani University',
    description:
      'Built a Vision Transformer model for image regression on metasurface absorber data, improving exploration over CNN-like baselines and reducing training time by about 40%.',
    tags: ['Vision Transformers', 'Image Regression', 'Deep Learning', 'Research', 'Python', 'CNN'],
    repo: 'https://github.com/Dv04/Vision_Transformer',
  },
  {
    title: 'GUI-Based Machine Learning Model for Interactive Learning',
    period: 'May 2023 - Aug 2024',
    org: 'Adani University',
    description:
      'Created an interactive GUI-based ML platform for non-expert learners with a focus on accessibility, educational workflows, and hands-on model exploration.',
    tags: ['Machine Learning', 'GUI Development', 'Educational Tech', 'Python'],
    repo: 'https://github.com/LutionsLab/Predictor',
  },
  {
    title: 'Deep Learning-based IoT Security Model',
    period: 'Jul 2024',
    org: 'IIT Bombay',
    description:
      'Worked on IoMT intrusion detection using Random Forest, CNN, and optimization experiments for cybersecurity-focused model performance.',
    tags: ['Cybersecurity', 'IoMT', 'Random Forest', 'CNN', 'Deep Learning'],
    repo: 'https://github.com/Dv04/GraphKAN',
  },
  {
    title: 'Text Detector for 16-Segment Displays',
    period: 'Jan 2024 - Apr 2024',
    org: 'VMukti Solutions Pvt. Ltd.',
    description:
      'Built an industrial OCR pipeline with OpenCV, EasyOCR, and Flask for real-time text extraction from noisy 16-segment display images and videos.',
    tags: ['OCR', 'OpenCV', 'EasyOCR', 'Flask', 'Computer Vision'],
    repo: 'https://github.com/Dv04/Text_Detector',
  },
  {
    title: 'OCR-Based Emotion Detection',
    period: 'Jan 2025 - Apr 2025',
    org: 'ISRO',
    description:
      'Combined OCR outputs with RoBERTa-style language representations to classify emotional tone in email content while staying privacy-aware.',
    tags: ['OCR', 'RoBERTa', 'Text Classification', 'Python', 'Email Intelligence'],
    repo: 'https://github.com/Dv04/Mail_Detection',
  },
  {
    title: 'Multimodal Song Emotion Classifier',
    period: 'Sep 2024',
    org: 'Personal Project',
    description:
      'Fused Librosa audio features with SentenceTransformer lyric embeddings in TensorFlow to predict song emotion from both audio and text.',
    tags: ['TensorFlow', 'Librosa', 'Sentence Transformers', 'Multimodal AI', 'Audio'],
  },
  {
    title: 'Alumni Management System',
    period: '2023',
    org: 'Adani University',
    description:
      'Built a university platform for alumni records, networking, and engagement with strong attention to workflow and user experience.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Web App'],
    repo: 'https://github.com/Dv04/Alumni_Management',
  },
  {
    title: 'Hospital Management System',
    period: '2023',
    org: 'Adani University',
    description:
      'Created a chatbot-assisted HMIS workflow aimed at improving adoption and reducing friction in day-to-day healthcare operations.',
    tags: ['Chatbot', 'React', 'Node.js', 'Product Thinking', 'Healthcare'],
    repo: 'https://github.com/Dv04/Hospital_Management_System',
  },
  {
    title: 'Stock.Pi',
    period: '2023',
    org: 'Adani University',
    description:
      'Built a market sentiment analysis and chatbot system by combining scraping, sentiment analysis, and real-time market-oriented data processing.',
    tags: ['Web Scraping', 'Sentiment Analysis', 'NLP', 'Python', 'Finance'],
    repo: 'https://github.com/Dv04/Stock.pi',
  },
  {
    title: 'Amazon Scrapper',
    period: '2022',
    org: 'Adani University',
    description:
      'Built a crawler and dashboard flow for collecting Amazon product data and learning practical backend scraping fundamentals.',
    tags: ['Node.js', 'Puppeteer', 'Web Scraping', 'React', 'MongoDB'],
    repo: 'https://github.com/Dv04/Amazon_Scrapper',
  },
];

const tagOptions = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags))).sort()];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const visible = useMemo(
    () =>
      projects.filter(
        (project) => selectedTag === 'All' || project.tags.includes(selectedTag)
      ),
    [selectedTag]
  );

  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Projects and Research Work
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Explore a selection of projects I've passionately worked on. Filter by topic to find what interests you most.
          </p>
        </header>

        <div className="mb-12 flex justify-center">
          <select
            value={selectedTag}
            onChange={(event) => setSelectedTag(event.target.value)}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800"
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={`${project.title}-${project.period}`}
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
          <p className="py-10 text-center text-lg text-slate-600 dark:text-slate-400">
            No projects match the skill &quot;{selectedTag}&quot;. Please try another
            filter.
          </p>
        )}
      </div>
    </section>
  );
}
