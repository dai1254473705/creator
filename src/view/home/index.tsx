import React, { Component } from 'react';
import website from './website';
import { IMenu } from '../../type.d';
import './index.scss';
export default class Home extends Component {
  private openWeb = (item2: IMenu) => {
    window.open(item2.url);
  };
  render() {
    return (
      <div className="menu-layout">
        {website.map((item) => {
          return (
            <div className="menu-group" key={item.id}>
              <div className="menu-title">{item.title}</div>
              <div className="menu-item-group">
                {Array.isArray(item.children) &&
                  item.children.map((item2) => {
                    return (
                      <div
                        className={`menu-item ${item2.bgColor}`}
                        key={item2.id}
                        onClick={() => this.openWeb(item2)}
                      >
                        <img
                          className="menu-icon"
                          src={item2.favicon}
                          alt={item2.title}
                        />
                        <p className="menu-text">{item2.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
