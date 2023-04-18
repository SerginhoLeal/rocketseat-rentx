import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '@svg';
import { api } from '@fetch';
import { CarDTO } from '@dtos';
import { Car, Load, LoadAnimation} from '@common';
// import { RootStackParamList } from '@dtos';
import { Ionicons } from '@expo/vector-icons';

import { routes } from '../../routes/constants';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export default function HomeScreen(){
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionX.value},
        {translateY: positionY.value}
      ]
    }
  })

  const [docs, setDocs] = React.useState<Array<CarDTO>>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const { width: WIDTH_FLAT_LIST, height: HEIGHT_FLAT_LIST } = Native.useWindowDimensions();

  const handleCarDetails = (car: CarDTO) => navigation.navigate(routes.carDetails, { car });
  const handleOpenMyCars = () => navigation.navigate(routes.myCars);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any){
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, context){
      positionX.value = context.positionX + event.translationX;
      positionY.value = context.positionY + event.translationY;
    },
    onEnd(){
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  });

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

  React.useEffect(() => {
    Native.BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  return (
    <Styles.Container>

      <Native.StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Styles.Header>
        <Styles.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {
            !loading && (
              <Styles.TotalCars>Total de {docs.length} carros</Styles.TotalCars>
            )
          }
        </Styles.HeaderContent>
      </Styles.Header>

      {loading ? <LoadAnimation /> : (
        <Native.View style={{ width: WIDTH_FLAT_LIST, height: HEIGHT_FLAT_LIST }}>
          <Styles.CarList
            data={docs}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: any) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
        </Native.View>
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[ myCarsButtonStyle, { position: 'absolute', bottom: 13, right: 22 }]}>
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={{ width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.main }}
          >
            <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>

    </Styles.Container>
  );
};
