import React from 'react';
import { FlatList, ViewToken } from 'react-native';
import * as Styles from './styles';

interface Props {
  imageUrl: string[];
};

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export const Slider: React.FC<Props> = ({ imageUrl }: Props) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  const IndexChange = React.useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index)
  });

  return (
    <Styles.Container>
      <Styles.ImageIndexes>
        {imageUrl.map((_, index) => <Styles.ImageIndex key={String(index)} active={index === imageIndex} />)}
      </Styles.ImageIndexes>

      <FlatList
        data={imageUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <Styles.CarImageWrapper>
            <Styles.CarImage
              source={{ uri: item }}
              resizeMode='contain'
            />
          </Styles.CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={IndexChange.current}
      />
    </Styles.Container>
  );
};