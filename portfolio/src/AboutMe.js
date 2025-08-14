import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import profileImage from "./media/profile-img.jpg";

import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const experiences = [
    {
    title: "Full-Stack Developer Intern: Yulcom Technologies",
    location: "Montréal, Canada",
    time: "May 2025 - July 2025",
    reponsibilites: [
      "Developed and integrated Django REST APIs with PostgreSQL for healthcare data management.",
      "Built and optimized React components for patient records and appointment scheduling.",
      "Customized and extended OpenMRS modules to support new healthcare workflows.",
    ]
  },
  {
    title: "Computer Science Tutor: Vanier College",
    location: "Montréal, Canada",
    time: "September 2023 - August 2025",
    reponsibilites: [
      "Offered Computer Science and Math tutoring to support student autonomy and improved grades.",
      "Demonstrated patience and empathy while tutoring, and propose strategies to help students better comprehend problem solving effectively",
      "Recieved CRLA Level 1 Tutor Certification, ensuring adherence to best practices in tutoring and student support.",
    ]
  },
  {
    title: "Software Engineer: LiteBreeze InfoTech",
    location: "Kochi, India",
    time: "June 2022 - August 2023",
    reponsibilites: [
      "Spearheaded the development of an innovative browser-based video editing tool leveraging FFmpeg, which reduced video editing and processing times by over 50%, driving efficiency for potential clients.",
      "Streamlined the ReactJS developer recruitment process, enhancing candidate success rates by 40% through evaluation and optimization strategies.",
      "Contributed as a front-end UI/UX engineer, delivering design and technical support to enhance user experiences and align interfaces with client expectations."
    ]
  },
  {
    title: "Software Engineer: TeroNext Consulting",
    location: "Trivandrum, India",
    time: "January 2020 - January 2022",
    reponsibilites: [
      "Contributed to creating and developing UIs as a SaaS solution for Yembo Inc, a US-based client.",
      "Delivered high-performance and intuitive interfaces using ReactJS. Automated test suites with Cypress, improving deployment efficiency and reducing application crashes by over 30%.",
      "Enhanced the UI/UX experience by implementing intuitive design principles and integrating a seamless video upload functionality, boosting user satisfaction and reducing wait times by 40%."
    ]
  },
].map(({ title, reponsibilites, location, time }) => <li key={title}><Experience title={title} reponsibilites={reponsibilites} location={location} time={time} /></li>)

const projects = [
  {
    name: "Battleship Game",
    technologies: "Spring Boot, WebSockets, HTML, JavaScript, MS SQL Server",
    architecture: "Client–server model with real-time communication via WebSockets; static UI served directly from the Spring Boot server; MS SQL used for persistent match and player data.",
    objective: "Create an interactive, multiplayer Battleship game enabling real-time gameplay between users over the web.",
    description: "Developed a real-time, multiplayer Battleship game where players can compete over WebSocket connections. The HTML and JavaScript front-end is served directly from the Spring Boot backend, ensuring seamless integration. Game sessions, player statistics, and match history are stored and managed in MS SQL Server. The architecture supports fast, low-latency gameplay while maintaining reliable data persistence.",
  },
  {
    name: "Airline Ticketing Desktop Application",
    technologies: ".NET Core, MS SQL Server, C#",
    architecture: "MVC pattern with a layered design separating business logic, data access, and presentation.",
    objective: "Build a robust desktop application for managing airline ticket bookings, schedules, and customer data.",
    description: "Designed and implemented a desktop-based airline ticketing system using .NET Core and MS SQL Server. The application follows the MVC architecture, ensuring clean separation of concerns and maintainability. Features include ticket booking, flight scheduling, and customer record management, with all data stored in a secure relational database for efficient retrieval and reporting.",
  },
  {
    name: "Food Delivery Application",
    technologies: "GlassFish, Java Web Services (REST & SOAP), React, File Serialization",
    architecture: "Service-oriented architecture with backend APIs deployed on GlassFish, consumed by a React front-end; prototype uses file-based serialization for persistent storage.",
    objective: "Create a functional food delivery platform prototype supporting ordering, menu browsing, and account management.",
    description: "Built a prototype food delivery system with a React front-end and Java-based backend services deployed on GlassFish. The application supports both REST and SOAP endpoints for flexibility in API consumption. Core functionalities include user authentication, menu browsing, and placing orders. For the prototype phase, data is stored using file serialization, allowing the system to operate without a traditional database while retaining persistent data across sessions.",
  },
  {
    name: "Apprendre: Language Translator Chrome Extension",
    technologies: "JavaScript, LibreTranslate, Chrome Extension APIs",
    architecture: "Client-side extension running in the browser, interfacing with local LibreTranslate models for offline translations.",
    objective: "Provide seamless, in-context French language translation and learning without interrupting the user’s browsing experience.",
    description: "Developed a Chrome extension that integrates with LibreTranslate to offer real-time, in-browser French translation. Designed to help users learn and translate on the go, the extension eliminates the need to switch tabs or applications. By running translations locally, the tool provides quick responses and maintains user privacy. Ideal for language learners who want to build vocabulary and comprehension while browsing the web.",
  },
].map(t => <li key={t.name}><Project {...t} /></li>);

