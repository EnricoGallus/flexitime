import React, {Component} from 'react'
import { Navigation } from 'react-native-navigation'

import { storeLoaded } from './store/storeLoader'
import { iconsMap } from './store/iconLoader'

const navigatorStyle = {
    navBarTranslucent: true,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    statusBarTextColorScheme: 'light',
    drawUnderTabBar: false
};

class App extends Component {
    constructor() {
        super();
        storeLoaded.then(() => this.startApp());
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'flexitime.home', // this is a registered name for a screen
                    title: 'Home',
                    icon: iconsMap['ios-time-outline'],
                    selectedIcon: iconsMap['ios-time'],
                    navigatorStyle,
                },
                {
                    label: 'Record',
                    screen: 'flexitime.record',
                    title: 'Record',
                    icon: iconsMap['ios-calendar-outline'],
                    selectedIcon: iconsMap['ios-calendar'],
                    navigatorStyle,
                },
                {
                    label: 'Statistic',
                    screen: 'flexitime.statistic',
                    title: 'Statistic',
                    icon: iconsMap['ios-stats-outline'],
                    selectedIcon: iconsMap['ios-stats'],
                    navigatorStyle,
                },
                {
                    label: 'Setting',
                    screen: 'flexitime.setting',
                    title: 'Setting',
                    icon: iconsMap['ios-settings-outline'],
                    selectedIcon: iconsMap['ios-settings'],
                    navigatorStyle,
                }
            ]
        });
    }
}

export default App