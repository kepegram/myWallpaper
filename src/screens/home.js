/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Appearance,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {homeUI} from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 1,
      username: 'User 1',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
      date: 'May 18, 2023',
      description: 'Dock in heaven',
      imageUrl:
        'https://cdn.naturettl.com/wp-content/uploads/2017/02/22014001/top-tips-improve-landscapes-ross-hoddinott-11-900x601.jpg',
    },
    {
      id: 2,
      userId: 2,
      username: 'User 2',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
      date: 'May 18, 2023',
      description: 'Road to nirvana',
      imageUrl: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
    },
    {
      id: 3,
      userId: 3,
      username: 'User 3',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
      date: 'May 18, 2023',
      description: 'Sunrise of dreams',
      imageUrl:
        'https://greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    },
  ]);

  const PostCard = ({post}) => (
    <View style={theme === 'light' ? homeUI.postCard : homeUI.dmpostCard}>
      <TouchableOpacity onLongPress={() => console.log('Photo saved!')}>
        {post.imageUrl && (
          <Image source={{uri: post.imageUrl}} style={homeUI.postImage} />
        )}
      </TouchableOpacity>
      <View style={homeUI.postFooter}>
        <TouchableOpacity
          style={homeUI.postButton}
          onPress={() => console.log('Picture Liked!')}>
          <Icon
            name={'hearto'}
            size={20}
            color={theme === 'light' ? 'black' : 'white'}
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
          {post.description}
        </Text>
        <Text style={theme === 'light' ? homeUI.postDate : homeUI.dmpostDate}>
          {post.date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={theme === 'light' ? homeUI.container : homeUI.dmcontainer}>
      <FlatList
        data={posts}
        contentContainerStyle={homeUI.postListContainer}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <PostCard post={item} />}
      />
    </View>
  );
};

export default Home;
