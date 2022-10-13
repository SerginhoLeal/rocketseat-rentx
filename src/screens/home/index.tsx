import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { RFValue } from 'react-native-responsive-fontsize';

import { Logo } from '@svg';
import { Car } from '@common';

const data = [
  {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYndlfI0sJJhQnVT8K4xaYb0n1wgPiPPH6W8yROqYhWmR9w1Zs6_l2nyW4AukUfeu7MVk&usqp=CAU'
  },
  {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYndlfI0sJJhQnVT8K4xaYb0n1wgPiPPH6W8yROqYhWmR9w1Zs6_l2nyW4AukUfeu7MVk&usqp=CAU'
  }
];

export default function HomeScreen(){
  const { width: WIDTH_FLAT_LIST, height: HEIGHT_FLAT_LIST } = Native.useWindowDimensions();
  return (
    <Styles.Container>

      <Native.StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Styles.Header>
        <Styles.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
        </Styles.HeaderContent>
      </Styles.Header>

      <Native.View style={{ width: WIDTH_FLAT_LIST, height: HEIGHT_FLAT_LIST }}>
        <Styles.CarList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => <Car data={item} />}
        />
      </Native.View>

    </Styles.Container>
  );
};
