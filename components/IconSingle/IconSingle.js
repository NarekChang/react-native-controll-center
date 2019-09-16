import React from 'react';
import { Image } from 'react-native';

import s from './IconSingleStyle';

import flash from '../../icons/flashlight.off.fill.png';
import flashOn from '../../icons/flashlight.on.fill.png';
import camera from '../../icons/camera.fill.png';
import qrcode from '../../icons/qrcode.png';
import timer from '../../icons/timer.png';
import lock from '../../icons/lock.rotation.open.png';
import moon from '../../icons/moon.png';

const icons = { flash, flashOn, camera, timer, qrcode, lock, moon };

export default ({ item, value }) => (
  <Image
    style={{ ...s.icon, tintColor: value ? '#000' : '#fff' }}
    source={icons[item]}
  />
);