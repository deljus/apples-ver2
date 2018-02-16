import React from 'react';
import styled from 'styled-components';

export const PageContent = styled.div`
  background: #fff;
  padding: 48px;
  min-height: 100%;
`;

export const PageHeader = ({ children }) => {
  document.title = children;
  return (<h1>{ children }</h1>);
};

export const PageBody = styled.div`
  background: '#fff';
  font-size: 16px;
  minHeight: 280
`;

export const RightShift = styled.div`
  text-align: right;
  padding: 8px 0px;
`;

export const HeaderText = styled.span`
  font-size: 26px;
  color: white;
  padding: 0px 16px;
  background: #333;
  border-radius: 6px;
  float: left;
`;

export const List = styled.ul`
  list-style: disc;
`;

export const ListItem = styled.li`
  margin-left: 32px;
`;