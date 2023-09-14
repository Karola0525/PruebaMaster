import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,SafeAreaView,TextInput,Image } from 'react-native';

export default class Registro extends Component{
constructor(props) {
    super(props);
}

render(){
  return(
    <View style={[
    styles.container,{
      flexDirection:'column'
    }
  ]}>
   <View style={styles.rojo}>
  <Image style={styles.img} source={require('../assets/logom.png')} />

  </View>


  <View style={styles.naranja}>
   <SafeAreaView>
    <View>
    <Text style={styles.usuarioText}>Usuario</Text>
    <TextInput 
     style={styles.inputBoxUsuario}
     onChangeText={text => this.setState({email: text})}
     placeholder={"Correo Electrónico"}
     autoFocus
    ></TextInput>
    <Text style={styles.usuarioText}>Contraseña</Text>
     <TextInput 
     style={styles.inputBoxPass}
     onChangeText={text => this.setState({password: text})}
     placeholder={"Password"}
     secureTextEntry
    ></TextInput>
     
    </View>
     
     </SafeAreaView>

  </View>

  <View style={styles.verde}>
  
       <Button
        color="black"
        title="Ir al inicio"
        onPress={() => this.props.navigation.navigate('Inicio')}
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
flex: 1, 
backgroundColor: '#61EDF8',
alignItems:'center', 
justifyContent:'end'
  },
boton:{
  alignItems:screenLeft
},
  inputBoxUsuario: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    outline: 'none',
  },
   inputBoxPass: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    outline: 'none',
  },
  usuarioText: {
    marginTop:20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }, 
  ingresar: {
    marginTop:100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'red'
  }

})