/**
 * 顶部菜单
 */
const { app, Menu } = require('electron');
const loadUrl = url => {
	console.log('url', url);
};
const menuConfig = [
	{
		label: 'haha',
		submenu: [
			{
				label: '编辑器',
				click: async () => {
					loadUrl('/mdnice/index.html#/');
				},
			},
			{
				type: 'separator',
			},
			{
				label: '百度',
				click: async () => {
					loadUrl('http://www.baidu.com');
				},
			},
		],
	},
	{
		label: '编辑',
		submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }],
	},
	{
		label: '网站',
		submenu: [
			{
				label: 'github',
				click: async () => {
					loadUrl('http://www.github.com');
				},
			},
			{
				type: 'separator',
			},
			{
				label: 'CSDN',
				click: async () => {
					loadUrl('http://www.csdn.net');
				},
			},
		],
	},
	{
		label: '我的',
		submenu: [
			{
				label: '我的github',
				click: loadUrl('https://github.com/chengang4505'),
			},
			{
				label: '欢迎star ●▂●',
			},
		],
	},
];
const menu = Menu.buildFromTemplate(menuConfig);
Menu.setApplicationMenu(menu);
