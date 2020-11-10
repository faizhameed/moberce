import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Layout from "./components/Layout/Layout";
const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#7B1FA2",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
      h1: {
        fontFamily: ["Francois One", "sans-serif"],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
};

export default App;
