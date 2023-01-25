import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
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

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const Appointment = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_400};
  `};
`;

export const AppointmentsQuantity = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.primary_500};
  `};
`;

export const CarWapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `};
`;

export const CarFooterTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    font-family: ${theme.fonts.primary_500};
  `};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.primary_400};
  `};
`;
