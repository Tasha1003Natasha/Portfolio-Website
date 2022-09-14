import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './components/Toggle/ThemeContext';
import Background from './components/Toggle/Background';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Background>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Background>
    </BrowserRouter>
  </React.StrictMode>
);
