import { useMediaQuery, useTheme } from "@mui/material";
import { MouseEvent, ReactNode, useEffect, useState } from "react";
import colors from "../../colors";
import lerp from "../../utils/lerp";

type MousePosition = {
  x: number;
  y: number;
};

const LERP_ALPHA = 0.08;

function AnimatedBackground({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [targetMousePosition, setTargetMousePosition] =
    useState<MousePosition | null>();
  const [actualMousePosition, setActualMousePosition] =
    useState<MousePosition | null>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (actualMousePosition && targetMousePosition) {
        setActualMousePosition({
          x: lerp(actualMousePosition.x, targetMousePosition.x, LERP_ALPHA),
          y: lerp(actualMousePosition.y, targetMousePosition.y, LERP_ALPHA),
        });
      }
    }, 16);

    return () => clearInterval(intervalId);
  }, [actualMousePosition, targetMousePosition]);

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;
    setTargetMousePosition({
      x: clientX,
      y: clientY,
    });
    setActualMousePosition({
      x: actualMousePosition
        ? lerp(actualMousePosition.x, clientX, LERP_ALPHA)
        : clientX,
      y: actualMousePosition
        ? lerp(actualMousePosition.y, clientY, LERP_ALPHA)
        : clientY,
    });
  }

  return (
    <div
      onMouseEnter={onMouseMove}
      onMouseMove={onMouseMove}
      style={{
        background: `${
          isDesktop && actualMousePosition !== null
            ? `radial-gradient(600px at ${actualMousePosition?.x}px ${actualMousePosition?.y}px, ${colors["pink/12.5%"]}, transparent 100%) fixed`
            : ""
        }`,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedBackground;
