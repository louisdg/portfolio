import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Stack, Typography } from "@mui/material";
import formatDate from "../../../utils/formatDate";
import RevealPaper from "../../util/RevealPaper";
import Skills from "../../util/Skills";

function Job({
  title,
  company,
  mainSkills,
  city,
  country,
  startDate,
  endDate,
  tasks,
}: {
  title: string;
  company: string;
  mainSkills: string[];
  city: string;
  country: string;
  startDate: Date;
  endDate?: Date;
  tasks: string[];
}) {
  return (
    <RevealPaper>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <h3>
            {title} @ {company}
          </h3>
          <Skills skills={mainSkills} />
          <p>
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Present"}, {city} ({country})
          </p>
        </Stack>
        <Stack component="ul" spacing={1}>
          {tasks.map((task) => (
            <Typography key={task} component="li" variant="body2">
              <KeyboardArrowRightIcon fontSize="inherit" />
              {task}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </RevealPaper>
  );
}

export default Job;
