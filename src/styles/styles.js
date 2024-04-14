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
  headerText: {
    color: 'black',
    fontFamily: 'Billabong',
    fontSize: 35,
  },
  dmheaderText: {
    color: 'white',
    fontFamily: 'Billabong',
    fontSize: 35,
  },
  header: {
    backgroundColor: 'white',
    height: 95,
  },
  dmheader: {
    backgroundColor: 'black',
    height: 95,
    borderColor: 'black',
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
    height: Dimensions.get('screen').height - 270,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 13,
  },
  postButton: {
    marginLeft: 0,
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
    paddingLeft: 3,
    fontSize: 10,
    color: 'black',
  },
  dmpostDate: {
    paddingTop: 5,
    paddingLeft: 3,
    fontSize: 10,
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
    marginTop: 35,
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

export const profileUI = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 50,
  },
  dmheader: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 50,
  },
  headerContent: {
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 80,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  dmname: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statsBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statsCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  dmstatsCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  statsLabel: {
    fontSize: 14,
    color: '#999999',
  },
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dmbody: {
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: '33%',
    padding: 5,
    backgroundColor: 'white',
  },
  dmimageContainer: {
    width: '33%',
    padding: 5,
    backgroundColor: 'black',
  },
  image: {
    width: 115,
    height: 290,
  },
});
