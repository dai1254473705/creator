// 菜单配置
export interface IMenu {
	id: string;
	title: string;
	favicon?: string;
	isWebView?: boolean;
	url?: string;
  active?: boolean;
  children?: IMenu[]
}
/**
 * 当前history中的菜单记录
 */
export interface IHistoryMenu {
	[id: string]: IMenu;
}
