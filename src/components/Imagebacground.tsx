import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Colors';
type propsType = {
  width?: string | number;
  height?: string | number;
  children?: any;
  imageUrl?: any;
  title?: string;
  boxShadow?: boolean;
};
const Imagebacground = (props: propsType) => {
  return (
    <View
      style={[styles.container, {width: props.width, height: props.height}]}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={props.imageUrl}>
        {props.children}
      </ImageBackground>
      {props.title ? (
        <View style={styles.title_box}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      ) : null}
      {props.boxShadow ?? <View style={styles.imageBgOverlay}></View>}
    </View>
  );
};

export default Imagebacground;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageBgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 2,
  },
  title_box: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 35,
  },
  title: {
    color: COLORS.white,
    fontSize: 25,
    textTransform: 'capitalize',
  },
});
