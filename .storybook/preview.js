import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../src/App/theme";
import "../src/App/styles.css";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
