/**
 * mobx store
 * Created by daiyunzhou 2020.03.26
 * 存放全局状态
 */
import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import UiStore from './uiStore'; // 根据全局过期提示改变table样式

// 不允许在动作外部修改状态,修改store必须使用action
configure({
	enforceActions: 'observed',
});

// mobx 日志,只有本地开发环境会有日志
enableLogging({
	predicate: () => true,
	action: true,
	reaction: false,
	transaction: false,
	compute: true,
});

export default {
	ui: UiStore,
};
