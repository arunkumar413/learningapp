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
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LinearGradient } from "expo-linear-gradient";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Home extends Component {
  static navigationOptions = {
    title: "Welcome to the learning app!"
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#f5f7fa', '#c3cfe2']}
          style={styles.container}
        >
          <TouchableOpacity
            style={styles.sbumit_button_style}
            onPress={() => this.props.navigation.navigate("login")}
          >
            <Text style={styles.text_style}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sbumit_button_style}
            onPress={() => this.props.navigation.navigate("register")}
          >
            <Text style={styles.text_style}> Register </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sbumit_button_style}
            onPress={() => this.props.navigation.navigate("view_courses")}
          >
            <Text style={styles.text_style}> View courses </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    width: '100%'
  },

  sbumit_button_style: {
    width: "80%",
    backgroundColor: "green",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
   // fontWeight: "bold",
    margin: 10
  },
  text_style: {
    // fontWeight: "bold",
    fontSize: 18,
    color: "white"
  }
});
