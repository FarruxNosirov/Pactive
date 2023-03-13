import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultInput from '../../../../../../components/defaultInput/DefaultInput';
import {COLORS} from '../../../../../../constants/Colors';
import DatePicker from 'react-native-date-picker';

const FormPactScreen = () => {
  const [open, setOpen] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
  });
  const [dateStart, setDateStart] = useState(new Date());
  const [timeStart, setTimeStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());
  const [state, setState] = useState({
    pacttitle: '',
    description: '',
    startDay: dateStart,
    endDay: dateEnd,
    startTime: timeStart,
    endTime: timeEnd,
  });
  const onStateChange = (e: Event, key: any) => {
    setState({...state, [key]: e});
  };

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: COLORS.transparent,
        paddingHorizontal: 20,
      }}>
      <DefaultInput
        onChange={e => onStateChange(e, 'pacttitle')}
        value={state.pacttitle}
        title="Pact title"
        error="You must enter a pact name"
      />
      <DefaultInput
        onChange={e => onStateChange(e, 'description')}
        value={state.description}
        title="Pact description"
        error="You must give your pact a description"
        multiline={true}
        minHeight={80}
      />
      <View style={styles.textInputContainer}>
        <Text style={styles.inputLabel}>Start</Text>
        <DatePicker
          modal
          mode="date"
          open={open.value1}
          date={dateStart}
          onConfirm={date => {
            setOpen({...open, value1: open.value1});
            setDateStart(date);
          }}
          onCancel={() => {
            setOpen({...open, value1: open.value1});
          }}
        />
        <DatePicker
          modal
          mode="time"
          locale="en_GB"
          open={open.value2}
          date={timeStart}
          onConfirm={time => {
            setOpen({...open, value2: open.value2});
            setTimeStart(time);
          }}
          onCancel={() => {
            setOpen({...open, value2: open.value2});
          }}
        />
        <View style={styles.inputField}>
          <TouchableOpacity
            onPress={() => setOpen({...open, value1: !open.value1})}>
            <Text>{dateStart.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          <Text style={styles.dateTimeSeparator}>-</Text>
          <TouchableOpacity
            onPress={() => setOpen({...open, value2: !open.value2})}>
            <Text>{timeStart.toISOString().split('T')[1]}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.inputLabel}>End</Text>
        <DatePicker
          modal
          mode="date"
          open={open.value3}
          date={dateEnd}
          onConfirm={date => {
            setOpen({...open, value3: open.value3});
            setDateEnd(date);
          }}
          onCancel={() => {
            setOpen({...open, value3: open.value3});
          }}
        />
        <DatePicker
          modal
          mode="time"
          locale="en_GB"
          open={open.value4}
          date={timeEnd}
          onConfirm={time => {
            setOpen({...open, value4: open.value4});
            setTimeEnd(time);
          }}
          onCancel={() => {
            setOpen({...open, value4: open.value4});
          }}
        />
        <View style={styles.inputField}>
          <TouchableOpacity
            onPress={() => setOpen({...open, value3: !open.value3})}>
            <Text>{dateEnd.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          <Text style={styles.dateTimeSeparator}>-</Text>
          <TouchableOpacity
            onPress={() => setOpen({...open, value4: !open.value4})}>
            <Text>{timeEnd.toISOString().split('T')[1]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FormPactScreen;

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
