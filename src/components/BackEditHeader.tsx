import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GoBacknavbar from './gobacknavbar/goBacknavbar';
import {COLORS} from '../constants/Colors';
import {EditIcon, RightArrow} from '../assets/icons/iconst';
type propsType = {
  onBackPress?: () => void | undefined;
  name?: string;
  backgroundColor?: string;
  position?: string;
  onPressEdit?: () => void | undefined;
};
const BackEditHeader = (props: propsType) => {
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: props.backgroundColor ? props.backgroundColor : '',
        },
      ]}>
      <TouchableOpacity
        onPress={props.onBackPress}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <RightArrow fill={COLORS.white} />
        <Text style={styles.header_title}>{props.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressEdit}>
        <EditIcon fill={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default BackEditHeader;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 25,
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_title: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
