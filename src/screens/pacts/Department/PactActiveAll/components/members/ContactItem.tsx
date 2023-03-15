import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../constants/Colors';

const ContactItem = () => {
  return <View style={{borderWidth: 1}}></View>;
};

export default ContactItem;

const styles = StyleSheet.create({
  item: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.itemContainerColor,
    borderRadius: 6,
    marginBottom: 5,
  },
  about: {
    color: COLORS.textColor,
    fontSize: 10,
    opacity: 0.5,
  },
});
