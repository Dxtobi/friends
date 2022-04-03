import axios from 'axios';
import isEmpty from '../validation/is-empty';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { GET_ERROR, LOADING, GET_CON_ID, STOP_LOADING, GET_MESSAGES, GET_USERS_FRIENDS, GET_MESSAGE } from './types';
const endpoint ="https://friendsapp-api.herokuapp.com" // "http://192.168.137.96:4000"
// "https://friendsapp-api.herokuapp.com"
export const conversation =  (body) => dispatch => {
    
    dispatch({type:LOADING})
    
     axios.post(`${endpoint}/conversation`, body)
      .then(res => {
     //     console.log(body)
         dispatch({
             type:GET_CON_ID,
             payload:res.data
         })
         dispatch(getMessages(res.data._id))
         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };

   //list of contact
   export const getConversations =  () => dispatch => {

    const id = localStorage.getItem('friendapp');
    //dispatch({type:LOADING})
    
     axios.get(`${endpoint}/conversation/${id}`,)
      .then(res => {
        //console.log(id)
         dispatch({
             type:GET_USERS_FRIENDS,
             payload:res.data
         })
         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };

   //one on one
   export const getMessages =  (id) => dispatch => {
    
    //dispatch({type:LOADING})
    
     axios.get(`${endpoint}/message/${id}`,)
      .then(res => {
      //  console.log(id)
         dispatch({
             type:GET_MESSAGES,
             payload:res.data
         })
         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };
   
//send msg
   export const sendMessages =  (body, id) => dispatch => {
    
   // dispatch({type:LOADING})
    
     axios.post(`${endpoint}/log/message/`, body)
      .then(res => {
       // console.log(id)
        
         dispatch({
          type: GET_MESSAGE,
          payload: res.data
         })

         dispatch({type:STOP_LOADING})
      })
      .catch( err =>
         { dispatch({
           type: GET_ERROR,
           payload: err
         })}
        );
   };
   