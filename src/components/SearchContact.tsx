import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/Colors';
import {fontBold, fontNormal} from '../constants/Fonts';
import Text from '../constants/Text';
type propsType = {
  placeholder?: string;
  btnName?: string;
};
const SearchContact = (props: propsType) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainerStyle}
        placeholder={props?.placeholder}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
        keyboardType="web-search"
      />
      <TouchableOpacity
        style={[
          styles.buttonPrimaryDisabled,
          {
            backgroundColor:
              inputValue.length <= 0 ? COLORS.pactiveGray : COLORS.pactiveGreen,
          },
        ]}
        disabled={inputValue.length <= 0 ? true : false}>
        <Text style={styles.buttonPrimaryLabel}>{props?.btnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pactiveLightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonPrimaryDisabled: {
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    elevation: 6,
    alignSelf: 'center',
    height: 'auto',
    minWidth: 90,
  },
  buttonPrimary: {
    backgroundColor: COLORS.pactiveGreen,
  },
  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: fontBold,
    lineHeight: 20,
    textAlign: 'center',
  },
  inputContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderBottomWidth: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#ffffff',
    width: '70%',
    height: 50,
  },
});
