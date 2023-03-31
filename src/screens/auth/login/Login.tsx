import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {CountryCode} from 'react-native-country-picker-modal';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import PhoneInput from 'react-native-phone-number-input';
import {AllRoutes} from '../../../routes/AllRoutes';
import {observer} from 'mobx-react';
import useRootStore from '../../../hooks/useRootStore';
type FieldProps = {
  countryCode?: CountryCode;
  countryCodeNumber?: string;
};
const Login = (props: FieldProps) => {
  const [checkbox, setCheckbox] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState<any>();

  const navigation = useNavigation();
  const phoneInput = useRef<PhoneInput>(null);
  const valueLength = value.length >= 5 ? true : false;
  const disabled = checkbox && valueLength;
  const store = useRootStore();

  const signInWithPhoneNumber = async (formattedValue: any) => {
    try {
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(formattedValue);
      setConfirm(confirmation);
      setLoading(false);
      if (!!confirmation) {
        navigation.navigate(AllRoutes.PinNumber as never);
        store.auth.setConfirm(confirm);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={{height: '100%'}}>
        <ImageBackground
          source={require('../../../assets/images/allImage/login-screen.jpg')}
          style={styles.image}
          resizeMode="cover">
          <View style={styles.signInContentWrapper}>
            <Text style={styles.registerHeadline}>Sign in or Register</Text>
            <Text style={styles.registerHeadlineCopy}>
              Get started - it's quick and easy!
            </Text>

            <Text style={styles.registerHeadlineLabel}>Mobile number</Text>

            <Text style={styles.registerHeadlineSubLabel}>
              (please leave the 0 off)
            </Text>

            <View style={styles.phoneInputText}>
              <PhoneInput
                ref={phoneInput}
                layout="first"
                defaultCode="UZ"
                defaultValue={value}
                textInputStyle={styles.input}
                codeTextStyle={styles.codeTextStyle}
                textContainerStyle={styles.inputContainer}
                containerStyle={styles.inputContainer2}
                disableArrowIcon={true}
                flagButtonStyle={{width: 40, height: 40}}
                withShadow
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
              />
            </View>

            <View style={styles.tcsWrapper}>
              <TouchableOpacity
                style={[
                  styles.checkBox,
                  {backgroundColor: !checkbox ? 'transparent' : '#16E9A3'},
                  {borderColor: !checkbox ? '#16E9A3' : 'transparent'},
                  {borderWidth: 1},
                ]}
                onPress={() => setCheckbox(a => !a)}></TouchableOpacity>
              <Text
                onPress={() => {
                  Linking.openURL(
                    'https://pactiveapi.co.uk/terms-and-conditions.pdf',
                  );
                }}
                style={styles.tcsLabelText}>
                {'I accept the Terms and Conditions'}
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <TouchableOpacity
                style={[
                  styles.buttonPrimary,
                  {backgroundColor: !checkbox ? '#5A5A5A' : '#16E9A3'},
                ]}
                disabled={!disabled}
                onPress={() => {
                  signInWithPhoneNumber(formattedValue);
                }}>
                <Text style={styles.buttonPrimaryLabel}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Spinner visible={loading} textContent={''} textStyle={{}} />
        </ImageBackground>
      </View>
    </View>
  );
};
export default observer(Login);
