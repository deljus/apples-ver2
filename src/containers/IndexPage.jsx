import React from 'react';
import { Button } from 'antd';
import { Content } from '../components';
import { PAGES_URLS } from '../config';

const { PageHeader, PageContent, PageBody, List, ListItem, RightShift } = Content;

const IndexPage = ({ history }) => (
  <PageContent>
    <PageHeader>Главная</PageHeader>
    <PageBody>
      <p>Приложение позволяет добавлять, редактировать и удалять сорта яблок.</p>
      <p>Приложение состоит из 2 страниц:</p>
      <List>
        <ListItem>
          Главная страница.
        </ListItem>
        <ListItem>
          Список сортов.
        </ListItem>
      </List>
      <p>Для того чтобы начать пользоваться приложением нажмите кнопку "Продолжить".</p>
      <RightShift>
        <Button
          type="primary"
          onClick={() => history.push(PAGES_URLS.APPLES_LIST.URL)}
        >
          Продолжить
        </Button>
      </RightShift>
    </PageBody>
  </PageContent>
);

export default IndexPage;
