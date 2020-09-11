import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { JwtAuthProvider } from '@gabrielgvl/jwt_auth_react';
import { Provider } from 'react-redux';
import store from 'store';
import StylesProvider from '@material-ui/styles/StylesProvider';
import theme from './styles/muiTheme';
import GlobalStyle from './styles/global';
import { IndexRoutes } from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <JwtAuthProvider keyPrefix="@Safra-Payback">
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <GlobalStyle />
            <IndexRoutes />
          </MuiThemeProvider>
        </StylesProvider>
      </JwtAuthProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
