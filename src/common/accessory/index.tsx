import React from 'react';
import { SvgProps } from 'react-native-svg';
import * as Styles from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export const Accessory: React.FC<Props> = ({
  name,
  icon: Icon
}: Props) => {
  return (
    <Styles.Container>
      <Icon width={32} height={32} />
      <Styles.Name>{name}</Styles.Name>
    </Styles.Container>
  );
};