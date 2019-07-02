import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import "../../static/iconfont/iconfont.css";
import './index.less'

const Header = (props) => {
  return (
    <div className="header">
        <div className="logo"></div>
        <div className="itemWrap">
          <div className="itemBox">
            <div className="item">首页</div>
            <div className="item">下载App</div>
            <div className="item">
              <CSSTransition
                in={props.focused}
                timeout={300}
                classNames="slide"
              >
                <input className={`search ${props.focused ? "focused":''}`} placeholder="搜索" 
                  onFocus={props.handleInputFocus}
                  onBlur={props.handleInputBlur}
                />
              </CSSTransition>
              
              <a className={props.focused ? "focused":''}>
                <i className="iconfont icon-search"></i>
              </a>
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


const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'focus',
      };
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'blur',
      };
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)