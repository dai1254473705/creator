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
		url: '',
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	onMenuChange = (url: string) => {
		this.setState({
			url: url,
		});
	};

	render() {
		return (
			<div className="app-content">
				<div className="app-left">
					<Logo />
					<MenuList onChange={this.onMenuChange} />
				</div>
				<div className="app-right">{!!this.state.url && <iframe className="iframe" src={this.state.url} frameBorder="0"></iframe>}</div>
			</div>
		);
	}
}
