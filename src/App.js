import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import 'moment/locale/ru';
import { PAGES_URLS } from './config';
import { IndexPage, ApplesListPage, NotFoundPage } from './containers';
import { MainLayout } from './components';
import { Loader } from './wrapper';
import store from './core/store';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={ru_RU}>
        <MainLayout>
          <Loader />
          <Switch>
            <Route
              path={PAGES_URLS.INDEX.URL}
              component={IndexPage}
              exact
            />
            <Route
              path={PAGES_URLS.APPLES_LIST.URL}
              component={ApplesListPage}
              exact
            />
            <Route
              path="*"
              component={NotFoundPage}
            />
          </Switch>
        </MainLayout>
      </LocaleProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
