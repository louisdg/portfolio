import { Stack } from "@mui/material";
import WorkExperience from "./WorkExperience";

function Experience() {
  return (
    <Stack id="experience" spacing={4}>
      <h2>Experience</h2>
      <WorkExperience
        title="Full Stack Software Engineer"
        company="Origami Energy"
        mainSkills={["React", "TypeScript", "MUI", "Node.js", "Express"]}
        city="Cambridge"
        country="United Kingdom"
        startDate={new Date(2024, 7)}
        tasks={[
          "Designing modular, reusable, and scalable React components that integrate seamlessly across different parts of the application",
          "Customising and theming the application using the MUI library to ensure a consistent, visually appealing design that aligns with brand guidelines",
          "Writing and maintaining API endpoints in Node.js + Express for common features in the app, such as user information and notifications",
          "Providing clear and thorough documentation for components, including usage guidelines, API details, and code examples, to support other development teams",
          "Optimizing React components for performance, including lazy loading, code splitting, and memoization to enhance user experience",
          "Managing application state using tools like Redux to ensure smooth data flow and application consistency",
        ]}
      />
      <WorkExperience
        title="Full Stack Software Engineer"
        company="Slate Digital"
        mainSkills={[
          "React",
          "TypeScript",
          "Kotlin",
          "Spring Boot",
          "PostgreSQL",
        ]}
        city="Grenoble"
        country="France"
        startDate={new Date(2021, 8)}
        endDate={new Date(2024, 7)}
        tasks={[
          "Designing and writing robust RESTful APIs in Kotlin + Spring Boot or Node.js + Express and translating visual mock-ups into React user interfaces",
          "Implementing authentication, authorization and payment mechanisms",
          "Data modeling, managing and interacting with PostgreSQL databases",
          "Developing Electron desktop applications",
          "Implementing automated unit, end-to-end and integration tests with Jest, Vitest, TestCafe, Testing Library for JavaScript, and JUnit for Kotlin",
          "Using behaviour-driven development methodology to improve the design and maintainability of the software, especially the automated tests",
          "Refactoring codebases, reducing coupling of services, and rearchitecting and modernising technical stacks",
          "Setting up CI/CD pipelines to build, test and deploy applications",
          "Maintaining clear and comprehensive documentation",
          "Reviewing code, pair/mob programming and cooperating with the team",
        ]}
      />
      <WorkExperience
        title="Front End Engineer Intern"
        company="Slate Digital"
        mainSkills={["Vue", "JavaScript", "Web Audio"]}
        city="Grenoble"
        country="France"
        startDate={new Date(2021, 3)}
        endDate={new Date(2021, 8)}
        tasks={[
          "Designing and implementing audio web experiences using the JavaScript Web Audio API and Vue.js",
          "Using gamification to make the user experience more interactive and rewarding",
        ]}
      />
      <WorkExperience
        title="Full Stack Developer Intern"
        company="Lerti"
        mainSkills={["JavaScript", "PHP", "MySQL"]}
        city="Meylan"
        country="France"
        startDate={new Date(2018, 5)}
        endDate={new Date(2018, 7)}
        tasks={[
          "Translating user requirements into well-defined stories",
          "Implementing features end-to-end, by writing APIs, implementing backend logic in PHP and visualising data with JavaScript",
          "Managing and interacting with a MySQL database",
        ]}
      />
    </Stack>
  );
}

export default Experience;
