import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
  `};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};
    font-size: ${RFValue(25)}px;
  `};
`;

export const Rent = styled.View`
  
`;

export const Period = styled.Text`
    ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
  `};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.main};
    font-size: ${RFValue(25)}px;
  `};
`;

export const About = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
    font-size: ${RFValue(15)}px;
  `};

  text-align: justify;
  margin-top: 23px;
  line-height: ${RFValue(25)}px;
`;

export const Accessory = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;

        // cima, lados, baixo
  padding: 24px 24px ${getBottomSpace() + 24}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_primary};
  `};
`;
