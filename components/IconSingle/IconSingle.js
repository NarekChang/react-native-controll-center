import React from 'react';
import { Image } from 'react-native';

import s from './IconSingleStyle';

import flash from '../../icons/flashlight.off.fill.png';
import flashOn from '../../icons/flashlight.on.fill.png';
import camera from '../../icons/camera.fill.png';
import qrcode from '../../icons/qrcode.png';
import timer from '../../icons/timer.png';
import lock from '../../icons/lock.rotation.open.png';
import moon from '../../icons/moon.fill.png';

const icons = {
  flash,
  flashOn,
  camera,
  timer,
  qrcode,
  lock,
  moon,
  flash2: flash,
  camera2: camera,
  timer2: timer,
  qrcode2: qrcode
 };

export default (props) => {
  const {
    item,
    value,
    customStyle,
    defaultColor = '#fff',
    activeColor = '#40a1f5'
  } = props;

  return (
    <Image
      style={{ ...s.icon, ...customStyle, tintColor: value ? activeColor : defaultColor }}
      source={icons[item]}
    />
  )
};