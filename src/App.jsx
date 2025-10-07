import React, { useEffect, useRef } from 'react';
import FaultyTerminal from './FaultyTerminal';

// --- A Helper Component for Reveal-on-Scroll Animation ---
// No changes needed here. It will be applied to all new sections.
const RevealSection = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('reveal-visible');
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return <div ref={ref} className="reveal">{children}</div>;
};

// --- Main App Component ---
export default function App() {
  return (
    <div style={{ backgroundColor: '#0a192f', color: '#ccd6f6', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'fixed', inset: '0px', zIndex: 0 }}>
        <FaultyTerminal 
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          mouseReact={true}
          mouseStrength={0.5}
          //curvature={1}
          pageLoadAnimation={true}
          tint="#4ade80"
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <div className="bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <About />
              <Projects />
              <Experience />
              <Education />
              <Certifications />
              <Extracurriculars />
              <Awards />
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// --- Header Component (Updated with all new links) ---
const Header = () => (
    <div className="w-full flex justify-center pt-8 sticky top-0 z-50">
        <header className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
            <nav className="flex items-center flex-wrap justify-center gap-x-4 md:gap-x-6">
                <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">About</a>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Projects</a>
                <a href="#experience" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Experience</a>
                <a href="#education" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Education</a>
                <a href="#certifications" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Certifications</a>
                <a href="#extracurriculars" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Extracurricular</a>
                <a href="#awards" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Awards</a>

                <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm md:text-base">Contact</a>
            </nav>
        </header>
    </div>
);

// --- Hero Component (No changes needed) ---
const Hero = () => (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 
        className="text-5xl md:text-7xl font-bold text-white leading-tight"
        style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3), 0 0 25px rgba(74, 222, 128, 0.2)' }}
      >
        M Vijey Arvind.
        <br />
        Data Enthusiast.
      </h1>
      <p 
        className="text-slate-300 mt-6 max-w-xl text-lg" // Increased font size
        style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}
      >
        I leverage data to build intelligent solutions for complex problems.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
          View My Work
        </a>
        <a href="#contact" className="border border-white/50 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
          Get In Touch
        </a>
      </div>
    </section>
);

// --- About Section (Improved Readability) ---
const About = () => (
  <RevealSection>
    <section id="about" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
      <p className="text-slate-300 max-w-3xl text-lg leading-relaxed"> {/* Increased font size and line height */}
        Hello! I'm a passionate and dedicated Computer Science student with a profound interest in Artificial Intelligence, Machine Learning, and Data Science. I thrive on solving complex problems, uncovering patterns in data, and turning abstract concepts into tangible, intelligent applications. My goal is to leverage technology to create impactful and efficient solutions.
      </p>
    </section>
  </RevealSection>
);

