/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {generalStyles} from '../styles/styles';

const Profile = () => {
  return (
    <View style={generalStyles.container}>
      <Text style={{color: 'black'}}>Profile</Text>
    </View>
  );
};

export default Profile;
