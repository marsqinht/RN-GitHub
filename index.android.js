/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';//底部导航
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Github extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={require("./assets/images/ic_polular.png")} />}
            renderSelectedIcon={() => <Image source={require("./assets/images/ic_polular.png")} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {homeView}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image source={require('./assets/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image source={require("./assets/images/ic_trending.png")} />}
            renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            {profileView}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Github', () => Github);
