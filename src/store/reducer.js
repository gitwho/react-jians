import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../component/header/store';
import {reducer as homeReducer} from '../pages/home/store'

// 生成immutable对象
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
});

export default reducer;