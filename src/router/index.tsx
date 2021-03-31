import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from '../view/layout';
// 需要返回左侧导航和顶部导航数据
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

/**
 * 将权限id放在这里直接维护处理
 */
const childRoutes = [
	{
		path: '/home',
		component: loadable(() => import('../view/home')),
	},
];

export default function App() {
	return (
		<ConfigProvider locale={zhCN}>
			<AppLayout>
				<Switch>
					<Route exact path="/" component={loadable(() => import('../view/home'))}></Route>
					{childRoutes.map((route, index) => (
						<Route key={index} path={route.path} component={route.component} />
					))}
				</Switch>
			</AppLayout>
		</ConfigProvider>
	);
}
