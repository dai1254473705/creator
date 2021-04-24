/**
 * menu
 */
import './index.scss';
import React, { Component } from 'react';
import Icon from '../../../../components/Icon';
import { observer } from 'mobx-react';
import { IMenu } from '../../../../type.d';
import Store from '../../../../store';
import { Link } from 'react-router-dom';
@observer
export default class MenuList extends Component<unknown, never> {
  onClick = (item: IMenu) => {
    if (!item.url) {
      return;
    }
    Store.route.pushRoute(item);
  };

  private renderMenu = (menuList: IMenu[]): JSX.Element => {
    console.log(menuList);
    return (
      <>
        {menuList.map((item) => {
          return (
            <div className="menu-group" key={item.id}>
              <div className={`menu-item ${item.active ? 'active' : ''}`}>
                {item.favicon && (
                  <span className="menu-icon">
                    <Icon name={item.favicon} />
                  </span>
                )}
                {item.isWebView || !item.url ? (
                  <span
                    className="menu-text"
                    onClick={() => this.onClick(item)}
                  >
                    {item.title}
                  </span>
                ) : (
                  <Link
                    className="menu-text"
                    to={item.url}
                    onClick={() => this.onClick(item)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
              {item.children && (
                <div
                  className={`child-menu-item ${item.active ? 'active' : ''}`}
                >
                  {this.renderMenu(item.children)}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };
  render() {
    const { MENULIST } = Store.route;
    return <div className="menu-list">{this.renderMenu(MENULIST)}</div>;
  }
}
