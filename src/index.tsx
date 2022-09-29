import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router />
      <ColorModeScript />
    </ChakraProvider>
  </React.StrictMode >
);