import { FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS } from "./userTypes";
import axios from 'axios';
export const fetchUserRquest = ()=>{
    return {
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (users)=>{
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

// here the concept of thunk is used
export const fetchUsers = ()=>{
    return async (dispatch) => {
        dispatch(fetchUserRquest())
        try {
           let res = await axios.get('https://jsonplaceholder.typicode.com/users');
           let users = res.data;
           dispatch(fetchUserSuccess(users));
        }
        catch(error) {
             let errMsg = error.message;
             dispatch(fetchUserFailure(errMsg));
        }
    }
}