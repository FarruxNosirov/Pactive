// @flow
import * as React from 'react';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Dimensions, StyleSheet, View} from 'react-native';
import {fontCondensed, fontNormal} from '../constants/Fonts';
import Text from '../constants/Text';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  circularProgressWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularProgressContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularProgressPercent: {
    fontSize: 80,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: fontNormal,
    marginBottom: 2,
  },
  circularProgressPercentLabel: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: fontCondensed,
    paddingBottom: 15,
  },
  circularProgressLabel: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: fontNormal,
  },
});

const getProgressFontSize = (value: number) => {
  if (value > 99999) {
    return 50;
  } else if (value > 9999) {
    return 60;
  }
  return 80;
};

const getPercentIndicator = (percentProp: number, percentageFill: any) => {
  if (percentageFill) {
    return percentageFill;
  }
  return percentProp > 999 ? 100 : percentProp;
};
const CircularProgress = (props: any) => {
  const formatValueToDisplay = (value: number) => {
    if (value > 99.99) {
      return Math.round(value);
    }
    return value;
  };

  const {percent, value, label, target, cumulativeLabel, percentageFill} =
    props;

  const percentProp = percent ? percent : 0;
  const showPercentage = value == undefined;
  const percentDisplay = percentProp > 999 ? 999 : percentProp;
  const percentIndicator = getPercentIndicator(percentProp, percentageFill);
  const progressToDisplay = showPercentage
    ? Math.round(percentDisplay)
    : formatValueToDisplay(value);

  return (
    <View style={styles.circularProgressWrapper}>
      <AnimatedCircularProgress
        size={Math.round(width * 0.6)}
        width={8}
        fill={percentIndicator}
        lineCap="round"
        rotation={0}
        duration={500}
        backgroundColor="rgba(255, 255, 255, 0.5)"
        tintColor="#16E9A3">
        {fill => (
          <View style={styles.circularProgressContent}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginBottom: -15,
              }}>
              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={{
                  ...styles.circularProgressPercent,
                  fontSize: getProgressFontSize(progressToDisplay),
                }}>
                {progressToDisplay}
              </Text>
              {showPercentage && (
                <Text style={styles.circularProgressPercentLabel}>%</Text>
              )}
            </View>
            {target && target.length > 0 && (
              <Text
                allowFontScaling={false}
                style={styles.circularProgressLabel}>
                {target}
              </Text>
            )}
            {cumulativeLabel &&
              cumulativeLabel.length > 0 &&
              label &&
              label.length > 0 &&
              label === 'BINARY' && (
                <Text
                  allowFontScaling={false}
                  style={styles.circularProgressLabel}>
                  {cumulativeLabel}
                </Text>
              )}
            {label && label.length > 0 && label !== 'BINARY' && (
              <Text
                allowFontScaling={false}
                style={styles.circularProgressLabel}>
                {label.toUpperCase()}
              </Text>
            )}
            {cumulativeLabel &&
              cumulativeLabel.length > 0 &&
              label &&
              label.length > 0 &&
              label !== 'BINARY' && (
                <Text
                  allowFontScaling={false}
                  style={styles.circularProgressLabel}>
                  {cumulativeLabel}
                </Text>
              )}
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default CircularProgress;
