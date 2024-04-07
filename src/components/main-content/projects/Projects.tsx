import { Stack } from "@mui/material";
import basketballImage from "../../../basketball.png";
import juggleballImage from "../../../juggleball.png";
import Project from "./Project";

function Projects() {
  return (
    <Stack id="projects" spacing={4}>
      <h2>Projects</h2>
      <Project
        title="WildCount"
        year={2021}
        skills={["Python", "TensorFlow", "C", "JavaScript", "InfluxDB"]}
        image={{
          src: "https://gitlab.com/wildcount/doc/-/raw/master/images/wildcount2022_beautifulp.jpg",
          alt: "",
        }}
        description={[
          "WildCount is an inexpensive hunting camera for recognizing and counting the presence of humans (anonymous) and animals into wild and protected areas.",
          "The main part of our project was to create a neural network capable of recognising forest animals." +
            " This was done using Python with the TensorFlow library.",
          "The embedded card is programmable in C, and communicates with servers to save data to an InfluxDB database. Grafana then allows this data to be displayed on a dashboard in the form of graphs." +
            " We developed encoders/decoders in C for the embedded part, and in JavaScript for the cloud.",
          "This project was worked on with Alexis ROLLIN, Élisa BEAUGRAND, Tom GRAUGNARD," +
            " Baptiste JOLAINE, Benoît BARRE, Grégoire CARROT and Aurélien REYNAUD.",
        ]}
        link={{
          label: "Read more",
          href: "https://gitlab.com/wildcount/doc/-/blob/master/README.md?ref_type=heads",
        }}
      />
      <Project
        title="Ecoscore"
        year={2020}
        skills={["Python"]}
        description={[
          "Ecoscore is a program that scans through a web app directory and analyses files of code.",
          "It judges the app's eco-friendliness by looking at common recommended practices for resource saving.",
          "It will give a score to the app depending on how much it respects these practices.",
          "This project was co-developed with Élisa BEAUGRAND.",
        ]}
        gitHubHref="https://github.com/louisdg/ecoscore-parser"
      />
      <Project
        title="Basketball"
        year={2018}
        skills={["JavaScript", "p5.js"]}
        image={{ src: basketballImage, alt: "" }}
        description={["A simple basketball game, made with p5.js."]}
        link={{
          label: "Give it a try",
          href: "https://louisdg.github.io/basketball/",
        }}
        gitHubHref="https://github.com/louisdg/basketball"
      />
      <Project
        title="Juggleball"
        year={2018}
        skills={["JavaScript", "p5.js"]}
        image={{ src: juggleballImage, alt: "" }}
        description={["A simple ball juggling game, made with p5.js."]}
        link={{
          label: "Give it a try",
          href: "https://louisdg.github.io/juggleball/",
        }}
        gitHubHref="https://github.com/louisdg/juggleball"
      />
    </Stack>
  );
}

export default Projects;
