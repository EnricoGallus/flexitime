import * as NavigationStateUtils from 'NavigationStateUtils'
import { NAV_PUSH, NAV_POP, SELECT_TAB } from '../actions/navActions'

const initialState = {
    tabs: {
        index: 0,
        routes: [
            {key: 'Home', icon: 'clock-o'},
            {key: 'Record', icon: 'calendar'},
            {key: 'Statistic', icon: 'tasks'},
            {key: 'Setting', icon: 'cog'}
        ]
    },

    Home: {
        index: 0,
        routes: [{key: 'home', title: 'Home'}]
    },

    Record: {
        index: 0,
        routes: [{key: 'record', title: 'Record'}]
    },

    Statistic: {
        index: 0,
        routes: [{key: 'statistic', title: 'Statistic'}]
    },

    Setting: {
        index: 0,
        routes: [{key: 'setting', title: 'Setting'}]
    }
}


function navigationState(state=initialState, action) {
    if(!action) return state

    switch (action.type){
        case NAV_PUSH: {
            const {tabs} = state;
            const tabKey = tabs.routes[tabs.index].key
            const scenes = state[tabKey]
            const nextScenes = NavigationStateUtils.push(scenes, action.route)

            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes
                }
                break
            }
        }

        case NAV_POP: {
            const {tabs} = state;
            const tabKey = tabs.routes[tabs.index].key
            const scenes = state[tabKey]
            const nextScenes = NavigationStateUtils.pop(scenes)

            if(scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes
                }
                break
            }
        }

        case SELECT_TAB: {
            const tabKey = action.tabKey
            const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey)

            if(state.tabs !== tabs) {
                return {
                    ...state,
                    tabs
                }
            }
            return state
        }

        default:
            return state

    }
}

export default navigationState