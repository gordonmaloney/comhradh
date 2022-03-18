import { AUTH, LOGOUT, FETCHUSER } from "../actions/ActionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log("dispatching auth reducer, ", action.data)
      localStorage.setItem('profile', JSON.stringify({...action?.data}));

      return {...state, authData: action.data};
      break;

    case LOGOUT:
    
        localStorage.clear()
        return {...state, authData: null};

      return state;
      break;

    case FETCHUSER: 
      console.log("reducing... ", action.payload)
      
      return (action.payload)
    default:
      return state;
      break;
  }
};

export default authReducer;