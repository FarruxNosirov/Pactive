import React from 'react';
import {StyleSheet, View} from 'react-native';

const BottomHeight = ({height}: any) => {
  return <View style={{width: '100%', height: height}}></View>;
};

export default BottomHeight;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
