import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Navigator from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Navigator />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
