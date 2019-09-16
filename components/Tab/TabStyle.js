import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,.6)',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 22,
    backgroundColor: '#fff',
  }
});