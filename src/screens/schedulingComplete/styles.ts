import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-top: 96px;

  ${({ theme }) => css`
    background-color: ${theme.colors.header};
  `};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    color: ${theme.colors.shape};
    font-size: ${RFValue(30)}px;
  `};

  margin-top: 40px;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text_detail};
    font-family: ${theme.fonts.primary_400};
  `};

  text-align: center;
  margin-top: 16px;
`;

export const Button = styled.View`
  width: 80px;
  height: 56px;

  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.shape_dark};
  `};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
    font-size: ${RFValue(15)}px;
  `};
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin: 80px 0;
`;