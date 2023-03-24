import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import PactsHeader from './components/PactsHeader';

import {COLORS} from '../../constants/Colors';

import TabStacks from '../../navigation/stacks/TabStacks';

const height = Dimensions.get('window').height;
const PactsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <PactsHeader />
        <TabStacks />
      </ScrollView>
      {/* <SafeAreaView>
        <View style={styles.updetHeader} />
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
       
        <View style={styles.lowHeader}></View>
      </SafeAreaView>
      <ScrollView style={{flex: 1}}>
        <View style={styles.paddinForHeader}></View>
     
      </ScrollView> */}
    </View>
  );
};

export default PactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  updetHeader: {
    height: 0,
  },
  header: {
    width: '100%',
    position: 'absolute',
    height: 196,
  },
  paddinForHeader: {
    height: 0,
  },
  lowHeader: {},
});
