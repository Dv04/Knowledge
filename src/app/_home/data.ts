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
  category: 'DHI Labs' | 'Edge AI' | 'Research' | 'Data & Privacy' | 'Product';
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
  { label: 'DHI', logo: '/logos/dhi.png' },
  { label: 'VMukti', logo: '/logos/vmukti.png' },
  { label: 'ISRO', logo: '/logos/isro.png' },
  { label: 'CASML 2024' },
];

export const currentItems: CurrentItem[] = [
  {
    label: 'Building',
    title: 'DHI',
    description:
      'Co-founder. DHI turns the cameras a site already has into live video analytics, running on a small local edge node. I wrote most of the platform.',
    href: 'https://dhi-tech.com',
    hrefLabel: 'Visit DHI',
  },
  {
    label: 'Research',
    title: 'DHI Labs',
    description:
      'A 12-product applied research program: one repo per product, tests against synthetic ground truth, and results published with their misses.',
    href: 'https://dhi-tech.com/labs/',
    hrefLabel: 'See DHI Labs',
  },
  {
    label: 'Recently',
    title: 'Rice University',
    description:
      'Finished a Master of Computer Science (AI) in August 2026, then spent the summer building DHI in Rice\'s Summer Venture Studio.',
  },
];

export const roleFits = [
  'AI Engineer',
  'Edge AI Engineer',
  'Computer Vision Engineer',
  'Inference / Deployment Engineer',
  'Applied AI / Production ML',
  'Founding Engineer',
  'Contract: AI automation, agents, MVPs',
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
    value: '31',
    label: 'configurable video analytics use cases on 12 detector engines in the DHI platform',
  },
  {
    value: '710 MB',
    label: 'memory for six live cameras on an 8 GB edge GPU, down from about 3.4 GB',
  },
  {
    value: '10K+',
    label: 'IoT cameras reached by deployed analytics across large surveillance environments',
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
];

