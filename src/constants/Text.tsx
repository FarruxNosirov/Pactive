import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps,
  TextStyle,
} from 'react-native';
import {COLORS} from './Colors';
import {fontBold, fontNormal} from './Fonts';

export default function Text({children, style}: TextProps): JSX.Element {
  let fontFamily = fontNormal;
  //@ts-ignore
  switch (style?.fontWeight) {
    case 'bold':
      fontFamily = fontBold;
      break;
    default:
      fontFamily = fontNormal;
      break;
  }
  let styl: StyleProp<TextStyle> = StyleSheet.compose(
    {
      fontFamily,
      color: COLORS.textColor,
      fontSize: 16,
    },
    style,
  );

  return <RNText style={styl}>{children}</RNText>;
}
