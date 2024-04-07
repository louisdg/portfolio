import { Chip, Stack } from "@mui/material";

function Skills({ skills }: { skills: string[] }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {skills.map((skill) => (
        <Chip label={skill} key={skill} />
      ))}
    </Stack>
  );
}

export default Skills;
