/**
 * 控制全局的UI样式
 */
import { observable, action, toJS } from 'mobx';
import { IMenu, IHistoryMenu } from '../type.d';

class MenuStore {
  /**
   * 公共菜单列表
   */
  @observable MENULIST: IMenu[] = [
    {
      id: '1',
      title: '推荐',
      isWebView: true,
      active: true,
      children: [
        // {
        //   id: '1-1',
        //   title: '96编辑器',
        //   favicon: 'iconai-article',
        //   isWebView: true,
        //   url: 'https://bj.96weixin.com/',
        //   active: false,
        // },
      ],
    },
    {
      id: '2',
      title: '微信',
      active: false,
      children: [
        {
          id: '2-1',
          title: '腾讯文档',
          favicon: 'iconqq',
          isWebView: true,
          url: 'https://docs.qq.com/desktop/',
          active: false,
        },
        {
          id: '2-2',
          title: 'markdown',
          favicon: 'iconbianjiqi',
          isWebView: false,
          url: '/mdnice',
          active: false,
        },
      ],
    },
    {
      id: '3',
      title: '前端',
      isWebView: true,
      url: 'https://docs.qq.com/desktop/',
      active: false,
      children: [],
    },
  ];
  @observable public currentHistory:IMenu = [];
  /**
   * 激活状态
   * @param menu
   */
  @action
  public pushRoute = (menu: IMenu) => {
    this.currentHistory = menu;
    const currentId = menu.id;
    this.MENULIST.map((item,index)=>{
      let parentActive = false;
      if (item.children) {
        item.children.map((item2,index2)=>{
          if (item2.id === currentId) {
            item2.active = true;
            parentActive = true;
          } else {
            item2.active = false;
          }
        });
      }
      if (currentId === item.id) {
        parentActive = true;
      }
      item.active = parentActive;
    })
  };
}

export default MenuStore;
