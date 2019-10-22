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
import AppContainer from './src/components/navigator'

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
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
    fontSize: 30,
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
    fontWeight: "bold"
  }
});
