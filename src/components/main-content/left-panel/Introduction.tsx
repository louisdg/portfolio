import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Reveal from "../../util/Reveal";
import ProfileActions from "./ProfileActions";
import ScrollDownReminder from "./ScrollDownReminder";
import Socials from "./Socials";

function Introduction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        paddingTop: "6rem",
      }}
    >
      <Reveal>
        <Stack component="header" spacing={4}>
          <Stack>
            <h1 style={{ fontSize: isMobile ? "2rem" : "3rem" }}>
              Louis De Gaudenzi
            </h1>
            <h2>Full Stack Engineer</h2>
          </Stack>
          <Stack>
            <Typography component="p" variant="body2">
              I build{" "}
              <Typography component="span" variant="body1">
                full stack
              </Typography>{" "}
              web applications, with a emphasis on{" "}
              <Typography component="span" variant="body1">
                code quality
              </Typography>
              .
            </Typography>
            <Typography component="p" variant="body2">
              Love{" "}
              <Typography component="span" variant="body1">
                React
              </Typography>
              ,{" "}
              <Typography component="span" variant="body1">
                TypeScript
              </Typography>{" "}
              and{" "}
              <Typography component="span" variant="body1">
                great user experiences
              </Typography>
              .
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Socials />
            <ProfileActions />
          </Stack>
          <ScrollDownReminder />
        </Stack>
      </Reveal>
    </div>
  );
}

export default Introduction;
