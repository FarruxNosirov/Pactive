import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';
import HomeScreen from '../../screens/home/HomeScreen';

// createNativeStackNavigator
const Stack = createNativeStackNavigator();

const HomeStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.HOMESCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStacks;
