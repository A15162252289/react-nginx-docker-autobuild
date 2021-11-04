import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'pages/App';
import  store  from 'state';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ThemeProvider, { ThemedGlobalStyle } from './theme'
import { LanguageProvider } from './i18n'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <LanguageProvider>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </LanguageProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
