import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writer: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
            writer: fromJS(action.writer),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList)
        });
}

const homeListData = (state, action) => {
    return state.merge({
            'articleList': state.get('articleList').concat(action.list),
            'articlePage': action.nextPage
        });
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME_DATA: 
        return changeHomeData(state, action);
        case actionTypes.HOME_LIST_DATA: 
        return homeListData(state, action);
        case actionTypes.TOGGLE_SCROLL_TOP: 
        return state.set('showScroll', action.show);
        default: return state
    }

}
  
  