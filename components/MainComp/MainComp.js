import React from 'react';
import {
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

import { rows } from '../../api/api';
import s from './MainCompStyle';

import Tab from '../Tab';
import IconSingle from '../IconSingle';
import RoundItem from '../RoundItem';

import bg from './images/bg.jpg';

const { Value } = Animated;

export default class MainComp extends React.Component {
  state = {
    lock: true,
    moon: false,
    flash: false,
    camera: false,
    timer: false,
    qrcode: false,
    flash2: false,
    camera2: false,
    timer2: false,
    qrcode2: true
  }

  switchItem = (item) => {
    const newVal = {};
    const oldVal = this.state[item];
    newVal[item] = !oldVal;

    this.setState(newVal);
  }

  render() {
    return (
      <View style={s.wrap}>
        <StatusBar barStyle="dark-content" hidden={true} />
        <Image
          source={bg}
          style={s.bg}
          blurRadius={40}
        />

        <View style={s.container}>
          <Tab style={s.grid_2_2}>
            {
              rows[0] && rows[0].map((item) => (
                <RoundItem
                  key={`Row1Item_${item}`}
                  active={this.state[item]}
                  item={item}
                  onPress={() => this.switchItem(item)}
                />
              ))
            }
          </Tab>

          <Tab style={s.grid_2_2}>
            <View style={s.icon} />
          </Tab>

          <View style={s.gridWrap_2_2}>
            {
              rows[1] && rows[1].map((item) => (
                <Tab
                  style={s.grid_1_1}
                  key={`Row2Item_${item}`}
                  active={this.state[item]}
                  onPress={() => this.switchItem(item)}
                >
                  <IconSingle
                    item={item}
                    value={this.state[item]}
                  />
                </Tab>
              ))
            }
            <Tab style={s.grid_2_1}>
              <View style={s.icon} />
            </Tab>
          </View>

          <View style={s.gridWrap_2_2}>
            <Tab style={s.grid_1_2}>
              <View style={s.icon} />
            </Tab>
            <Tab style={s.grid_1_2}>
              <View style={s.icon} />
            </Tab>
          </View>

          {
            rows[2] && rows[2].map((item) => (
              <Tab
                style={s.grid_1_1}
                key={`Row3Item_${item}`}
                active={this.state[item]}
                onPress={() => this.switchItem(item)}
                onLongPress={() => {

                }}
              >
                <IconSingle
                  item={item}
                  value={this.state[item]}
                />
              </Tab>
            ))
          }
        </View>
      </View>
    );
  }
}
