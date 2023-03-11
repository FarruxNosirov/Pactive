import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import ImagePerson from './ImagePerson';
import {PenIcon, PersonIcon} from '../assets/icons/iconst';
import {COLORS} from '../constants/Colors';

type propsType = {
  imageUrl?: any;
  state?: any;
  changePhoto?(): void;
};

const ImageEdit = (props: propsType) => {
  const width = 173.20508075688772;
  const height = 200;
  const ratio = width / height;
  const borderWidth = 2;
  const calculateScale = (size = 100, border = 0) => {
    return [(width - 2 * border) / width, (height - 2 * border) / height];
  };
  const relativeBorderWidth = (height / 130) * borderWidth;
  const scale = calculateScale(130, relativeBorderWidth);

  return (
    <View style={styles.bgIconst}>
      <Svg
        style={styles.svg_big}
        height={130}
        width={130 * ratio}
        viewBox={`${0} ${0} ${width} ${height}`}>
        {props?.state?.length <= 0 ? (
          <Defs>
            <LinearGradient id="grad" x1="120" y1="-120" x2="250" y2="0">
              <Stop offset="0%" stopColor="#14EA70" stopOpacity="1" />
              <Stop offset="100%" stopColor="#16E9A3" stopOpacity="1" />
            </LinearGradient>
          </Defs>
        ) : null}
        {props?.state?.length <= 0 ? (
          <Defs>
            <LinearGradient id="grad" x1="120" y1="-120" x2="250" y2="0">
              <Stop offset="0%" stopColor="#14EA70" stopOpacity="1" />
              <Stop offset="100%" stopColor="#16E9A3" stopOpacity="1" />
            </LinearGradient>
          </Defs>
        ) : null}
        {props?.state?.length <= 0 ? (
          <Path
            d="M77.94228634059948 4.999999999999999Q86.60254037844386 0 95.26279441628824 4.999999999999999L164.54482671904333 45Q173.20508075688772 50 173.20508075688772 60L173.20508075688772 140Q173.20508075688772 150 164.54482671904333 155L95.26279441628824 195Q86.60254037844386 200 77.94228634059948 195L8.660254037844387 155Q0 150 0 140L0 60Q0 50 8.660254037844387 45Z"
            fill={'url(#grad)'}
            stroke={'#16E9A3'}
            strokeWidth={2}
          />
        ) : null}

        <G
          transform={`scale(${scale[0]} ${scale[1]}) translate(${relativeBorderWidth} ${relativeBorderWidth})`}>
          <Defs>
            <ClipPath id="clip">
              <Path d="M77.94228634059948 4.999999999999999Q86.60254037844386 0 95.26279441628824 4.999999999999999L164.54482671904333 45Q173.20508075688772 50 173.20508075688772 60L173.20508075688772 140Q173.20508075688772 150 164.54482671904333 155L95.26279441628824 195Q86.60254037844386 200 77.94228634059948 195L8.660254037844387 155Q0 150 0 140L0 60Q0 50 8.660254037844387 45Z" />
            </ClipPath>
          </Defs>
          <ImagePerson photo={props?.state} clipPath={'url(#clip)'} />
        </G>
        {/* <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  zIndex: 20,
                }}>
                <ActivityIndicator />
              </View> */}
        {props.state.length <= 0 ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              zIndex: 5,
            }}>
            <PersonIcon fill={'white'} />
          </View>
        ) : null}
      </Svg>
      <TouchableOpacity style={styles.edit} onPress={props.changePhoto}>
        <Svg
          style={styles.svg}
          height={30}
          width={30 * ratio}
          viewBox={`${0} ${0} ${width} ${height}`}>
          <Defs>
            <LinearGradient id="grad" x1="120" y1="-120" x2="250" y2="0">
              <Stop offset="0%" stopColor="#5B57D5" stopOpacity="1" />
              <Stop offset="100%" stopColor="#5B57D5" stopOpacity="1" />
            </LinearGradient>
          </Defs>

          <Path
            d="M77.94228634059948 4.999999999999999Q86.60254037844386 0 95.26279441628824 4.999999999999999L164.54482671904333 45Q173.20508075688772 50 173.20508075688772 60L173.20508075688772 140Q173.20508075688772 150 164.54482671904333 155L95.26279441628824 195Q86.60254037844386 200 77.94228634059948 195L8.660254037844387 155Q0 150 0 140L0 60Q0 50 8.660254037844387 45Z"
            fill={'url(#grad)'}
            stroke={'#5B57D5'}
            strokeWidth={2}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              zIndex: 11,
            }}>
            <PenIcon fill={'#fff'} />
          </View>
        </Svg>
        <Text style={{color: COLORS.pactiveBlue, marginLeft: 5}}>EDIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageEdit;

const styles = StyleSheet.create({
  bgIconst: {
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -50,
  },
  heroHeaderContentHeading: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  svg_big: {
    position: 'relative',
  },
  svg: {
    position: 'relative',
    zIndex: 10,
  },
  wrapper: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  hexagonContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagonContentLabel: {
    color: '#fff',
    textAlign: 'center',
    width: '80%',
  },
  radioBtn: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  radioRadioGroupWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 10,
  },
  radioRadioGroupItem: {
    width: '33%',
    paddingVertical: 8,
    paddingRight: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioRadioGroupItemIndicator: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#16E9A3',
    width: 20,
    height: 20,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  radioRadioGroupItemIndicatorDot: {
    backgroundColor: '#16E9A3',
    width: 10,
    height: 10,
    borderRadius: 30,
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
  edit: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    right: -15,
  },
  title: {
    position: 'absolute',
    top: 70,
  },
});
