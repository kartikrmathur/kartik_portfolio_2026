const portfolioData = {
  personalInfo: {
    name: 'Kartik "R" Mathur',
    title: 'Full Stack Developer',
    bio: 'I’m an Full stack developer Developer with 4+ years of industry experience, building scalable and high-performance applications. I’ve worked on multiple real-world projects, focusing on modern architectures and clean, maintainable code.\n I specialize in Android development and also build backend services using Java and Spring Boot. I enjoy solving complex problems and turning them into efficient, user-friendly solutions.\n Let’s connect and explore how we can build impactful products together.',
    email: 'kartiksmathur@gmail.com',
    phone: '+91 7014208409',
    location: 'Bangalore, India',
    github: 'https://github.com/kartikrmathur',
    linkedin: 'https://www.linkedin.com/in/kartikrmathur/',
    twitter: 'https://twitter.com/kartikdev',
    resumeLink: '/resume.pdf',
  },

  onLoop: [
    { title: 'Tum Hi Ho', artist: 'Arijit Singh', color: '#4A90D9' },
    { title: 'Apna Bana Le', artist: 'Arijit Singh', color: '#34C759' },
    { title: 'Kesariya', artist: 'Arijit Singh', color: '#B0B0B0' },
    { title: 'Kun Faya Kun', artist: 'A.R. Rahman', color: '#F5A623' },
    { title: 'Dil Se Re', artist: 'A.R. Rahman', color: '#9B59B6' },
    { title: 'Kabira', artist: 'Arijit Singh', color: '#2C3E50' },
    { title: 'Ilahi', artist: 'Arijit Singh', color: '#E74C3C' },
  ],

  timeline: [
    { company: 'Deloitte', role: 'Senior Software Engineer', year: 'Aug 2025 — Present' },
    { company: 'Tata Elxsi', role: 'Contract', year: 'Sep 2024 — Aug 2025' },
    { company: 'Jio', role: 'Software Developer', year: 'Mar 2022 — Sep 2024' },
    { company: 'Celebal Technologies', role: 'Trainee turn FTE', year: 'Jul 2021 — Mar 2022' },
    { company: 'Baltech', role: 'Internship', year: 'May 2018 — Aug 2018' },
    { company: 'CETPA Infotech', role: 'Internship', year: 'Jan 2018 — Apr 2018' },
  ],

  findMe: [
    { platform: 'email', handle: 'kartiksmathur@gmail.com', link: 'mailto:kartiksmathur@gmail.com' },
    { platform: 'github', handle: 'kartikrmathur', link: 'https://github.com/kartikrmathur' },
    { platform: 'linkedin', handle: 'kartikrmathur', link: 'https://www.linkedin.com/in/kartikrmathur/' },
    { platform: 'twitter', handle: '@mainchaaraacter', link: 'https://twitter.com/mainchaaraacter' },
  ],

  skills: [
    { name: 'React', icon: 'FaReact', category: 'Frontend', level: 90 },
    { name: 'JavaScript', icon: 'SiJavascript', category: 'Frontend', level: 85 },
    { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend', level: 75 },
    { name: 'HTML5', icon: 'FaHtml5', category: 'Frontend', level: 95 },
    { name: 'CSS3', icon: 'FaCss3Alt', category: 'Frontend', level: 90 },
    { name: 'Redux', icon: 'SiRedux', category: 'Frontend', level: 80 },
    { name: 'Node.js', icon: 'FaNodeJs', category: 'Backend', level: 85 },
    { name: 'Express', icon: 'SiExpress', category: 'Backend', level: 80 },
    { name: 'MongoDB', icon: 'SiMongodb', category: 'Backend', level: 78 },
    { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Backend', level: 72 },
    { name: 'Python', icon: 'FaPython', category: 'Backend', level: 70 },
    { name: 'Git', icon: 'FaGitAlt', category: 'Tools & Others', level: 88 },
    { name: 'Docker', icon: 'FaDocker', category: 'Tools & Others', level: 65 },
    { name: 'AWS', icon: 'FaAws', category: 'Tools & Others', level: 60 },
    { name: 'Figma', icon: 'FaFigma', category: 'Tools & Others', level: 70 },
  ],

  projects: [
    {
      id: 1,
      title: 'Musotion',
      description:
        'An AI-powered platform that plays music according to the user\'s mood and facial expressions, captured in real-time via the device camera.',
      techStack: ['Python', 'OpenCV', 'AI/ML', 'MediaPipe'],
      githubLink: 'https://github.com/kartikrmathur/Musotion',
      liveLink: 'https://github.com/kartikrmathur/Musotion',
      category: 'AI / ML',
    },
    {
      id: 2,
      title: 'JournalApp',
      description:
        'A clean and simple journal application for Android that lets users create, edit, and manage daily journal entries.',
      techStack: ['Java', 'Android SDK', 'Room DB', 'Material UI'],
      githubLink: 'https://github.com/kartikrmathur/JournalApp',
      liveLink: 'https://github.com/kartikrmathur/JournalApp',
      category: 'Mobile',
    },
    {
      id: 3,
      title: 'NewsApp',
      description:
        'An Android news app that fetches articles from an API, displays them in a RecyclerView with card layouts, and includes a search feature.',
      techStack: ['Java', 'REST API', 'RecyclerView', 'Android SDK'],
      githubLink: 'https://github.com/kartikrmathur/NewsApp',
      liveLink: 'https://github.com/kartikrmathur/NewsApp',
      category: 'Mobile',
    },
    {
      id: 4,
      title: 'KhanaKhazana',
      description:
        'A Swift iOS application to help restaurants streamline order placement and delivery, providing a user-friendly interface for managing orders.',
      techStack: ['Swift', 'iOS', 'UIKit', 'CoreData'],
      githubLink: 'https://github.com/kartikrmathur/KhanaKhazanaRestaurentSwiftProject',
      liveLink: 'https://github.com/kartikrmathur/KhanaKhazanaRestaurentSwiftProject',
      category: 'Mobile',
    },
    {
      id: 5,
      title: 'PupilMesh',
      description:
        'A Kotlin-based Android application focused on modern UI patterns and clean architecture principles.',
      techStack: ['Kotlin', 'Android SDK', 'Jetpack', 'Material Design'],
      githubLink: 'https://github.com/kartikrmathur/PupilMesh',
      liveLink: 'https://github.com/kartikrmathur/PupilMesh',
      category: 'Mobile',
    },
    {
      id: 6,
      title: 'WeatherBikeRideApp',
      description:
        'An Android app that provides real-time weather data to help cyclists plan their rides with accurate forecasts.',
      techStack: ['Java', 'Weather API', 'Android SDK', 'JSON'],
      githubLink: 'https://github.com/kartikrmathur/WeatherBikeRideApp',
      liveLink: 'https://github.com/kartikrmathur/WeatherBikeRideApp',
      category: 'Mobile',
    },
    {
      id: 7,
      title: 'NotesTakerApp',
      description:
        'A note-taking Android application with create, read, update, and delete functionality for managing personal notes.',
      techStack: ['Java', 'Android SDK', 'SQLite', 'Material UI'],
      githubLink: 'https://github.com/kartikrmathur/NotesTakerApp',
      liveLink: 'https://github.com/kartikrmathur/NotesTakerApp',
      category: 'Mobile',
    },
    {
      id: 8,
      title: 'Affirmations App',
      description:
        'A daily affirmation app built with Kotlin that displays motivational quotes and positive affirmations to the user.',
      techStack: ['Kotlin', 'Android SDK', 'RecyclerView', 'Material Design'],
      githubLink: 'https://github.com/kartikrmathur/affirmations_app',
      liveLink: 'https://github.com/kartikrmathur/affirmations_app',
      category: 'Mobile',
    },
    {
      id: 9,
      title: 'Ferries Wheels Films',
      description:
        'A JavaScript-based web project for browsing and exploring a curated collection of films with a clean interface.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'DOM API'],
      githubLink: 'https://github.com/kartikrmathur/ferries_wheels_films',
      liveLink: 'https://github.com/kartikrmathur/ferries_wheels_films',
      category: 'Web',
    },
    {
      id: 10,
      title: 'ProgressBar.py',
      description:
        'A Python utility that generates animated progress bars for ad-spot tracking and visualization in the terminal.',
      techStack: ['Python', 'CLI', 'Scripting'],
      githubLink: 'https://github.com/kartikrmathur/ProgressBar.py',
      liveLink: 'https://github.com/kartikrmathur/ProgressBar.py',
      category: 'Web',
    },
  ],
};

export default portfolioData;
