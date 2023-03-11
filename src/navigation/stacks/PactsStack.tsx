import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';

import PactsScreen from '../../screens/pacts/PactsScreen';

// createNativeStackNavigator
const Stack = createNativeStackNavigator();

const PactsStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.PactsScreen} component={PactsScreen} />
    </Stack.Navigator>
  );
};

export default PactsStacks;
