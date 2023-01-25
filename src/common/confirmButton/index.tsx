import React from 'react';
import * as Styles from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
};

export const ConfirmButton: React.FC<Props> = ({
  title,
  ...rest
}: Props) => {
  return (
    <Styles.Container {...rest}>
      <Styles.Text>{title}</Styles.Text>
    </Styles.Container>
  );
};
