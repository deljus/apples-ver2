import React from 'react';
import { Content } from '../components';

const { PageHeader, PageContent, PageBody } = Content;


const NotFoundPage = () => (
  <PageContent>
    <PageHeader>Not Found</PageHeader>
    <PageBody>Страница не найдена</PageBody>
  </PageContent>
);

export default NotFoundPage;
