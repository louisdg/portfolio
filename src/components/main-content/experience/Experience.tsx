import { Stack } from "@mui/material";
import WorkExperience from "./WorkExperience";

function Experience() {
  return (
    <Stack id="experience" spacing={4}>
      <h2>Experience</h2>
      <WorkExperience
        title="Full Stack Engineer"
        company="Slate Digital"
        mainSkills={["React", "TypeScript", "Node.js", "Kotlin", "PostgreSQL"]}
        city="Grenoble"
        country="France"
        startDate={new Date(2021, 8)}
        tasks={[
          "Designing and writing robust RESTful APIs in Kotlin + Spring Boot and translating visual mock-ups into React component-based user interfaces, styled with CSS + Sass",
          "Implementing authentication, authorization and payment mechanisms",
          "Data modeling, managing and interacting with PostgreSQL databases",
          "Developing Electron desktop applications",
          "Implementing automated unit, end-to-end and integration tests with Jest, Vitest, TestCafe, Testing Library for the frontend, and JUnit for the backend",
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
