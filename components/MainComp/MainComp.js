import React from 'react';
import {
  StatusBar,
  Text,
  Image,
  View
} from 'react-native';

import Tab from '../Tab';

import s from './MainCompStyle';
import bg from './images/bg.jpg';

export default () => (
  <View style={s.wrap}>
    <StatusBar barStyle="dark-content" />

    <Image
      source={bg}
      style={s.bg}
      blurRadius={40}
    />

    <View style={s.container}>

      <View style={s.grid_2_2}>
        <Tab>
          <View style={s.icon} />
        </Tab>
      </View>

      <View style={s.grid_2_2}>
        <Tab>
          <View style={s.icon} />
        </Tab>
      </View>

      <View style={s.gridWrap_2_2}>
        <View style={s.grid_1_1}>
          <Tab>
            <View style={s.icon} />
          </Tab>
        </View>
        <View style={s.grid_1_1}>
          <Tab>
            <View style={s.icon} />
          </Tab>
        </View>
        <View style={s.grid_2_1}>
          <Tab>
            <View style={s.icon} />
          </Tab>
        </View>
      </View>

      <View style={s.gridWrap_2_2}>
        <View style={s.grid_1_2}>
          <Tab>
            <View style={s.icon} />
          </Tab>
        </View>
        <View style={s.grid_1_2}>
          <Tab>
            <View style={s.icon} />
          </Tab>
        </View>
      </View>

      <View style={s.grid_1_1}>
        <Tab>
          <View style={s.icon} />
        </Tab>
      </View>
      <View style={s.grid_1_1}>
        <Tab>
          <View style={s.icon} />
        </Tab>
      </View>
      <View style={s.grid_1_1}>
        <Tab>
          <View style={s.icon} />
        </Tab>
      </View>
      <View style={s.grid_1_1}>
        <Tab>
          <View style={s.icon} />
        </Tab>
      </View>
    </View>
  </View>
);
