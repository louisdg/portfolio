import { Container, Grid, Stack } from "@mui/material";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Introduction from "./left-panel/Introduction";
import Projects from "./projects/Projects";

function MainContent() {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={12} lg={6}>
            <Introduction />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              spacing={12}
              sx={{
                paddingTop: "6rem",
                paddingBottom: "6rem",
              }}
            >
              <AboutMe />
              <Experience />
              <Education />
              <Projects />
              <ContactMe />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default MainContent;
