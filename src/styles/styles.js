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

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 140,
    backgroundColor: 'white',
  },
  dmcontainer: {
    paddingBottom: 140,
    backgroundColor: 'black',
  },
  userContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    height: 140,
  },
  dmuserContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'black',
    height: 140,
  },
  userItem: {
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  statusUserName: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
    width: 60,
    textAlign: 'center',
  },
  dmstatusUserName: {
    marginTop: 5,
    fontSize: 12,
    color: 'white',
    width: 60,
    textAlign: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 55,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'magenta',
  },
  postListContainer: {
    paddingTop: 10,
  },
  postCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  dmpostCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  postAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'magenta',
  },
  postUsername: {
    flex: 1,
    color: 'black',
  },
  postDate: {
    paddingTop: 5,
    fontSize: 11,
    color: 'black',
  },
  postDescription: {
    paddingRight: 10,
    paddingTop: 5,
    fontSize: 16,
    color: 'black',
  },
  dmpostUsername: {
    flex: 1,
    color: 'white',
  },
  dmpostDate: {
    paddingTop: 5,
    fontSize: 11,
    color: 'white',
  },
  dmpostDescription: {
    paddingRight: 10,
    paddingTop: 5,
    fontSize: 16,
    color: 'white',
  },
  postImage: {
    marginTop: 10,
    width: Dimensions.get('screen').width - 20,
    height: 500,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 5,
  },
  postButton: {
    marginLeft: 5,
    marginRight: 5,
  },
  postButtonText: {
    color: '#808080',
  },
});
