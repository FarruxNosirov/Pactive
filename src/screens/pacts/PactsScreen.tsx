import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import PactsHeader from './components/PactsHeader';
import Department from './Department/Department';
import BottomHeight from '../../components/BottomHeight';
import {COLORS} from '../../constants/Colors';
import PactActive from './Department/PactActive';
import PactInvite from './Department/PactInvite';
import PactSocial from './Department/PactSocial';
const height = Dimensions.get('window').height;
const PactsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <PactsHeader />
        </View>
        <PactActive />
        <BottomHeight height={100} />
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
  header: {
    height: height / 1.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
