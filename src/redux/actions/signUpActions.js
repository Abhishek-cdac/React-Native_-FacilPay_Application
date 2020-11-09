import { SIGNUP_SUCCESS } from "./actionsTypes"

export const registration_Success = (status) => {
    return {
        type: 'SIGNUP_SUCCESS',
        payload: status
    }
}

