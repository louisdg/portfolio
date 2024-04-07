import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Fade, useScrollTrigger } from "@mui/material";

function ScrollDownReminder() {
  const scrolled = useScrollTrigger({
    threshold: 64,
    disableHysteresis: true,
  });

  return (
    <Fade in={!scrolled}>
      <ArrowDownwardIcon
        fontSize="large"
        sx={{
          alignSelf: "center",
          "@keyframes pulsate": {
            "0%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(8px)",
            },
            "100%": {
              transform: "translateY(0)",
            },
          },
          animation: "pulsate 1s infinite ease",
        }}
      />
    </Fade>
  );
}

export default ScrollDownReminder;
