import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    isloading: false,
    userDetails: {
        username: '',
        password: '',
    },
    error: '',
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_REQUEST: return {
            ...state,
            isloading: true,

        }

        case actionTypes.LOGIN_SUCCESS: return {
            ...state,
            isLoading: false,
            userDetails: action.payload,
            error: ''
        }

        case actionTypes.LOGIN_FAILURE: return {
            ...state,
            isLoading: false,
            userDetails: {},
            error: action.payload
        }
        case actionTypes.LOGOUT:
            return {
                ...state,
                userDetails: {},
            }
        default:
            return state;
    }
}

export default loginReducer