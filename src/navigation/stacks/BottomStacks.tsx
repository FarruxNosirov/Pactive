import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AllRoutes} from '../../routes/AllRoutes';

import {COLORS} from '../../constants/Colors';
import HelpStacks from './HelpStack';
import HomeStacks from './HomeStacks';
import PactsStacks from './PactsStack';
import ProfileStacks from './ProfileStack';
import TrackStacks from './TrackStack';
import Hexagon from '../../components/Hexagon';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../constants/Text';

const Tab = createBottomTabNavigator();

const BottomStacks = () => {
  return (
    <>
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
            shadowColor: '#d0d0d0',
            shadowOffset: {
              width: 2,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 5,
            position: 'relative',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                {focused ? (
                  <MaterialIcon
                    name="home"
                    style={{color: COLORS.pactiveBlue}}
                    size={24}
                  />
                ) : (
                  <MaterialIcon
                    name="home"
                    style={{color: COLORS.textColor}}
                    size={24}
                  />
                )}
                <Text
                  style={{
                    color: focused ? COLORS.pactiveBlue : COLORS.textColor,
                    fontSize: 13,
                    fontWeight: '400',
                  }}>
                  Home
                </Text>
                {/* <View style={styles.value}>
                  <Text style={styles.valueText}>1</Text>
                </View> */}
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
              <View style={styles.container}>
                {focused ? (
                  <MaterialIcon
                    name="account-supervisor-circle"
                    style={{color: COLORS.pactiveBlue}}
                    size={24}
                  />
                ) : (
                  <MaterialIcon
                    name="account-supervisor-circle"
                    style={{color: COLORS.textColor}}
                    size={24}
                  />
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
                {/* <View style={styles.value}>
                  <Text style={styles.valueText}>1</Text>
                </View> */}
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
              <View style={styles.container}>
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
                    icon={
                      <SimpleIcon name="graph" size={24} color={COLORS.white} />
                    }
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
              <View style={styles.container}>
                {focused ? (
                  <MaterialIcon
                    name="account"
                    style={{color: COLORS.pactiveBlue}}
                    size={24}
                  />
                ) : (
                  <MaterialIcon
                    name="account"
                    style={{color: COLORS.textColor}}
                    size={24}
                  />
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
              <View style={styles.container}>
                {focused ? (
                  <MaterialIcon
                    name="help-circle"
                    style={{color: COLORS.pactiveBlue}}
                    size={24}
                  />
                ) : (
                  <MaterialIcon
                    name="help-circle"
                    style={{color: COLORS.textColor}}
                    size={24}
                  />
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
    </>
  );
};

export default BottomStacks;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  value: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: COLORS.pactiveBlue,
    borderRadius: 50,
    top: -25,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {color: COLORS.white, fontSize: 12, fontWeight: 'bold'},
});
