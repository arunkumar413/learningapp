import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register from '../screens/register'
import Login from '../screens/login'
import Home from '../screens/home'
import Viewcourse from '../screens/viewcourses'
import CoursePage from '../screens/coursepage'
import CaFinal from '../screens/coursescreens/cafinal/cafinal_chapters'
import VideoPlayBack from '../screens/playvideo'
import  Ca_final_chapter1 from '../screens/coursescreens/cafinal/ca_final_chapter1'
import  Ca_final_chapter2 from '../screens/coursescreens/cafinal/ca_final_chapter2'




const AppNavigator = createStackNavigator(
  {
    register: Register,
    login: Login,
    home:Home,
    view_courses:Viewcourse,
    course_page: CoursePage,
    ca_final:CaFinal,
    play_video:VideoPlayBack,
    ca_final_chapter1: Ca_final_chapter1,
    ca_final_chapter2: Ca_final_chapter2,
    // ca_final_chapter3: Ca_final_chapter3,
    // ca_final_chapter4: Ca_final_chapter4,
    // ca_final_chapter5: Ca_final_chapter5,

    
  },
  {
    initialRouteName: 'home',
  }
);

  const AppContainer = createAppContainer(AppNavigator)
  
  export default AppContainer