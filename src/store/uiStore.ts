/**
 * 控制全局的UI样式
 */
import { observable, action } from 'mobx';

class UIStore {
	@observable public theme = 'blue';

	@action
	changeTheme(theme: string) {
		this.theme = theme;
	}
}

export default UIStore;
