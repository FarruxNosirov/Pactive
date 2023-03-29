import React, {useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AllRoutes} from '../../../routes/AllRoutes';
import {observer} from 'mobx-react';
import useRootStore from '../../../hooks/useRootStore';

const PinNumber = () => {
  const CELL_COUNT = 6;
  const store = useRootStore();
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
  const params = useRoute();
  console.log(JSON.stringify(params.params, null, 2));
  const navigation = useNavigation();

  const siginIn = async () => {
    try {
      const data = await store.auth.confirm.confirm(value);
      if (!!data) {
        navigation.navigate(AllRoutes.OnboardingScreen as never);
      }
    } catch (error) {
      console.log('Invalid code.', error);
    }
  };

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
            onPress={() => siginIn()}>
            <Text style={styles.buttonPrimaryLabel}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default observer(PinNumber);
