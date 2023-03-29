import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DefaultInput from './defaultInput/DefaultInput';
import {COLORS} from '../constants/Colors';
import IconsDown from 'react-native-vector-icons/Entypo';
type propsType = {
  title?: string;
  inputTitle?: string;
  value?: string;
  onChangeInput?: (val: string) => void;
  minValue?: any;
};
const MesseageActive = (props: propsType) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.conmtainer}>
      <TouchableOpacity
        style={styles.active}
        onPress={() => setOpenModal(a => !a)}>
        <Text style={styles.title}>{props?.title}</Text>
        <View style={{position: 'absolute', right: 10}}>
          {openModal ? (
            <IconsDown
              name="chevron-thin-up"
              size={24}
              color={COLORS.activeTabTextColor}
            />
          ) : (
            <IconsDown
              name="chevron-thin-down"
              size={24}
              color={COLORS.activeTabTextColor}
            />
          )}
        </View>
      </TouchableOpacity>
      {openModal ? (
        <DefaultInput
          title={props?.inputTitle}
          multiline={true}
          minHeight={props.minValue}
          value={props?.value}
          onChange={props.onChangeInput}
        />
      ) : null}
    </View>
  );
};

export default MesseageActive;

const styles = StyleSheet.create({
  conmtainer: {
    width: '100%',
    marginBottom: 30,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  active: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  title: {
    color: COLORS.activeTabTextColor,
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
