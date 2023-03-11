import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';

import HelpScreen from '../../screens/help/HelpScreen';

// createNativeStackNavigator
const Stack = createNativeStackNavigator();

const HelpStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.HelpScreen} component={HelpScreen} />
    </Stack.Navigator>
  );
};

export default HelpStacks;
