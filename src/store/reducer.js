import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../component/header/store';

// 生成immutable对象
const reducer = combineReducers({
  header: headerReducer
});

export default reducer;