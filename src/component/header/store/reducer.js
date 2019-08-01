import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';
// immutable 不可变更的对象

//fromJS js对象转换成immutable对象
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable对象set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true)
    
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state;
}

