import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import PageRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
