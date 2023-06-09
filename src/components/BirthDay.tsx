import {Platform, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../constants/Colors';
import Text from '../constants/Text';
type PropsType = {
  date: Date;
  openDate?: any;
  setOpenDate?: any;
  setDate?: any;
  title?: string;
};
const BirthDay = (props: PropsType) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.inputLabel}>{props.title}</Text>
      <DatePicker
        modal
        mode="date"
        open={props.openDate}
        date={props.date}
        onConfirm={date => {
          props.setOpenDate(false);
          props.setDate(date);
        }}
        onCancel={() => {
          props.setOpenDate(false);
        }}
      />
      <TextInput
        style={styles.inputField}
        onPressIn={() => props.setOpenDate(true)}
        value={props.date.toISOString().split('T')[0]}
        editable={false}
        selectTextOnFocus={false}
      />
    </View>
  );
};

export default BirthDay;

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 25,
    width: '100%',
    minHeight: 80,
    zIndex: -1,
  },
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
  inputField: {
    color: COLORS.textColor,
    fontWeight: 'normal',
    borderBottomColor: COLORS.textColor,
    borderBottomWidth: 0.5,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    textAlignVertical: 'center',
    fontSize: 16,
    marginBottom: 5,
    zIndex: -1,
  },
});
