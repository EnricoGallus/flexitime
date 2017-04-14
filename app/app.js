import React, {Component} from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import NavigationContainer from './containers/navigationContainer'

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer />
            </Provider>
        )
    }
}

export default App