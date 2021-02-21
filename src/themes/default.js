const primary = "#F9004D";
const secondary = "#F9004D";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
const warning2 = "#ff6961";

export const theme = {
  palette: {
    type: "dark",
    primary: {
      main: primary,
      contrastText: "#ffffff",
    },
    secondary: {
      main: secondary,
    },
    warning: {
      main: warning,
      secondary: warning2,
    },
    success: {
      main: success,
    },
    info: {
      main: info,
    },
    text: {
      primary: "#FFF",
      warning: "#F9004D",
      secondary: "rgba(198,201,216,.75)",
    },
    background: {
      main: "#B2E4FA",
      light: "#D8F1FC",
      dark: primary,
      checkbox: "#3B99FC",
      grey: "#EFEFF1",
    },
    contrastText: "#fff",
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiTab: {
      indicator: {
        color: "white",
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 24,
        padding: 15,
        fontSize: "1em",
        fontWeight: 600,
        color: "#000",
        backgroundColor: "rgba(56, 120, 184, 0.7)",
        minWidth: 600,
      },
    },
    "MuiListItem-button": {
      backgroundColor: "black",
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#CE1544",
        color: "white",
      },
      containedSecondary: {
        borderRadius: 30,
        backgroundColor: secondary,
        color: "white",
      },
    },
    "Mui-checked": {
      color: "#3B99FC",
    },
    MuiCheckbox: {
      root: {
        padding: 0,
        borderRadius: 3,
        width: 12,
        height: 12,
        // boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",

        backgroundImage:
          "linear-gradient(180deg, rgba(219,219,219,1) 0%, rgba(255,255,255,1) 100%);",

        "input:hover ~ &": {
          backgroundColor: "#ebf1f5",
        },
        "input:disabled ~ &": {
          boxShadow: "none",
          background: "rgba(206,217,224,.5)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        // color: "black",
        // fontWeight: 700,
        // borderRadius: 24,
        // backgroundColor: "#C4C4C4",
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF",
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white",
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        paddingLeft: 24,
      },
      head: {
        fontSize: "0.95rem",
      },
      body: {
        fontSize: "0.95rem",
      },
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10,
      },
    },
  },
};
