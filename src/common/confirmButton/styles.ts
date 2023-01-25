import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;

  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.shape_dark};
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
    font-size: ${RFValue(15)}px;
  `};
`;
