import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import s from './TabStyle';

export default class Tab extends React.Component {
  render() {
    const { children, style, active } = this.props;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={1}
        style={style}
      >
        <View style={active ? { ...s.wrap, ...s.wrapActive } : s.wrap}>
          {children}
        </View>
      </TouchableOpacity>
    );
  }
}