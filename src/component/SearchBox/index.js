import React, {Component} from 'react'
import './index.less'
import './index.less'

export default class SearchBox extends Component {
  render () {
    const {handleMouseEnter} = this.props;
    return (
      <div className="searchBox"  onMouseEnter={handleMouseEnter}>
        <div className="searchTitle">
          <span>热门搜索</span>
          <span >换一换</span>
        </div>
        <div className="searchContent">
          <ul className="keyLists">
            {
              this.props.list.map((item,index) => {
                return (
                  <li className='s_key' key={index}>{item}</li>
                  // <li className='s_key' key={index}>123</li>
                )
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