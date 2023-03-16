import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../constants/Colors';
import Text from '../../../../../../constants/Text';
import Chackbox from '../../../../../../components/Chackbox';

const ContactItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.name_phone}>
        <Text style={styles.name}>Diyor</Text>
        <View style={styles.phone_box}>
          <Text style={styles.phoneDes}>mobile</Text>
          <Text style={styles.phone}>+998994454235</Text>
        </View>
      </View>
      <View style={styles.chackbox}>
        <Chackbox />
      </View>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.pactiveLightGray,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  name_phone: {},
  phone_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: COLORS.black,
    fontSize: 16,
    marginBottom: 5,
  },
  phoneDes: {
    color: COLORS.textColor,
    fontSize: 12,
  },
  phone: {
    color: COLORS.textColor,
    fontSize: 12,
    marginLeft: 5,
  },
  chackbox: {},
});
