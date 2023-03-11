import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NavigationService from '../../navigation/NavigationScren';
import {COLORS} from '../../constants/Colors';
type propsType = {
  onPress?: () => void | undefined;
  name?: string;
  backgroundColor?: string;
  position?: string;
};
const GoBacknavbar = (props: propsType) => {
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: props.backgroundColor ? props.backgroundColor : '',
        },
      ]}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.header_title}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoBacknavbar;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    zIndex: 20,
  },
  header_title: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
