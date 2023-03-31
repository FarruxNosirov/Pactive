import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/Colors';
import Text from '../../constants/Text';
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
