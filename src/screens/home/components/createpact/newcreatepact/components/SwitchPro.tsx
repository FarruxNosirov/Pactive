import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-switch';
import {COLORS} from '../../../../../../constants/Colors';
import Text from '../../../../../../constants/Text';

const SwitchPro = () => {
  const [checkBox, setCheckBox] = useState({
    active1: false,
    active2: false,
  });
  return (
    <View style={styles.switchWrapper}>
      <Text style={styles.switchLabelLeft}>Daily Target</Text>
      <Switch
        value={checkBox.active1}
        activeText={''}
        inActiveText={''}
        circleSize={30}
        barHeight={20}
        onValueChange={() =>
          setCheckBox({...checkBox, active1: !checkBox.active1})
        }
        circleBorderWidth={0}
        backgroundActive={'#CDCDCD'}
        backgroundInactive={'#CDCDCD'}
        circleActiveColor={'#16E9A3'}
        circleInActiveColor={'#16E9A3'}
        containerStyle={{
          overflow: 'visible',
          borderWidth: 0,
          marginTop: 20,
          marginBottom: 20,
        }}
        disabled={false}
      />
      <Text style={styles.switchLabelRight}>Total Target</Text>
    </View>
  );
};

export default SwitchPro;

const styles = StyleSheet.create({
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  switchLabelLeft: {
    paddingRight: 8,
    color: COLORS.textColor,

    textTransform: 'uppercase',
  },
  switchLabelRight: {
    paddingLeft: 8,
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
});
