import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab, Tooltip, useScrollTrigger, Zoom } from "@mui/material";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function BackToTop() {
  const scrolled = useScrollTrigger({
    threshold: 64,
    disableHysteresis: true,
  });

  return (
    <Zoom in={scrolled}>
      <Tooltip title="Scroll to top">
        <Fab
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 64,
            right: 32,
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}

export default BackToTop;
