/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {generalStyles} from '../styles/styles';

const Home = () => {
  return (
    <View style={generalStyles.container}>
      <Text style={{color: 'black'}}>Home</Text>
    </View>
  );
};

export default Home;
