import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import s from './ModalBlockStyle';
import { rows } from '../../api/api';

import RoundItem from '../RoundItem';

class ModalBlock extends React.Component {
  render() {
    const { someData } = this.props;

    return (
      <View style={s.wrap}>
        <TouchableOpacity
          onPress={() => { this.props.toggleModal() }}
          activeOpacity={1}
          style={s.bg}
        />

        <View style={s.modal}>
          {
            rows[3] && rows[3].map((item) => (
              <View
                style={s.item}
                key={`Row1Item_${item}`}
              >
                <RoundItem
                  active={someData[item]}
                  item={item}
                  onPress={() => this.props.switchItem(item)}
                  onLongPress={this.toggleModal}
                />

                <Text style={s.itemTitle}>Какой-то блок</Text>
                <Text style={s.itemVal}>{someData[item] ? 'Вкл.' : 'Выкл.'}</Text>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
};

export default (props) => props.modalOpen ? <ModalBlock {...props} /> : <View />;