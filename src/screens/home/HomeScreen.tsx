import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

import ButtomHeght from '../../components/BottomHeight';
import {COLORS} from '../../constants/Colors';

import CreatePactBacground from './components/createpact/CreatePactBacground';
import CreatePactBtn from './components/createpact/CreatePactBtn';
import SocialPacts from './components/social_pacts/SocialPacts';
import HomeVedio from './components/vedio/HomeVedio';
import HomeAddCart from './components/homeAddCart/HomeAddCart';

export const Data = [
  {id: 0, name: 'Farrux', info: ''},
  {id: 1, name: 'Farrux', info: ''},
  {id: 2, name: 'Farrux', info: ''},
  {id: 3, name: 'Farrux', info: ''},
  {id: 4, name: 'Farrux', info: ''},
];

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={Data}
        renderItem={() => (
          <View style={{paddingHorizontal: 20}}>
            <HomeAddCart />
          </View>
        )}
        ListHeaderComponent={
          <>
            <CreatePactBacground />
          </>
        }
        ListFooterComponent={
          <>
            <HomeVedio />
            <CreatePactBtn />
            <SocialPacts />
            <ButtomHeght height={20} />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
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
