import React, {useRef, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';

import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import NavigationService from '../../../../navigation/NavigationScren';
import Carousel from 'react-native-snap-carousel';
import CircularProgress from '../../../../components/CircularProgress';
import {fontBold} from '../../../../constants/Fonts';
import Text from '../../../../constants/Text';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Data = [
  {
    id: 0,
    name: '',
  },
];

const SliderHome = () => {
  const [index, setIndex] = useState(0);
  const isCorusel = useRef<any>(null);
  return (
    <View style={styles.progressContainer}>
      <ImageBackground
        source={require('../../../../assets/images/heroImages/home-hero.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.heroHeaderBackdrop}>
          <View style={{zIndex: 10}}>
            <Carousel
              ref={isCorusel}
              data={Data}
              renderItem={() => (
                <CircularProgress
                  value={'380'}
                  percentageFill={''}
                  label={'Metres'}
                  cumulativeLabel={''}
                  target={'of 500'}
                  percent={10}
                />
              )}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={index => setIndex(index)}
              keyExtractor={(_, index) => index.toString()}
              firstItem={0}
              enableMomentum={true}
              removeClippedSubviews={false}
              style={{paddingBottom: 20}}
            />
            <View style={styles.sliderFooterContent}>
              <Text style={styles.sliderContentHeading}>
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SliderHome;

const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    height: height / 2,
    position: 'relative',
    justifyContent: 'center',
  },
  heroHeaderBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
    justifyContent: 'center',
  },
  progressContainerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonContant: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    paddingVertical: 20,
    height: '100%',
    justifyContent: 'space-between',
  },

  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',

    lineHeight: 20,
    textAlign: 'center',
  },
  sliderFooterContent: {
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  sliderContentHeading: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 22,
    fontFamily: fontBold,
  },
});
