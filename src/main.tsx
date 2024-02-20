import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { createTheme,  ThemeProvider } from '@mui/material';
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  typography: {
    fontFamily: [
      "Space Grotesk", 'sans-serif',
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
