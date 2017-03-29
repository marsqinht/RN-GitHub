/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  Navigator,
  View,
  TouchableOpacity
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';//底部导航
import NavigationBar from './js/NavigationBar';
export default class Github extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'tab-home'
    }
  }
  renderButton(image){
    return <TouchableOpacity >
              <Image style={{width:22, height:22,margin:4}}
               source={image}></Image>
            </TouchableOpacity>
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title = {'Boy'}
          style = {{
            backgroundColor:'#f08080'
          }}
          leftButton={this.renderButton(require('./assets/images/ic_arrow_back_white_36pt.png'))}
          rightButton={this.renderButton(require('./assets/images/ic_star.png'))}
        ></NavigationBar>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab-home'}
            title="最热"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./assets/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./assets/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tab-home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab-profile'}
            title="趋势"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./assets/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./assets/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tab-profile' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab-favorite'}
            title="收藏"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./assets/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./assets/images/ic_favorite.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tab-favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab-mine'}
            title="我的"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./assets/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./assets/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'tab-mine' })}>
            <View style={styles.page2}></View>
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
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'blue',
  },
  page2:{
   flex:1,
   backgroundColor:'red',
  },
  image:{
    width:22,
    height:22,
  }
});

AppRegistry.registerComponent('Github', () => Github);
