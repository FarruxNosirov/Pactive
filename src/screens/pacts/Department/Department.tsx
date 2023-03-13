import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../constants/Colors';

const Department = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Active</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Department;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.pactiveHeaderColor,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
