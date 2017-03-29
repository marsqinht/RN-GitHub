import React,{Component}from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Navigator
 } from 'react-native';
 
import Welcome from './Welcome'
 //function setup(){
 export default class Root extends Component{
    constructor(props){
      super(props);
      this.state={
        aa:''
      }
    }
    renderScene(route,navigator){
      let Component = route.component;
      return <Component {...route.params} navigator={navigator} />

    }
    render(){
      return <Navigator 
          initialRoute={{component:Welcome}}
          renderScene={(route,navigator)=>this.renderScene(route,navigator)}
      />
    }
  }

  // return <Root/>
 //}

 //modules.export=setup;