import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.less'
import './index.less'
import { actionCreators } from '../header/store';

export default class SearchBox extends Component {
  render () {
    const {handleMouseEnter, handleMouseOut, handleChangeSearch} = this.props;
    return (
      <div className="searchBox"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
        <div className="searchTitle">
          <span>热门搜索</span>  
          <span className="change" onClick={handleChangeSearch}>
            <i 
              ref={r => this.spinIcon = r}
            className="iconfont icon-spin"></i>
            换一换
          </span>
        </div>
        <div className="searchContent">
          <ul className="keyLists">
            {
              this.props.list.map((item,index) => {
                if(item){
                  return (
                    <li className='s_key' key={index}>{item}</li>
                  )
                }
              })
            }
          </ul>
        </div>
        <div className="searchHistory">
          <ul>
            <li className="h_item">react</li>
            <li className="h_item">vue</li>
          </ul>
        </div>
      </div>
    )
  }
}


