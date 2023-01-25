import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { routes } from '../../routes/constants';

import { BackButton, Button, Calendar, DayProps, generateInterval, MarkedDateProps } from '@common';

import { CarDTO } from '@dtos';
import ArrowSvg from '@svg/arrow.svg';
import { getPlatformDate } from '@utils';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
};
interface Params {
  car: CarDTO;
};

const Scheduling = () => {
  const theme = useTheme();

  const navigation = useNavigation<any>();
  const { params } = useRoute();
  const { car } = params as Params;

  const [lastSelectedDate, setLastSelectedDate] = React.useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = React.useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = React.useState<RentalPeriod>({} as RentalPeriod);

  const handleConfirmRental = () =>
    navigation.navigate(routes.schedulingDetails, { car, dates: Object.keys(markedDates) });

  const handleBack = () => navigation.goBack();

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    };

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
  };

  return (
    <Styles.Container>

      <Styles.Header>

        <Native.StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <BackButton iconColor={theme.colors.shape} icon='chevron-left' onPress={handleBack} />

        <Styles.Title>Escolha uma {'\n'} data de início e {'\n'} fim do aluguel</Styles.Title>

        <Styles.RentalPeriod>
          <Styles.DateInfo>
            <Styles.DateTitle>DE</Styles.DateTitle>
            <Styles.DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.startFormatted}</Styles.DateValue>
          </Styles.DateInfo>

          <ArrowSvg />

          <Styles.DateInfo>
            <Styles.DateTitle>ATÉ</Styles.DateTitle>
            <Styles.DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</Styles.DateValue>
          </Styles.DateInfo>
        </Styles.RentalPeriod>

      </Styles.Header>

      <Styles.Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Styles.Content>

      <Styles.Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} enabled={!!rentalPeriod.startFormatted} />
      </Styles.Footer>

    </Styles.Container>
  );
};

export default Scheduling;