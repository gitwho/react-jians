import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';
// immutable 不可变更的对象

//fromJS js对象转换成immutable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {

  // immutable对象set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS: return state.set('focused', true);
    case actionTypes.SEARCH_BLUR: return state.set('focused', false);
    case actionTypes.CHANGE_LIST: return state.set('list', action.data);
    default: return state;
  }
}

