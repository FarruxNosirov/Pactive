import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {fontBold} from '../../constants/Fonts';
import PactActive from '../../screens/pacts/Department/PactActive';
import PactInvite from '../../screens/pacts/Department/PactInvite';
import PactSocial from '../../screens/pacts/Department/PactSocial';

const Tab = createMaterialTopTabNavigator();
const height = Dimensions.get('window').height;
const TabStacks = () => {
  return (
    <View style={{flex: 1}}>
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
          height: height / 1.2,
          paddingBottom: 20,
        }}>
        <Tab.Screen name={'Active'} component={PactActive} />
        <Tab.Screen name={'Invite'} component={PactInvite} />
        <Tab.Screen name={'Social'} component={PactSocial} />
      </Tab.Navigator>
    </View>
  );
};

export default TabStacks;

const styles = StyleSheet.create({});