// --- Projects Section (Larger, More Elaborate Cards) ---
const Projects = () => {
  const projectData = [
    { title: "GenAI Tax Co-Pilot for Transfer Pricing Documentation", description: "Engineered a GenAI-powered application that automates the drafting of complex transfer pricing reports by using a multi-modal RAG system to synthesize structured financials, unstructured interview notes, and legal templates into a complete, formatted document.", tags: ["Python", "TensorFlow", "Scikit-learn"], liveLink: "#", codeLink: "#" },
    { title: "Smart Traffic Management System for Urban Congestion", description: "Designed an adaptive and priority based traffic managememt system in a simulated environment that can be scaled to a large scale real-life traffic scenario. Achieved a reduction of 77% in overall wait time in traffic", tags: ["Reinforcement Learning", "Fuzzy Logic", "YOLO"], liveLink: "#", codeLink: "#" },
    { title: "Symptom Checking Chatbot", description: "Developed a chatbot that helps the user identify the condition or disease based on the symptoms faced, it is aimed to accurately diagnose the medical condition.", tags: ["NLP", "Python", "Scikit-learn", "Flask", "Javascript"], liveLink: "#", codeLink: "#" },
    { title: "University Admissions Communication Portal", description: "Designed a portal for the prospective student to communicate with the existing students and the alumni during the admissions process", tags: ["", "", ""], liveLink: "#", codeLink: "#" },
    { title: "Medical Cost Prediction with Tableau", description: "Created multiple dashboards to analyse the cost of insurance across various factors using tableau. Created a linear regression model to predict the prices of medical cost", tags: ["NLP", "NLTK", "Flask"], liveLink: "#", codeLink: "#" },

  ];

  return (
    <RevealSection>
      <section id="projects" className="py-24">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"> {/* Changed grid to 1 and 2 cols for larger cards */}
          {projectData.map((proj, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-lg flex flex-col"> {/* Increased padding */}
              <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
              <p className="text-slate-400 mt-4 text-base flex-grow">{proj.description}</p> {/* Increased font size */}
              <div className="mt-6 flex flex-wrap gap-2">
                {proj.tags.map(tag => <span key={tag} className="text-sm bg-green-500/20 text-green-300 px-3 py-1 rounded-full">{tag}</span>)}
              </div>
              <div className="mt-6 flex items-center gap-6">
              </div>
            </div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
};

// --- Experience Section (Timeline Layout) ---
const Experience = () => {
  const experienceData = [
    { role: "Project Intern", company: "SGBC IIT Madras", date: "Aug 2024 - Feb 2025", description: "Semi-automated a process in fetal brain MRI, making it efficient and reliable. Currently working on interpolating sections of brain histology annotations accurately." },
    { role: "Research Intern", company: "PGIMER", date: "Feb 2024 - Apr 2024", description: "Conducted research on a medical topic with a machine learning perspective under the guidance of senior professors and scientists, focusing on predictive modeling." },
    { role: "Software Development Intern", company: "PreludeSys", date: "Jun 2023 - Jul 2023", description: "Created a comprehensive academic performance dashboard using Power BI, visualizing data for students, staff, and departments to derive actionable insights." },
    { role: "ML Intern", company: "SRIHER", date: "May 2023 - Jul 2023", description: "Developed and compared multiple ML models to predict Internet Addiction from a real-time dataset, visualizing correlations between addiction, depression, and anxiety." },
  ];

  return (
    <RevealSection>
      <section id="experience" className="py-24">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        <div className="relative border-l-2 border-slate-700 pl-10">
          {experienceData.map((exp, i) => (
            <div key={i} className="mb-12">
              <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 mt-1.5 border-4 border-slate-900"></div>
              <p className="text-slate-400 text-lg font-medium">{exp.date}</p> {/* Bolder, larger date */}
              <h3 className="text-2xl font-bold text-white mt-2">{exp.role} - <span className="text-green-400">{exp.company}</span></h3>
              <p className="text-slate-300 mt-3 text-base leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
};

// --- Education Section (Timeline Layout) ---
const Education = () => {
    const educationData = [
        { school: "Sri Ramachandra Higher Education and Research", degree: "B.Tech in Computer Science and Medical Engineering", date: "Graduating: Jul 2026", grade: "CGPA: 8.8 (Present)" },
        { school: "Velammal Bodhi Campus", degree: "12th Grade", date: "Graduated: Jul 2022", grade: "Grade: 84%" },
        { school: "The Pupil Saveetha Eco School", degree: "10th Grade", date: "Graduated: Jun 2020", grade: "Grade: 87%" },
    ];
    return (
    <RevealSection>
      <section id="education" className="py-24">
        <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
        <div className="relative border-l-2 border-slate-700 pl-10">
          {educationData.map((edu, i) => (
            <div key={i} className="mb-12">
              <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 mt-1.5 border-4 border-slate-900"></div>
              <p className="text-slate-400 text-lg font-medium">{edu.date}</p>
              <h3 className="text-2xl font-bold text-white mt-2">{edu.school}</h3>
              <p className="text-slate-300 mt-2 text-base">{edu.degree}</p>
              <p className="text-slate-300 mt-1 text-base">{edu.grade}</p>
            </div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
};

// --- NEW: Certifications Section ---
const Certifications = () => {
    const certData = [
        { name: "Data Analytics Consulting Virtual Internship", org: "KPMG", link: "https://drive.google.com/file/d/1M2StBBRuQx5MyPSoP-bJq0p4dRMWYnRd/view" },
        { name: "Artificial Intelligence Courses", org: "Rinex & IIT Bhubaneshwar", link: "https://drive.google.com/file/d/1vM63PywsOIffLqDMYE5s-Zshc6_EkBht/view?usp=share_link" },
        { name: "Introduction to Embedded Machine Learning", org: "Coursera & Edge Impulse", link: "#" },
    ];
    return (
    <RevealSection>
      <section id="certifications" className="py-24">
        <h2 className="text-4xl font-bold text-white mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certData.map((cert, i) => (
            <a href={cert.link} key={i} className="block bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-green-400 transition-colors">
              <h3 className="text-xl font-bold text-white">{cert.name}</h3>
              <p className="text-slate-400 mt-2">Issued by: {cert.org}</p>
            </a>
          ))}
        </div>
      </section>
    </RevealSection>
  );
};

// --- Extracurriculars Section (Restructured) ---
const Extracurriculars = () => {
    const extraData = [
        { role: "Sports Secretary", org: "Sri Ramachandra Institute of Higher Education and Research", description: "Responsible for leading and organising various inter and intra university sporting events." },
        { role: "Student Venture Development Program Member", org: "Sri Ramachandra Institute of Higher Education and Research", description: "Selected one among the few teams across the university to learn and create a startup" },
        { role: "Student Council Member", org: "Sri Ramachandra Institute of Higher Education and Research", description: "Majorly representing the faculty of engineering in the university level. One among the 46 council members selected to represent the university across all the faculties." },
        { role: "Universtiy Editorial Board Member", org: "Sri Ramachandra Institute of Higher Education and Research", description: "-Responsible for aiding in the process of writing and publishing newsletters for the university" },
        { role: "Innovation and Incubation Centre - Student Member", org: "Sri Ramachandra Institute of Higher Education and Research", description: "Selected as a Student Council Member to aid in the processes of the Innovation and Incubation Center" },
        { role: "Rotaract Club Incharge", org: "Sri Ramachandra Institute of Higher Education and Research", description: "Oversaw and co-lead the rotaract club as a student council member aiding in the functioning of the club" },
        { role: "Library committee Member", org: "Sri Ramachandra Institute of Higher Education and Research", description: "Selected one among 5 from the university to oversee the central and all the dept libraries" },
        { role: "Volunteer and Centre Coordinator", org: "Bhumi NGO", description: "Volunteered in a program called 'Lakshaya' where we mentor high school students from Orphanages in shaping their career and future. Served as the centre coordinator in the orphanage I served" },

    ];
    return (
    <RevealSection>
      <section id="extracurriculars" className="py-24">
        <h2 className="text-4xl font-bold text-white mb-8">Extracurricular Activities</h2>
        <div className="space-y-8">
          {extraData.map((extra, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-white">{extra.role} - <span className="text-green-400">{extra.org}</span></h3>
              <p className="text-slate-300 mt-3 text-base leading-relaxed">{extra.description}</p>
            </div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
};

// --- NEW: Awards Section ---
const Awards = () => (
  <RevealSection>
    <section id="awards" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-8">Awards & Recognition</h2>
      <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
        <li>Founder - Chancellor Merit Cum Means Scholarship</li>
      </ul>
    </section>
  </RevealSection>
);

// --- Contact Section (With Social Links) ---
const Contact = () => (
  <RevealSection>
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-slate-300 max-w-xl mx-auto mb-8 text-lg">
        I'm currently seeking new opportunities and collaborations. My inbox is always open, so feel free to reach out!
      </p>
      <a 
        href="mailto:vijeyarvindm@gmail.com" // PLACEHOLDER: Change this to your email
        className="inline-block border border-green-400 text-green-400 font-bold py-3 px-8 rounded-full hover:bg-green-400/10 transition-colors text-lg"
      >
        Say Hello
      </a>
      <div className="mt-12 flex justify-center gap-8">
        {/* PLACEHOLDER: Replace '#' with your actual profile links */}
        <a href="https://www.linkedin.com/in/vijey-arvind-m-5925aa228/" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://github.com/Vijey31" aria-label="GitHub Profile" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="#" aria-label="Instagram Profile" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
        </a>
      </div>
    </section>
  </RevealSection>
);

// --- Footer Section ---
const Footer = () => (
  <div className="text-center py-8 text-slate-500 text-sm">
    <p>Designed & Built by M Vijey Arvind</p>
  </div>
);