import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../../../constants/Colors';
import {fontBold} from '../../../../../constants/Fonts';
import Text from '../../../../../constants/Text';
type propsType = {
  btnName?: string;
  iconName: string;
};
const ButtonIcon = (props: propsType) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.buttonPrimary, {marginBottom: 10, minWidth: 180}]}>
        <Icon style={[styles.buttonPrimaryIcon]} name={props.iconName} />
        <Text style={styles.buttonLabel}>{props.btnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonPrimary: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: COLORS.pactiveGreen,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    elevation: 6,
    flexDirection: 'row',
  },
  buttonPrimaryIcon: {
    color: '#fff',
    fontSize: 20,
    marginRight: 20,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: fontBold,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
});
