import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Login from "./components/Login";
import Add from "./components/Add";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    // <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Navbar />
        <Stack direction="row" whiteSpace={2} justifyContent="center">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add /> */}
        <Login />
      </Box>
    // </ThemeProvider>
  );
}

export default App;
