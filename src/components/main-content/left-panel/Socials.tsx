import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Link, Stack, Tooltip } from "@mui/material";

function Socials() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Open my LinkedIn profile">
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/louis-degaudenzi/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Open my GitHub profile">
        <IconButton
          component={Link}
          href="https://github.com/louisdg"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default Socials;
