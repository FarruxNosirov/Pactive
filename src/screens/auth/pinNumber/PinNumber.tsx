import React, {useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';
import {AllRoutes} from '../../../routes/AllRoutes';
const PinNumber = () => {
  const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  let disiblet = true;
  if (value.length === 6) {
    disiblet = false;
  }

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/allImage/login-screen.jpg')}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.signInContentWrapper}>
          <Text style={styles.registerHeadline}>Verify your Number</Text>

          <Text style={styles.registerHeadlineCopy}>
            We have sent a code to your mobile - enter it below to get started.
          </Text>

          <View style={styles.signInContentResend}>
            <Text style={styles.registerHeadlineLabel}>Sent to</Text>
            <TouchableOpacity>
              <Text style={styles.signInContentResendChangeLink}>CHANGE</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>YOUR CODE</Text>
          <View>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View style={styles.number_box} key={index}>
                  <Text
                    style={styles.cell}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={{marginBottom: 30, marginTop: 16}}></View>

          <TouchableOpacity
            style={[
              styles.buttonPrimary,
              {backgroundColor: disiblet ? '#5A5A5A' : '#16E9A3'},
            ]}
            disabled={disiblet}
            onPress={() =>
              navigation.navigate(AllRoutes.OnboardingScreen as never)
            }>
            <Text style={styles.buttonPrimaryLabel}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PinNumber;
