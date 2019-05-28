import React, {Component} from 'react'

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
            <input placeholder="搜索" />
          </div>
          <div className="item">
            <span>登录</span>
          </div>
        </div>
      </div>
    )
  }
}