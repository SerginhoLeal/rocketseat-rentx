import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../routes/constants';

import { LogoBackgroundGray, Done } from '@svg';
import { ConfirmButton } from '@common';

const SchedulingComplete = () => {
  const { width: WIDTH_SVG } = Native.useWindowDimensions();

  const theme = useTheme();
  const navigation = useNavigation<any>();

  const handleConfirm = () => navigation.navigate(routes.home);

  return (
    <Styles.Container>

      <Native.StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor='transparent'
      />

      <LogoBackgroundGray width={WIDTH_SVG} />

      <Styles.Content>
        <Done width={80} height={80} />

        <Styles.Title>Carro alugado!</Styles.Title>

        <Styles.Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel
        </Styles.Message>
      </Styles.Content>

      <Styles.Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </Styles.Footer>

    </Styles.Container>
  );
}

export default SchedulingComplete;
