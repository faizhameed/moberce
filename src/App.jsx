import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Layout from "./components/Layout/Layout";
const App = () => {
  const theme = createMuiTheme({
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
