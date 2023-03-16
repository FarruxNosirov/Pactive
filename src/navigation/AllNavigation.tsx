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

import CreatePactScreen from '../screens/home/components/createpact/newcreatepact/CreatePactScreen';
import Account from '../screens/profile/profileScreens/account/Account';
import Feedback from '../screens/profile/profileScreens/feedback/Feedback';
import DeleteAccount from '../screens/profile/profileScreens/deleteAccount/DeleteAccount';
import EditPact from '../screens/pacts/Department/PactActiveAll/components/edit_pact/EditPact';
import ClosePact from '../screens/pacts/Department/PactActiveAll/components/close_pact/ClosePact';
import EditTarget from '../screens/pacts/Department/PactActiveAll/components/members/EditTarget';
import SelectContac from '../screens/pacts/Department/PactActiveAll/components/members/SelectContac';
import BottomStacks from './stacks/BottomStacks';
import SetTarget from '../screens/pacts/Department/PactActiveAll/components/members/SetTarget';
import RemoveMembers from '../screens/pacts/Department/PactActiveAll/components/members/RemoveMembers';
import ReportPact from '../screens/pacts/Department/PactSocialAll/components/ReportPact';

let Stack = createNativeStackNavigator();
const AllNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{flex: 1, marginTop: insets.top, backgroundColor: COLORS.white}}>
      <NavigationContainer ref={NavigationService.ref}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name={AllRoutes.AUTH} component={AuthStacks} /> */}
          <Stack.Screen
            name={AllRoutes.BottomStacks}
            component={BottomStacks}
          />
          <Stack.Screen
            name={AllRoutes.CreatePactScreen}
            component={CreatePactScreen}
          />
          <Stack.Screen name={AllRoutes.Account} component={Account} />
          <Stack.Screen name={AllRoutes.Feedback} component={Feedback} />
          <Stack.Screen
            name={AllRoutes.DeleteAccount}
            component={DeleteAccount}
          />
          <Stack.Screen name={AllRoutes.EditPact} component={EditPact} />
          <Stack.Screen name={AllRoutes.ClosePact} component={ClosePact} />
          <Stack.Screen name={AllRoutes.EditTarget} component={EditTarget} />
          <Stack.Screen
            name={AllRoutes.SelectContac}
            component={SelectContac}
          />
          <Stack.Screen name={AllRoutes.SetTarget} component={SetTarget} />
          <Stack.Screen
            name={AllRoutes.RemoveMembers}
            component={RemoveMembers}
          />
          <Stack.Screen name={AllRoutes.ReportPact} component={ReportPact} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AllNavigation;
