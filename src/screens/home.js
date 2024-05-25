/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Appearance,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  Vibration,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {homeUI} from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Header} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import axios from 'axios';
import {API_KEY} from '../../credentials';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Home = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [color, setColor] = useState(theme === 'light' ? 'black' : 'white');
  const [posts, setPosts] = useState([]);
  const scale = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: Math.max(scale.value, 0),
      },
    ],
  }));

  const onDoubleTap = useCallback(() => {
    Vibration.vibrate(10);
    setColor('red');
    scale.value = withSpring(0.5, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, [scale]);

  useEffect(() => {
    getStockImages();
  }, []);

  const getStockImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: API_KEY,
          query: 'nature',
          per_page: 10,
        },
      });
      setPosts(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log('Error fetching wallpapers ', error);
    }
  };

  // used to send liked photo to storage if heart is red
  // useEffect(() => {
  //   if (color === 'red') {
  //     AsyncStorage.setItem('photo', posts.imageUrl);
  //     console.log('Photo updated');
  //   } else {
  //     AsyncStorage.removeItem('photo');
  //     console.log('Photo removed');
  //   }
  // });

  const PostCard = ({post}) => (
    <View style={theme === 'light' ? homeUI.postCard : homeUI.dmpostCard}>
      <GestureHandlerRootView>
        <TapGestureHandler numberOfTaps={2} onActivated={onDoubleTap}>
          <Animated.View>
            <ImageBackground
              source={{uri: post.urls.small}}
              style={homeUI.postImage}>
              <AnimatedImage
                source={require('../../assets/imgs/red-heart-icon.png')}
                style={[
                  homeUI.postImage,
                  {
                    shadowOffset: {width: 0, height: 20},
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode="center"
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </GestureHandlerRootView>
      <View style={homeUI.postFooter}>
        <TouchableOpacity
          style={homeUI.postButton}
          onPress={() => {
            Vibration.vibrate(5);
            setColor(
              color === 'red' ? (theme === 'light' ? 'black' : 'white') : 'red',
            );
            // AsyncStorage.setItem('photo', post.imageUrl);
          }}>
          <Icon
            name={color === 'red' ? 'heart' : 'hearto'}
            size={20}
            color={color}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingLeft: 10, paddingBottom: 20}}>
        <Text
          style={
            theme === 'light'
              ? homeUI.postDescription
              : homeUI.dmpostDescription
          }>
          {post.alt_description}
        </Text>
        <Text style={theme === 'light' ? homeUI.postDate : homeUI.dmpostDate}>
          {post.updated_at}
        </Text>
      </View>
    </View>
  );

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <ScrollView
      style={theme === 'light' ? homeUI.container : homeUI.dmcontainer}>
      <Header
        placement="left"
        containerStyle={theme === 'light' ? homeUI.header : homeUI.dmheader}
        leftComponent={{
          text: 'myWallpaper',
          style: theme === 'light' ? homeUI.headerText : homeUI.dmheaderText,
        }}
        rightComponent={
          <Pressable onPress={() => navigation.navigate('Likes')}>
            <Icon
              name="hearto"
              size={20}
              color={theme === 'light' ? 'black' : 'white'}
              style={{paddingTop: 15, paddingRight: 5}}
            />
          </Pressable>
        }
      />
      <FlatList
        data={posts}
        contentContainerStyle={homeUI.postListContainer}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <PostCard post={item} />}
      />
    </ScrollView>
  );
};

export default Home;
