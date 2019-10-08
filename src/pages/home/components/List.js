import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store/actionCreators'
class List extends Component {
    render() {
        const {list, getMoreList} = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <div className='listWrap' key={item.get('id')}>
                                <div className='left'>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <div className='content'>{item.get('desc')}</div>
                                </div>
                                <div className='right'>
                                    <img src={item.get('imgUrl')} />
                                </div>
                            </div>
                        )
                    })
                }
                <div className='loadMore' onClick={getMoreList()}>
                    阅读更多
                </div>
            </div>
            // <div className='listWrap'>
            //     <div className='left'>
            //         <h3 className='title'>公告</h3>
            //         <div className='content'>xxxx</div>
            //     </div>
            //     <div className='right'>
            //         <img src="https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
            //     </div>
            // </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
    getMoreList() {
        const action = actionCreators.getMoreList();
        dispatch(action);
    }
})
export default connect(mapState, mapDispatch)(List)