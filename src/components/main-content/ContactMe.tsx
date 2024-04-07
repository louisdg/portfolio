import { Link, Stack, Typography } from "@mui/material";
import Reveal from "../util/Reveal";

function ContactMe() {
  return (
    <Stack id="contact-me" spacing={4}>
      <h2>Contact me</h2>
      <Reveal>
        <Stack spacing={1}>
          <Link href="mailto:louis.degaudenzi@gmail.com">
            louis.degaudenzi
            <wbr />
            @gmail.com
          </Link>
          <Link href="tel:+33695639006">(+33) 6 95 63 90 06</Link>
          <Typography component="p" variant="body2">
            You can also reach out to me on my{" "}
            <Link
              href="https://www.linkedin.com/in/louis-degaudenzi/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>{" "}
            profile.
          </Typography>
        </Stack>
      </Reveal>
    </Stack>
  );
}

export default ContactMe;
