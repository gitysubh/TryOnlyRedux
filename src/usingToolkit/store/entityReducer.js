import { combineReducers } from 'redux'
import reducer from './todoUsingSliceFunction'
import {userReducer} from './user'

export default combineReducers({
    todo: reducer,
    user: userReducer
});