import { combineReducers } from 'redux'
import navigationState from './navigationReducer'
import stopwatchReducer from './stopwatchReducer'

export default combineReducers({
    navigationState,
    stopwatchReducer
})