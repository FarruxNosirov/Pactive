import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import Text from '../../constants/Text';
type propsType = {
  error?: string;
  title?: string;
  placeholder?: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
  inputStyle?: string;
  secureText?: boolean | undefined;
  onChange?: (val: string) => void;
  onFocus?: () => void;
  value?: any;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';

  defaultValue?: any;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  multiline?: boolean;
  minHeight?: any;
};
const DefaultInput = (props: propsType) => {
  return (
    <View style={[styles.textInputContainer]}>
      <Text style={styles.inputLabel}>{props.title}</Text>
      <TextInput
        style={[
          styles.inputField,
          {minHeight: props.minHeight && props.minHeight},
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : '#000'
        }
        onChangeText={props.onChange}
        value={props.value}
        keyboardType={props.keyboardType}
        defaultValue={props.defaultValue}
        onFocus={props.onFocus}
        multiline={props.multiline}
      />

      {props.value?.length <= 0 ? (
        <Text style={styles.inputError}>{props.error}</Text>
      ) : null}
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 25,
    width: '100%',
    minHeight: 80,
  },
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
  inputError: {
    color: 'red',
    marginTop: 0,
    fontSize: 13,
  },
});
