import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { routes } from '../../routes/constants';

import { CarDTO } from '@dtos';

import { getAccessoryIcon } from '@utils';
import { BackButton, Slider, Accessory, Button } from '@common';

interface Params {
  car: CarDTO;
};

const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const theme = useTheme();
  const scrollY = useSharedValue(0);

  const { car } = route.params as Params;

  const handleConfirmRental = () => navigation.navigate(routes.scheduling, { car });

  const handleBack = () => navigation.goBack();

  const scrollHandle = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP)
    }
  });

  const slideCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP)
    }
  });

  return (
    <Styles.Container>

      <Native.StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <Animated.View style={[headerStyleAnimation]}>
        <Styles.Header>
          <BackButton icon='chevron-left' onPress={handleBack} />
        </Styles.Header>

        <Animated.View
          style={[
            slideCarsStyleAnimation,
            {
              position: 'absolute',
              overflow: 'hidden',
              zIndex: 1,
              backgroundColor: theme.colors.background_secondary
            }
          ]}
        >
          <Styles.CarImages>
            <Slider imageUrl={car.photos} />
          </Styles.CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: getStatusBarHeight() + 160 }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandle}
        scrollEventThrottle={16}
      >
        <Styles.Details>
          <Styles.Description>
            <Styles.Brand>{car.brand}</Styles.Brand>
            <Styles.Name>{car.name}</Styles.Name>
          </Styles.Description>
          <Styles.Rent>
            <Styles.Period>{car.rent.period}</Styles.Period>
            <Styles.Price>R$ {car.rent.price}</Styles.Price>
          </Styles.Rent>
        </Styles.Details>

        <Styles.Accessory>
          {car.accessories.map((accessory, index) => (
            <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
          ))}
        </Styles.Accessory>

        <Styles.About>{car.about}</Styles.About>
      </Animated.ScrollView>

      <Styles.Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </Styles.Footer>

    </Styles.Container>
  );
}

export default CarDetails;