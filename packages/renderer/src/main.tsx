import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import './styles/index.css';
import theme from './styles/theme';

const root = createRoot(document.getElementById('root')!)

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

window?.removeLoading?.()

// console.log('fs', window.fs);
// console.log('ipcRenderer', window.ipcRenderer);

// Usage of ipcRenderer.on
window.ipcRenderer?.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args);
});
