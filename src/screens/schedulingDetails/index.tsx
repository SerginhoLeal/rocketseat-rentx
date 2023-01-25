import React from 'react';
import * as Styles from './styles';

import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { format } from 'date-fns';

import { useNavigation, useRoute } from '@react-navigation/native';

import { routes } from '../../routes/constants';

import { BackButton, Slider, Accessory, Button } from '@common';

import { getAccessoryIcon, getPlatformDate } from '@utils';
import { CarDTO } from '@dtos';
import { api } from '@fetch';

interface Params {
  car: CarDTO;
  dates: Array<any>;
};

interface RentalPeriod {
  start: string;
  end: string;
};

const Scheduling = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();

  const [rentalPeriod, setRentalPeriod] = React.useState<RentalPeriod>({} as RentalPeriod);
  const [loading, setLoading] = React.useState(false);

  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  const handleConfirmRental = async() => {
    setLoading(true);

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [ ...schedulesByCar.data.unavailable_dates, ...dates ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates.length - 1)), 'dd/MM/yyyy'),
    });

    api.put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() => navigation.navigate(routes.schedulingComplete))
      .catch(() => {
        setLoading(false);
        Alert.alert('Não foi possível confrmar o agendamento.');
      });
  };

  const handleGoBack = () => navigation.goBack();

  React.useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates.length - 1)), 'dd/MM/yyyy'),
    })
  }, []);

  return (
    <Styles.Container>

      <Styles.Header>
        <BackButton icon='chevron-left' onPress={handleGoBack} />
      </Styles.Header>

      <Styles.CarDetails>
        <Slider imageUrl={car.photos} />
      </Styles.CarDetails>

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
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Styles.Accessory>

        <Styles.RentalPeriod>

          <Styles.CalendarIcon>
            <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
          </Styles.CalendarIcon>

          <Styles.DateInfo>
            <Styles.Title>DE</Styles.Title>
            <Styles.DateValue>{rentalPeriod.start}</Styles.DateValue>
          </Styles.DateInfo>

          <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text} />

          <Styles.DateInfo>
            <Styles.Title>ATE</Styles.Title>
            <Styles.DateValue>{rentalPeriod.end}</Styles.DateValue>
          </Styles.DateInfo>

        </Styles.RentalPeriod>

        <Styles.RentalPrice>
          <Styles.RentalPriceLabel>TOTAL</Styles.RentalPriceLabel>
          <Styles.RentalPriceDetail>
            <Styles.RentalPriceQuota>R$ {car.rent.price} x{dates.length} diárias</Styles.RentalPriceQuota>
            <Styles.RentalPriceTotal>R$ {rentTotal}</Styles.RentalPriceTotal>
          </Styles.RentalPriceDetail>
        </Styles.RentalPrice>
      </Styles.Content>

      <Styles.Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </Styles.Footer>

    </Styles.Container>
  );
}

export default Scheduling;