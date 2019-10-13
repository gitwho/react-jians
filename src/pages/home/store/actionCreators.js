import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writer: result.writer
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

const addHomeList = (list, nextPage) => ({
    type: actionTypes.HOME_LIST_DATA,
    list: fromJS(list),
    nextPage: nextPage
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data;
            console.log(result)
            const action = addHomeList(result, page+1);
            dispatch(action);
        })
    }
} 

export const toggleTopShow = (bool) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show: bool 
})