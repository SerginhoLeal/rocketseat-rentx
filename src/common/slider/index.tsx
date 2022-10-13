import React from 'react';
import * as Styles from './styles';

interface Props {
  imageUrl: string[];
};

export const Slider: React.FC<Props> = ({ imageUrl }: Props) => {
  return (
    <Styles.Container>
      <Styles.ImageIndexes>
        <Styles.ImageIndex active={true} />
        <Styles.ImageIndex active={false} />
        <Styles.ImageIndex active={false} />
        <Styles.ImageIndex active={false} />
      </Styles.ImageIndexes>

      <Styles.CarImageWrapper>
        <Styles.CarImage
          source={{ uri: imageUrl[0] }}
          resizeMode='contain'
        />
      </Styles.CarImageWrapper>
    </Styles.Container>
  );
};