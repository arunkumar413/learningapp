import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import courses from "../components/courses";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const styles = StyleSheet.create({
  course_style: {
    width: "45%",
    height: 80,
    marginBottom: 5,
    marginLeft:5
  },
  course_text_style: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "teal",
    height: 80,
    borderRadius: 10,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default function Viewcourse(props) {
  const course_elements = courses.map(function(
    course,
    index,
    arr
  ) {
    return (
      <TouchableOpacity
        key={index + "arun"}
        style={styles.course_style}
        onPress={() => props.navigation.navigate(course.slug, {c_name:course.name})}
      >
        <Text style={styles.course_text_style}>{course.name}</Text>
      </TouchableOpacity>
    );
  });
  return (
  
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop:20
        }}
      >
        {course_elements}
      </View>
  );
}

Viewcourse.navigationOptions = ({navigation})=>{
  return{
      title:"All Courses"
  }
}