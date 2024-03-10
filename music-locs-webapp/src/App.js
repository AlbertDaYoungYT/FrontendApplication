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
      <div className="flex flex-col justify-center items-start pr-16 bg-neutral-900 max-md:pr-5">
        <div className="shrink-0 w-24 bg-stone-900 h-[1024px] max-md:hidden" />
      </div>
    </ThemeProvider>
  );
}

export default App;
