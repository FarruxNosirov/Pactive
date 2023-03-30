import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtomHeght from '../../components/BottomHeight';
import Imagebacground from '../../components/Imagebacground';
import GoBacknavbar from '../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../constants/Colors';
import NavigationService from '../../navigation/NavigationScren';
import TrackElements from './components/TrackElements';
import moment from 'moment';

const TrackScreen = () => {
  const formatDateString = (dateString: number | Date) => {
    return moment(dateString).format('D, MMM YYYY');
  };

  const [state, setState] = useState({currentDate: new Date()});
  const [disabled, setDisabled] = useState(true);

  const getFormattedDateString = () => {
    const today = new Date();
    const currentDate = formatDateString(state.currentDate);
    const formattedToday = formatDateString(today);
    const formattedYesterday = formatDateString(
      today.setDate(today.getDate() - 1),
    );

    let dateString = '';
    if (currentDate === formattedToday) {
      dateString = 'today';
    } else if (currentDate === formattedYesterday) {
      dateString = 'yesterday';
    } else {
      dateString = currentDate;
    }
    return dateString;
  };

  const navigateToPreviousDate = () => {
    const currentDate = state.currentDate;
    setState({
      currentDate: new Date(currentDate.setDate(currentDate.getDate() - 1)),
    });
  };

  const navigateToNextDate = () => {
    const currentDate = state.currentDate;
    return setState({
      currentDate: new Date(currentDate.setDate(currentDate.getDate() + 1)),
    });
  };

  useEffect(() => {
    const formattedCurrentDate = formatDateString(state.currentDate);
    const formattedToday = formatDateString(new Date());
    if (formattedCurrentDate === formattedToday) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [state.currentDate]);

  const dateString = getFormattedDateString();

  // console.log(disabled);

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
          height={220}
          imageUrl={require('../../assets/images/heroImages/home-hero-small.png')}
          title="Track Progress"
        />
        <View style={styles.data}>
          <TouchableOpacity onPress={navigateToPreviousDate}>
            <IconEntypo
              name="chevron-small-left"
              style={{color: 'white', fontSize: 26}}
            />
          </TouchableOpacity>
          <View style={styles.calendar}>
            <Text style={styles.dataTitle}>{dateString}</Text>

            <IconMaterial
              name="calendar"
              style={{color: '#fff', fontSize: 20}}
            />
          </View>
          <TouchableOpacity onPress={navigateToNextDate} disabled={disabled}>
            <IconEntypo
              name="chevron-small-right"
              style={{color: 'white', fontSize: 26}}
            />
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
    color: COLORS.white,
    fontSize: 20,
    textTransform: 'uppercase',
    marginRight: 5,
  },
  calendar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});
