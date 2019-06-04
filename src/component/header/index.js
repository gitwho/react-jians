import React, {Component} from 'react'

import "../../static/iconfont/iconfont.css";
import './index.less'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="itemBox">
          <div className="item">首页</div>
          <div className="item">下载App</div>
          <div className="item">
            <input className="search" placeholder="搜索" />
            <a>
              <i className="search icon-search"></i>
            </a>
          </div>
          <div className="item">
            <span className="loginBtn">登录</span>
          </div>
        </div>
      </div>
    )
  }
}