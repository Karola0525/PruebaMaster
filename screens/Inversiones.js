import React, { Component } from 'react';
import axios from "axios";
import { View, Text, Button, Image,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { DataTable } from 'react-native-paper';


export default class Inversiones extends Component{
constructor(props){
  super(props);
  this.state={
    data:[],
  }
}
componentDidMount(){
  this.getUSDDATA()
}

getUSDDATA=()=>{
  axios
  .get("https://api.twelvedata.com/time_series?symbol=USD&interval=1month&apikey=e0fe5ea1b8984a848335b67f79ff0c71")
  .then(response => {
              console.log(response)
                this.setState({ data: response.data.values })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
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
          <Button 
          color="black"
        title="Ir al inicio"
        onPress={() => this.props.navigation.navigate('Inicio')}
      />
      </View>
      <View style={styles.naranja}>
      <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Datetime</DataTable.Title>
        <DataTable.Title>Open</DataTable.Title>
        <DataTable.Title>High</DataTable.Title>
        <DataTable.Title>Low</DataTable.Title>
        <DataTable.Title>Close</DataTable.Title>
        <DataTable.Title>Volume</DataTable.Title>
      </DataTable.Header>

      {this.state.data.map((value) => (
        <DataTable.Row>
        <DataTable.Cell>{value.datetime}</DataTable.Cell>
        <DataTable.Cell>{value.open}</DataTable.Cell>
        <DataTable.Cell>{value.high}</DataTable.Cell>
        <DataTable.Cell>{value.low}</DataTable.Cell>
        <DataTable.Cell>{value.close}</DataTable.Cell>
        <DataTable.Cell>{value.volume}</DataTable.Cell>
      </DataTable.Row>
      ))}
    </DataTable>
       </View>
      
      <View style={styles.verde}> 
       <Button
         color="black"
        title="REGISTRARSE"
        onPress={() => this.props.navigation.navigate('Registro')}
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
flex: 15, 
backgroundColor: 'white'
  },
  verde:{
flex: 1, 
backgroundColor: '#61EDF8',
alignItems:'center', 
justifyContent:'end'
  },

})
