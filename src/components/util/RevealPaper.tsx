import { Paper } from "@mui/material";
import { ReactNode } from "react";
import Reveal from "./Reveal";

function RevealPaper({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <Paper>{children}</Paper>
    </Reveal>
  );
}

export default RevealPaper;
