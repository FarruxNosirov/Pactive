import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/auth/login/Login';
import {AllRoutes} from '../../routes/AllRoutes';

import OnboardingScreen from '../../screens/auth/onboarding';
import PinNumber from '../../screens/auth/pinNumber/PinNumber';
import Register from '../../screens/auth/register/Register';

const Stack = createNativeStackNavigator();
const AuthStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.LOGIN} component={Login} />
      <Stack.Screen
        name={AllRoutes.OnboardingScreen}
        component={OnboardingScreen}
      />
      <Stack.Screen name={AllRoutes.PinNumber} component={PinNumber} />
      <Stack.Screen name={AllRoutes.Register} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStacks;
