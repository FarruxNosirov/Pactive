import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../../routes/AllRoutes';

import ProfileScreen from '../../screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AllRoutes.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStacks;
