// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css'; // Changed from styles.css to index.scss
import { ModalProvider } from './context/modalContext';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
    >
      <ModalProvider>
        <App />
      </ModalProvider>
    </MantineProvider>
  </React.StrictMode>
);
