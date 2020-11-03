import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Map from './components/Map';
import Importer from './components/Importer';

import 'antd/dist/antd.css';
import './index.css';

function App(props) {
  const { Header, Content, Footer } = Layout;

	return (
		<Layout className="layout">
      <Router>
        <Header className="top-nav">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Pontos Geográficos</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/import">Importar CSV</Link>
            </Menu.Item>
          </Menu>
        </Header>
        
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/import"><Importer/></Route>
              <Route path="/"><Map/></Route>
            </Switch>
          </div>
        </Content>
      </Router>
			<Footer style={{ textAlign: 'center' }}>Made with {"<3"}</Footer>
		</Layout>
	);
}

export default App;
