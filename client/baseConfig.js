/**
 * 基本配置
 */
const path = require('path');

module.exports = {
	dev: true,
	netUrl: 'http://127.0.0.1:3002/',
	fileUrl: path.join(__dirname, '../build/index.html'),
	// isMac: process.platform === 'darwin',
};
