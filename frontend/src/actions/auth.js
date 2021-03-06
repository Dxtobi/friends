import axios from 'axios';
import isEmpty from '../validation/is-empty';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { GET_ERROR, GET_USERS, LOADING, LOGIN, SET_CURRENT_USER, SIGNUP, STOP_LOADING } from './types';
const endpoint ="https://friendsapp-api.herokuapp.com"// "http://192.168.137.96:4000"
// https://friendsapp-api.herokuapp.com


export const login =  (data) => dispatch => {
  console.log(data)
  dispatch({type:LOADING})
  axios.post(`${endpoint}/log/auth`, data)
   .then(res => {
      dispatch({
        type: LOGIN,
        payload: res.data
      })
      dispatch(setAuth(res))
      dispatch({type:STOP_LOADING})
   } )
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};

export const getUsers =  (skip) => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
  axios.get(`https://friendsapp-api.herokuapp.com/${skip}`)
   .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
   } )
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};

export const signup =  () => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
  axios.get(`${endpoint}/create/user/auth`)
   .then(res => {
      dispatch({
        type: SIGNUP,
        payload: res.data
      })
   } )
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};

export const cheackAut =  () => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
  const locId= localStorage.getItem("friendapp")
  console.log("id:",locId);
  axios.get(`${endpoint}/profile/${locId}`)
   .then(res => {
     console.log("data:", res.data);
     dispatch(setAuth(res))
     //return !isEmpty(res.data)
     dispatch({type:STOP_LOADING})
   })
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};

export const useGoogle =  () => dispatch => {
  //console.log(userData, history)
  dispatch({type:LOADING})
 //const locId= localStorage.getItem("friendapp")
 // console.log("id:",locId);
  axios.post(`${endpoint}/google/auth`)
   .then(res => {
    // console.log("data:", res.data);
     dispatch(setAuth(res))
     //return !isEmpty(res.data)
     dispatch({type:STOP_LOADING})
   })
   .catch( err =>
      { dispatch({
        type: GET_ERROR,
        payload: err
      })}
     );
};


export const setAuth = (res) => dispatch => {
  const { _id } = res.data;
 // console.log(_id);
      //Set token to localStorage
      dispatch({type:LOADING})
      localStorage.setItem('friendapp', _id );
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      })
      dispatch({type:STOP_LOADING})
     
}
export const clearAuth = () => dispatch => {
  dispatch({type:LOADING})
      localStorage.removeItem('friendapp' );
     console.log("called")
      dispatch({
        type: SET_CURRENT_USER,
        payload:{}
      })
      dispatch({type:STOP_LOADING})
}