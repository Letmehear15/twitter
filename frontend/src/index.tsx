import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css'
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './redux/rootReducer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
