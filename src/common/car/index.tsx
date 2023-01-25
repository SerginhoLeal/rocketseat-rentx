import * as React from 'react';
import * as Styles from './styles';
import * as Props from './types';

import { getAccessoryIcon } from '@utils';
export const Car: React.FC<Props.CarProps> = ({ data, ...rest }: Props.CarProps) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Styles.Container {...rest}>
      <Styles.Details>
        <Styles.Brand>{data.brand}</Styles.Brand>
        <Styles.Name>{data.name}</Styles.Name>

        <Styles.About>
          <Styles.Rent>
            <Styles.Period>{data.rent.period}</Styles.Period>
            <Styles.Price>R$ {data.rent.price}</Styles.Price>
          </Styles.Rent>

          <Styles.Types>
            <MotorIcon />
          </Styles.Types>
        </Styles.About>
      </Styles.Details>

      <Styles.CarImage source={{ uri: data.thumbnail }} resizeMode='contain' />
    </Styles.Container>
  );
};
