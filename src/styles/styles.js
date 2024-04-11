import {Dimensions, StyleSheet} from 'react-native';

export const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dmcontainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const homeUI = StyleSheet.create({
  container: {
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  dmcontainer: {
    paddingBottom: 5,
    backgroundColor: 'black',
  },
  postListContainer: {
    paddingTop: 5,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  dmpostCard: {
    backgroundColor: 'black',
    borderRadius: 5,
  },
  postImage: {
    width: Dimensions.get('screen').width,
    height: 550,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 7,
  },
  postButton: {
    marginLeft: 5,
    marginRight: 5,
  },
  postDescription: {
    paddingLeft: 3,
    paddingTop: 6,
    fontSize: 13,
    color: 'black',
  },
  dmpostDescription: {
    paddingLeft: 3,
    paddingTop: 6,
    fontSize: 13,
    color: 'white',
  },
  postDate: {
    paddingTop: 5,
    fontSize: 10,
    color: 'black',
    paddingLeft: 5,
  },
  dmpostDate: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 11,
    color: 'grey',
  },
});

export const exploreUI = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dmcontainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchInput: {
    width: Dimensions.get('screen').width - 40,
    height: 30,
    borderRadius: 8,
    fontSize: 13,
    padding: 8,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
  },
  item: {
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
