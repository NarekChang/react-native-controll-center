import { StyleSheet } from 'react-native';

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
    paddingTop: 40,
    paddingBottom: 20,
    borderRadius: 40,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.6)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '44%',
    paddingBottom: 20,
  },
  itemTitle: {
    marginTop: 6,
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
  },
  itemVal: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '400',
  },
});