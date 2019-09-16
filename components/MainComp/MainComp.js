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
import ModalBlock from '../ModalBlock';

import bg from './images/bg.jpg';

const { Value } = Animated;

export default class MainComp extends React.Component {
  state = {
    modalOpen: true,
    someData: {
      lock: true,
      moon: false,
      flash: false,
      camera: false,
      timer: false,
      qrcode: false,
      flash2: false,
      camera2: false,
      timer2: false,
      qrcode2: true,
    }
  }

  switchItem = (item) => {
    const newVal = { someData: { ...this.state.someData } };
    newVal.someData[item] = !newVal.someData[item];

    this.setState(newVal);
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  };

  render() {
    const { someData, modalOpen } = this.state;

    return (
      <View style={s.wrap}>
        <StatusBar barStyle="dark-content" hidden={true} />
        <Image
          source={bg}
          style={s.bg}
          blurRadius={40}
        />

        <View style={{ ...s.container, opacity: modalOpen ? 0 : 1 }}>
          <Tab
            style={s.grid_2_2}
            onLongPress={this.toggleModal}
          >
            {
              rows[0] && rows[0].map((item) => (
                <RoundItem
                  key={`Row1Item_${item}`}
                  active={someData[item]}
                  item={item}
                  onPress={() => this.switchItem(item)}
                  onLongPress={this.toggleModal}
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
                  active={someData[item]}
                  onPress={() => this.switchItem(item)}
                  onLongPress={this.toggleModal}
                >
                  <IconSingle
                    item={item}
                    activeColor={'rgba(255, 55, 95, 1)'}
                    value={someData[item]}
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
                active={someData[item]}
                onPress={() => this.switchItem(item)}
                onLongPress={this.toggleModal}
              >
                <IconSingle
                  item={item}
                  value={someData[item]}
                />
              </Tab>
            ))
          }
        </View>

        <ModalBlock
          style={s.closeBg}
          toggleModal={this.toggleModal}
          modalOpen={modalOpen}
        />

      </View>
    );
  }
}
