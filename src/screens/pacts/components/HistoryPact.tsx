import React from 'react';
import {StyleSheet, View} from 'react-native';
import BackEditHeader from '../../../components/BackEditHeader';
import Imagebacground from '../../../components/Imagebacground';
import {COLORS} from '../../../constants/Colors';
import NavigationService from '../../../navigation/NavigationScren';
import NoPactsView from './noPactsView';

const HistoryPact = () => {
  return (
    <View style={styles.container}>
      <BackEditHeader
        name="Back"
        backgroundColor={COLORS.fixedHeaderBg}
        onBackPress={() => NavigationService.goBack()}
        modalOf={true}
      />
      <Imagebacground
        title="History"
        imageUrl={require('../../../assets/images/heroImages/home-hero.jpg')}
        width={'100%'}
        height={220}
      />
      <View>
        <NoPactsView title={'invitations'} />
      </View>
    </View>
  );
};

export default HistoryPact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
