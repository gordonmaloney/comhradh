import * as api from "../api";
import { AUTH, FETCHUSER } from "./ActionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)

    dispatch({ type: AUTH, data })

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log("action, ", formData)
    
    const { data } = await api.signUp(formData)
    
    dispatch({ type: AUTH, data })

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserData = email => async (dispatch) => {
  console.log("fetching user data...", email)
    try {
        const { data } = await api.fetchUser(email);
    
        console.log(data)
        dispatch({ type: FETCHUSER, payload: data });
      } catch (error) {
        console.log(error);
      }
    };