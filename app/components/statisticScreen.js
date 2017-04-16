import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ListView } from 'react-native'
import { MonthYearRow } from './monthYearRow'

class Statistic extends Component {
    constructor(props) {
        super(props);
        this._viewMonthDetail = this._viewMonthDetail.bind(this);
    }

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.groupByMonths());
        this.setState({ dataSource });
    }

    groupByMonths() {
        const map = new Map();
        this.props.timings.forEach((item) => {
            const savedAt = new Date(item.savedAt);
            const month = savedAt.getMonth() + 1;
            const year = savedAt.getFullYear();
            const key = month + "_" + year;
            if (!map.has(key)) {
                map.set(key, [item]);
            } else {
                map.get(key).push(item);
            }

        });

        const periods = [];
        for (let key of map.keys()) {
            let period = key.split("_");
            let monthValue = 0;
            map.get(key).map((item) => monthValue += item.elapsedTime);
            periods.push({ month: period[0], year: period[1], monthValue})
        }

        return periods;
    }

    _viewMonthDetail(month, year) {
        this.props.navigator.push({
            screen: 'flexitime.monthdetail',
            passProps: {
                month,
                year
            },
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={rowData => <MonthYearRow info={rowData} viewMonthDetail={this._viewMonthDetail} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        marginTop: 20
    },
    separator: {
        marginTop: 10,
        backgroundColor: '#8E8E8E'
    },
});


function mapStateToProps(state) {
    return {
        timings: state.stopwatchReducer.timings,
    };
}

export default connect(mapStateToProps)(Statistic)