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
import List from './js/ListView'

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
        <List/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
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
