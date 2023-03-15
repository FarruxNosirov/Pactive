import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/Colors';

type propsType = {
  btnValue?: string | number;
  valueName?: string | number;
  updateBtn?: any;
  inputStyle?: any;
  ButtonStyle?: {
    backgroundColor?: string;
    marginBotton?: number;
    marginTop?: number | string;
    width?: number | string;
    borderWidth?: number;
    borderColor?: string;
  };
  btnTextStyle?: {
    color?: string;
  };
  placeholder?: string;
  defaultValue?: string;
};
const Counter = (props: propsType) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.trackComponentContentsContainer}>
      <View style={styles.trackRowWrap}>
        <View
          style={[
            styles.trackPageTrackValue,
            {flexDirection: props.inputStyle && 'row'},
          ]}>
          <TextInput
            placeholder={props.placeholder}
            keyboardType="number-pad"
            secureTextEntry={false}
            maxLength={5}
            allowFontScaling={false}
            returnKeyType={'next'}
            blurOnSubmit={true}
            style={styles.trackInputFieldInput}
            onChangeText={e => setInputValue(e)}
            value={inputValue}
          />
          <View style={styles.metricValueLabelContainer}>
            <Text style={styles.metricValueLabel}>{props.valueName}</Text>
          </View>
        </View>
        {props?.defaultValue && (
          <View>
            {inputValue.length <= 0 ? (
              <Text style={styles.textError}>Taraet connot be ematu</Text>
            ) : null}
          </View>
        )}
      </View>

      <View style={styles.trackContainer}>
        <View style={[styles.trackButtonContainer]}>
          <TouchableOpacity
            style={[
              styles.trackButton,
              styles.incrementButton,
              props.ButtonStyle,
            ]}>
            <View>
              <Text style={[styles.trackButtonText, props.btnTextStyle]}>
                - {props.btnValue}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.trackButtonContainer]}>
          <TouchableOpacity
            style={[
              styles.trackButton,
              styles.incrementButton,
              props.ButtonStyle,
            ]}>
            <View>
              <Text style={[styles.trackButtonText, props.btnTextStyle]}>
                + {props.btnValue}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {props.updateBtn && (
          <View style={styles.trackButtonContainer}>
            <TouchableOpacity style={[styles.trackButton, styles.updateButton]}>
              <Text style={styles.trackButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D5D7',
  },
  trackButtonContainer: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  trackButton: {
    justifyContent: 'center',
    backgroundColor: COLORS.pactiveLightGray,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  incrementButton: {
    borderColor: COLORS.fixedHeaderBg,
  },
  trackButtonText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#ffffff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  incrementButtonText: {
    color: COLORS.pactiveGray,
  },
  updateButton: {
    borderColor: COLORS.pactiveGreen,
    backgroundColor: COLORS.pactiveGreen,
  },

  metricValueLabelContainer: {
    marginLeft: 2,
  },
  trackInputFieldInput: {
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.black,
    fontSize: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.pactiveGreen,
  },

  trackRowWrap: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackPageTrackValue: {
    alignItems: 'center',
  },

  trackComponentContentsContainer: {
    paddingHorizontal: 10,
    height: 150,
  },
  metricValueLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  textError: {
    color: COLORS.red,
    fontSize: 11,
  },
});
