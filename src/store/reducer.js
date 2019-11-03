import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../component/header/store';
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'

// 生成immutable对象
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
});

export default reducer;