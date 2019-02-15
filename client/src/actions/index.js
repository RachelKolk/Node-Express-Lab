import axios from 'axios';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const POSTS_FETCHED = 'POSTS_FETCHED';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const getPosts = () => dispatch => {
    dispatch({type: FETCHING_POSTS});
    axios
    .get('http://localhost:4000/api/posts')
    .then(res => dispatch({type: POSTS_FETCHED, payload: res.data}))
    .catch(err => dispatch({type: FETCH_POST_FAILURE, payload: err}));
  };
  