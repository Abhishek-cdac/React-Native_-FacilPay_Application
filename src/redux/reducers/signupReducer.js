import { SIGNUP_SUCCESS } from "../actions/actionsTypes";

const initialState = {
    isSignedUp: false,
    status: ''
}

const signup_Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNUP_SUCCESS': 
            return {
                ...state,
                isSignedUp: true,
                status: action.payload
            }

        default: return state;
    }

}

export default signup_Reducer;