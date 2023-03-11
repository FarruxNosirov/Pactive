import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';

import TrackScreen from '../../screens/track/TrackScreen';

const Stack = createNativeStackNavigator();

const TrackStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.TrackScreen} component={TrackScreen} />
    </Stack.Navigator>
  );
};

export default TrackStacks;
