import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrap: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 40,
    backgroundColor: '#0379FB',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 56,
    height: 56,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,.2)'
  },
});