import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';

import s from './TabStyle';

export default class Tab extends React.Component {

  state = {
    bgAnim: 0,
    scaleVal: 1,
  }

  componentDidMount() {
    const { active } = this.props;

    this.setState({
      bgAnim: new Animated.Value(active ? 1 : 0),
      scaleVal: new Animated.Value(active ? 1.01 : 1),
    });
  }

  switch = () => {
    const { active } = this.props;

    Animated.timing(
      this.state.scaleVal,
      {
        toValue: active ? 1 : 1.01,
        duration: 50,
      }
    ).start(() => {
      Animated.timing(
        this.state.bgAnim,
        {
          toValue: active ? 0 : 1,
          duration: 200,
        }
      ).start();
      this.props.onPress();
    });
  }

  render() {
    const { children, style, active } = this.props;
    const { bgAnim, scaleVal } = this.state;

    return (
      <TouchableOpacity
        onLongPress={this.props.onLongPress}
        onPress={this.props.onPress && this.switch}
        activeOpacity={1}
        style={style}
      >
        <Animated.View style={{ ...s.wrap, transform: [{ scaleX: scaleVal }, { scaleY: scaleVal}]}}>
          <Animated.View style={{ ...s.wrapBg, opacity: bgAnim }} />

        {children}
        </Animated.View>
      </TouchableOpacity >
    );
  }
}