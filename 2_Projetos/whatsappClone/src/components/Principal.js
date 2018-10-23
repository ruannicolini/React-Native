import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
    );
  }
}

// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => <View style={ [ styles.container, { backgroundColor:'#ff4081'} ] } />
// const SecondRoute = () => <View style={ [ styles.container, { backgroundColor:'#ff4081'} ] } />

// export default class Principal extends Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: '1', title: 'First' },
//       { key: '2', title: 'Second' }
//     ],
//   };

//   _handleChangeTab = index => this.setState({ index });

//   _renderHeader = props => <TabBarMenu {...props} />;

//   _renderScene = SceneMap({
//     '1': FirstRoute,
//     '2': SecondRoute
//   });

//   render() {
//     return (
//       <TabViewAnimated
//         style={styles.container}
//         navigationState={this.state}
//         renderScene={this._renderScene}
//         renderHeader={this._renderHeader}
//         onRequestChangeTab={this._handleChangeTab}
//       />
//     );
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});