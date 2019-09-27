import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {actionCreators} from './store'


import './index.less'


class Home extends Component {
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
            </div>
        )
    }

    componentDidMount(){
        

        this.props.changeHomeData();
    }
    
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);