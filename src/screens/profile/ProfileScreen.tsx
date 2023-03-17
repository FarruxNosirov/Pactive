import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Imagebacground from '../../components/Imagebacground';
import {COLORS} from '../../constants/Colors';
import BottomHeight from '../../components/BottomHeight';
import ProfileCart from './components/ProfileCart';
import {ProfileIconActive, RightArrow} from '../../assets/icons/iconst';
import NavigationService from '../../navigation/NavigationScren';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <Imagebacground
          width={'100%'}
          height={220}
          title="Profile"
          imageUrl={require('../../assets/images/heroImages/account-hero.png')}
        />
        <ProfileCart
          iconName="account"
          iconBackgroundColor={COLORS.accountIconColor}
          text="Account"
          onPress={() => NavigationService.navigate('Account')}
          rightText="Saa"
        />
        <ProfileCart
          iconName="heart"
          iconBackgroundColor={COLORS.healthIconColor}
          text="Health App"
          rightIcon="chevron-thin-right"
        />
        <ProfileCart
          iconName="star"
          iconBackgroundColor={COLORS.gold}
          text="Feedback"
          onPress={() => NavigationService.navigate('Feedback')}
        />
        <ProfileCart
          iconName="newspaper"
          iconBackgroundColor={COLORS.newsLetter}
          text="Newsletter"
        />
        <ProfileCart
          iconBackgroundColor={COLORS.gray}
          text="Privacy Policy"
          rightIcon="chevron-thin-right"
          IconIoniconsName={true}
        />
        <ProfileCart
          iconName="file-document"
          iconBackgroundColor={COLORS.lightblue}
          text="Terms & Conditions"
          rightIcon="chevron-thin-right"
        />
        <ProfileCart
          iconName="file-document"
          iconBackgroundColor={COLORS.lightblue}
          text="Advert Preferences"
          rightIcon="chevron-thin-right"
        />

        <TouchableOpacity style={styles.siginOut}>
          <Text style={styles.siginOutTitle}>Sigin Out</Text>
        </TouchableOpacity>
        <ProfileCart
          iconName="trash-can-outline"
          iconBackgroundColor={COLORS.black}
          text="Delete account"
          onPress={() => NavigationService.navigate('DeleteAccount')}
        />
        <BottomHeight height={50} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  title_box: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: COLORS.white,
    fontSize: 25,
  },
  siginOut: {
    backgroundColor: COLORS.white,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  siginOutTitle: {
    fontSize: 15,
    color: COLORS.black,
  },
});
