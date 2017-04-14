import { combineReducers } from 'redux'
import navigationState from './navigationReducer'
import stopwatchReducer from './stopwatchReducer'
import settingReducer from './settingReducer'

export default combineReducers({
    navigationState,
    stopwatchReducer,
    settingReducer
})