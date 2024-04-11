/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Appearance,
} from 'react-native';
import {exploreUI} from '../styles/styles';

const numColumns = 3;
const data = [
  {key: 'A'},
  {key: 'B'},
  {key: 'C'},
  {key: 'D'},
  {key: 'E'},
  {key: 'F'},
  {key: 'G'},
  {key: 'H'},
  {key: 'I'},
  {key: 'J'},
  {key: 'K'},
  {key: 'L'},
  {key: 'M'},
  {key: 'N'},
  {key: 'O'},
  {key: 'P'},
  {key: 'Q'},
  {key: 'R'},
  {key: 'S'},
  {key: 'T'},
  {key: 'U'},
  {key: 'V'},
  {key: 'W'},
  {key: 'X'},
  {key: 'Y'},
  {key: 'Z'},
];

const Explore = () => {
  const [options, setOptions] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const renderItem = ({item}) => {
    if (item.empty === true) {
      return <View style={[exploreUI.item, exploreUI.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={[exploreUI.item, {height: 200}]}>
        <Text style={exploreUI.itemText}>{item.key}</Text>
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

  return (
    <View
      style={{flex: 1, backgroundColor: theme === 'light' ? 'white' : 'black'}}>
      <FlatList
        data={formatRow(options, numColumns)}
        style={exploreUI.container}
        backgroundColor={theme === 'light' ? 'white' : 'black'}
        renderItem={renderItem}
        numColumns={numColumns}
        ListHeaderComponent={() => (
          <TextInput
            style={exploreUI.searchInput}
            backgroundColor={theme === 'light' ? '#E1E1E1' : '#4F4F4F'}
            onChangeText={text => setSearchText(text)}
            placeholder="Search"
            placeholderTextColor={theme === 'light' ? 'grey' : 'silver'}
            value={searchText}
          />
        )}
      />
    </View>
  );
};

export default Explore;
