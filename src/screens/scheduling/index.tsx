import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { BackButton, Button } from '@common';
import { useTheme } from 'styled-components';

import ArrowSvg from '@svg/arrow.svg';

const Scheduling = () => {
  const theme = useTheme();
  return (
    <Styles.Container>
      <Native.StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Styles.Header>

        <BackButton iconColor={theme.colors.shape} icon='chevron-left' onPress={() => {}} />

        <Styles.Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Styles.Title>

        <Styles.RentalPeriod>
          <Styles.DateInfo>
            <Styles.DateTitle>DE</Styles.DateTitle>
            <Styles.DateValue selected={false}>18/06/2021</Styles.DateValue>
          </Styles.DateInfo>

          <ArrowSvg />

          <Styles.DateInfo>
            <Styles.DateTitle>ATÉ</Styles.DateTitle>
            <Styles.DateValue selected={false}>30/06/2021</Styles.DateValue>
          </Styles.DateInfo>
        </Styles.RentalPeriod>

      </Styles.Header>

      <Styles.Content>

      </Styles.Content>

      <Styles.Footer>
        <Button title='Confirmar' />
      </Styles.Footer>

    </Styles.Container>
  );
};

export default Scheduling;