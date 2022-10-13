import * as Native from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

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
