import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {actionCreators} from './store'

import './index.less'

// PureComponent 与 immutable.js 配合
class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='homeWrap'>
                <div className='homeLeft'>
                    <List ></List>
                    
                </div>
                <div className='homeRight'>
                    {/* recommend */}
                    <Recommend></Recommend>
                    {/* 下载 */}
                    <div className='downWrap'>
                        <div className='codeMin'>
                            <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                        </div>
                        <div className='downCont'>
                            <p>下载简书app</p>
                            <span>随时随地发现和创作内容</span>
                        </div>
                        {/* 弹出二维码 */}
                        <div className='codeMaxWrap'>
                            <div className='angle'></div>
                            <div className='codeMax'>
                                <img src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
                            </div>
                        </div>
                    </div>
                    {/* 作者 */}
                    <Writer></Writer>
                </div>
                {/* 返回顶部 */}
                {
                    this.props.showScroll?<div className='backTop' onClick={this.handleScrollTop}>返回顶部</div>: null
                }
                
            </div>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }


    }
})

export default connect(mapState, mapDispatch)(Home);