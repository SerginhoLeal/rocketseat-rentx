import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@dtos';
import { routes } from './constants';

import HomeScreen from '../screens/home';
import CarDetailsScreen from '../screens/carDetails';
import SchedulingScreen from '../screens/scheduling';
import SchedulingDetailsScreen from '../screens/schedulingDetails';
import SchedulingCompleteScreen from '../screens/schedulingComplete';
import myCarsScreens from '../screens/myCars';
import SignInScreens from '../screens/signIn';
import SplashScreens from '../screens/splash';


const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName='SplashScreens' screenOptions={{ headerShown: false }}>
      <Screen name={routes.splash} component={SplashScreens} />
      <Screen name={routes.signIn} component={SignInScreens} options={{ gestureEnabled: false }} />
      <Screen name={routes.home} component={HomeScreen} />
      <Screen name={routes.carDetails} component={CarDetailsScreen} />
      <Screen name={routes.scheduling} component={SchedulingScreen} />
      <Screen name={routes.schedulingDetails} component={SchedulingDetailsScreen} />
      <Screen name={routes.schedulingComplete} component={SchedulingCompleteScreen} />
      <Screen name={routes.myCars} component={myCarsScreens} />
    </Navigator>
  );
};

export default StackRoutes;