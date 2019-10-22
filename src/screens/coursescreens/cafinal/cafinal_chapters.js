import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const course_details = [
  {
    chapter_name: "Chapter 1",
    chapter_link: "ca_final_chapter1",
  },

  {
    chapter_name: "Chapter 2",
    chapter_link: "ca_final_chapter2",
  },
  {
    chapter_name: "Chapter 3",
    chapter_link: "ca_final_chaper3",
  },
  {
    chapter_name: "Chapter 4",
    chapter_link: "ca_final_chapter4",
   
  },
  {
    chapter_name: "Chapter 5",
    chapter_link: "ca_final_chapter5",
  },

];

export default function CaFinal(props) {

  const playlist = course_details.map(function(chapter, index, arr) {
    return (
      <TouchableOpacity key={index+'kumar'}
        onPress={() =>{props.navigation.navigate(chapter.chapter_link, {link:chapter.chapter_link, chapter:chapter.chapter_name})}}
        style={styles.course_item}
      >
        <Text style={styles.course_name_style}> {chapter.chapter_name}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView style={styles.scroll_view_style}>

      {playlist}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title_style: {
    textAlign: "center",
    color: "purple",
    fontSize: 22,
    fontWeight: "bold",
    textAlignVertical: "center"
  },

  course_name_style: {
    //textAlign: "center",
    fontSize: 24,
   // fontWeight: "bold",
    textAlignVertical: "center",
    // marginLeft: 30,
    justifyContent:'center'
  },
  scroll_view_style: {
    padding: 10
  },
  course_item: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#f1f3f4",
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent:'center'
  },
  img_style: {
    width: 50,
    height: 50,
    marginLeft: 10
  }
});



CaFinal.navigationOptions = ({navigation})=>{
  return{
      title:"CA Final chapter list"
  }
}