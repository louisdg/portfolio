import { Container, Link, Toolbar, Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Toolbar component="footer" sx={{ textAlign: "center", zIndex: 1 }}>
      <Container>
        <Typography variant="body2">
          Made with ♥ by Louis De Gaudenzi | {currentYear} |{" "}
          <Link
            href="https://github.com/louisdg/portfolio"
            target="_blank"
            rel="noopener"
          >
            Source code
          </Link>
        </Typography>
      </Container>
    </Toolbar>
  );
}

export default Footer;
