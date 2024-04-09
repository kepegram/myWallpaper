/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {Appearance} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/home';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import Likes from '../screens/likes';
import CreatePost from '../screens/createPost';

const Tab = createBottomTabNavigator();

function AppTab() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: route.name === 'Home' ? true : false,
        headerTitle: 'myWallpaper',
        headerTitleStyle: {
          color: theme === 'light' ? 'black' : 'white',
          fontSize: 40,
          fontFamily: 'Billabong',
        },
        headerStyle: {
          height: 50,
          backgroundColor: theme === 'light' ? 'white' : 'black',
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme === 'light' ? 'white' : 'black',
          borderTopWidth: 0,
          shadowColor: 'grey',
        },
        tabBarActiveTintColor: theme === 'light' ? 'black' : 'white',
        tabBarInactiveTintColor: '#C9C9C9',
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'search1';
          } else if (route.name === 'Create Post') {
            iconName = 'plussquareo';
          } else if (route.name === 'Likes') {
            iconName = 'hearto';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Create Post" component={CreatePost} />
      <Tab.Screen name="Likes" component={Likes} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppTab;
