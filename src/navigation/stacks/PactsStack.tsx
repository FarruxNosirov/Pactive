import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';

import PactsScreen from '../../screens/pacts/PactsScreen';
import PactActiveAll from '../../screens/pacts/Department/PactActiveAll/PactActiveAll';

// createNativeStackNavigator
const Stack = createNativeStackNavigator();

const PactsStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.PactsScreen} component={PactsScreen} />
      <Stack.Screen name={AllRoutes.PactActiveAll} component={PactActiveAll} />
    </Stack.Navigator>
  );
};

export default PactsStacks;
