import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Rating} from 'react-native-ratings';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import Imagebacground from '../../../../components/Imagebacground';
import DefaultInput from '../../../../components/defaultInput/DefaultInput';
import GoBacknavbar from '../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../constants/Colors';
import Text from '../../../../constants/Text';
import NavigationService from '../../../../navigation/NavigationScren';
const Feedback = () => {
  const [rate, setRate] = useState(0);
  const INTRO_TEXT =
    "We'd love to hear what you think of Pactive so far. Your comments help us understand what you like and what features you'd like to see.";
  let RATING_TEXT_1 =
    "We're so sorry to hear that you're not enjoying PACTIVE. User feedback is important to us, so please let us know what we can do to improve your experience.";
  const RATING_TEXT_2 =
    "We're so sorry to hear that you're not enjoying PACTIVE. We love getting feedback, so please let us know how we can make PACTIVE better for you.";
  const RATING_TEXT_3 =
    "Thanks for your feedback! We truly value your input and if you've got any more ideas about how to make PACTIVE even better, please let us know.";
  const RATING_TEXT_4 =
    'We love hearing from our PACTivists. Is there anything else we can do that would make a positive imPACT for you?';
  const RATING_TEXT_5 =
    "Awesome! We're so glad you're enjoying getting PACTivated! Feel free to give us some feedback about what you're loving and any areas for improvement. We'd love to hear what you think.";
  if (rate === 1) {
    RATING_TEXT_1;
  } else if (rate === 2) {
    RATING_TEXT_1 = RATING_TEXT_2;
  } else if (rate === 3) {
    RATING_TEXT_1 = RATING_TEXT_3;
  } else if (rate === 4) {
    RATING_TEXT_1 = RATING_TEXT_4;
  } else if (rate === 5) {
    RATING_TEXT_1 = RATING_TEXT_5;
  }

  return (
    <View style={styles.container}>
      <GoBacknavbar
        backgroundColor={COLORS.fixedHeaderBg}
        name="Cancel"
        onPress={() => NavigationService.goBack()}
      />
      <ScrollView>
        <Imagebacground
          imageUrl={require('../../../../assets/images/heroImages/home-hero-small.png')}
          width={'100%'}
          height={220}
          boxShadow={true}
          title="Feedback"
        />
        <View style={styles.stare}>
          <View>
            <Text style={styles.bodyText}>{INTRO_TEXT}</Text>
          </View>
          <Rating
            ratingCount={5}
            imageSize={35}
            ratingColor={COLORS.pactiveGreen}
            ratingBackgroundColor="grey"
            onFinishRating={(e: number) => setRate(e)}
            tintColor="#fff"
            startingValue={rate}
            type="custom"
            style={{
              marginVertical: 27,
            }}
            showRating={false}
          />
        </View>
        {rate > 0 ? (
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{RATING_TEXT_1}</Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <DefaultInput title="Comments" />
            </View>
            <View>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['transparent', 'rgba(0,0,0,0.15)']}
                style={{
                  height: 7,
                  width: '90%',
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  top: -7,
                  marginHorizontal: 20,
                }}
              />
              <View style={{paddingHorizontal: 40, marginTop: 20}}>
                <DefaultButton title={'Send feedback'} />
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  stare: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  bodyText: {
    color: COLORS.textColor,
    marginBottom: 20,
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    height: 120,
    marginHorizontal: 20,
  },
  titleText: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
