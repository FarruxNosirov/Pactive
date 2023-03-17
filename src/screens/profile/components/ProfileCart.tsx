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
  iconName?: string;
  rightIcon?: string;
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  rightText?: string;
  iconBackgroundColor?: string;
  IconIoniconsName?: boolean;
};
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import IconEntypo from 'react-native-vector-icons/Entypo';
import {HandLeft} from '../../../assets/icons/iconst';
const ProfileCart = ({
  iconName,
  text,
  onPress,
  rightIcon,
  rightText,
  iconBackgroundColor,
  IconIoniconsName,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.icon_box, {backgroundColor: iconBackgroundColor}]}>
          <View style={styles.icon}>
            {iconName && (
              <IconMaterial
                name={iconName}
                style={{
                  color: 'white',
                  fontSize: 22,
                  marginTop: 2,
                  marginLeft: 1,
                }}
              />
            )}
            {IconIoniconsName && <HandLeft fill={COLORS.white} />}
          </View>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.text}>{text}</Text>
          {rightIcon ? <IconEntypo name={rightIcon} /> : null}
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
