import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../constants/Colors';
type propsType = {
  setTime?: any;
  setData?: any;
  title?: string;
  time?: any;
  data?: any;
};
const BirthOfData = (props: propsType) => {
  const [open, setOpen] = useState({
    value1: false,
    value2: false,
  });

  const closeData = () => {
    setOpen({...open, value1: open.value1});
  };
  const closeTime = () => {
    setOpen({...open, value2: open.value2});
  };

  return (
    <View>
      <View style={styles.textInputContainer}>
        <Text style={styles.inputLabel}>{props.title}</Text>
        {props?.data && (
          <DatePicker
            modal
            mode="date"
            open={open.value1}
            date={props.data}
            onConfirm={date => {
              setOpen({...open, value1: open.value1});
              props?.setData(date);
            }}
            onCancel={closeData}
          />
        )}
        {props?.time && (
          <DatePicker
            modal
            mode="time"
            locale="en_GB"
            open={open.value2}
            date={props?.time}
            onConfirm={time => {
              setOpen({...open, value2: open.value2});
              props?.setTime(time);
            }}
            onCancel={closeTime}
          />
        )}
        <View style={styles.inputField}>
          {props?.data && (
            <TouchableOpacity
              onPress={() => setOpen({...open, value1: !open.value1})}>
              <Text>{props?.data?.toISOString().split('T')[0]}</Text>
            </TouchableOpacity>
          )}
          {props?.data || props?.time ? (
            <Text style={styles.dateTimeSeparator}>-</Text>
          ) : null}
          {props?.time && (
            <TouchableOpacity
              onPress={() => setOpen({...open, value2: !open.value2})}>
              <Text>{props?.time?.toISOString().split('T')[1]}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default BirthOfData;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparent,
    minHeight: 80,
    color: 'black',
    fontSize: 13,
    borderBottomWidth: 1,
  },
  textInputContainer: {
    marginTop: 25,
    width: '100%',
    minHeight: 80,
    zIndex: -1,
  },
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
    marginBottom: 20,
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
    flexDirection: 'row',
  },
  dateTimeSeparator: {
    marginLeft: 8,
    marginRight: 8,
  },
});
