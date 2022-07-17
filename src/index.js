import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const themeUM = createTheme({
   palette: {
      primary: {
         main: '#004F2F',
         light: '#92B9A4',
      },
      secondary: {
         main: '#F47320',
         light: '#D89511',
      },
      background: {
         paper: '#E8D4A2',
      },
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ThemeProvider theme={themeUM}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </React.StrictMode>
);
