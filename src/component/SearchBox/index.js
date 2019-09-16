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
          <span onClick={handleChangeSearch}>换一换</span>
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

// const mapStateToProps = (state) => {
//   return state
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleChangeSearch() {
//       console.log('searchlist');
//       const action = actionCreators.changeSearch();
//       dispatch(action)
//     }
//   }
// }

//  connect(mapStateToProps, mapDispatchToProps)(SearchBox)

