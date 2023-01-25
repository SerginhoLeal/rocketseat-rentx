import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { routes } from '../../routes/constants';

import { CarDTO } from '@dtos';
import { api } from '@fetch';

import { getAccessoryIcon } from '@utils';
import { BackButton, Slider, Accessory, Button } from '@common';

interface Params {
  car: CarDTO;
}

const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { car } = route.params as Params;

  const handleConfirmRental = () => navigation.navigate(routes.scheduling, { car });

  const handleBack = () => navigation.goBack();

  return (
    <Styles.Container>

      <Styles.Header>
        <BackButton icon='chevron-left' onPress={handleBack} />
      </Styles.Header>

      <Styles.CarImages>
        <Slider imageUrl={car.photos} />
      </Styles.CarImages>

      <Styles.Content>
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
      </Styles.Content>

      <Styles.Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </Styles.Footer>

    </Styles.Container>
  );
}

export default CarDetails;