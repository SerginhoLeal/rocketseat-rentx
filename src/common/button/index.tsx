import React from 'react';
import * as Styles from './styles';

interface Props {
  title: string;
  color?: string;
};

export const Button: React.FC<Props> = ({
  title,
  color,
  ...rest
}: Props) => {
  return (
    <Styles.Container {...rest} color={color}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  )
};
