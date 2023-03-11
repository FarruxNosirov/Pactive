import React, {useRef, useState} from 'react';
import {ImageBackground, Linking, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-number-input';
import {CountryCode} from 'react-native-country-picker-modal';
import {useNavigation} from '@react-navigation/native';
import {AllRoutes} from '../../../routes/AllRoutes';
type FieldProps = {
  countryCode?: CountryCode;
  countryCodeNumber?: string;
};
const Login = (props: FieldProps) => {
  const [checkbox, setCheckbox] = useState(true);
  const phoneInput = {
    countryCode: props.countryCode || 'US',
    countryCodeNumber: props.countryCodeNumber || '380',
    phoneNumber: '',
  };
  const navigation = useNavigation();
  const onBorden = () => {
    navigation.navigate(AllRoutes.PinNumber as never);
  };
  return (
    <View style={[styles.container]}>
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
              layout="first"
              defaultCode={phoneInput.countryCode}
              textInputStyle={styles.input}
              codeTextStyle={styles.codeTextStyle}
              textContainerStyle={styles.inputContainer}
              containerStyle={styles.inputContainer2}
            />
          </View>

          <View style={styles.tcsWrapper}>
            <TouchableOpacity
              style={[
                styles.checkBox,
                {backgroundColor: checkbox ? 'transparent' : '#16E9A3'},
                {borderColor: checkbox ? '#16E9A3' : 'transparent'},
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
                {backgroundColor: checkbox ? '#5A5A5A' : '#16E9A3'},
              ]}
              disabled={checkbox}
              onPress={onBorden}>
              <Text style={styles.buttonPrimaryLabel}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
