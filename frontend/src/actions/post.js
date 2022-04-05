/// https://friendsapp-api.herokuapp.com/post/user/:id

import axios from 'axios';
//import isEmpty from '../validation/is-empty';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { GET_ERROR, LOADING, ADD_POST, GET_POST, MY_POST, STOP_LOADING } from './types';
const endpoint ="https://friendsapp-api.herokuapp.com"// "http://192.168.137.96:4000"
// https://friendsapp-api.herokuapp.com
export const addPostFeeling =  (data) => dispatch => {
 //console.log(data)
 dispatch({type:LOADING})
 const id = localStorage.getItem('friendapp');
 //console.log(localStorage.getItem('friendapp'))
 //console.log("id:--- ", id);
  axios.post(`${endpoint}/post/user/${id}`, data)
   .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
      //dispatch(setAuth(res))
   })
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};

export const getPosts =  (skip) => dispatch => {
    //console.log(data)
   dispatch({type:LOADING})
   const id = localStorage.getItem('friendapp');
    //console.log(id)
    axios.get(`${endpoint}/posts/${skip}`,)
     .then(res => {
      //   console.log(res.data)
        dispatch({
          type: GET_POST,
          payload: res.data
        })
        //dispatch(setAuth(res))
        dispatch({type:STOP_LOADING})
     })
     .catch( err =>
        { dispatch({
          type: GET_ERROR,
          payload: err
        })}
       );
  };
  
  
export const getMyPosts =  () => dispatch => {
  //console.log(data)
 dispatch({type:LOADING})
 const id = localStorage.getItem('friendapp');
  //console.log(id)
  axios.get(`${endpoint}/profile/post/${id}`,)
   .then(res => {
       console.log(res.data)
      dispatch({
        type: MY_POST,
        payload: res.data
      })
      //dispatch(setAuth(res))
      dispatch({type:STOP_LOADING})
   })
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};


  export const deletePost =  (id) => dispatch => {
    //console.log(data)
   dispatch({type:LOADING})
   //const id = localStorage.getItem('friendapp');
    //console.log(id)
    axios.delete(`${endpoint}/del/${id}`,)
     .then(res => {
        dispatch(getMyPosts())
        //dispatch(setAuth(res))
        dispatch({type:STOP_LOADING})
     })
     .catch( err =>
        { dispatch({
          type: GET_ERROR,
          payload: err
        })}
       );
  };
  


  