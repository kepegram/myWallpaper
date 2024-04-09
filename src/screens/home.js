/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Appearance,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
  const [statusUsers, setStatusUsers] = useState([
    {
      id: 1,
      name: 'User 1',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
    },
    {
      id: 2,
      name: 'User 2',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
    },
    {
      id: 3,
      name: 'User 3',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
    },
    {
      id: 4,
      name: 'User 4',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
    },
    {
      id: 5,
      name: 'User 5',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
    },
    {
      id: 6,
      name: 'User 6',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 1,
      username: 'User 1',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
      date: 'May 18, 2023',
      description: 'This is a post description',
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
      description: 'This is a post description',
      imageUrl: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
    },
    {
      id: 3,
      userId: 3,
      username: 'User 3',
      avatarUrl:
        'https://github.com/kepegram/myMusic/blob/main/assets/default-imgs/default-pfp.png?raw=true',
      date: 'May 18, 2023',
      description: 'This is a post description',
      imageUrl:
        'https://greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    },
  ]);

  const UserListItem = ({user}) => (
    <View style={styles.userItem}>
      <Image source={{uri: user.avatarUrl}} style={styles.avatar} />
      <Text
        style={
          theme === 'light' ? styles.statusUserName : styles.dmstatusUserName
        }
        ellipsizeMode="tail"
        numberOfLines={1}>
        {user.name}
      </Text>
    </View>
  );

  const PostCard = ({post}) => (
    <View style={theme === 'light' ? styles.postCard : styles.dmpostCard}>
      <View style={styles.postHeader}>
        <Image source={{uri: post.avatarUrl}} style={styles.postAvatar} />
        <Text
          style={
            theme === 'light' ? styles.postUsername : styles.dmpostUsername
          }>
          {post.username}
        </Text>
      </View>
      {post.imageUrl && (
        <Image source={{uri: post.imageUrl}} style={styles.postImage} />
      )}
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.postButton}>
          <Icon
            name={'hearto'}
            size={20}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton}>
          <Icon
            name={'message1'}
            size={20}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={
          theme === 'light' ? styles.postDescription : styles.dmpostDescription
        }>
        {post.description}
      </Text>
      <Text style={theme === 'light' ? styles.postDate : styles.dmpostDate}>
        {post.date}
      </Text>
    </View>
  );

  return (
    <View style={theme === 'light' ? styles.container : styles.dmcontainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={
            theme === 'light' ? styles.userContainer : styles.dmuserContainer
          }>
          {statusUsers.map(user => (
            <UserListItem key={user.id} user={user} />
          ))}
        </View>
      </ScrollView>
      <FlatList
        data={posts}
        contentContainerStyle={styles.postListContainer}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <PostCard post={item} />}
      />
    </View>
  );
};

export default Home;
