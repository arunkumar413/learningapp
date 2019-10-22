import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Login extends Component {

  constructor(props){
    super(props)

  }

 loginWithGoogle=()=>{
   console.log('login with google')
 }

 loginWithFacebook=()=>{
   console.log("log in with facebook")
 }
    
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Email" style={styles.text_input_style} />
        <TextInput
          placeholder="Password"
          style={styles.text_input_style}
        />
        
        <TouchableOpacity style={styles.sbumit_button_style}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:16,}}>Login</Text>
        </TouchableOpacity>
        <Text style={{paddingBottom:10}}> Or use social login</Text>
        <TouchableOpacity style={styles.google_login} onPress={this.loginWithGoogle}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:16}}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebook_login} onPress={this.loginWithFacebook}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:16}}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 30
  },
  welcome: {
    fontSize: 22,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "purple"
  },
  text_input_style: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderBottomWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 16,
    borderBottomColor: "gray",
    marginBottom: 30
  },

  sbumit_button_style: {
    width: "80%",
    backgroundColor: "green",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom:10
  },

  google_login:{
    width: "80%",
    backgroundColor: "#4285F4",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom:10

  },
  facebook_login:{
    width: "80%",
    backgroundColor: "#4267B2",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom:10

  }
});

Login.navigationOptions = ({navigation})=>{
  return{
      title:"Login"
  }
}