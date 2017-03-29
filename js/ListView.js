
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
import NavigationBar from './NavigationBar';
import Toast,{DURATION} from 'react-native-easy-toast'
var data = {
  'result':[
    {
      address:'哈迪阿斯顿死啊速度1',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度2',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度3',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度4',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度5',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度6',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度7',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度8',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度9',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度10',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度11',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度12',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度13',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度14',
      name:'王二麻子'
    },
    {
      address:'哈迪阿斯顿死啊速度15',
      name:'王二麻子'
    }
    
  ]
}
export default class List extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    this.state = {
      dataSource:ds.cloneWithRows(data.result),
      isLoading:true
    }
  }
  renderButton(image){
      return <TouchableOpacity >
                <Image style={{width:22, height:22,margin:4}}
                source={image}></Image>
              </TouchableOpacity>
  }
  renderRow(item){//渲染列表
    return <View >
      <TouchableOpacity
        onPress={()=>{this.toast.show(item.name)}}
      >
    <Text style={styles.item}>{item.name}</Text><Text style={styles.item}>{item.address}</Text>
     </TouchableOpacity>
    </View>
   
  }
  separator(sectionID, rowID, adjacentRowHighlighted){
    return <View key={rowID} style={styles.line}></View>
  }
  onLoad(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      },2000)
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <NavigationBar
          title = {'Boy'}
          style = {{
            backgroundColor:'#f08080'
          }}
          leftButton={this.renderButton(require('../assets/images/ic_arrow_back_white_36pt.png'))}
          rightButton={this.renderButton(require('../assets/images/ic_star.png'))}
        ></NavigationBar>
        <ListView
         dataSource={this.state.dataSource}
         renderRow={(item)=>this.renderRow(item)}
        //  refreshControl={
        //    <RefreshControl
        //     refreshing={this.state.isLoading}
        //     onRefresh={()=>this.onLoad()}
        //    />
        //  }
         renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>this.separator(sectionID, rowID, adjacentRowHighlighted)}
        ></ListView>
        <Toast 
          ref={toast=>this.toast=toast}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
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