export const featuredSystems: FeaturedSystem[] = [
  {
    id: 'dhi',
    label: 'DHI',
    title: 'Safety analytics that run next to the cameras a site already has',
    period: 'Nov 2025 - Present',
    summary:
      'My company. The platform turns ordinary RTSP/ONVIF camera feeds into live alerts on a small local edge node.',
    details: [
      'Video analytics engine in Python and FastAPI: 31 configurable use cases, including license plate recognition, long-term re-identification, intrusion, loitering and tailgating, on 12 detector engines.',
      'Designed the multi-camera inference pipeline on a shared TensorRT context and shared-memory frame buffer: six live cameras in 710 MB on an 8 GB edge GPU, down from about 3.4 GB.',
      'Multi-tenant cloud dashboard in React and TypeScript on Cloudflare Workers and D1, with live alerts and webhooks. Events queue on the edge node and replay if the connection drops.',
    ],
    metricValue: '31 use cases',
    metricLabel: 'on 12 detector engines',
    stack: ['Python', 'FastAPI', 'TensorRT', 'GStreamer', 'React', 'Cloudflare Workers', 'D1'],
    diagram: ['Existing cameras', 'Shared TensorRT inference', 'Rules and alerts', 'Cloud dashboard'],
    previewTitle: 'The main thing I am building',
    previewCaption:
      'Most of what I have learned about edge inference, product and selling ends up here.',
    href: 'https://dhi-tech.com',
    hrefLabel: 'DHI',
  },
  {
    id: 'labs',
    label: 'DHI Labs',
    title: 'A 12-product research program, each result published with its limits',
    period: '2026',
    summary:
      'Standalone engines that plug into any detector: scene graphs, cross-camera identity, open-vocabulary detection, occlusion-aware counting, predictive alerting and more.',
    details: [
      'Edge scene graphs: 2.4 ms p50 per frame on-device; the learned relation head scores R@20 0.500 against 0.220 for a frequency baseline on Visual Genome.',
      'Cross-camera identity memory: zero wrong links across 7 cameras and 313 people on WILDTRACK, because it would rather leave a link out than guess.',
      'Continual open-vocabulary detection: add a class on-device from a text prompt or a few crops, with no retraining and zero forgetting on COCO.',
    ],
    metricValue: '12 products',
    metricLabel: 'one tested repo each',
    stack: ['PyTorch', 'TensorRT', 'Conformal prediction', 'Scene graphs', 'Re-identification'],
    diagram: ['Any detector', 'Standalone engine', 'Tested against ground truth', 'Published with limits'],
    previewTitle: 'Research that has to run on the box',
    previewCaption:
      'Every engine has to fit the same small edge node the product runs on, and every number comes with what it does not show.',
    href: 'https://dhi-tech.com/labs/',
    hrefLabel: 'DHI Labs',
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
];

export const experienceEntries: ExperienceEntry[] = [
  {
    org: 'DHI Technologies, Inc.',
    role: 'Co-Founder',
    period: 'Nov 2025 - Present',
    location: 'Houston, TX',
    mode: 'Startup',
    logo: '/logos/dhi.png',
    summary:
      'Building DHI, video analytics that run on a local edge node next to the cameras a site already has. I wrote most of the platform and run go-to-market.',
    bullets: [
      'Built the video analytics engine (Python, FastAPI): 31 configurable use cases, including license plates, re-identification and intrusion, on 12 detector engines.',
      'Designed the multi-camera inference pipeline: six live cameras in 710 MB on an 8 GB edge GPU, down from about 3.4 GB.',
      'Built the multi-tenant cloud dashboard (React, TypeScript, Cloudflare Workers, D1) and lead DHI Labs, the 12-product research program.',
    ],
    skills: ['TensorRT', 'FastAPI', 'React', 'Cloudflare Workers', 'Edge AI', 'Startup Leadership'],
    href: 'https://dhi-tech.com',
  },
  {
    org: 'Rice Summer Venture Studio (Liu Idea Lab)',
    role: 'Founder, DHI',
    period: 'May 2026 - Aug 2026',
    location: 'Houston, TX',
    mode: 'Accelerator',
    logo: '/logos/rice.png',
    summary:
      'Rice\'s summer accelerator. DHI was selected for the cohort with a $15,000 award, and I spent the summer building it with my two co-founders.',
    bullets: [
      'Worked on DHI\'s product and go-to-market through the program, alongside the engineering.',
    ],
    skills: ['Go-to-market', 'Product', 'Startup Leadership'],
  },
  {
    org: 'Rice University School of Engineering and Computing',
    role: 'Teaching Assistant',
    period: 'Jan 2026 - May 2026',
    location: 'Houston, TX',
    mode: 'Academic',
    logo: '/logos/rice.png',
    summary:
      'Supported course delivery and gave students structured feedback and guidance during and outside class.',
    bullets: [
      'Strengthened constructive feedback and professional communication through direct student support.',
    ],
    skills: ['Constructive Feedback', 'Professional Communication', 'Teaching'],
  },
  {
    org: 'VMukti Solutions',
    role: 'AI Solutions Developer',
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
      'Reached 98% accuracy on internal multilingual samples and about 70% fewer false positives than the rule-based baseline.',
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
      'Trained intrusion detection models on a 77 GB dataset, reaching 98% detection accuracy.',
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
    title: 'Summer Venture Studio cohort, $15,000 award',
    issuer: 'Rice University, Liu Idea Lab',
    period: 'May 2026',
    description:
      'DHI was selected for Rice\'s summer accelerator, which ran from May 18 to August 7, 2026.',
  },
  {
    title: 'Semifinalist (top 27), AI Venture Velocity Challenge',
    issuer: 'Texas A&M Mays Business School',
    period: '2026',
    description:
      'DHI reached the semifinal round and submitted its stage-two experiment logs.',
  },
  {
    title: 'Two DHI whitepapers',
    issuer: 'DHI Labs',
    period: 'Jul 2026',
    description:
      'Privacy-native edge video analytics, and a hybrid edge-cloud VMS architecture.',
  },
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
    period: 'Aug 2025 - Aug 2026',
    location: 'Houston, TX',
    logo: '/logos/rice.png',
    details: [
      'GPA: 3.69/4.0',
      'Coursework: Deep Learning, Deep Learning for Vision and Language, NLP, Machine Learning with Graphs, Probabilistic Algorithms, Parallel Computing',
      'Teaching Assistant, Spring 2026',
    ],
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
    title: 'Edge Scene Graphs',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'A layer between any detector and an alerting system that turns boxes into a queryable scene graph and explainable alerts.',
    bullets: [
      'Spatial and temporal predicates, an interval-compressed graph, and a rule engine whose alerts point back to the evidence.',
      '2.4 ms p50 per frame on-device; learned relation head R@20 0.500 against 0.220 for a frequency baseline on Visual Genome.',
    ],
    tags: ['Scene Graphs', 'Rule Engine', 'Visual Genome', 'TensorRT', 'Python'],
    status: 'Private work',
  },
  {
    title: 'Cross-Camera Identity Memory',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'Links people across cameras and answers questions like where someone went, from any tracker\'s event stream.',
    bullets: [
      'Prefers leaving a link out to making a wrong one, and keeps a bounded memory that survives restarts.',
      'Zero wrong links across 7 cameras and 313 people on WILDTRACK; ships with a Frigate adapter.',
    ],
    tags: ['Multi-camera', 'Re-identification', 'SQLite', 'WILDTRACK', 'Frigate'],
    status: 'Private work',
  },
  {
    title: 'Continual Open-Vocabulary Detection',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'Add a new class on-device from a text prompt or a handful of image crops, with no gradient updates.',
    bullets: [
      'A gate replays the site\'s evaluation set before a new class goes live, and classes can be rolled back.',
      'On COCO val2017, 4 of 6 added classes went live with zero forgetting of existing classes.',
    ],
    tags: ['Open Vocabulary', 'CLIP', 'Continual Learning', 'COCO'],
    status: 'Private work',
  },
  {
    title: 'Occlusion-Aware Counting',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'People counts that correct for who the detector cannot see, with calibrated intervals instead of a single number.',
    bullets: [
      'Visibility estimation, detectability calibration and conformal 90% count intervals.',
      'MAE 2.46 against 3.73 for naive counting in heavy crowds on synthetic ground truth, then tested on CrowdHuman.',
    ],
    tags: ['Counting', 'Conformal Prediction', 'CrowdHuman', 'Python'],
    status: 'Private work',
  },
  {
    title: 'Predictive Alerting with a Falsification Ledger',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'Forecasts incidents a few seconds ahead, explains each forecast by replaying it with a cause removed, and scores every forecast against what happened.',
    bullets: [
      'A 210-scenario battery run through the production code, reported per alert type, including the weak one.',
      '8% false alarms across the no-incident scenarios.',
    ],
    tags: ['Forecasting', 'Counterfactuals', 'Evaluation', 'Python'],
    status: 'Private work',
  },
  {
    title: 'Fixed-Camera 3D',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'Calibrates a fixed camera from people walking past, with no calibration target, then reports distance, speed, height and density.',
    bullets: [
      '0.16 m ground-position RMSE for a 5 m, 30 degree mount on synthetic ground truth.',
    ],
    tags: ['Camera Calibration', '3D Geometry', 'Python'],
    status: 'Private work',
  },
  {
    title: 'Thermal Perception',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'A thermal perception engine that needs no training, plus the data and pretraining tooling for thermal models.',
    bullets: [
      'Masked-autoencoder pretraining pilot on real LWIR images (LLVIP), reported as training mechanics rather than accuracy.',
    ],
    tags: ['Thermal', 'MAE Pretraining', 'ViT', 'LLVIP'],
    status: 'Private work',
  },
  {
    title: 'Prompt2Model',
    org: 'DHI Labs',
    period: '2026',
    category: 'DHI Labs',
    summary:
      'Turns a plain-language request into a trained, compressed model ready for an edge device.',
    bullets: [
      'Planner, training, ONNX export and evaluation in one pipeline.',
      'Refuses to ship a compressed model that falls below its accuracy floor and keeps the uncompressed one instead.',
    ],
    tags: ['LLM Planner', 'Model Compression', 'ONNX'],
    status: 'Private work',
  },
  {
    title: 'Collision-Risk Forecasting with Spatiotemporal Graphs',
    org: 'Rice University (team of 3)',
    period: 'Spring 2026',
    category: 'Research',
    summary:
      'Forecasts calibrated collision probability and time to event for autonomous driving, instead of raw trajectories.',
    bullets: [
      'Led the graph engine and models: kNN, radius and time-to-event graph builders, ST-GNN (GAT + GRU) and graph transformer encoders.',
      'Multi-head decoder for risk and time to event, plus attribution tools to explain predictions.',
    ],
    tags: ['GNNs', 'PyTorch', 'Hydra', 'Autonomous Driving', 'Calibration'],
    repo: 'https://github.com/Dv04/Spatiotemporal_Interaction_Graphs_Forecasting',
  },
  {
    title: 'MemFaith: Context Faithfulness in Long-Context LLMs',
    org: 'Rice University',
    period: 'Spring 2026',
    category: 'Research',
    summary:
      'Measures how much each chunk of context drives a model\'s answer, by leaving chunks out one at a time.',
    bullets: [
      'Deterministic chunk ablation on FEVER-style and HotpotQA-style examples, with a Hugging Face Transformers backend.',
    ],
    tags: ['LLM Evaluation', 'FEVER', 'HotpotQA', 'Transformers'],
    repo: 'https://github.com/Dv04/Memfaith',
  },
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
  'DHI Labs',
  'Edge AI',
  'Research',
  'Data & Privacy',
  'Product',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Machine Learning and Modeling',
    description: 'Training, evaluating and calibrating models, from vision to language.',
    items: [
      'PyTorch',
      'TensorFlow / Keras',
      'scikit-learn',
      'Hugging Face Transformers',
      'Vision Transformers',
      'BERT / RoBERTa',
      'Large Language Models',
      'Graph Neural Networks',
      'Reinforcement Learning',
      'Conformal Prediction',
      'Differential Privacy',
      'Anomaly Detection',
      'Multimodal AI',
      'Model Evaluation',
    ],
  },
  {
    title: 'Computer Vision and Video',
    description: 'Detection, tracking and understanding on live camera streams.',
    items: [
      'Real-time Video Analytics',
      'Object Detection (YOLO)',
      'Object and Person Tracking',
      'Re-identification',
      'Face Recognition (RetinaFace)',
      'Scene Graphs',
      'Florence-2',
      'TimeSformer',
      'SAM',
      'OpenCV',
      'OCR (Tesseract, EasyOCR)',
    ],
  },
  {
    title: 'Edge Inference and Deployment',
    description: 'Getting models to run fast on small hardware and keep running.',
    items: [
      'TensorRT',
      'ONNX / ONNX Runtime',
      'QAT / PTQ Quantization',
      'NVIDIA Jetson',
      'GStreamer',
      'MediaMTX',
      'RTSP / ONVIF',
      'Docker',
      'Linux',
      'Cloud VMS',
    ],
  },
  {
    title: 'Backend, Web and Cloud',
    description: 'The APIs, dashboards and cloud pieces around the models.',
    items: [
      'FastAPI',
      'Flask',
      'Node.js',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Cloudflare Workers',
      'Cloudflare D1',
      'REST APIs',
      'PostgreSQL',
      'SQLite',
      'MongoDB',
      'Web Scraping',
    ],
  },
  {
    title: 'Languages and Tools',
    description: 'What I write the code in, and what I analyze data with.',
    items: [
      'Python',
      'C++',
      'C',
      'TypeScript',
      'JavaScript',
      'SQL',
      'Go',
      'Java',
      'MATLAB',
      'Git',
      'NumPy',
      'Pandas',
      'Dask',
    ],
  },
  {
    title: 'Research Areas',
    description: 'Topics I have published on or researched.',
    items: [
      'Edge AI',
      'Privacy-preserving Analytics',
      'LLM Evaluation',
      'IoMT Security',
      'Metamaterials',
      'Nanotechnology',
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
