import * as React from 'react';
import { Text, View, Button,TouchableOpacity, StyleSheet,Image } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View  style={styles.Container}>
      <Image   style={styles.img} source="./assets/logom.png" />
      </View>
    )
  }
}
const styles=StyleSheet.create({
  Container:{
    backgroundColor:'black',
    marginTop:5,
     width: 350,
    height: 350,
  },
  img:{
  width: 50,
    height: 50,
    marginLeft: 95,
  }
})
export default AppHeader;