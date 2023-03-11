import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import ButtomHeght from '../../components/BottomHeight';
import {COLORS} from '../../constants/Colors';

import CreatePactBacground from './components/createpact/CreatePactBacground';
import CreatePactBtn from './components/createpact/CreatePactBtn';
import SocialPacts from './components/social_pacts/SocialPacts';
const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CreatePactBacground />
        {/* <HomeVedio /> */}
        <CreatePactBtn />
        <SocialPacts />
        <ButtomHeght height={20} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  header: {
    fontSize: 20,
  },
  link: {
    color: COLORS.pactiveGreen,
    textTransform: 'uppercase',
    fontSize: 14,
  },
});
