import React from 'react';
import { View } from 'react-native';

import s from './TabStyle';

export default class Tab extends React.Component{


  render() {
    const { children } = this.props;

    return(
      <View style={s.wrap}>
        {children}
      </View>
    );
  }
}