/* eslint-disable react-native/no-inline-styles */
import {View, Text, Appearance} from 'react-native';
import React, {useState} from 'react';
import {generalStyles} from '../styles/styles';

const Likes = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
  return (
    <View
      style={
        theme === 'light' ? generalStyles.container : generalStyles.dmcontainer
      }>
      <Text style={{color: theme === 'light' ? 'black' : 'white'}}>Likes</Text>
    </View>
  );
};

export default Likes;
