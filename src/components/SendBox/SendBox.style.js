import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    width: screenWidth,

    borderTopWidth: 0.2,
  },
  innerContainer: {
    marginTop:20,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30,
  },
  icon: {
    margin: 7,
    color: '#adb5bd',
    marginLeft: 12,
  },
});
