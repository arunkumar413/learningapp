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

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Name" style={styles.text_input_style} />
        <TextInput
          placeholder="Mobile number"
          style={styles.text_input_style}
        />
        <TextInput placeholder="E-mail" style={styles.text_input_style} />
        <TextInput placeholder="Address" style={styles.text_input_style} />
        <TextInput placeholder="Password" style={styles.text_input_style} />
        <TextInput
          placeholder="Confirm password"
          style={styles.text_input_style}
        />
        <TouchableOpacity style={styles.sbumit_button_style}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login_page_button}
          onPress={() => this.props.navigation.navigate("login")}
        >
          <Text style={{ color: "purple", fontWeight: "bold", fontSize: 12 }}>
            I already have an account
          </Text>
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
    fontSize: 18,
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
    marginBottom: 10
  },

  login_page_button: {
    height: 20
  }
});

Register.navigationOptions = ({navigation})=>{
  return{
      title:"Create your account"
  }
}