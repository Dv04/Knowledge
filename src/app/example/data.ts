export type ProofItem = {
  label: string;
  logo?: string;
};

export type CurrentItem = {
  label: string;
  title: string;
  description: string;
  href?: string;
  hrefLabel?: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type FeaturedSystem = {
  id: string;
  label: string;
  title: string;
  period: string;
  summary: string;
  details: string[];
  metricValue: string;
  metricLabel: string;
  stack: string[];
  diagram: string[];
  previewTitle: string;
  previewCaption: string;
  href?: string;
  hrefLabel?: string;
};

export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  location?: string;
  mode: string;
  logo?: string;
  summary: string;
  bullets: string[];
  skills: string[];
  href?: string;
};

export type AwardEntry = {
  title: string;
  issuer: string;
  period: string;
  description: string;
};

export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details: string[];
  logo?: string;
};

export type ProjectEntry = {
  title: string;
  org: string;
  period: string;
  category: 'Edge AI' | 'Research' | 'Data & Privacy' | 'Product';
  summary: string;
  bullets: string[];
  tags: string[];
  repo?: string;
  status?: 'Public repo' | 'Private work' | 'No public repo';
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const proofItems: ProofItem[] = [
  { label: 'Rice University', logo: '/logos/rice.png' },
  { label: 'Dhi-Tech', logo: '/logos/dhi.png' },
  { label: 'VMukti', logo: '/logos/vmukti.png' },
  { label: 'ISRO', logo: '/logos/isro.png' },
  { label: 'CASML 2024' },
];

export const currentItems: CurrentItem[] = [
  {
    label: 'Now',
    title: 'Rice University',
    description:
      'MCS student in Houston with an AI focus, expected to graduate in December 2026 with a current GPA of 3.89/4.0.',
  },
  {
    label: 'Building',
    title: 'Dhi-Tech',
    description:
      'Co-founding a privacy-first edge video analytics platform for existing CCTV systems, focused on real-time safety intelligence without cloud dependency.',
    href: 'https://dhi-tech.com',
    hrefLabel: 'Visit Dhi-Tech',
  },
  {
    label: 'Now',
    title: 'Current focus',
    description:
      'Building around edge AI, privacy-aware video intelligence, OCR, deployment constraints, and production-ready systems work.',
  },
];

export const roleFits = [
  'AI Engineer',
  'Edge AI Engineer',
  'Computer Vision Engineer',
  'Inference / Deployment Engineer',
  'Applied AI / Production ML',
  'Founding Engineer',
];

export const focusAreas = [
  'Edge AI',
  'Computer Vision',
  'OCR',
  'Real-time Video Analytics',
  'Deployment Optimization',
  'C++ / Python Engineering',
  'Transformers',
  'Privacy-aware ML',
  'Startup Execution',
  'Technical Leadership',
];

export const metrics: MetricItem[] = [
  {
    value: '10K+',
    label: 'IoT cameras reached by deployed analytics across large surveillance environments',
  },
  {
    value: '50-70%',
    label: 'latency reduction achieved on optimized edge inference workloads',
  },
  {
    value: '2-5x',
    label: 'faster inference delivered while retaining more than 95% of original accuracy',
  },
  {
    value: '98%+',
    label: 'multilingual detection accuracy reported for the ISRO privacy-preserving email pipeline',
  },
  {
    value: '40%',
    label: 'training-time reduction in the metasurface publication presented at CASML 2024',
  },
  {
    value: '400+',
    label: 'members reached as ASPDC grew into the largest programming club on campus',
  },
];

export const featuredSystems: FeaturedSystem[] = [
  {
    id: 'dhi',
    label: 'Dhi-Tech',
    title: 'Privacy-first edge video analytics for existing CCTV systems',
    period: 'Nov 2025 - Present',
    summary:
      'Current startup work centered on safety intelligence that has to run close to the camera, stay fast, and avoid unnecessary cloud dependency.',
    details: [
      'Built around no-cloud, low-latency inference for industrial, port, and transit environments.',
      'Uses RTSP stream processing, real-time dashboard visualization, modular AI models, and safety / hazard detection workflows.',
      'Targets Raspberry Pi, NVIDIA Jetson, and similar devices while also covering pilot outreach, go-to-market, and performance tuning.',
    ],
    metricValue: 'No cloud',
    metricLabel: 'privacy-first, low-latency deployment',
    stack: ['Edge AI', 'RTSP', 'Dashboards', 'Jetson', 'Raspberry Pi', 'Safety Detection'],
    diagram: ['CCTV input', 'RTSP ingest', 'On-device inference', 'Operations dashboard'],
    previewTitle: 'Current startup direction',
    previewCaption:
      'This is where product thinking, deployment constraints, and computer vision come together most directly.',
    href: 'https://dhi-tech.com',
    hrefLabel: 'Dhi-Tech',
  },
  {
    id: 'vmukti',
    label: 'VMukti',
    title: 'Large-scale video analytics and deployment-focused inference',
    period: 'Jul 2021 - Jan 2025',
    summary:
      'Long-term systems work across cloud VMS, edge CCTV software, face recognition, and large-scale surveillance analytics.',
    details: [
      'Built production-ready C++ / ONNX inference systems and achieved 50-70% latency reduction on edge devices.',
      'Delivered 60-80% model-size reduction and 2-5x faster inference while preserving more than 95% of original accuracy.',
      'Integrated analytics into 10K+ IoT cameras and designed sub-second pipelines for thousands of concurrent streams.',
    ],
    metricValue: '10K+ cameras',
    metricLabel: 'analytics integrated into large-scale deployments',
    stack: ['C++', 'ONNX', 'Cloud VMS', 'Edge AI', 'Video Forensics', 'Face Recognition'],
    diagram: ['Model prep', 'ONNX runtime', 'Concurrent streams', 'Deployment at scale'],
    previewTitle: 'Deployment-heavy systems work',
    previewCaption:
      'A lot of this work was about getting AI into real operational environments and keeping it stable there.',
    href: 'https://www.vmukti.com',
    hrefLabel: 'VMukti',
  },
  {
    id: 'isro',
    label: 'ISRO',
    title: 'Offline multilingual email security with OCR and transformers',
    period: 'Jan 2025 - Apr 2025',
    summary:
      'A privacy-sensitive pipeline for malicious email detection that had to combine OCR, transformer-based analysis, multilingual handling, and offline-friendly execution.',
    details: [
      'Worked across malicious content detection, emotional tone detection, attachment analysis, and privacy-preserving processing.',
      'One version reached 95% accuracy with Tesseract + BERT.',
      'Another reached more than 98% multilingual detection accuracy and reduced false positives by about 70% versus a rule-based baseline.',
    ],
    metricValue: '98%+ detection',
    metricLabel: 'multilingual accuracy with lower false positives',
    stack: ['OCR', 'Tesseract', 'BERT', 'RoBERTa', 'Text Classification', 'Offline Execution'],
    diagram: ['Email intake', 'OCR layer', 'Transformer analysis', 'Risk output'],
    previewTitle: 'Privacy-preserving analysis',
    previewCaption:
      'What stands out here is the mix of constraints: privacy, offline execution, multilingual inputs, and reliability.',
  },
  {
    id: 'privacy',
    label: 'Rice project',
    title: 'Deletion-aware analytics and model-edit evaluation',
    period: 'Sep 2025 - Dec 2025',
    summary:
      'Recent Rice work focused on privacy-aware analytics infrastructure and LLM evaluation with measurable methodology.',
    details: [
      'Designed a deletion-aware DAU/MAU pipeline using KMV sketches, tombstone propagation, and RDP accounting for GDPR-compliant analytics.',
      'Benchmarked editability-faithfulness tradeoffs on FEVER using GPT-2 and ROME edits across valid examples.',
      'Together, they cover backend reasoning, experimental design, and correctness under constraints.',
    ],
    metricValue: 'RDP + FEVER',
    metricLabel: 'privacy analytics and model-evaluation work',
    stack: ['Python', 'KMV Sketches', 'RDP', 'SQL', 'GPT-2', 'ROME'],
    diagram: ['User events', 'Deletion handling', 'Metric logic', 'Evaluation output'],
    previewTitle: 'Research + data systems breadth',
    previewCaption:
      'It adds range while staying close to the same themes of rigor, measurement, and practical systems work.',
    href: 'https://github.com/Dv04/DAU-MAU_counter',
    hrefLabel: 'DAU/MAU repo',
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    org: 'Rice University School of Engineering and Computing',
    role: 'Teaching Assistant',
    period: 'Jan 2026 - Present',
    location: 'Houston, TX',
    mode: 'Academic',
    logo: '/logos/rice.png',
    summary:
      'Supporting course delivery while giving students structured feedback and guidance during and outside class.',
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
      'Building a privacy-first edge video analytics platform for existing CCTV systems and real-time safety intelligence.',
    bullets: [
      'Focused on no-cloud, low-latency inference for industrial, port, and transit environments using RTSP stream processing and modular AI models.',
      'Built around dashboard visualization, safety / hazard detection, Jetson and Raspberry Pi deployment, and early pilot and go-to-market work.',
    ],
    skills: ['Vision Analytics', 'Edge AI', 'Startup Leadership', 'Business Development'],
    href: 'https://dhi-tech.com',
  },
  {
    org: 'VMukti Solutions',
    role: 'R&D Intern -> AI Solutions Developer',
    period: 'Jul 2021 - Jan 2025',
    location: 'Ahmedabad, India',
    mode: 'Industry',
    logo: '/logos/vmukti.png',
    summary:
      'Worked on scalable cloud VMS systems, edge AI camera software, intelligent video analytics, anomaly detection, and large-scale deployment pipelines.',
    bullets: [
      'Built production-ready C++ / ONNX inference systems, achieved 50-70% latency reduction, and delivered 60-80% model-size reduction with 2-5x faster inference.',
      'Integrated GenAI video-forensics workflows with more than 95% precision and supported analytics across 10K+ IoT cameras with sub-second latency pipelines.',
    ],
    skills: ['C++', 'ONNX', 'Python', 'Video Analytics', 'Deployment', 'Edge AI'],
    href: 'https://www.vmukti.com',
  },
  {
    org: 'Adiance Technologies Pvt. Ltd.',
    role: 'Team Lead',
    period: 'Jan 2025 - Jul 2025',
    location: 'Ahmedabad, India',
    mode: 'Industry',
    logo: '/logos/adiance.png',
    summary:
      'Led work on edge AI CCTV products and deployment pipelines for surveillance environments.',
    bullets: [
      'Architected and deployed Florence-2 and TimeSformer pipelines for sub-second real-time activity tracking on edge video.',
      'Cut authentication latency by 40% via C++ ONNXRuntime face verification and collaborated with stakeholders in 20+ countries on deployment constraints.',
    ],
    skills: ['Edge AI', 'ONNXRuntime', 'Computer Vision', 'Product Delivery'],
  },
  {
    org: 'Indian Space Research Organisation (ISRO)',
    role: 'Machine Learning Researcher',
    period: 'Jan 2025 - Apr 2025',
    location: 'Ahmedabad, India',
    mode: 'Research',
    logo: '/logos/isro.png',
    summary:
      'Built an offline-capable multilingual email-security pipeline combining OCR, transformer-based analysis, and privacy-preserving processing.',
    bullets: [
      'Worked on malicious content detection, emotional tone detection, attachment analysis, and multilingual email understanding without cloud upload.',
      'Reached 98% accuracy in one reported version and reduced false positives by about 70% versus a rule-based baseline.',
    ],
    skills: ['OCR', 'BERT', 'RoBERTa', 'Python', 'Text Classification'],
  },
  {
    org: 'Indian Institute of Technology Bombay',
    role: 'Deep Learning Researcher',
    period: 'Jul 2024 - Aug 2024',
    location: 'Mumbai, India',
    mode: 'Research',
    logo: '/logos/iitb.png',
    summary:
      'Researched intrusion detection in IoMT networks with deep learning and reinforcement learning.',
    bullets: [
      'Worked on a 77 GB dataset and improved detection accuracy to 98% in the current resume version.',
      'Experimented with Random Forest, CNN, and Kolmogorov-Arnold Networks while handling class imbalance and training / inference efficiency.',
    ],
    skills: ['Reinforcement Learning', 'Deep Learning', 'Cybersecurity', 'Algorithm Optimization'],
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
      'This internship became the foundation for the later metasurface publication presented at CASML 2024.',
    ],
    skills: ['Nanotechnology', 'Metamaterials', 'Design Research'],
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
      'Managed the club GitHub repositories and strengthened the campus coding culture.',
    ],
    skills: ['Mentoring', 'GitHub', 'Community Building', 'Leadership'],
    href: 'https://aspdc.tech/team',
  },
];

