import { Stack } from "@mui/material";
import Degree from "./Degree";

function Education() {
  return (
    <Stack id="education" spacing={4}>
      <h2>Education</h2>
      <Degree
        title="Engineer’s Degree in Computer Science"
        school="Polytech Grenoble"
        city="Grenoble"
        country="France"
        startYear={2018}
        endYear={2021}
      />
      <Degree
        title="Higher National Diploma (DUT) in Computer Science"
        school="IUT2 - University of Grenoble-Alpes"
        city="Grenoble"
        country="France"
        startYear={2017}
        endYear={2018}
      />
      <Degree
        title="Double Major in Mathematics and Computer Science"
        school="University of Grenoble-Alpes"
        city="Grenoble"
        country="France"
        startYear={2015}
        endYear={2017}
      />
    </Stack>
  );
}

export default Education;
