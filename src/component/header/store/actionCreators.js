import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
    .then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    })
    .catch((error) => {
      console.log(error)
    });
  }
}

export const mouseEnter= () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseOut = () => ({
  type: actionTypes.MOUSE_OUT
})

export const changeSearch = () => ({
  type: actionTypes.CHANGE_SEARCH
})