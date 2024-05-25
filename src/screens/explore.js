/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Appearance,
  Image,
  Button,
} from 'react-native';
import axios from 'axios';
import {exploreUI} from '../styles/styles';
import {API_KEY} from '../../credentials';

const numColumns = 3;

const Explore = () => {
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  const getSearchedData = async searchInput => {
    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id: API_KEY,
            query: searchInput,
            per_page: 20,
          },
        },
      );
      setOptions(response.data.results);
    } catch (error) {
      console.log('Error fetching wallpapers ', error);
    }
  };

  const renderItem = ({item}) => {
    if (item.empty === true) {
      return <View style={[exploreUI.item, exploreUI.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={[exploreUI.item, {height: 200}]}>
        <Image
          source={{uri: item.urls.small}}
          style={exploreUI.wallpaperImage}
        />
      </TouchableOpacity>
    );
  };

  const formatRow = (results, columnNums) => {
    const numberOfFullRows = Math.floor(results.length / columnNums);
    let numberOfElementsLastRow =
      results.length - numberOfFullRows * columnNums;
    while (
      numberOfElementsLastRow !== columnNums &&
      numberOfElementsLastRow !== 0
    ) {
      results.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return results;
  };

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View
      style={{flex: 1, backgroundColor: theme === 'light' ? 'white' : 'black'}}>
      <TextInput
        style={exploreUI.searchInput}
        backgroundColor={theme === 'light' ? '#E1E1E1' : '#4F4F4F'}
        onChangeText={text => setSearchText(text)}
        placeholder="Search"
        placeholderTextColor={theme === 'light' ? 'grey' : 'silver'}
        value={searchText}
      />
      <Button title="Search" onPress={() => getSearchedData(searchText)} />
      <FlatList
        data={formatRow(options, numColumns)}
        style={exploreUI.container}
        backgroundColor={theme === 'light' ? 'white' : 'black'}
        renderItem={renderItem}
        numColumns={numColumns}
        // ListHeaderComponent={() => (
        //   <>
        //     <TextInput
        //       style={exploreUI.searchInput}
        //       backgroundColor={theme === 'light' ? '#E1E1E1' : '#4F4F4F'}
        //       onChangeText={text => setSearchText(text)}
        //       placeholder="Search"
        //       placeholderTextColor={theme === 'light' ? 'grey' : 'silver'}
        //       value={searchText}
        //     />
        //   </>
        // )}
      />
    </View>
  );
};

export default Explore;
