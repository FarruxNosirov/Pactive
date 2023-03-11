import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-switch';
import {COLORS} from '../constants/Colors';
type propsType = {
  setCheckBox?: any;
  checkBox?: any;
  state?: any;
  onStateChange: (key: string) => void;
};
const HeightWeight = (props: propsType) => {
  return (
    <View>
      <View>
        <Text style={styles.inputLabel}>YOUR HEIGHT</Text>
        <View style={styles.switchWrapper}>
          <Text style={styles.switchLabelLeft}>ft'in</Text>
          <Switch
            value={props?.checkBox?.active1}
            onValueChange={() =>
              props.setCheckBox({
                ...props.checkBox,
                active1: !props.checkBox.active1,
              })
            }
            activeText={''}
            inActiveText={''}
            circleSize={30}
            barHeight={20}
            circleBorderWidth={0}
            backgroundActive={'#CDCDCD'}
            backgroundInactive={'#CDCDCD'}
            circleActiveColor={'#16E9A3'}
            circleInActiveColor={'#16E9A3'}
            containerStyle={{
              overflow: 'visible',
              borderWidth: 0,
              marginTop: 20,
              marginBottom: 20,
            }}
            disabled={false}
          />
          <Text style={styles.switchLabelRight}>cm</Text>
        </View>
      </View>
      {props?.checkBox?.active1 ? (
        <View>
          <Text style={styles.inputLabel}>CM</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={e => props.onStateChange(e, '')}
            value={props.state.cmvalyu}
          />
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '49%'}}>
            <Text style={styles.inputLabel}>FT</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={e => props.onStateChange(e, 'ftvalyu')}
              value={props.state.ftvalyu}
            />
          </View>
          <View style={{width: '49%'}}>
            <Text style={styles.inputLabel}>IN</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={e => props.onStateChange(e, 'invalyu')}
              value={props.state.invalyu}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HeightWeight;

const styles = StyleSheet.create({
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  switchLabelLeft: {
    paddingRight: 8,
    color: COLORS.textColor,

    textTransform: 'uppercase',
  },
  switchLabelRight: {
    paddingLeft: 8,
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
