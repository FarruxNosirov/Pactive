import React from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AllRoutes} from '../../routes/AllRoutes';

import {
  HomeIconActive,
  HomeIconNotActive,
  ProfileIconActive,
  ProfileIconNotActive,
} from '../../assets/icons/iconst';
import {COLORS} from '../../constants/Colors';
import HelpStacks from './HelpStack';
import HomeStacks from './HomeStacks';
import PactsStacks from './PactsStack';
import ProfileStacks from './ProfileStack';
import TrackStacks from './TrackStack';
import Hexagon from '../../components/Hexagon';

const Tab = createBottomTabNavigator();

const TabStacks = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 80,
          paddingBottom: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <HomeIconActive fill={COLORS.pactiveBlue} />
              ) : (
                <HomeIconNotActive fill={COLORS.textColor} />
              )}
              <Text
                style={{
                  color: focused ? COLORS.pactiveBlue : COLORS.textColor,
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Home
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={AllRoutes.HomeStacks}
        component={HomeStacks}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <HomeIconActive fill={COLORS.pactiveBlue} />
              ) : (
                <HomeIconNotActive fill={COLORS.textColor} />
              )}
              <Text
                style={{
                  color: focused ? COLORS.pactiveBlue : COLORS.textColor,
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                PACTS
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={AllRoutes.PactsStacks}
        component={PactsStacks}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 20,
                }}>
                <Hexagon
                  size="52"
                  fill={focused ? COLORS.pactiveBlue : COLORS.pactiveGreen}
                />
              </View>
              <Text
                style={{
                  color: focused ? COLORS.pactiveBlue : COLORS.textColor,
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 25,
                }}>
                TRACK
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={AllRoutes.TrackStacks}
        component={TrackStacks}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <ProfileIconActive fill={COLORS.pactiveBlue} />
              ) : (
                <ProfileIconNotActive fill={COLORS.textColor} />
              )}
              <Text
                style={{
                  color: focused ? COLORS.pactiveBlue : COLORS.textColor,
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                PROFILE
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={AllRoutes.ProfileStacks}
        component={ProfileStacks}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? (
                <HomeIconActive fill={COLORS.pactiveBlue} />
              ) : (
                <HomeIconNotActive fill={COLORS.textColor} />
              )}
              <Text
                style={{
                  color: focused ? COLORS.pactiveBlue : COLORS.textColor,
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                HELP
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={AllRoutes.HelpStacks}
        component={HelpStacks}
      />
    </Tab.Navigator>
  );
};

export default TabStacks;
