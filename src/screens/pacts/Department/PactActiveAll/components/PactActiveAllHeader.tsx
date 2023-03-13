import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Imagebacground from '../../../../../components/Imagebacground';
import CircularProgress from '../../../../../components/CircularProgress';
import {EditIcon} from '../../../../../assets/icons/iconst';
import Text from '../../../../../constants/Text';
import {COLORS} from '../../../../../constants/Colors';
import DatePicker from 'react-native-date-picker';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const Data = [
  {
    id: 1,
    name: '',
  },
];
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const PactActiveAllHeader = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [index, setIndex] = useState(0);
  const isCorusel = useRef(null);
  return (
    <View style={styles.topBox}>
      <Imagebacground
        imageUrl={require('../../../../../assets/images/heroImages/walking-hero.jpg')}
        width={'100%'}
        height={height / 2}
      />
      <View style={{position: 'absolute', width: '100%'}}>
        <View style={styles.title_box}>
          <Text style={styles.title}>Trinerovka</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setOpenDate(true)}>
              <Text style={{color: COLORS.white}}>Today</Text>
              <DatePicker
                modal
                mode="date"
                open={openDate}
                date={date}
                onConfirm={date => {
                  setOpenDate(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpenDate(false);
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <EditIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Carousel
            ref={isCorusel}
            data={Data}
            renderItem={() => (
              <CircularProgress
                value={'0'}
                percentageFill={''}
                label={'Metres'}
                cumulativeLabel={'1 Member'}
                target={'of 500'}
                percent={0}
              />
            )}
            sliderWidth={width}
            itemWidth={width - 40}
            onSnapToItem={index => setIndex(index)}
            keyExtractor={(_, index) => index.toString()}
            firstItem={0}
          />
        </View>
      </View>
    </View>
  );
};

export default PactActiveAllHeader;

const styles = StyleSheet.create({
  topBox: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  title_box: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    color: COLORS.white,
    marginBottom: 20,
    marginTop: 40,
  },
});
