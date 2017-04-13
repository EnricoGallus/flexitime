import { combineReducers } from 'redux'
import navigationState from './NavReducer'
import stopwatchReducer from './stopwatchReducer'

export default combineReducers({
    navigationState,
    stopwatchReducer
})