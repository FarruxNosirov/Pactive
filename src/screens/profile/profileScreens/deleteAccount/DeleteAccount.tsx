import React from 'react';
import {StyleSheet, View} from 'react-native';
import Imagebacground from '../../../../components/Imagebacground';
import FooterGradient from '../../../../components/footerGradient/FooterGradient';
import GoBacknavbar from '../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../constants/Colors';
import {fontBold, fontNormal} from '../../../../constants/Fonts';
import Text from '../../../../constants/Text';
import NavigationService from '../../../../navigation/NavigationScren';

const DeleteAccount = () => {
  return (
    <View style={styles.container}>
      <GoBacknavbar
        name="Cancel"
        backgroundColor={COLORS.fixedHeaderBg}
        onPress={() => NavigationService.goBack()}
      />
      <View style={{flex: 1}}>
        <Imagebacground
          title="Delete Account"
          width={'100%'}
          height={220}
          imageUrl={require('../../../../assets/images/heroImages/home-hero-small.png')}
        />
        <View style={styles.box}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.textBold}>Warning</Text>
            <Text style={styles.text}> - By deleting your account:</Text>
          </View>
          <Text style={styles.text}>
            - your account details, profile image and settings will be
            permanently deleted
          </Text>
          <Text style={styles.text}>
            - you will lose access to your Active Pacts and Pact History
          </Text>
          <Text style={styles.text}>
            - all your details will be removed from all your Active Pacts and
            Pact history
          </Text>
          <Text style={styles.textBold}>
            Are you sure you wish to delete your account?
          </Text>
        </View>
      </View>
      <FooterGradient btnName="Request to delete account" />
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
    position: 'relative',
  },
  box: {
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fontNormal,
  },
  textBold: {
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fontBold,
  },
});
