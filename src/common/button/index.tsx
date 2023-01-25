import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import * as Styles from './styles';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
};

export const Button: React.FC<Props> = ({
  title,
  color = useTheme().colors.main,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: Props) => {
  const theme = useTheme();

  return (
    <Styles.Container
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Styles.Title>{title}</Styles.Title>
      }

    </Styles.Container>
  )
};
