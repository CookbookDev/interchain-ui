import { style, styleVariants } from "@vanilla-extract/css";
import { scrollBar } from "@/ui/shared/shared.css";
import { themeVars } from "@/styles/themes.css";
import {
  inputBorderVar,
  inputBgVar,
  inputRingShadowVar,
  inputTextVar,
} from "@/ui/text-field/text-field.css";
import { baseTextStyles } from "@/ui/text/text.css";
import { listBoxBaseWithShadow } from "@/ui/select/select.css";

export const inputBorderAndShadow = style({
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "6px",
  borderColor: inputBorderVar,
  vars: {
    [inputBgVar]: themeVars.colors.inputBg,
    [inputBorderVar]: themeVars.colors.inputBorder,
  },
  selectors: {
    "&:hover": {
      vars: {
        [inputBorderVar]: themeVars.colors.text,
      },
    },
    '&[data-focused="true"]': {
      vars: {
        [inputBorderVar]: themeVars.colors.inputBorderFocus,
        [inputRingShadowVar]: `${themeVars.colors.inputBg} 0px 0px 0px 0px, ${themeVars.colors.textPlaceholder} 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
      outline: `2px solid transparent`,
      outlineOffset: "2px",
      boxShadow: inputRingShadowVar,
    },
  },
});

const baseInputStyles = style([
  baseTextStyles,
  inputBorderAndShadow,
  style({
    flex: "1",
    outline: "none",
    position: "relative",
    appearance: "none",
    transitionProperty:
      "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform",
    transitionDuration: "200ms",
    backgroundColor: inputBgVar,
    color: "inherit",
    selectors: {
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: "0",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: "0",
      },
    },
  }),
]);

export const comboboxInput = styleVariants({
  light: [baseInputStyles],
  dark: [
    baseInputStyles,
    style({
      vars: {
        [inputTextVar]: themeVars.colors.textSecondary,
      },
    }),
  ],
});

export const comboboxInputText = style({
  color: inputTextVar,
});

export const comboboxPopover = style({
  paddingTop: themeVars.space[5],
});

export const listboxStyle = styleVariants({
  light: [
    listBoxBaseWithShadow,
    scrollBar.light,
    style({
      borderColor: "#D1D6DD",
    }),
  ],
  dark: [
    listBoxBaseWithShadow,
    scrollBar.dark,
    style({
      borderColor: "#434B55",
    }),
  ],
});
