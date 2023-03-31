import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {fontBold} from '../../constants/Fonts';
import Text from '../../constants/Text';

type Props = {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  loadingColor?: string;
  ButtonStyle?: {
    backgroundColor?: string;
    marginBotton?: number;
    marginTop?: number | string;
    width?: number | string;
    borderWidth?: number;
    borderColor?: string;
  };
  TextStyle?: {
    color?: string;
    fontSize?: number;
  };
};

export default function DefaultButton(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.ButtonStyle]}
      disabled={props.disabled}
      onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator
          animating={props.loading}
          size="small"
          color={props.loadingColor || COLORS.white}
        />
      ) : (
        <Text style={[styles.buttonText, props.TextStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
}

DefaultButton.defaultProps = {
  ButtonStyle: {
    backgroundColor: COLORS.pactiveGreen,
    marginBottom: 25,
  },
  TextStyle: {
    color: COLORS.white,
    fontSize: 16,
  },
};

const styles = StyleSheet.create({
  button: {
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
    height: 'auto',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    textTransform: 'uppercase',
    fontFamily: fontBold,
  },
});
