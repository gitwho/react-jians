import React, {PureComponent} from 'react';
import {connect} from 'react-redux'

class Recommend extends PureComponent {
    render() {
        const {recommend} = this.props;
        return (
            <div>
                {
                    recommend.map((item) => {
                        return (
                            <div className='itemList' key={item.get('id')}>
                                <img src={item.get('imgUrl')} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    recommend: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);