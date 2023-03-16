import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PactActive from '../../screens/pacts/Department/PactActive';
import {AllRoutes} from '../../routes/AllRoutes';
import PactInvite from '../../screens/pacts/Department/PactInvite';
import PactSocial from '../../screens/pacts/Department/PactSocial';
import {COLORS} from '../../constants/Colors';
import {fontBold} from '../../constants/Fonts';

const Tab = createMaterialTopTabNavigator();
const height = Dimensions.get('window').height;
const TabStacks = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: fontBold,
          textTransform: 'uppercase',
        },
        tabBarActiveTintColor: COLORS.activeTabTextColor,
        tabBarInactiveTintColor: COLORS.white,
        tabBarContentContainerStyle: {
          backgroundColor: COLORS.pactiveHeaderColor,
        },
      }}
      style={{
        height: height / 1.5,
        paddingBottom: 20,
      }}>
      <Tab.Screen name={'Active'} component={PactActive} />
      <Tab.Screen name={'Invite'} component={PactInvite} />
      <Tab.Screen name={'Social'} component={PactSocial} />
    </Tab.Navigator>
  );
};

export default TabStacks;

const styles = StyleSheet.create({});
