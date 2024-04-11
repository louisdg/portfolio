import { Tooltip, Typography } from "@mui/material";
import myCatImage from "../../my-cat.jpg";

function MyCat() {
  return (
    <Tooltip
      tabIndex={0}
      arrow={false}
      enterTouchDelay={0}
      enterDelay={0}
      enterNextDelay={0}
      title={
        <img
          style={{ borderRadius: 8, marginBottom: -6.4 }}
          src={myCatImage}
          alt="A picture of my cat looking silly."
          width={300}
        />
      }
      sx={{
        cursor: "help",
        textDecoration: "underline",
        textDecorationStyle: "dotted",
      }}
      PopperProps={{
        sx: { ".MuiTooltip-tooltip": { padding: 0 } },
      }}
    >
      <Typography component="span">my cat</Typography>
    </Tooltip>
  );
}

export default MyCat;
