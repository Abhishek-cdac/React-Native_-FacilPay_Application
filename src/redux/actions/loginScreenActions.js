import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT } from './actionsTypes';
import axios from 'axios';

export const login_request = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

export const login_success = userDetails => {
    return {
        type: LOGIN_SUCCESS,
        payload: userDetails
    }
}

export const login_failure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

// export const fetchLoginRequest = () => {
//     return (dispatch) => {
//         dispatch(login_request)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//          .then(response => {
//              console.log(response.data)
//              const users = response.data
//              dispatch(login_success(users))
//          })
//          .catch(error => {
//              const errorMsg = error.message
//              dispatch(login_failure(error))
//          })
//     }
// }

