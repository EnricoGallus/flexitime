import React, {Component} from 'react'
import { View, Text } from 'react-native'

import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'

import configureStore from './store/configureStore'
import NavigationContainer from './containers/navigationContainer'

const store = configureStore()

class App extends Component {
    constructor() {
        super()
        this.state = { isRehydrated: false }
    }

    componentWillMount(){
        persistStore(
            store,
            {storage: AsyncStorage, blacklist: ['navigationReducer']},
            () => this.setState({isRehydrated: true}))
    }

    render() {
        if(!this.state.isRehydrated){
            return (
                <View>
                <Text>Loading...</Text>
                </View>)
        }
        return (
            <Provider store={store}>
                <NavigationContainer />
            </Provider>
        )
    }
}

export default App