export const publication = {
  title: 'Vision Transformer for Accelerated Design of Very Low-frequency Metasurface Absorber',
  period: '2024',
  venue: 'CASML 2024, IISc Bangalore',
  summary:
    'Applied a Vision Transformer architecture to optimize metasurface absorber design and reduced training time by 40%.',
  tags: ['Vision Transformers', 'Research', 'Metasurface Design', 'Image Regression'],
  href: 'https://github.com/Dv04/Vision_Transformer',
};

export const awards: AwardEntry[] = [
  {
    title: '1st Place, E-Yantra Robotics Workshop',
    issuer: 'IIT Bombay',
    period: 'Dec 2022',
    description:
      'Designed and programmed robotic systems / robotic arms, demonstrating robotics, embedded problem-solving, and teamwork.',
  },
  {
    title: 'Winner, AU-IQM Hackathon',
    issuer: 'IQM Corporations',
    period: 'Nov 2022',
    description:
      'Built an AI / ML solution for data classification and placed 1st out of 50+ teams.',
  },
];

export const educationEntries: EducationEntry[] = [
  {
    school: 'Rice University',
    degree: 'Master of Computer Science (AI focus)',
    period: 'Aug 2025 - Expected Dec 2026',
    location: 'Houston, TX',
    logo: '/logos/rice.png',
    details: ['Current GPA: 3.89/4.0'],
  },
  {
    school: 'Adani University',
    degree: 'B.Eng. in Computer Science and Engineering (AI-ML)',
    period: 'Sep 2021 - Apr 2025',
    location: 'Ahmedabad, India',
    logo: '/logos/adaniuni.png',
    details: ['CPI: 9.34/10.00', 'SPI: 10.00/10.00 in the 8th semester'],
  },
];

