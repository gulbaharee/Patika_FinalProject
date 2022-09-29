import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    height: height,
  },
  innerContainer:{
    marginTop:300,
  }
});
