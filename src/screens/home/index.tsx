import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '@svg';
import { api } from '@fetch';
import { CarDTO } from '@dtos';
import { Car, Load } from '@common';
// import { RootStackParamList } from '@dtos';
import { Ionicons } from '@expo/vector-icons';

import { routes } from '../../routes/constants';
import { useTheme } from 'styled-components';

export default function HomeScreen(){
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const [docs, setDocs] = React.useState<Array<CarDTO>>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const { width: WIDTH_FLAT_LIST, height: HEIGHT_FLAT_LIST } = Native.useWindowDimensions();

  const handleCarDetails = (car: CarDTO) => navigation.navigate(routes.carDetails, { car });
  const handleOpenMyCars = () => navigation.navigate(routes.myCars);

  React.useEffect(() => {
    (async() => {
      try {
        setDocs((await api.get('/cars')).data);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, []);

  return (
    <Styles.Container>

      <Native.StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Styles.Header>
        <Styles.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
        </Styles.HeaderContent>
      </Styles.Header>

      {loading ? <Load /> : (
        <Native.View style={{ width: WIDTH_FLAT_LIST, height: HEIGHT_FLAT_LIST }}>
          <Styles.CarList
            data={docs}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: any) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
        </Native.View>
      )}

      <Styles.MyCarButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </Styles.MyCarButton>

    </Styles.Container>
  );
};
