import React,{Component,PropTypes} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform
 } from 'react-native';
 const NAV_HEIGHT_ANDROID = 50;
 const NAV_HEIGHT_IOS = 44;
 const STATUS_BAR_HEIGHT = 20;
 const StatusBarStyle = {
   backgroundColor:PropTypes.string,
   barStyle:PropTypes.oneOf(['default', 'light-content', 'dark-content']),
   hidden:PropTypes.bool
 }

 export default class NavigationBar extends Component {
    static propTypes = {
     // style: View.PropTypes.style,
      title: PropTypes.string,
      titleView: PropTypes.element,
      hide: PropTypes.bool,
      leftButton: PropTypes.element,
      rightButton: PropTypes.element,
      statusBar:PropTypes.shape(StatusBarStyle)
    };
    static defaultProps = {
      statusBar:{
        backgroundColor:'red',
        barStyle:'light-content',
        hidden:false
      }
    }
    constructor(props){
      super(props);
      this.state = {
        title: '',
        hide: false
      }
    }

    render(){
      //console.log(this.props.statusBar)
      let status = <View style={style.statusBar}>
        <StatusBar {...this.props.statusBar}/>
      </View>
      let titleView = this.props.titleView?this.props.titleView:<Text style={style.title}>{this.props.title}</Text>
      let content = <View style={style.navBar}>
        {this.props.leftButton}
        <View style={style.titleViewContainer}>
        {titleView}
         </View>
        {this.props.rightButton}
      </View>
      return (
        <View style={[style.container,this.props.style]}>
        {status}
        {content}
        </View>
      )
    }


 };

 const style = StyleSheet.create({
    container:{
      //backgroundColor:'gray'
    },
    navBar:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      //backgroundColor:'red',
      height:Platform.OS==='ios'?NAV_HEIGHT_IOS:NAV_HEIGHT_ANDROID
    },
    titleViewContainer:{
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      top:0,
      bottom:0,
      left:40,
      right:40
    },
    title:{
      fontSize:20,
      color:'#fff'
    },
    statusBar:{
      height:Platform.OS==='ios'?20:0
    }

 })
