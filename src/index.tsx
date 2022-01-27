import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'styles/global.scss';
import CartProvider from 'context/cart';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
