/**
 * 布局
 */
import './layout.scss';
import React, { Component } from 'react';
import MenuList from './Components/Menu';
import Logo from './Components/Logo';
import { observer } from 'mobx-react';
import Icon from '../../components/Icon';
import Store from '../../store';

interface IProps{
  histroy: any;
}
@observer
export default class MainLayout extends Component<IProps,{}> {
  private changeMenuShow = () => {
    const { changeShowMenu, showMenu } = Store.ui;
    console.log(showMenu, 'shwomie===',this.props);
    changeShowMenu(!showMenu);
  };
  render() {
    const { currentHistory } = Store.route;
    return (
      <div className="app-content">
        <div className={`app-left ${Store.ui.showMenu ? 'active' : ''}`}>
          <Logo/>
          <MenuList />
          <div className="close-bar" onClick={this.changeMenuShow}>
            <span className="close-icon">
              <Icon
                name={`${Store.ui.showMenu ? 'iconshouqi-' : 'iconzhankai-'}`}
              />
            </span>
          </div>
        </div>
        <div className="app-right">
          {currentHistory.isWebView ? (
            <iframe className="iframe" src={currentHistory.url} frameBorder="0"></iframe>
          ) : (
            this.props.children
          )}
        </div>
      </div>
    );
  }
}
