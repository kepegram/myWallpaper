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
} from 'react-native';
import React, {useState} from 'react';
import {homeUI} from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Header} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [color, setColor] = useState('white');
  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 1,
      username: 'User 1',
      date: 'May 18, 2023',
      description: 'Dock in heaven',
      imageUrl:
        'https://cdn.naturettl.com/wp-content/uploads/2017/02/22014001/top-tips-improve-landscapes-ross-hoddinott-11-900x601.jpg',
    },
    {
      id: 2,
      userId: 2,
      username: 'User 2',
      date: 'May 18, 2023',
      description: 'Road to nirvana',
      imageUrl: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
    },
    {
      id: 3,
      userId: 3,
      username: 'User 3',
      date: 'May 18, 2023',
      description: 'Sunrise of dreams',
      imageUrl:
        'https://greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    },
  ]);

  const PostCard = ({post}) => (
    <ScrollView>
      <View style={theme === 'light' ? homeUI.postCard : homeUI.dmpostCard}>
        <Pressable
          onLongPress={() => {
            console.log('Photo saved!');
            Vibration.vibrate(20);
          }}>
          {post.imageUrl && (
            <Image source={{uri: post.imageUrl}} style={homeUI.postImage} />
          )}
        </Pressable>
        <View style={homeUI.postFooter}>
          <TouchableOpacity
            style={homeUI.postButton}
            onPress={() => {
              console.log('Picture Liked!');
              Vibration.vibrate(5);
              setColor(color === 'red' ? 'white' : 'red');
              AsyncStorage.setItem('photo', post.imageUrl);
            }}>
            <Icon name={'hearto'} size={20} color={color} />
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: 10, paddingBottom: 20}}>
          <Text
            style={
              theme === 'light'
                ? homeUI.postDescription
                : homeUI.dmpostDescription
            }>
            {post.description}
          </Text>
          <Text style={theme === 'light' ? homeUI.postDate : homeUI.dmpostDate}>
            {post.date}
          </Text>
        </View>
      </View>
    </ScrollView>
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
