import  { GET_CON_ID, GET_ERROR, GET_MESSAGES, GET_USERS_FRIENDS, LOADING, LOGIN, SET_CURRENT_USER, SIGNUP, STOP_LOADING, GET_MESSAGE, GET_USERS } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: { },
  loading:false,
  friends:[],
  messages:[],
  conversation:{},
  users:[]

}

export default function app( state = initialState, action ){
  switch( action.type ){
    case SET_CURRENT_USER:
      return{
          ...state,
          isAuthenticated: !isEmpty( action.payload ),
          user: action.payload,
          loading:false
      }
    case LOGIN:
        return{
            ...state,
            user: action.payload,
            loading:false
        }
    case SIGNUP:
          return{
              ...state,
              user: action.payload,
              loading:false
          }
          case GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading:false
            }   
    case LOADING:
              return{
                  ...state,
                 loading:true
              }
    case STOP_LOADING:
                return{
                    ...state,
                   loading:false,
                  //functiom:()=>console.log("called to stop")
                }
    case GET_CON_ID:
                  return{
                      ...state,
                     loading:false,
                     conversation:action.payload,
                    //functiom:()=>console.log("called to stop")
                  }
                  case GET_MESSAGES:
                    return{
                        ...state,
                       loading:false,
                     messages:action.payload,

                      //functiom:()=>console.log("called to stop")
                    } 
                    case GET_USERS_FRIENDS:
                    return{
                        ...state,
                       loading:false,
                     friends:action.payload,

                      //functiom:()=>console.log("called to stop")
                    }
    case GET_ERROR:
                return{
                    ...state,
                   loading:false,
                  //functiom:()=>console.log("called to stop")
                }
    case GET_MESSAGE:
                return{
                      ...state,
                     messages:[...state.messages, action.payload],
                    //functiom:()=>console.log("called to stop")
                  }  
//GET_MESSAGES
                //
    default:
      return state;
  }
}