import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="App__Header">Awesome React Hooks</Header>
          <div className="main-wrapper">
            <Layout className="App__Wrapper--Bottom">
              <Router>
                <Sider className="App__Slider">
                  <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="home" />
                          <Link to="/home">Home</Link>
                        </span>
                      }
                    >
                      <Menu.Item key="1">Home</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="github" />
                          <span>Github</span>
                        </span>
                      }
                    >
                      <Menu.Item key="2">react-use</Menu.Item>
                      <Menu.Item key="3">useHooks</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content className="App__Content">
                  <Route exact path="/home" component={Home} />
                </Content>
              </Router>
            </Layout>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
