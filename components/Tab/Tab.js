import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';

import s from './TabStyle';

export default class Tab extends React.Component {

  state = {
    bgAnim: null,
  }

  componentDidMount() {
    const { active } = this.props;

    this.setState({
      bgAnim: new Animated.Value(active ? 1 : 0),
    });
  }

  switch = () => {
    const { active } = this.props;

    Animated.timing(
      this.state.bgAnim,
      {
        toValue: active ? 0 : 1,
        duration: 200,
      }
    ).start();
    this.props.onPress();
  }

  render() {
    const { children, style, active } = this.props;
    const { bgAnim } = this.state;
    
    return (
      <TouchableOpacity
        onLongPress={this.props.onLongPress}
        onPress={this.props.onPress && this.switch}
        activeOpacity={1}
        style={style}
      >
        <View style={s.wrap}>
          <Animated.View style={{ ...s.wrapBg, opacity: bgAnim }} />
          {children}
        </View>
      </TouchableOpacity>
    );
  }
}