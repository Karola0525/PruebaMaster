import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Image,Button } from 'react-native';
import AppHeader from '../components/AppHeader';
import { DataTable } from 'react-native-paper';

export default class HomeScreen extends Component{
constructor(props) {
    super(props);
}

render(){
  return(
    <View
     style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column'
        },
      ]}>
      <View style={styles.rojo}>
          <Image style={styles.img} source={require('../assets/logom.png')} />
      </View>
      <View style={styles.naranja}>
      
       </View>
      
      <View style={styles.verde}> 
       <Button 
        color="black"
        title="Inversiones"
        onPress={() => this.props.navigation.navigate('Inversiones')}
      />
      </View>

    
    </View>
  )
}


}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  img:{
  width: 290,
    height: 40,
    marginBottom:300,
    marginTop:20
  },
  rojo:{
flex: 1, 
backgroundColor: 'black', 
alignItems:'center'
  },
naranja:{
flex: 4, 
backgroundColor: 'white'
  },
  verde:{
flex: 2, 
backgroundColor: '#61EDF8',
alignItems:'center', 
justifyContent:'end'
  },

})
