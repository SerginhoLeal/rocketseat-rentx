import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';

import * as Styles from './styles';

import { Brand, Logo } from '../../assets/svg';
import { RoutesNameProps } from '@dtos';
import { routes } from '../../routes/constants';

const Splash = () => {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation<any>();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [0, -50], Extrapolate.CLAMP)
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP)
        }
      ]
    }
  });

  const StartApp = () => navigation.navigate(routes.home);

  React.useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(StartApp)();
      })
  }, []);

  return (
    <Styles.Container>

      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <Brand width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <Logo width={180} height={20} />
      </Animated.View>

    </Styles.Container>
  );
};

export default Splash;
