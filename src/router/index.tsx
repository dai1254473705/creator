import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from '../view/layout';
/**
 * 将权限id放在这里直接维护处理
 */
const childRoutes = [
	{
		path: '/',
		component: loadable(() => import('../view/home')),
	},
	// {
	// 	path: '/WebView',
	// 	component: loadable(() => import('../components/WebView')),
	// },
];

export default function App() {
	return (
    <AppLayout>
      <Switch>
        <Route exact path="/" component={loadable(() => import('../view/home'))}></Route>
        {childRoutes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
    </AppLayout>
	);
}
