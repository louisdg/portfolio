import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Fade, Stack, Typography, useScrollTrigger } from "@mui/material";

function ScrollDownReminder() {
  const scrolled = useScrollTrigger({
    threshold: 64,
    disableHysteresis: true,
  });

  return (
    <Fade in={!scrolled}>
      <Stack
        spacing={2}
        sx={{
          alignSelf: "center",
        }}
        alignItems="center"
      >
        <Typography variant="body2">Scroll down to learn more</Typography>
        <ArrowDownwardIcon
          fontSize="large"
          sx={{
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
      </Stack>
    </Fade>
  );
}

export default ScrollDownReminder;
