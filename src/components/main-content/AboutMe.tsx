import { Link, Stack, Typography } from "@mui/material";
import Reveal from "../util/Reveal";

function AboutMe() {
  return (
    <Reveal>
      <Stack spacing={2}>
        <Typography component="p" variant="body2">
          Ever since I got into coding in 2014, I have never stopped having fun
          doing it. Today, I mainly focus on learning how to improve the quality
          of the code I produce (👋 Robert C. Martin, aka "Uncle Bob").
        </Typography>
        <Typography component="p" variant="body2">
          At{" "}
          <Link href="https://slatedigital.com/" target="_blank" rel="noopener">
            Slate Digital
          </Link>
          , I work on several projects, including{" "}
          <Link
            href="https://app.completeaccess.audio/"
            target="_blank"
            rel="noopener"
          >
            an e-commerce store with authentication, payment and subscriptions
            mechanisms
          </Link>
          ,{" "}
          <Link
            href="https://virtu.slatedigital.com/"
            target="_blank"
            rel="noopener"
          >
            an online mastering web app
          </Link>
          , and{" "}
          <Link
            href="https://app.completeaccess.audio/installers"
            target="_blank"
            rel="noopener"
          >
            a desktop application for installing audio software on Windows and
            macOS
          </Link>
          .
        </Typography>
        <Typography component="p" variant="body2">
          When I’m not in front of a computer, you can either find me at the
          gym, hanging out with my cat, or trying to learn riffs on the guitar.
        </Typography>
      </Stack>
    </Reveal>
  );
}

export default AboutMe;
