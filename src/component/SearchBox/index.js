import React, {Component} from 'react'
import './index.less'

export default class SearchBox extends Component {
  render () {
    return (
      <div className="searchBox">
        <div className="searchTitle">
          <span>热门搜索</span>
          <span>换一换</span>
        </div>
        <div className="searchContent">
          <ul className="keyLists">
            <li className="s_key">区块链</li>
          </ul>
        </div>
      </div>
    )
  }
}