import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "../../static/iconfont/iconfont.css";
import './index.less'
import {actionCreators} from './store'

import SearchBox from '../SearchBox'



class Header extends Component {
  
  getListArea = () => {
    const {focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseOut, handleChangeSearch} = this.props;
    // console.log(this.props);
    let curList = [];
    const jsList = list.toJS();
    for (let i = (page-1)*10; i < page*10; i++) {
      curList.push(jsList[i]);
    }
    // console.log(focused, mouseIn);
    if (focused || mouseIn) {
      // console.log(focused, mouseIn);
      return (
        <SearchBox ref={(r) => this.searchBox = r}
          list={curList} 
          page={page}
          totalPage={totalPage}
          handleMouseEnter={handleMouseEnter} 
          handleMouseOut={handleMouseOut} 
          handleChangeSearch={()=>{return handleChangeSearch(page, totalPage, this.searchBox)}}>
        </SearchBox>
      )
    }else{
      return null;
    }
  }

  render() {
    const {focused,  handleInputFocus, handleInputBlur, handleMouseEnter, list} = this.props;
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="itemWrap">
          <div className="itemBox">
            <Link to='/'>
              <div className="item">首页</div>
            </Link>
            <div className="item">下载App</div>
            <div className="item">
              <CSSTransition
                in={focused}
                timeout={300}
                classNames="slide"
              >
                {/* 搜索框 */}
                <input className={`search ${focused ? "focused":''}`} placeholder="搜索" 
                  onFocus={() => handleInputFocus(list)}
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      const action = actionCreators.searchFocus();
      console.log(list);
      if(list.size<=0){
        dispatch(actionCreators.getList());
      }
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action)
    },
    handleMouseEnter() {
      console.log('enter');
      const action = actionCreators.mouseEnter();
      dispatch(action)
    },
    handleMouseOut() {
      console.log('out');
      const action = actionCreators.mouseOut();
      dispatch(action);
    },
    handleChangeSearch(page, totalPage, searchBox) {
      let spin = searchBox.spinIcon;

      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);

      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle+360) +'deg)';

      // console.log(originAngle)

      // console.log('change');
      let action;
      // console.log(page, totalPage);
      if(page < totalPage){
        action = actionCreators.changeSearch(page+1);
      }else{
        action = actionCreators.changeSearch(1);
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)