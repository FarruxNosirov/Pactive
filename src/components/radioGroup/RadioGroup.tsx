import * as React from 'react';

import {TouchableOpacity, Text} from 'react-native';
import {View} from 'react-native';

import {COLORS} from '../../constants/Colors';

import {styles} from './style';
type propsType = {
  value?: any;
  isPress?: boolean;
  onPress?(): void;
};
const RadioGroup = (props: propsType) => {
  return (
    <TouchableOpacity
      style={styles.radioRadioGroupItem}
      onPress={props.onPress}>
      <View style={styles.radioRadioGroupItemIndicator}>
        {props.isPress ? (
          <View style={styles.radioRadioGroupItemIndicatorDot} />
        ) : null}
      </View>
      <Text
        style={{
          fontSize: 16,
          color: COLORS.textColor,
        }}>
        {props.value}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioGroup;
