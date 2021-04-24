/**
 * 控制全局的UI样式
 */
import { observable, action } from 'mobx';

class UIStore {
	@observable public showMenu = true;

	@action
	changeShowMenu = (flag: boolean)=> {
		this.showMenu = flag;
	}
}

export default UIStore;
