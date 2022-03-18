import * as api from "../api";
import { AUTH, FETCHUSER, UPDATEUSER } from "./ActionTypes";

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

export const fetchUserData = id => async (dispatch) => {
  console.log("fetching user data...", id)
    try {
        const { data } = await api.fetchUser(id);
    
        console.log(data)
        dispatch({ type: FETCHUSER, payload: data });
      } catch (error) {
        console.log(error);
      }
    };

export const updateUser = (id, user) => async (dispatch) => {
  console.log(id, user)
  try {
    const { data } = await api.updateUser(id, user);

    dispatch({ type: UPDATEUSER, payload: data });
  } catch (error) {
    console.log(error);
  }
};