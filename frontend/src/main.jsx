import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';

import App from './App';
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);


root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
