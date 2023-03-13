import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DefaultButton from '../DefaultButton/DefaultButton';
type propsType = {
  btnName?: string;
};
const FooterGradient = (props: propsType) => {
  return (
    <View>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        colors={['transparent', 'rgba(0,0,0,0.15)']}
        style={{
          height: 7,
          width: '100%',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: -7,
        }}
      />
      <View style={{paddingHorizontal: 20, marginVertical: 20}}>
        <DefaultButton title={props?.btnName} />
      </View>
    </View>
  );
};

export default FooterGradient;

const styles = StyleSheet.create({});
