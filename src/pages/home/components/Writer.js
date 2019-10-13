import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Writer extends PureComponent {
    render() {
        const {writer} = this.props;

        return (
            <div className='writerCont'>
                <div className="w_tit">
                    <span>推荐作者</span>
                    <span>换一批</span>
                </div>
                <ul className='w_list'>
                    {
                        writer.map((item) => {
                            return (
                                <li className='w_L_item' key={item.get('id')}>
                                    <div className='w_writer'>
                                        <img src={item.get('imgUrl')} />
                                        <div className='w_info'>
                                            <h5>{item.get('name')}</h5>
                                            <p>写了很多字</p>
                                        </div>
                                    </div>
                                    <span>+关注</span>
                                </li>
                            )
                        })
                    }
                    

                    {/* <li className='w_L_item'>
                        <div className='w_writer'>
                            <img src='http://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                            <div className='w_info'>
                                <h5>往山顶</h5>
                                <p>写了很多字</p>
                            </div>
                        </div>
                        <span>+关注</span>
                    </li> */}
                </ul>
            </div>
        )
    }
}

const mapState =  (state) => ({
    writer: state.getIn(['home', 'writer'])
});

export default connect(mapState, null)(Writer);