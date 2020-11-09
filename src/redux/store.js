import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from './reducers/loginScreenReducer';
import signup_Reducer from './reducers/signupReducer';

const rootReducers = combineReducers({loginReducer, signup_Reducer})

//creating store
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;