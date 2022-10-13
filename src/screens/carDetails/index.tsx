import React from 'react';
import * as Styles from './styles';

import { BackButton, Slider, Accessory, Button } from '@common';

import SpeedSvg from '@svg/speed.svg';
import AccelerationSvg from '@svg/acceleration.svg';
import ForceSvg from '@svg/force.svg';
import GasolineSvg from '@svg/gasoline.svg';
import ExchangeSvg from '@svg/exchange.svg';
import PeopleSvg from '@svg/people.svg';

const CarDetails: React.FC = () => {
  return (
    <Styles.Container>

      <Styles.Header>
        <BackButton icon='chevron-left' onPress={() => {}} />
      </Styles.Header>

      <Styles.CarDetails>
        <Slider
          imageUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYndlfI0sJJhQnVT8K4xaYb0n1wgPiPPH6W8yROqYhWmR9w1Zs6_l2nyW4AukUfeu7MVk&usqp=CAU']}
        />
      </Styles.CarDetails>

      <Styles.Content>
        <Styles.Details>
          <Styles.Description>
            <Styles.Brand>Lamborguini</Styles.Brand>
            <Styles.Name>Hiracan</Styles.Name>
          </Styles.Description>
          <Styles.Rent>
            <Styles.Period>Ao dia</Styles.Period>
            <Styles.Price>R$ 580</Styles.Price>
          </Styles.Rent>
        </Styles.Details>

        <Styles.Accessory>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="888 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Styles.Accessory>

        <Styles.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </Styles.About>
      </Styles.Content>

      <Styles.Footer>
        <Button title='Confirmar' />
      </Styles.Footer>

    </Styles.Container>
  );
}

export default CarDetails;