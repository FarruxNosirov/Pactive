import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../constants/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
type propsType = {
  inputValue?: string | undefined;
  inputTitle?: string;
  btnName?: string;
  trackPage?: boolean;
};
const Target = (props: propsType) => {
  return (
    <View style={styles.targetContainer}>
      <Text style={styles.inputLabel}>Target</Text>
      <View style={styles.trackRowWrap}>
        <View style={styles.trackPageTrackValue}>
          <TextInput
            placeholder=""
            keyboardType="number-pad"
            secureTextEntry={false}
            maxLength={5}
            allowFontScaling={false}
            returnKeyType={'next'}
            blurOnSubmit={true}
            style={styles.trackInputFieldInput}
            value={props.inputValue}
          />
          <View style={styles.metricValueLabelContainer}>
            <Text style={styles.metricValueLabel}>{props.inputTitle}</Text>
          </View>
        </View>
      </View>
      {props.trackPage ? (
        <View style={styles.trackContainer}>
          <View style={styles.trackButtonContainer}>
            <TouchableOpacity
              style={[styles.trackButton, styles.incrementButton]}>
              <View></View>
              <View>
                <Text
                  style={[
                    styles.trackButtonText,
                    styles.incrementButtonText,
                  ]}></Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.trackButtonContainer}>
            <TouchableOpacity
              style={[styles.trackButton, styles.incrementButton]}>
              <View></View>
              <View>
                <Text
                  style={[
                    styles.trackButtonText,
                    styles.incrementButtonText,
                  ]}></Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.trackButtonContainer}>
            <TouchableOpacity style={[styles.trackButton, styles.updateButton]}>
              <Text style={styles.trackButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.leftButtonContainer}>
            <TouchableOpacity style={[styles.buttonPrimary, styles.button]}>
              <Text style={styles.buttonPrimaryLabel}>- {props.btnName}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonPrimary, styles.button]}>
              <Text style={styles.buttonPrimaryLabel}>+ {props.btnName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Target;

const styles = StyleSheet.create({
  targetContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.textColor,
    marginTop: 20,
  },
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
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
    height: 'auto',
    flexWrap: 'wrap',
    minWidth: SCREEN_WIDTH / 4,
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
    color: COLORS.fixedHeaderBg,
  },
  updateButton: {
    borderColor: COLORS.pactiveGreen,
    backgroundColor: COLORS.pactiveGreen,
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftButtonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  button: {
    minWidth: 70,
    paddingHorizontal: 10,
  },
  buttonPrimary: {
    justifyContent: 'center',
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
    alignSelf: 'center',
    height: 'auto',
    flexWrap: 'wrap',
  },
  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',

    lineHeight: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  trackRowWrap: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackPageTrackValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  trackInputFieldInput: {
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.textColor,
    fontSize: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.pactiveGreen,
  },
  inputBottomBorder: {
    width: 55,
  },
  metricValueLabelContainer: {
    marginLeft: 2,
  },
  metricValueLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 5,
  },
});
