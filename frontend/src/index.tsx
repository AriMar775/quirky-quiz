import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
