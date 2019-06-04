import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'

import "../../static/iconfont/iconfont.css";
import './index.less'
export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="itemBox">
          <div className="item">首页</div>
          <div className="item">下载App</div>

          <div className="item">
            <CSSTransition
              in={this.state.focused}
              timeout={300}
              classNames="slide"
            >
              <input className={`search ${this.state.focused ? "focused":''}`} placeholder="搜索" 
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            
            <a className={this.state.focused ? "focused":''}>
              <i className="iconfont icon-search"></i>
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