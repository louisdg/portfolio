import { Stack } from "@mui/material";
import RevealPaper from "../../util/RevealPaper";

function Degree({
  title,
  school,
  city,
  country,
  startYear,
  endYear,
}: {
  title: string;
  school: string;
  city: string;
  country: string;
  startYear: number;
  endYear: number;
}) {
  return (
    <RevealPaper>
      <Stack spacing={1}>
        <h3>{title}</h3>
        <h4>{school}</h4>
        <p>
          {startYear} - {endYear}, {city} ({country})
        </p>
      </Stack>
    </RevealPaper>
  );
}

export default Degree;
