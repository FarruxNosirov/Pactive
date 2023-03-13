import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import BackEditHeader from '../../../../components/BackEditHeader';
import {COLORS} from '../../../../constants/Colors';
import PactActiveAllHeader from './components/PactActiveAllHeader';

const height = Dimensions.get('window').height;

const PactActiveAll = () => {
  return (
    <View style={{flex: 1}}>
      <BackEditHeader backgroundColor={COLORS.fixedHeaderBg} name="Back" />
      <ScrollView>
        <PactActiveAllHeader />
      </ScrollView>
    </View>
  );
};

export default PactActiveAll;

const styles = StyleSheet.create({});