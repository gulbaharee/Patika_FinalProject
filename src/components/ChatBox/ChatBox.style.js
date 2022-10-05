import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    margin:15,
  },
  innerContainer: {
    width: screenWidth / 2,
    borderRadius: 10,
  },
  box: {
    height: 40,
    fontSize: 18,
    marginTop: 10,
    marginLeft:10,
  },
});
