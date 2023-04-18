import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { api } from '@fetch';
import { CarDTO } from '@dtos';
import { BackButton, Car, Load, LoadAnimation } from '@common';

interface CarProp {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
};

export default function MyCarsScreen(){
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const [cars, setCars] = React.useState<CarProp[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleBack = () => navigation.goBack();

  React.useEffect(() => {
    (async() => {
      try {
        const { data } = await api.get('/schedules_byuser', {
          params: {
            'user_id': '1'
          }
        });

        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Styles.Container>
      <Styles.Header>

        <Native.StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <BackButton iconColor={theme.colors.shape} icon='chevron-left' onPress={handleBack} />

        <Styles.Title>choose a {'\n'} rental start and{'\n'} end data</Styles.Title>

      </Styles.Header>

      {loading ? <LoadAnimation /> : 
        <Styles.Content>
          <Styles.Appointment>
            <Styles.AppointmentsTitle>booking done</Styles.AppointmentsTitle>
            <Styles.AppointmentsQuantity>{cars.length}</Styles.AppointmentsQuantity>
          </Styles.Appointment>

          <Native.FlatList
            data={cars}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Styles.CarWapper>
                  <Car data={item.car} />
                  <Styles.CarFooter>
                    <Styles.CarFooterTitle>Time Course</Styles.CarFooterTitle>
                    <Styles.CarFooterPeriod>
                      <Styles.CarFooterDate>{item.startDate}</Styles.CarFooterDate>
                      <AntDesign name="arrowright" size={20} color={theme.colors.title} style={{ marginHorizontal: 10 }} />
                      <Styles.CarFooterDate>{item.endDate}</Styles.CarFooterDate>
                    </Styles.CarFooterPeriod>
                  </Styles.CarFooter>
                </Styles.CarWapper>
              )
            }}
          />

        </Styles.Content>
      }
    </Styles.Container>
  );
};
