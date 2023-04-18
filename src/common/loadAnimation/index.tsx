import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';
import Loading from '../../assets/animations/loading_car.json';

import * as Styles from './styles';

export const LoadAnimation: React.FC = () => {
  return (
    <Styles.Container>
      <LottieView
        loop
        autoPlay
        source={Loading}
        resizeMode="contain"
        style={{ height: 200 }}
      />
    </Styles.Container>
  );
};
