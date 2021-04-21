// 菜单配置
export interface IMenu {
	id: number;
	title: string;
	favicon: string;
	isWebView: boolean;
	url: string;
}
/**
 * 当前history中的菜单记录
 */
export interface IHistoryMenu {
	[id: number]: IMenu;
}
