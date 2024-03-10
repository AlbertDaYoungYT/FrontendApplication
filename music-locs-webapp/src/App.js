import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="flex flex-col justify-center items-start pr-16 bg-[#11140f]">
        <div className="shrink-0 w-24 bg-[#191d17] h-[100vh] max-md:hidden" />
      </div>
    </ThemeProvider>
  );
}


export default App;
