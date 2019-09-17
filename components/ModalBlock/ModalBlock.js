import React from 'react';
import { View, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';
const dHeight = Dimensions.get('window').height;
const dWidth = Dimensions.get('window').width;

import s from './ModalBlockStyle';
import { rows } from '../../api/api';

import RoundItem from '../RoundItem';

class ModalBlock extends React.Component {
  state = {
    posX: 0,
    posY: 0,
    paddingItemAnim: new Animated.Value(0),
    paddingTAnim: new Animated.Value(0),
    paddingBAnim: new Animated.Value(0),
    widthAnim: new Animated.Value((dWidth - 75) / 2),
    heightAnim: new Animated.Value((dWidth - 75) / 2),
    textAnim: new Animated.Value(0),
  }

  componentDidMount() {
    const { modalStartX, modalStartY } = this.props;

    this.setState({
      posX: new Animated.Value(Math.round(modalStartX)),
      posY: new Animated.Value(Math.round(modalStartY)),
    }, () => {
      Animated.timing(
        this.state.posX,
        {
          toValue: 30,
          duration: 200,
        }
      ).start();
      Animated.timing(
        this.state.posY,
        {
          toValue: ((dHeight - 420) / 2),
          duration: 200,
        }
      ).start();
      Animated.timing(
        this.state.paddingItemAnim,
        {
          toValue: 20,
          duration: 200,
        }
      ).start();
      Animated.timing(
        this.state.paddingTAnim,
        {
          toValue: 40,
          duration: 200,
        }
      ).start();
      Animated.timing(
        this.state.paddingBAnim,
        {
          toValue: 20,
          duration: 200,
        }
      ).start();
      Animated.timing(
        this.state.widthAnim,
        {
          toValue: dWidth - 60,
          duration: 200,
        }
      ).start();
      Animated.timing(
        this.state.heightAnim,
        {
          toValue: dWidth,
          duration: 200,
        }
      ).start(() => {
        this.setState({ showText: true })
      });
      Animated.timing(
        this.state.heightAnim,
        {
          toValue: (dHeight - 220),
          duration: 200,
        }
      ).start(() => {
      });
      Animated.timing(
        this.state.textAnim,
        {
          toValue: 40,
          duration: 200,
        }
      ).start(() => {
      });
    });
  }

  closeModal = () => {
    const { modalStartX, modalStartY } = this.props;

    Animated.timing(
      this.state.textAnim,
      {
        toValue: 0,
        duration: 50,
      }
    ).start();
    Animated.timing(
      this.state.posX,
      {
        toValue: Math.round(modalStartX),
        duration: 200,
      }
    ).start();
    Animated.timing(
      this.state.posY,
      {
        toValue: Math.round(modalStartY),
        duration: 200,
      }
    ).start();
    Animated.timing(
      this.state.paddingTAnim,
      {
        toValue: 7.5,
        duration: 200,
      }
    ).start();
    Animated.timing(
      this.state.paddingBAnim,
      {
        toValue: 7.5,
        duration: 200,
      }
    ).start();
    Animated.timing(
      this.state.paddingItemAnim,
      {
        toValue: 0,
        duration: 200,
      }
    ).start();
    Animated.timing(
      this.state.widthAnim,
      {
        toValue: ((dWidth - 75) / 2),
        duration: 180,
      }
    ).start();
    Animated.timing(
      this.state.heightAnim,
      {
        toValue: ((dWidth - 75) / 2),
        duration: 180,
      }
    ).start(() => {
      this.props.toggleModal();
    });
  }

  render() {
    const {
      posX,
      posY,
      paddingBAnim,
      paddingTAnim,
      paddingItemAnim,
      widthAnim,
      heightAnim,
      textAnim
    } = this.state;
    const { someData } = this.props;

    return (
      <View style={s.wrap}>
        <TouchableOpacity
          onPress={this.closeModal}
          activeOpacity={1}
          style={s.bg}
        />

        <Animated.View
          style={{
            ...s.modal,
            top: posY,
            left: posX,
            paddingBottom: paddingBAnim,
            paddingTop: paddingTAnim,
            width: widthAnim,
            height: heightAnim,
          }}>
          {
            rows[3] && rows[3].map((item) => (
              <Animated.View
                style={{
                  ...s.item,
                  paddingBottom: paddingItemAnim
                }}
                key={`Row1Item_${item}`}
              >
                <RoundItem
                  active={someData[item]}
                  item={item}
                  onPress={() => this.props.switchItem(item)}
                  onLongPress={this.toggleModal}
                />

                <Animated.View style={{
                  height: textAnim,
                  overflow: 'hidden',
                }}>
                  <Text style={s.itemTitle}>Какой-то блок</Text>
                  <Text style={s.itemVal}>{someData[item] ? 'Вкл.' : 'Выкл.'}</Text>
                </Animated.View>
              </Animated.View>
            ))
          }
        </Animated.View>
      </View>
    );
  }
};

export default (props) => props.modalOpen ? <ModalBlock {...props} /> : <View />;