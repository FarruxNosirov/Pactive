import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';
import Text from '../../../constants/Text';
import NoPactsView from '../components/noPactsView';

const PactInvite = () => {
  return (
    <View style={styles.container}>
      <NoPactsView title={'invitations'} />
    </View>
  );
};

export default PactInvite;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '100%',
  },
  text: {},
});
