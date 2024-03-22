import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { createTheme,  ThemeProvider } from '@mui/material';
import { Auth0Provider  } from '@auth0/auth0-react';

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
  palette:{
  primary:{
    main: "#28287c"
  }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
    <Auth0Provider
      domain="dev-aglx1nrkxszqeul8.us.auth0.com"
      clientId="QuD3c26lM87SWbFE1I9bTNkwMy2npCOP"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
