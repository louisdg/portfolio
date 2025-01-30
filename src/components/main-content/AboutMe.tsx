import { Stack, Typography } from "@mui/material";
import Reveal from "../util/Reveal";
import MyCat from "./MyCat";

function AboutMe() {
  return (
    <Reveal>
      <Stack spacing={2}>
        <Typography component="p" variant="body2">
          Ever since I got into coding in 2014, I have never stopped having fun
          doing it. Today, I mainly focus on learning how to improve the quality
          of the code I produce (👋 Robert C. Martin, aka &ldquo;Uncle
          Bob&rdquo;).
        </Typography>
        <Typography component="p" variant="body2">
          When I’m not in front of a computer, you can either find me at the
          gym, hanging out with <MyCat />, or trying to learn riffs on the
          guitar.
        </Typography>
      </Stack>
    </Reveal>
  );
}

export default AboutMe;
