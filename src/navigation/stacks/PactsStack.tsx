import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';

import PactsScreen from '../../screens/pacts/PactsScreen';
import PactActiveAll from '../../screens/pacts/Department/PactActiveAll/PactActiveAll';
import PactSocialAll from '../../screens/pacts/Department/PactSocialAll/PactSocialAll';
import HistoryPact from '../../screens/pacts/components/HistoryPact';

// createNativeStackNavigator
const Stack = createNativeStackNavigator();

const PactsStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.PactsScreen} component={PactsScreen} />
      <Stack.Screen name={AllRoutes.PactActiveAll} component={PactActiveAll} />
      <Stack.Screen name={AllRoutes.PactSocialAll} component={PactSocialAll} />
      <Stack.Screen name={AllRoutes.HistoryPact} component={HistoryPact} />
    </Stack.Navigator>
  );
};

export default PactsStacks;
