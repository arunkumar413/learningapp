import React, { Component, useState, useEffect } from "react";
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
import { Video } from "expo-av";

export default function VideoPlayBack(props) {

    const [video_link, setLink]= useState(props.navigation.state.params.link)

    
  return (
    <View>
      <Video
        useNativeControls={true}
        source={{ uri: video_link }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: "100%", height: 400 }}
      />
    </View>
  );
}

VideoPlayBack.navigationOptions = ({navigation})=>{
    return{
        title:navigation.getParam('lecture', 'Lecture name')
    }
}
