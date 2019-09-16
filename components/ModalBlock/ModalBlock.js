import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import s from './ModalBlockStyle';

class ModalBlock extends React.Component {
  render() {
    return (
      <View style={s.wrap}>
        <TouchableOpacity
          onPress={() => { this.props.toggleModal() }}
          activeOpacity={1}
          style={s.bg}
        />
      </View>
    );
  }
};

export default (props) => props.modalOpen ? <ModalBlock {...props} /> : <View />;