import { combineReducers } from 'redux'
import stopwatchReducer from './stopwatchReducer'
import settingReducer from './settingReducer'

export default combineReducers({
    stopwatchReducer,
    settingReducer
})