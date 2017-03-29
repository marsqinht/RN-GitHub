
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
//import NavigationBar from './NavigationBar';
import Toast,{DURATION} from 'react-native-easy-toast'

export default class List extends Component {
  constructor(props){
    super(props);
    //const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    this.state = {
      isLoading:true
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
      <NavigationBar
          title = {'Fetch'}
          style = {{
            backgroundColor:'#a9a9a9'
          }}

        ></NavigationBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  item:{
    height:30
  },
  line:{
    height:2,
    backgroundColor:'#000'
  }
});


