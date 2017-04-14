import { connect } from 'react-redux'
import Navigation from '../components/navigation'
import { navPush, navPop, selectTab } from '../actions/navActions'

export default connect(
  state => ({
    navigationState: state.navigationState,
  }),

  dispatch => ({
    backAction: (tabkey) => {
      dispatch(navPop(tabkey))
    },

    push: (route) => {
      dispatch(navPush(route))
    },

    changeTab: (tabKey) => {
      dispatch(selectTab(tabKey))
    }
  })
)(Navigation)