import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { PAGES_URLS } from '../config';
import { Layout, Menu } from 'antd';


const { Header, Content, Sider } = Layout;


const MainLayout = ({ children, history }) => (
  <Layout style={{ height: '100vh', background: 'white' }}>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      />
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          { Object.keys(PAGES_URLS).map((page, index) => (<Menu.Item key={index} >
            <Link
              to={PAGES_URLS[page].URL}
            >
              {PAGES_URLS[page].NAME}
            </Link>
          </Menu.Item>))}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default withRouter(MainLayout);
