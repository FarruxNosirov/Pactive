import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Data} from '../../HomeScreen';
import HomeAddCart from '../homeAddCart/HomeAddCart';
import {COLORS} from '../../../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Text from '../../../../constants/Text';
import BottomHeight from '../../../../components/BottomHeight';
import NavigationService from '../../../../navigation/NavigationScren';

const Notifications = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => NavigationService.goBack()}>
          <Icon name="left" size={24} color={COLORS.textColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Clear All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        renderItem={() => <HomeAddCart />}
        style={{paddingHorizontal: 20}}
        ListFooterComponent={<BottomHeight height={50} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
