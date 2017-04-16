import { Navigation } from 'react-native-navigation';

import Home from './components/homeScreen';
import Record from './components/recordScreen';
import Statistic from './components/statisticScreen';
import Setting from './components/settingScreen';

import MonthDetail from './components/monthDetailScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
    Navigation.registerComponent('flexitime.home', () => Home, store, provider);
    Navigation.registerComponent('flexitime.record', () => Record, store, provider);
    Navigation.registerComponent('flexitime.statistic', () => Statistic, store, provider);
    Navigation.registerComponent('flexitime.setting', () => Setting, store, provider);
    Navigation.registerComponent('flexitime.monthdetail', () => MonthDetail, store, provider);
}