import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Map from './components/Map';

import 'antd/dist/antd.css';
import './index.css';

function App() {
  const { Header, Content, Footer } = Layout;

	return (
		<Layout className="layout">
			<Header className="top-nav">
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">Pontos Geográficos</Menu.Item>
					<Menu.Item key="2">Importar CSV</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div className="site-layout-content">
          <Map />
        </div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Made with {"<3"}</Footer>
		</Layout>
	);
}

export default App;
