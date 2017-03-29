
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';//底部导航

export default class List extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        
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


