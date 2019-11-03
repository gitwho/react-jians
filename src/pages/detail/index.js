import React, {Component} from 'react';
import {connect} from 'react-redux'
import {actionCreators} from './store'

import './index.less'

class Detail extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className='detailPage'>
                <h2 className='title'>
                    {this.props.title}
                </h2>
                <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}}></div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        const action = actionCreators.getDetail(id);
        dispatch(action);
    },
})
export default connect(mapState, mapDispatch)(Detail);