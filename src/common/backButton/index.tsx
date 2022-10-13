import * as React from 'react';
import * as Styles from './styles';
import * as Props from './types';

import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons';

export const BackButton: React.FC<Props.ButtonProps> = ({
  icon,
  iconSize = 24,
  iconColor = useTheme().colors.text,
  text,
  ...rest
}: Props.ButtonProps) => {
  return (
    <Styles.Container {...rest}>
      {icon && <MaterialIcons name={icon} size={iconSize} color={iconColor} />}
    </Styles.Container>
  );
};
