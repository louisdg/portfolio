import { createTheme } from "@mui/material";
import colors from "./colors";

export default createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors["purple/darkest"],
      paper: colors["neutrals/white/6.25%"],
    },
    text: {
      primary: colors["neutrals/white/75%"],
    },
    primary: {
      main: colors.purple,
      dark: colors["purple/dark"],
    },
    secondary: {
      main: colors.pink,
    },
  },
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    body1: {
      color: colors["neutrals/white/75%"],
    },
    body2: {
      color: colors["neutrals/white/50%"],
      fontSize: "1rem",
      lineHeight: "1.75rem",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: `2px ${colors["neutrals/white"]} solid`,
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      variants: [
        {
          props: {
            color: "primary",
          },
          style: {
            "&.MuiButton-root:active": {
              backgroundColor: colors["purple/darker"],
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
        },
      },
    },

    MuiIconButton: {
      defaultProps: {
        size: "large",
      },
    },

    MuiAppBar: {
      defaultProps: {
        position: "static",
        elevation: 0,
        color: "inherit",
      },
    },

    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
    },

    MuiTooltip: {
      defaultProps: {
        enterDelay: 500,
        enterNextDelay: 500,
        placement: "top",
        arrow: true,
      },
      styleOverrides: {
        arrow: {
          "&::before": {
            backgroundColor: colors["neutrals/black"],
          },
        },
        tooltip: {
          backgroundColor: colors["neutrals/black"],
          borderRadius: 8,
          fontSize: "1rem",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: 16,
          WebkitBackdropFilter: "blur(32px)",
          backdropFilter: "blur(32px)",
        },
      },
    },

    MuiChip: {
      defaultProps: {
        color: "secondary",
      },
      variants: [
        {
          props: { color: "secondary" },
          style: {
            backgroundColor: colors["pink/12.5%"],
            color: colors.pink,
          },
        },
      ],
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          color: colors["neutrals/white/75%"],
          fontWeight: 700,
        },
      },
    },
  },
});