function AboutMe() {
  return (
    <div className="about-me">
      <img src={profileImage} alt="profile-image" className="profile-img"/>
      <h1 className="profile-name">Vishnu Narayanan</h1>
      <section>
        <h2>Introduction</h2>
          <p className="intro">
            I'm a passionate, curious, and dedicated full stack web developer, with more than 3 years of experience in software engineering. Currently pursuing Postgraduate Diploma in Software Application Specialist at Vanier College, Montréal, with expected graduation in August 2025. 
            I'm also passionate about teaching and mentoring, having served as a Computer Science tutor at Vanier College, where I helped students improve their understanding of complex concepts and achieve better grades.
            I possess excellent communication skills in both English and French. My goal is to leverage my skills and experience to contribute to innovative projects that make a positive impact.
          </p>
      </section>
      <section>
        <h2>Skills & Technology</h2>
          <ul>
            <li>ReactJS | NodeJS | Javascript | Typescript</li>
            <li>Spring Boot | Java</li>
            <li>ASP.NET | C#</li>
            <li>Django | Python</li>
            <li>PostgreSQL | MS SQL Server</li>
            <li>Language Proficiency: French(B2) | English(C1)</li>
            <li>CRLA level 1 Tutor Certification</li>
          </ul>
      </section>
      <section>
        <h2>Professional Experience</h2>
        <ul>
          {experiences}
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <span>Attestation of College Studies, Software Application Specialist</span>
            &nbsp;|&nbsp;
            <span className="location">
              Vanier College, Montréal, Canada
            </span>
            &nbsp;|&nbsp;
            <span className="time">September 2023 -  August 2025</span>
          </li>
          <li>
            <span>Bachelor's Electrical and Electronics Engineering</span>
            &nbsp;|&nbsp;
            <span className="location">
              National Institute of Technology Calicut, India
            </span>
            &nbsp;|&nbsp;
            <span className="time">2013 - 2017</span>
            &nbsp;|&nbsp;
            <span>GPA: 8.2/10</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects}
        </ul>
      </section>
      <section className="contact-information">
        <h2>Contact Information</h2>
        <ul>
          <li><TfiEmail /><a href="mailto:narayanan.vishnu.kr@gmail.com">narayanan.vishnu.kr@gmail.com</a></li>
          <li><FaLinkedin /><a href="https://www.linkedin.com/in/vishnu-narayanan-05b167193/" target="_blank" rel="noopener noreferrer">Linked In</a></li>
          <li><FaGithub /><a href="https://github.com/vishnu-narayanan-kr" target="_blank" rel="noopener noreferrer">Github.io</a></li>
          <li><FaSquarePhone /><a href="tel:+14388558478">+1 (438) 855-8478</a></li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
