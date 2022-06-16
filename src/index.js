import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import LoginContex from './Store/Contex';

ReactDOM.render(
  <LoginContex>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </LoginContex>,
  document.getElementById('root')
);
