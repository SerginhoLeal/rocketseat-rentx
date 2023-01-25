import * as Native from 'react-native';

import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

import { CarDTO } from '@dtos';

export const Container = styled.SafeAreaView`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
  `}
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  justify-content: flex-end;
  padding: 32px 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors.header};
  `};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
  `};
`;

export const CarList = styled(Native.FlatList).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})``;

export const MyCarButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.main};
  `};

  position: absolute;
  bottom: 13px;
  right: 22px;
`;
