import { BorderlessButtonProps } from 'react-native-gesture-handler';

export interface ButtonProps extends BorderlessButtonProps {
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  text?: string;
};
