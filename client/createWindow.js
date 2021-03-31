/**
 * 创建窗口
 */
const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const baseConfig = require('./baseConfig');
/**
 * @param { string } url 要打开的地址
 */
let mainWindow = null;
module.exports = () => {
	if (mainWindow) {
		return mainWindow;
	}
	const { width, height } = screen.getPrimaryDisplay().workAreaSize;
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: width - 100,
		height: height - 100,
		webPreferences: {
			// preload: path.join(__dirname, 'preload.js'),
		},
	});

	// 加载应用----react 打包
	if (baseConfig.dev) {
		// 加载应用----适用于 react 开发时项目
		mainWindow.loadURL(baseConfig.netUrl);
	} else {
		mainWindow.loadURL(
			url.format({
				pathname: baseConfig.fileUrl,
				protocol: 'file:',
				slashes: true,
			})
		);
	}
	// Open the DevTools.
	mainWindow.webContents.openDevTools();
	return mainWindow;
};
