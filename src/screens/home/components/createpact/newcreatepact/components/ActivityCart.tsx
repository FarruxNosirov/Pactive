import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../constants/Colors';
import Svg, {Path} from 'react-native-svg';

type propsType = {
  title?: string;
  Icon?: any;
  isPressed?: boolean;
  onPress?(): void;
};
const ActivityCart = (props: propsType) => {
  return (
    <TouchableOpacity
      style={styles.hexagonRadioGroupItem}
      onPress={props.onPress}>
      <props.Icon active={props.isPressed} />
      <Text style={styles.hexagonRadioGroupItemLabel}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default ActivityCart;

const styles = StyleSheet.create({
  hexagonRadioGroupItem: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 16,
  },
  hexagonRadioGroupItemLabel: {
    width: 80,
    textAlign: 'center',
    color: 'black',
    textTransform: 'capitalize',
    marginTop: 5,
  },
});
