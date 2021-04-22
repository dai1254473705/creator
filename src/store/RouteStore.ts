/**
 * 控制全局的UI样式
 */
import { observable, action, toJS } from 'mobx';
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
			active: false,
		},
		{
			id: 2,
			title: '腾讯文档',
			favicon: 'iconwechat',
			isWebView: true,
			url: 'https://docs.qq.com/desktop/',
			active: false,
		},
		{
			id: 3,
			title: 'markdown',
			favicon: 'iconwechat',
			isWebView: false,
			url: '/mdnice/index.html',
			active: false,
		},
	];

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
		Object.keys(this.routeHistory).map(key => {
			this.routeHistory[parseInt(key)].active = false;
		});
		menu.active = true;
		this.routeHistory[menu.id] = menu;
		console.log(this.routeHistory, 'routeHistory');
	};

	/**
	 * 移除公共菜单
	 * @param menu
	 */
	@action
	public removeRoute = (menu: IMenu) => {
		const keyList = Object.keys(this.routeHistory);
		const currentKeyIndex = keyList.findIndex(key => parseInt(key) === menu.id);
		const preKeyIndex = currentKeyIndex - 1;
		const preKey = keyList[preKeyIndex];
		console.log(preKeyIndex, 'key');
		delete this.routeHistory[menu.id];
		// 激活前一个
		if (preKeyIndex > -1 && this.routeHistory[parseInt(preKey)] && menu.active) {
			this.routeHistory[parseInt(preKey)].active = true;
		}
	};
}

export default MenuStore;
