import React from 'react';
import {
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import { rows } from '../../api/api';
import Tab from '../Tab';
import IconSingle from '../IconSingle';
import s from './MainCompStyle';

import bg from './images/bg.jpg';

export default class MainComp extends React.Component {
  state = {

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
            <TouchableOpacity
              onLongPress={() => {
              }}
              style={s.icon} />
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
