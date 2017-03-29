import React,{Component}from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Navigator
 } from 'react-native';
import NavBar from '../common/NavigationBar'
import Home from './Home'
class Welcome extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'welcome'
    }
  }
  componentDidMount() {
    this.timer=setTimeout(()=>{
      this.props.navigator.resetTo({
        component:Home
      })
    },2000)
  }
  componentWillUnmount() {
    this.timer&&clearTimeout(this.timer)
  }
   render() {
     return <View>
      <NavBar 
        title={'欢迎'}
        style={{ backgroundColor:'red'}}
      />
     <Text>
      {this.state.title}
     </Text>
    
    
     </View>
   }
 }
 
 export default Welcome;