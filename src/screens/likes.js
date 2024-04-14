/* eslint-disable react-native/no-inline-styles */
import {View, Text, Appearance, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {generalStyles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Likes = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [likes, setLikes] = useState('');

  AsyncStorage.getItem('photo').then(photo => {
    setLikes(photo);
  });

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View
      style={
        theme === 'light' ? generalStyles.container : generalStyles.dmcontainer
      }>
      <Image
        source={{uri: likes}}
        style={{height: 360, width: Dimensions.get('screen').width - 15}}
      />
    </View>
  );
};

export default Likes;
