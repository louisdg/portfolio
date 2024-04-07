import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RevealPaper from "../../util/RevealPaper";
import Skills from "../../util/Skills";

function Project({
  title,
  year,
  skills,
  image,
  description,
  link,
  gitHubHref,
}: {
  title: string;
  year: number;
  skills: string[];
  image?: { src: string; alt: string };
  description: string[];
  link?: { label: string; href: string };
  gitHubHref?: string;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <RevealPaper>
      <Stack spacing={1}>
        <h3>{title}</h3>
        <h4>{year}</h4>
        <Skills skills={skills} />
        {image && (
          <img
            style={{
              width: "100%",
              height: 256,
              objectFit: "cover",
              borderRadius: 12,
            }}
            src={image.src}
            alt={image.alt}
          />
        )}
        {description.map((paragraph) => (
          <Typography key={paragraph} component="p" variant="body2">
            {paragraph}
          </Typography>
        ))}
        <Stack {...(!isMobile && { direction: "row" })} gap={1} flexWrap="wrap">
          {link && (
            <Button
              component={Link}
              href={link.href}
              endIcon={<OpenInNewIcon />}
              target="_blank"
              rel="noopener"
            >
              {link.label}
            </Button>
          )}
          {gitHubHref && (
            <Button
              component={Link}
              href={gitHubHref}
              startIcon={<GitHubIcon />}
              target="_blank"
              rel="noopener"
            >
              See source code on GitHub
            </Button>
          )}
        </Stack>
      </Stack>
    </RevealPaper>
  );
}

export default Project;
