import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../constants/Colors';
import GoBacknavbar from '../../../../../components/gobacknavbar/goBacknavbar';
import NavigationService from '../../../../../navigation/NavigationScren';
import Imagebacground from '../../../../../components/Imagebacground';
import DefaultInput from '../../../../../components/defaultInput/DefaultInput';
import DefaultButton from '../../../../../components/DefaultButton/DefaultButton';
import LinearGradient from 'react-native-linear-gradient';

const ReportPact = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={60}>
      <GoBacknavbar
        backgroundColor={COLORS.fixedHeaderBg}
        onPress={() => NavigationService.goBack()}
        name="Cancel"
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Imagebacground
              width={'100%'}
              height={220}
              imageUrl={require('../../../../../assets/images/heroImages/home-hero.jpg')}
              title="report pact"
            />
            <View style={{paddingHorizontal: 10, marginTop: 40}}>
              <DefaultInput
                title="Message"
                placeholder="Message"
                placeholderColor={COLORS.textColor}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <DefaultButton title="report" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ReportPact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