export const educationNotes = [
  'Earlier academic background includes NIOS high school in Physics, Chemistry, and Math.',
  '10th board background: Shreyas Foundation, 96.47 PR / A2 grade.',
];

export const projects: ProjectEntry[] = [
  {
    title: 'DP-accurate DAU/MAU Counter Under Deletions',
    org: 'Rice University',
    period: 'Sep 2025 - Dec 2025',
    category: 'Data & Privacy',
    summary:
      'Deletion-aware distinct counting for privacy-sensitive analytics and compliance-heavy measurement.',
    bullets: [
      'Designed a deletion-aware pipeline using KMV sketches, tombstone propagation, and RDP accounting for accurate DAU/MAU measurement after deletion events.',
      'The work centered on correctness, auditability, and practical GDPR-compliant analytics.',
    ],
    tags: ['Python', 'KMV Sketches', 'RDP', 'Privacy Analytics', 'SQL', 'Backend Engineering'],
    repo: 'https://github.com/Dv04/DAU-MAU_counter',
  },
  {
    title: 'Editability and Faithfulness Metric for FEVER',
    org: 'Rice University',
    period: 'Sep 2025 - Dec 2025',
    category: 'Research',
    summary:
      'LLM evaluation work focused on editability-faithfulness tradeoffs on FEVER-style claims.',
    bullets: [
      'Benchmarked GPT-2 and ROME edits across valid examples, comparing target and control flips to quantify whether edits remained localized and reliable.',
      'The evaluation was built to stay measurable, reproducible, and easy to interpret.',
    ],
    tags: ['GPT-2', 'ROME', 'LLM Evaluation', 'NLP', 'Transformers', 'Experimental Design'],
    repo: 'https://github.com/Dv04/ef_editability',
  },
  {
    title: 'Activity Identification and Triggering System',
    org: 'Ahmedabad Research Project',
    period: 'Jan 2025 - Apr 2025',
    category: 'Edge AI',
    summary:
      'Real-time video activity detection and event-triggering platform for surveillance-style streams.',
    bullets: [
      'Built an end-to-end pipeline with YOLOv11, TimeSformer, FastAPI, React, and WebSockets for live inference, configurable thresholds, and dashboard monitoring.',
      'Reached about 95% validation accuracy and was shaped for operational low-latency use cases.',
    ],
    tags: ['YOLOv11', 'TimeSformer', 'FastAPI', 'React', 'WebSockets', 'Edge AI'],
    status: 'No public repo',
  },
  {
    title: 'Face Recognition Pipeline',
    org: 'VMukti / Adiance',
    period: '2024 - 2025',
    category: 'Edge AI',
    summary:
      'Face verification pipeline built for practical edge deployment and runtime stability.',
    bullets: [
      'Worked with RetinaFace detection, ViT embeddings, ONNX / ONNXRuntime inference, CVLFace / AdaFace migration, and FRVT-aligned verification goals.',
      'Focused on low FMR / low FNMR targets, C++ deployment constraints, and deployable runtime behavior.',
    ],
    tags: ['RetinaFace', 'ViT Embeddings', 'ONNX', 'ONNXRuntime', 'C++', 'Computer Vision'],
    status: 'Private work',
  },
  {
    title: 'Live Video Analytics with Florence-2 and SAM',
    org: 'VMukti / Adiance',
    period: '2025',
    category: 'Edge AI',
    summary:
      'Interactive live-stream intelligence with multimodal video understanding components.',
    bullets: [
      'Implemented real-time pipelines for activity tracking, person tracking, object tracking, and live feed summarization.',
      'Built around Florence-2 and SAM-style components in a deployable analytics flow for CCTV and edge environments.',
    ],
    tags: ['Florence-2', 'SAM', 'Video Analytics', 'Tracking', 'Multimodal AI', 'Python'],
    status: 'Private work',
  },
  {
    title: 'Vision Transformer for Accelerated Design of Very Low-frequency Metasurface Absorber',
    org: 'Adani University',
    period: 'Sep 2023 - Sep 2024',
    category: 'Research',
    summary:
      'Research project combining transformers with materials / physics design optimization.',
    bullets: [
      'Used Vision Transformer style modeling for image regression on metasurface absorber data and improved design exploration over CNN-like baselines.',
      'Reduced training time by about 40% and later presented the work at CASML 2024, IISc Bangalore.',
    ],
    tags: ['Vision Transformers', 'Image Regression', 'Research', 'Python', 'CNN', 'Publication'],
    repo: 'https://github.com/Dv04/Vision_Transformer',
  },
  {
    title: 'GUI-Based Machine Learning Model for Interactive Learning',
    org: 'Adani University',
    period: 'May 2023 - Aug 2024',
    category: 'Product',
    summary:
      'Interactive educational ML platform aimed at non-expert users.',
    bullets: [
      'Focused on GUI development, accessibility, and making machine learning easier to explore in a classroom context.',
      'It also reflects usability work and product-minded development for educational software.',
    ],
    tags: ['Machine Learning', 'GUI Development', 'Educational Tech', 'Python', 'Accessibility'],
    repo: 'https://github.com/LutionsLab/Predictor',
  },
  {
    title: 'Deep Learning-based IoT Security Model',
    org: 'Indian Institute of Technology Bombay',
    period: 'Jul 2024',
    category: 'Research',
    summary:
      'Intrusion-detection work in an IoMT / IoT security setting.',
    bullets: [
      'Optimized Random Forest and CNN approaches while also exploring hyperparameter tuning, ensemble ideas, and broader efficiency concerns.',
      'Part of the larger IIT Bombay research thread around cybersecurity, anomaly detection, and real-world security data.',
    ],
    tags: ['Cybersecurity', 'IoMT', 'Random Forest', 'CNN', 'Deep Learning'],
    repo: 'https://github.com/Dv04/GraphKAN',
  },
  {
    title: 'Text Detector for 16-Segment Displays',
    org: 'VMukti Solutions',
    period: 'Jan 2024 - Apr 2024',
    category: 'Edge AI',
    summary:
      'Industrial OCR project for noisy 16-segment display text extraction.',
    bullets: [
      'Used OpenCV, EasyOCR, and Flask to support real-time text detection from images and videos.',
      'It involved OCR, backend integration, and practical computer vision under messy visual conditions.',
    ],
    tags: ['OCR', 'OpenCV', 'EasyOCR', 'Flask', 'Computer Vision'],
    repo: 'https://github.com/Dv04/Text_Detector',
  },
  {
    title: 'OCR-Based Emotion Detection',
    org: 'ISRO',
    period: 'Jan 2025 - Apr 2025',
    category: 'Data & Privacy',
    summary:
      'Privacy-aware email understanding project combining OCR with language embeddings.',
    bullets: [
      'Used EasyOCR and RoBERTa embeddings to classify emotional tone in email content.',
      'It also involved privacy-sensitive multimodal processing in a government research setting.',
    ],
    tags: ['OCR', 'RoBERTa', 'Text Classification', 'Python', 'Email Intelligence'],
    repo: 'https://github.com/Dv04/Mail_Detection',
  },
  {
    title: 'Multimodal Song Emotion Classifier',
    org: 'Personal Project',
    period: 'Sep 2024',
    category: 'Research',
    summary:
      'Multimodal emotion-classification pipeline combining audio and lyric signals.',
    bullets: [
      'Used Librosa audio features plus SentenceTransformer lyric embeddings with TensorFlow.',
      'It combined feature fusion with multimodal emotion prediction.',
    ],
    tags: ['TensorFlow', 'Librosa', 'SentenceTransformer', 'Multimodal AI', 'Audio'],
    status: 'No public repo',
  },
  {
    title: 'Alumni Management System',
    org: 'Adani University',
    period: '2023',
    category: 'Product',
    summary:
      'University-focused platform for alumni records, networking, and engagement.',
    bullets: [
      'Built around backend/system design plus UX thinking for campus-scale software.',
      'It also reflects full-stack product delivery outside core AI work.',
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'Web App', 'UX'],
    repo: 'https://github.com/Dv04/Alumni_Management',
  },
  {
    title: 'Hospital Management System',
    org: 'Adani University',
    period: '2023',
    category: 'Product',
    summary:
      'Healthcare operations project focused on adoption and usability.',
    bullets: [
      'Included chatbot-style assistance to improve user interaction with HMIS workflows.',
      'The project focused on making day-to-day HMIS workflows easier to use.',
    ],
    tags: ['React', 'Node.js', 'Chatbot', 'Healthcare', 'Product Thinking'],
    repo: 'https://github.com/Dv04/Hospital_Management_System',
  },
  {
    title: 'Stock.Pi',
    org: 'Adani University',
    period: '2023',
    category: 'Product',
    summary:
      'Market sentiment analysis and chatbot system combining scraping and real-time processing.',
    bullets: [
      'Brought together scraping, sentiment analysis, and market-oriented data processing in one workflow.',
      'It also highlights finance-flavored data work, chat-based interfaces, and end-to-end delivery.',
    ],
    tags: ['Web Scraping', 'Sentiment Analysis', 'NLP', 'Python', 'Finance'],
    repo: 'https://github.com/Dv04/Stock.pi',
  },
  {
    title: 'Amazon Scrapper',
    org: 'Adani University',
    period: '2022',
    category: 'Product',
    summary:
      'Scraping-oriented backend project that reinforced practical data collection fundamentals.',
    bullets: [
      'Built a crawler and dashboard flow for Amazon product data collection.',
      'It helped build practical scraping and backend fundamentals.',
    ],
    tags: ['Node.js', 'Puppeteer', 'Web Scraping', 'React', 'MongoDB'],
    repo: 'https://github.com/Dv04/Amazon_Scrapper',
  },
];

