import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RightArrow} from '../../assets/icons/iconst';
import ButtomHeght from '../../components/BottomHeight';
import Imagebacground from '../../components/Imagebacground';
import GoBacknavbar from '../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../constants/Colors';
import NavigationService from '../../navigation/NavigationScren';
import TrackElements from './components/TrackElements';

const TrackScreen = () => {
  return (
    <View style={styles.container}>
      <GoBacknavbar
        name="Cancel"
        backgroundColor={COLORS.fixedHeaderBg}
        onPress={() => NavigationService.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, position: 'relative'}}>
        <Imagebacground
          width={'100%'}
          height={300}
          imageUrl={require('../../assets/images/heroImages/home-hero-small.png')}
          title="Track Progress"
        />
        <View style={styles.data}>
          <TouchableOpacity>
            <RightArrow fill={'#fff'} />
          </TouchableOpacity>
          <Text style={styles.dataTitle}>today</Text>
          <TouchableOpacity>
            <RightArrow fill={'#fff'} />
          </TouchableOpacity>
        </View>
        <TrackElements />
        <ButtomHeght height={50} />
      </ScrollView>
    </View>
  );
};

export default TrackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: COLORS.pactiveHeaderColor,
    bottom: 0,
    width: '100%',
  },
  dataTitle: {
    marginLeft: 20,
    marginRight: 20,
    color: COLORS.white,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
