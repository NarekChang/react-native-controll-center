import { StyleSheet, Dimensions } from 'react-native';
const dWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  wrap: {
    position: 'relative',
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 22.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  grid_1_1: {
    width: (dWidth - 105) / 4,
    height: (dWidth - 105) / 4,
    margin: 7.5,
  },
  grid_1_2: {
    width: (dWidth - 105) / 4,
    height: (dWidth - 75) / 2,
    margin: 7.5,
  },
  grid_2_1: {
    width: (dWidth - 75) / 2,
    height: (dWidth - 105) / 4,
    margin: 7.5,
  },
  grid_2_2: {
    margin: 7.5,
    width: (dWidth - 75) / 2,
    height: (dWidth - 75) / 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridWrap_2_2:{
    width: (dWidth - 45) / 2,
    height: (dWidth - 45) / 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  }
});