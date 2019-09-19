import {fromJS} from 'immutable';

const defaultState = fromJS({
    articleList: [
        {
            id: 1,
            title: '标题',
            desc: '描述',
            imgUrl: ''
        },
        {
            id: 2,
            title: '标题',
            desc: '描述',
            imgUrl: ''
        }
    ]
});

export default (state = defaultState, action) => {
    return state;
}
  
  