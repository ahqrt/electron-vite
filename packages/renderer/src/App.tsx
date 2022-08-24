import { useMemo } from 'react';
import Example from './pages/example/Example';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            defaultProps: {
              variant: 'contained',
              size: 'small',
            },
          },
          MuiChip: {
            defaultProps: {
              variant: 'outlined',
              sx: {
                m: 0.3
              }
            },
            
          },
        },
      }), []
  );
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Example />} />        
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
