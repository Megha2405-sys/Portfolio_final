export const profile = {
  name: 'Harshini Meghana Kotha',
  university: 'SRM University–Andhra Pradesh',
  degree: 'Bachelor of Technology in Data Science',
  period: '2024–2028',
  phone: '+91 63019 90869',
  email: '',
  linkedin: 'https://www.linkedin.com/in/kothameghana2405/',
  github: 'https://github.com/Mk230507',
  portfolio: 'https://portfolio-final-cyan-rho.vercel.app/',
  summary: 'Aspiring Software Development Engineer and B.Tech Data Science student at SRM University–Andhra Pradesh, with hands-on project experience developing Python-based applications across backend systems, computer vision, and machine learning. Familiar with API-driven services, interactive data applications, and image-processing workflows. Building a foundation in programming, database management, data preprocessing, model development, and Git-based collaboration.'
};

export const skillGroups = [
  { title: 'Programming', description: 'Languages for problem solving and application development.', tags: ['C', 'C++', 'Python', 'Java', 'JavaScript'] },
  { title: 'Backend & APIs', description: 'Building services and connecting application components.', tags: ['Node.js', 'Flask', 'FastAPI', 'REST APIs', 'WebSockets'] },
  { title: 'Data & Databases', description: 'Working with structured information and data workflows.', tags: ['MySQL', 'Database management', 'Pandas', 'NumPy'] },
  { title: 'Machine Learning', description: 'Exploring model development and computer vision workflows.', tags: ['scikit-learn', 'OpenCV', 'Computer vision', 'Classification'] },
  { title: 'Data Practice', description: 'Preparing data and building interactive data applications.', tags: ['Data preprocessing', 'Model development', 'Streamlit'] },
  { title: 'Tools & Systems', description: 'Tools for collaboration, reproducibility, and connected devices.', tags: ['Git', 'Docker', 'VS Code', 'Arduino', 'IoT systems'] }
];

// Add verified work here. Empty entries are intentionally not presented as completed projects.
export const projects = [];

export const pipeline = [
  { title: 'Input layer', purpose: 'Receives information from a user, file, device, or another service. Defining input clearly helps the rest of a system work with predictable data.', tools: ['Python', 'Arduino', 'IoT systems'] },
  { title: 'Data processing', purpose: 'Cleans, validates, and transforms information into a useful shape before it reaches application logic or a model.', tools: ['Pandas', 'NumPy', 'OpenCV'] },
  { title: 'Backend / API', purpose: 'Provides a structured interface for application features and communicates requests and responses between components.', tools: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets'] },
  { title: 'Application logic', purpose: 'Applies the rules, model, or analysis that turns processed input into a result. The exact logic depends on the problem being solved.', tools: ['Python', 'scikit-learn', 'Computer vision'] },
  { title: 'Storage', purpose: 'Persists application information when a use case needs it. Storage is an optional part of this conceptual workflow.', tools: ['MySQL', 'Database management'] },
  { title: 'Output', purpose: 'Presents a result in a useful form, such as an API response, an interactive interface, or a data application.', tools: ['Streamlit', 'JavaScript'] }
];
