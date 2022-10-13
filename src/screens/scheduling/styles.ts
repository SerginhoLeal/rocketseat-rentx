import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface DataValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  justify-content: center;
  padding: 25px;

  padding-top: ${getStatusBarHeight() + 30}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.header};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    color: ${theme.colors.shape};
    font-size: ${RFValue(36)}px;
  `};

  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text};
    font-size: ${RFValue(10)}px;
  `};
`;

export const DateValue = styled.Text<DataValueProps>`
  ${({ theme, selected }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
    font-size: ${RFValue(15)}px;

    ${selected && css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `}
  `};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
  padding: 24px;
`;