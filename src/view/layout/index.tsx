/**
 * 布局
 */
import './layout.scss';
import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuList from './Components/Menu';
import Logo from './Components/Logo';
const { Header, Sider, Content } = Layout;

export default class MainLayout extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<div className="app-content">
				<div className="app-left">
					<Logo />
					<MenuList />
				</div>
				<div className="app-right">right</div>
			</div>
		);
	}
}
