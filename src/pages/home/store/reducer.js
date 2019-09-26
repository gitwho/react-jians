import {fromJS} from 'immutable';

const defaultState = fromJS({
    articleList: [
        {
            id: 1,
            title: '标题',
            desc: '描述',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '标题',
            desc: '描述',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id: 2,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        }
    ],
    writer: [
        {
            id: 1,
            name: '万三',
            imgUrl: 'http://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 2,
            name: '李四',
            imgUrl: 'http://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
    ]
});

export default (state = defaultState, action) => {
    return state;
}
  
  