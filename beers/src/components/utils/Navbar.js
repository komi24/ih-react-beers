import React, { Component } from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {
        current: 'home',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="home">
                <Link to='/'>
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="beers">
                <Link to='/beers'>
                  Beers
                </Link>
              </Menu.Item>
              <Menu.Item key="random-beer">
                <Link to='/random-beer'>
                  Random Beer
                </Link>
              </Menu.Item>
              <Menu.Item key="new-beer">
                <Link to='/new-beer'>
                  New Beer
                </Link>
              </Menu.Item>
            </Menu>
          );
    }
}

export default Navbar;