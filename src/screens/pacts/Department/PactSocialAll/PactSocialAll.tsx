import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Imagebacground from '../../../../components/Imagebacground';
import BackEditHeader from '../../../../components/BackEditHeader';
import {COLORS} from '../../../../constants/Colors';
import NavigationService from '../../../../navigation/NavigationScren';
import PactSocialAllHeader from './components/PactSocialAllHeader';
import BottomHeight from '../../../../components/BottomHeight';
import InfoSocial from './components/InfoSocial';
import AboutUsSocial from './components/AboutUsSocial';
import InfoPact from '../PactActiveAll/components/infoPact/InfoPact';

const height = Dimensions.get('window').height;
const PactSocialAll = () => {
  const [active, setActive] = useState({
    info: true,
    about: false,
  });
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <BackEditHeader
        backgroundColor={COLORS.fixedHeaderBg}
        social={true}
        name="Back"
        onBackPress={() => NavigationService.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <PactSocialAllHeader about={active.about} info={active.info} />
        <View style={styles.topBar}>
          <TouchableOpacity
            style={[active.info ? styles.btnActive : styles.btn]}
            onPress={() =>
              setActive({
                ...active,
                info: true,
                about: false,
              })
            }>
            <Text style={[active.info ? styles.textActive : styles.text]}>
              Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[active.about ? styles.btnActive : styles.btn]}
            onPress={() =>
              setActive({
                ...active,
                info: false,
                about: true,
              })
            }>
            <Text style={[active.about ? styles.textActive : styles.text]}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {active.info && <InfoPact />}
          {active.about && <AboutUsSocial />}
        </View>
        <BottomHeight height={50} />
      </ScrollView>
    </View>
  );
};

export default PactSocialAll;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: COLORS.pactiveHeaderColor,
  },
  btn: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.activeTabTextColor,
  },
  text: {
    color: COLORS.white,
    fontSize: 17,
    textTransform: 'uppercase',
  },
  textActive: {
    color: COLORS.activeTabTextColor,
    fontSize: 17,
    textTransform: 'uppercase',
  },
  body: {
    width: '100%',
    paddingTop: 30,
    backgroundColor: COLORS.white,
    minHeight: '100%',
  },
});
