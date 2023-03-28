import React from 'react';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import PactsHeader from './components/PactsHeader';

import TabStacks from '../../navigation/stacks/TabStacks';

const PactsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <PactsHeader />
        <TabStacks />
      </ScrollView>
    </View>
  );
};

export default PactsScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
