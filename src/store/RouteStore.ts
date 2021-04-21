/**
 * 控制全局的UI样式
 */
import { observable, action } from 'mobx';
import { IMenu, IHistoryMenu } from '../../type.d';

class MenuStore {
	/**
	 * 公共菜单列表
	 */
	@observable MENULIST: IMenu[] = [
		{
			id: 1,
			title: '推荐',
			favicon: 'iconnavicon-wzgl',
			isWebView: false,
			url: 'https://docs.qq.com/desktop/',
		},
		{
			id: 2,
			title: '腾讯文档',
			favicon: 'iconwechat',
			isWebView: true,
			url: 'https://docs.qq.com/desktop/',
		},
		{
			id: 3,
			title: 'markdown',
			favicon: 'iconwechat',
			isWebView: false,
			url: '/mdnice/index.html',
		},
	];

	@observable public currentMenu: IMenu = {
		id: 3,
		title: 'markdown',
		favicon: 'iconwechat',
		isWebView: false,
		url: '/mdnice/index.html',
	};
	/**
	 * 当前打开状态的菜单
	 */
	@observable public routeHistory: IHistoryMenu = {};

	/**
	 * 添加公共菜单
	 * @param menu
	 */
	@action
	public pushRoute = (menu: IMenu) => {
		console.log(menu);
		this.routeHistory[menu.id] = menu;
		console.log(this.routeHistory, 'routeHistory');
	};

	/**
	 * 移除公共菜单
	 * @param menu
	 */
	@action
	public removeRoute = (menu: IMenu) => {
		delete this.routeHistory[menu.id];
		console.log(this.routeHistory, 'routeHistory');
	};
}

export default MenuStore;