export const projectFilters: Array<ProjectEntry['category'] | 'All'> = [
  'All',
  'Edge AI',
  'Research',
  'Data & Privacy',
  'Product',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI, ML, and Modeling',
    description:
      'Applied ML work across research, production, and evaluation.',
    items: [
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
  },
  {
    title: 'Vision, OCR, and Video Intelligence',
    description:
      'Computer vision systems for surveillance, OCR, and edge deployments.',
    items: [
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
  },
  {
    title: 'Deployment, Edge, and Infrastructure',
    description:
      'Production-oriented systems work for low-latency inference and scale.',
    items: [
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
  },
  {
    title: 'Languages and Core Engineering',
    description:
      'Languages and engineering tools used across AI and product work.',
    items: [
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
  },
  {
    title: 'Frameworks and Product Engineering',
    description:
      'Tools used for end-to-end product and application delivery.',
    items: [
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
  },
  {
    title: 'Research and Specialized Areas',
    description:
      'Research-heavy areas and adjacent technical background.',
    items: [
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
  },
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'dev04san@gmail.com',
    href: 'mailto:dev04san@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Dv04',
    href: 'https://github.com/Dv04',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dev-sanghvi-616843128',
    href: 'https://www.linkedin.com/in/dev-sanghvi-616843128/',
  },
  {
    label: 'Resume',
    value: 'Dev_Sanghvi.pdf',
    href: '/Dev_Sanghvi.pdf',
  },
];
