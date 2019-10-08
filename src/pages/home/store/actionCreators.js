import axios from 'axios'
import * as actionTypes from './actionTypes'

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

const addHomeList = (result) => ({
    articleList: result.articleList
})
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            const action = addHomeList(result);
            dispatch(action);
        })
    }
} 