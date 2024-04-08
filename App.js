import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigation/appTab';

export default function App() {
  return (
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  );
}
