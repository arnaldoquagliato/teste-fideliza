import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const MainStack = createNativeStackNavigator();
import { withTheme } from "react-native-paper";
import * as Views from '../view';

const Navigation = () => {

  const mount = (theme, screen) => {
      return (props) => React.createElement(theme(screen))
  }
  

  return(
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={'Fideliza'}
        screenOptions={{ headerShown: false }}
      >
          <MainStack.Screen name='Fideliza'  component={mount(withTheme,Views.Autentication.Init)} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
