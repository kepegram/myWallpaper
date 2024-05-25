import {
  View,
  Text,
  Image,
  ScrollView,
  Appearance,
  Pressable,
  Vibration,
} from 'react-native';
import React, {useState} from 'react';
import {profileUI} from '../styles/styles';
import avatar from '../../assets/imgs/default-pfp.png';

const Profile = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [images, setImages] = useState([
    'https://www.bootdey.com/image/280x280/FF00FF/000000',
    'https://www.bootdey.com/image/280x280/00FFFF/000000',
    'https://www.bootdey.com/image/280x280/FF7F50/000000',
    'https://www.bootdey.com/image/280x280/6495ED/000000',
    'https://www.bootdey.com/image/280x280/DC143C/000000',
    'https://www.bootdey.com/image/280x280/008B8B/000000',
  ]);
  const [postCount, setPostCount] = useState(10);
  const [wallpaperCount, setWallpaperCount] = useState(20);

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View style={profileUI.container}>
      <View style={theme === 'light' ? profileUI.header : profileUI.dmheader}>
        <View style={profileUI.headerContent}>
          <Image style={profileUI.avatar} source={avatar} />
          <Text style={theme === 'light' ? profileUI.name : profileUI.dmname}>
            John Doe
          </Text>
          <View style={profileUI.statsContainer}>
            <View style={profileUI.statsBox}>
              <Text
                style={
                  theme === 'light'
                    ? profileUI.statsCount
                    : profileUI.dmstatsCount
                }>
                {postCount}
              </Text>
              <Text style={profileUI.statsLabel}>Posts</Text>
            </View>
            <View style={profileUI.statsBox}>
              <Text
                style={
                  theme === 'light'
                    ? profileUI.statsCount
                    : profileUI.dmstatsCount
                }>
                {wallpaperCount}
              </Text>
              <Text style={profileUI.statsLabel}>Saved Wallpapers</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={
          theme === 'light' ? profileUI.body : profileUI.dmbody
        }>
        {images.map((image, index) => (
          <View
            key={index}
            style={
              theme === 'light'
                ? profileUI.imageContainer
                : profileUI.dmimageContainer
            }>
            <Pressable
              onPress={() => {
                console.log('Image Pressed!');
                Vibration.vibrate(5);
              }}
              onLongPress={() => {
                console.log('Image Saved!');
                Vibration.vibrate(20);
              }}>
              <Image style={profileUI.image} source={{uri: image}} />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;
