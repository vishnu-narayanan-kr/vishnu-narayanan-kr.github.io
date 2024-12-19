import { Experience } from "./components/Experience";

const experiences = [
  {
    title: "Computer Science Tutor: Vanier College",
    reponsibilites: [
      "Offered Computer Science and Math tutoring to support student autonomy and improved grades.",
      "Demonstrated patience and empathy while tutoring, and propose strategies to help students better comprehend problem solving effectively"
    ]
  },
  {
    title: "Software Engineer: LiteBreeze InfoTech",
    reponsibilites: [
      "Spearheaded the development of an innovative browser-based video editing tool leveraging FFmpeg, which reduced video editing and processing times by over 50%, driving efficiency for potential clients.",
      "Streamlined the ReactJS developer recruitment process, enhancing candidate success rates by 40% through evaluation and optimization strategies.",
      "Contributed as a front-end UI/UX engineer, delivering design and technical support to enhance user experiences and align interfaces with client expectations."
    ]
  },
  {
    title: "Software Engineer: TeroNext Consulting",
    reponsibilites: [
      "Contributed to creating and developing UIs as a SaaS solution for Yembo Inc, a US-based client.",
      "Delivered high-performance and intuitive interfaces using ReactJS. Automated test suites with Cypress, improving deployment efficiency and reducing application crashes by over 30%.",
      "Enhanced the UI/UX experience by implementing intuitive design principles and integrating a seamless video upload functionality, boosting user satisfaction and reducing wait times by 40%."
    ]
  },
].map(({ title, reponsibilites }) => <li><Experience title={title} reponsibilites={reponsibilites} /></li>)


function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <section>
        <h2>Introduction</h2>
          <p>
            I'm a passionate, curious, and dedicated full stack web developer and desktop app developer, with 3 years of experience in coding and software engineering. Currently pursuing a Postgraduate Diploma in Software Application Specialist at Vanier College, Montréal, with expected graduation in August 2025. I possess excellent communication skills in English and am proficient in French. My strong academic background complements my technical expertise, allowing me to excel in both professional and educational environments.
          </p>
      </section>
      <section>
        <h2>Skills</h2>
          <p>
            <ul>
              <li>ReactJS</li>
              <li>Spring Boot</li>
              <li>.NET</li>
              <li>Python</li>
            </ul>
          </p>
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
          <li>Attestation of College Studies, Software Application Specialist</li>
          <li>Bachelor's Electrical and Electronics Engineering</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Battleship Game Spring Boot</li>
          <li>Airline Ticketing .NET</li>
          <li>Food Delivery App</li>
          <li>Language Translator Plugin</li>
        </ul>
      </section>
      <section>
        <h2>Contact Information</h2>
        <ul>
          <li>narayanan.vishnu.kr@gmail.com</li>
          <li>Linked In</li>
          <li>Github.io</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
