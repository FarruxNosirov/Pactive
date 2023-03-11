/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllRoutes} from '../routes/AllRoutes';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {COLORS} from '../constants/Colors';
import AuthStacks from './stacks/AuthStacks';

import NavigationService from './NavigationScren';
import TabStacks from './stacks/TabStacks';
import CreatePactScreen from '../screens/home/components/createpact/newcreatepact/CreatePactScreen';
import Account from '../screens/profile/profileScreens/account/Account';
import Feedback from '../screens/profile/profileScreens/feedback/Feedback';

let Stack = createNativeStackNavigator();
const AllNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{flex: 1, marginTop: insets.top, backgroundColor: COLORS.white}}>
      <NavigationContainer ref={NavigationService.ref}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name={AllRoutes.AUTH} component={AuthStacks} /> */}
          <Stack.Screen name={AllRoutes.TabStacks} component={TabStacks} />
          <Stack.Screen
            name={AllRoutes.CreatePactScreen}
            component={CreatePactScreen}
          />
          <Stack.Screen name={AllRoutes.Account} component={Account} />
          <Stack.Screen name={AllRoutes.Feedback} component={Feedback} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AllNavigation;
