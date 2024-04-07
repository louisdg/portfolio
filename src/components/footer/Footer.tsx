import FavoriteIcon from "@mui/icons-material/Favorite";
import { Container, Link, Toolbar, Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Toolbar component="footer" sx={{ textAlign: "center", zIndex: 1 }}>
      <Container>
        <Typography
          variant="body2"
          sx={{
            marginTop: 4,
            marginBottom: 4,
            gap: 1,
          }}
        >
          Made with{" "}
          <FavoriteIcon
            aria-label="love"
            color="error"
            sx={{ verticalAlign: "middle" }}
          />{" "}
          by Louis De Gaudenzi · {currentYear} ·{" "}
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
