import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';
import HomeScreen from '../../screens/home/HomeScreen';
import Notifications from '../../screens/home/components/notifications/Notifications';

// createNativeStackNavigator
const Stack = createNativeStackNavigator();

const HomeStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={AllRoutes.Notifications} component={Notifications} />
    </Stack.Navigator>
  );
};

export default HomeStacks;
