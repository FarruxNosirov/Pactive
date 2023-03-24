import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ButtomHeght from '../../components/BottomHeight';
import {COLORS} from '../../constants/Colors';

import CreatePactBacground from './components/createpact/CreatePactBacground';
import CreatePactBtn from './components/createpact/CreatePactBtn';
import SocialPacts from './components/social_pacts/SocialPacts';
import HomeVedio from './components/vedio/HomeVedio';
import HomeAddCart from './components/homeAddCart/HomeAddCart';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Text from '../../constants/Text';
import NavigationService from '../../navigation/NavigationScren';

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
        ListHeaderComponent={
          <>
            <CreatePactBacground />
          </>
        }
        ListHeaderComponentStyle={{marginBottom: 20}}
        renderItem={() => (
          <View style={{paddingHorizontal: 20}}>
            <HomeAddCart />
          </View>
        )}
        ListFooterComponent={
          <>
            <TouchableOpacity
              style={styles.box}
              onPress={() => NavigationService.navigate('Notifications')}>
              <Text style={{color: COLORS.white}}>
                You have new notifications - View All
              </Text>
            </TouchableOpacity>
            <HomeVedio />
            <CreatePactBtn />
            <SocialPacts />
            <ButtomHeght height={20} />
          </>
        }
        ListFooterComponentStyle={{marginTop: 20}}
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
  box: {
    backgroundColor: COLORS.pactiveGreen,
    marginHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
});
