// 菜单配置
export interface IMenu {
	name: string;
	icon: string;
	isWebView: boolean;
	url: string;
}
const MENULIST: IMenu[] = [
	{
		name: '推荐',
		icon: 'iconnavicon-wzgl',
		isWebView: false,
		url: 'https://docs.qq.com/desktop/',
	},
	{
		name: '腾讯文档',
		icon: 'iconwechat',
		isWebView: true,
		url: 'https://docs.qq.com/desktop/',
	},
	{
		name: 'markdown',
		icon: 'iconwechat',
		isWebView: false,
		url: '/mdnice/index.html',
	},
];
export default MENULIST;
