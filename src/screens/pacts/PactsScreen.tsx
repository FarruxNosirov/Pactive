import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import PactsHeader from './components/PactsHeader';

import {COLORS} from '../../constants/Colors';

import TabStacks from '../../navigation/stacks/TabStacks';

const PactsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <PactsHeader />
        <TabStacks />
      </ScrollView>
    </View>
  );
};

export default PactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
