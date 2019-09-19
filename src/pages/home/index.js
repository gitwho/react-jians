import React, {Component} from 'react';

import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import './index.less'


class Home extends Component {
    render() {
        return (
            <div className='homeWrap'>
                <div className='homeLeft'>
                    <List></List>
                </div>
                <div className='homeRight'>
                    right
                </div>
            </div>
        )
    }
}

export default Home