import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigation/appTab';
import {StatusBar, Appearance} from 'react-native';

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
  return (
    <NavigationContainer>
      <AppTab />
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme === 'light' ? 'white' : 'black'}
      />
    </NavigationContainer>
  );
}
