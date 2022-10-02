import {StyleSheet, Dimensions} from 'react-native';

const screenwidht = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:100,
    borderBottomWidth:0.2,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: 'gray',
    marginLeft: 20,
    marginTop: 10,
  },
  header: {
    width: screenwidht - 110,
    marginTop:30,
  },
  text:{
    fontSize:20,
  }
});
