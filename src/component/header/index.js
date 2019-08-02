import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import "../../static/iconfont/iconfont.css";
import './index.less'
import {actionCreators} from './store'

import SearchBox from '../SearchBox'



class Header extends Component {
  getListArea = () => {
    const {focused, list} = this.props;
    if (focused) {
      return (
        <SearchBox list={list}></SearchBox>
      )
    }else{
      return null;
    }
  }

  render() {
    const {focused,  handleInputFocus, handleInputBlur} = this.props;
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="itemWrap">
          <div className="itemBox">
            <div className="item">首页</div>
            <div className="item">下载App</div>
            <div className="item">
              <CSSTransition
                in={focused}
                timeout={300}
                classNames="slide"
              >
                <input className={`search ${focused ? "focused":''}`} placeholder="搜索" 
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              {/* 搜索图标 */}
              <a className={focused ? "focused":''}>
                <i className="iconfont icon-search"></i>
              </a>

              {/* 搜索弹框 */}
              {this.getListArea()}
            </div>  
          </div>
          <div className="itemBox">
            <div className="item">
            <span className="loginBtn">登录</span>
          </div>
          
          <div className="item">
            <span>注册</span>
          </div>
          <div className="item">
            <span>写文章</span>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

// // 无状态组件
// const Header = (props) => {
//   return (
    
//   )
// }


const mapStateToProps = (state) => {
  return {
    // 常规js对象
    // focused: state.header.focused
    // state.header 是 immutable 对象的get方法
    // focused: state.header.get('focused')
    // state和state.header 是  immutable 对象
    // focused: state.get('header').get('focused')或者如下
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
      dispatch(actionCreators.getList());
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)