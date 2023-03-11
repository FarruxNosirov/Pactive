import React, {ReactElement} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../../../constants/Colors';

type SettingsItemProps = {
  icon?: any;
  icon2?: any;
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  rightText?: string;
  iconBackgroundColor?: string;
};

const ProfileCart = ({
  icon,
  text,
  onPress,
  icon2,
  rightText,
  iconBackgroundColor,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.icon_box, {backgroundColor: iconBackgroundColor}]}>
          <View style={styles.icon}>{icon ? icon : null}</View>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.text}>{text}</Text>
          {icon2 ? icon2 : null}
          {rightText ? <Text style={styles.rightText}>{rightText}</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  settingsButton: {},

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },

  icon: {},
  rightText: {
    color: COLORS.black,
    fontSize: 13,
  },
  icon_box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 8,
  },
  rightBox: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: '100%',
    alignItems: 'center',
    marginLeft: 15,
    paddingRight: 20,
  },
});
