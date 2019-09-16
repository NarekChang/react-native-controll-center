import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Animated
} from 'react-native';

import s from './RoundItemStyle';

import IconSingle from '../IconSingle';

export default class RoundItem extends React.Component {
  state = {
    bgAnim: null,
  }

  componentDidMount() {
    const { active } = this.props;

    this.setState({
      bgAnim: new Animated.Value(active ? 1 : 0),
    });
  }

  setActive = () => {
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
    const { item, active, onPress, onLongPress } = this.props;
    const { bgAnim } = this.state;

    return (
      <View style={s.wrap}>
        <TouchableOpacity
          style={s.item}
          activeOpacity={1}
          onPress={this.setActive}
          onLongPress={this.props.onLongPress}
        >
          <Animated.View style={{ ...s.wrapBg, opacity: bgAnim }} />

          <IconSingle
            item={item}
            value={active}
            customStyle={{ width: 25, height: 25 }}
            activeColor={'#fff'}
          />
        </TouchableOpacity>
      </View>
    )
  }
}