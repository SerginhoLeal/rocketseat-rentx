import 'react-native-gesture-handler';
import * as React from 'react';
import * as Native from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';

import theme from './src/styles/theme';

SplashScreen.preventAutoHideAsync();

const Main: React.FC = () => {
  const [fontsLoading] = useFonts({
    Inter_400Regular: require('./src/assets/fonts/Inter-Regular.ttf'),
    Inter_500Medium: require('./src/assets/fonts/Inter-Medium.ttf'),
    Archivo_400Regular: require('./src/assets/fonts/Archivo-Regular.ttf'),
    Archivo_500Medium: require('./src/assets/fonts/Archivo-Medium.ttf'),
    Archivo_600SemiBold: require('./src/assets/fonts/Archivo-SemiBold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoading) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoading]);

  if (!fontsLoading) {
    return null;
  }

  return (
    <Native.SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Native.SafeAreaView>
  );
}

export default Main;