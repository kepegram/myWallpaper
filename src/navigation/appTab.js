/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {Appearance, Vibration} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/home';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import Likes from '../screens/likes';

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
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme === 'light' ? 'white' : 'black',
          borderTopWidth: 0,
          shadowColor: 'grey',
        },
        tabBarActiveTintColor: theme === 'light' ? 'black' : 'white',
        tabBarInactiveTintColor: theme === 'light' ? '#C9C9C9' : '#484848',
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
      <Tab.Screen
        name="Home"
        component={Home}
        listeners={() => ({
          tabPress: () => {
            Vibration.vibrate(5);
          },
        })}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        listeners={() => ({
          tabPress: () => {
            Vibration.vibrate(5);
          },
        })}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        listeners={() => ({
          tabPress: () => {
            Vibration.vibrate(5);
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={() => ({
          tabPress: () => {
            Vibration.vibrate(5);
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default AppTab;
