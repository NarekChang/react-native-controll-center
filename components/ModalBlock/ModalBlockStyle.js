import { StyleSheet, Dimensions } from 'react-native';
const dWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  modal: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 7.5,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,.6)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  itemTitle: {
    marginTop: 6,
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  itemVal: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center'
  },
});