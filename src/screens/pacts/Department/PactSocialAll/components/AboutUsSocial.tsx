import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../../../constants/Colors';
import {fontBold} from '../../../../../constants/Fonts';
import ButtonIcon from './ButtonIcon';
import Text from '../../../../../constants/Text';
const AboutUsSocial = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <View>
          <Text>let's reset it correctly just in case</Text>
          <View style={styles.info}>
            {open ? (
              <View>
                <Text>
                  let's reset it correctly just in case let's reset it correctly
                  just in case let's reset it correctly just in case v let's
                  reset it correctly just in case let's reset it correctly just
                  in case let's reset it correctly just in case v let's reset it
                  correctly just in case let's reset it correctly just in case
                  let's reset it correctly just in case
                </Text>
              </View>
            ) : (
              false
            )}
            <TouchableOpacity
              onPress={() => setOpen(a => !a)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Text style={{color: COLORS.pactiveBlue}}>Show more</Text>
              {open ? (
                <Icon
                  name="chevron-small-up"
                  size={24}
                  color={COLORS.pactiveBlue}
                />
              ) : (
                <Icon
                  name="chevron-small-down"
                  size={24}
                  color={COLORS.pactiveBlue}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <ButtonIcon iconName="phone" btnName="Call us" />
        <ButtonIcon iconName="email-outline" btnName="Email us" />
      </View>
    </View>
  );
};

export default AboutUsSocial;

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonPrimary: {
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
    alignSelf: 'center',
    height: 'auto',
    flexWrap: 'wrap',
  },
  buttonPrimaryIcon: {
    paddingRight: 15,
    color: '#fff',
    fontSize: 20,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: fontBold,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
  info: {
    marginTop: 20,
  },
});
