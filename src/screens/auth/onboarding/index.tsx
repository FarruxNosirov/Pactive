import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from './Swiper';
import OnboardingItem from '../../../components/onboardingItem/OnboardingItem';

const data = [
  {
    id: 0,
    title: '',
    body: 'Create Pacts with your family and friends - set them a challenge! Do 10,000 steps a day, walk the dogs more, or anything you can think of!',
    icon: null,
  },
  {
    id: 1,
    title: '',
    body: 'Pactive is better with others - invite your friends, family, colleagues, and start challenging!',
    icon: null,
  },
  {
    id: 2,
    title: '',
    body: 'Work towards your Pacts by keeping track of your step count, uploading photos, and more!',
    icon: null,
  },
];
export default class OnboardingScreen extends Component {
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide]}>
          <OnboardingItem text="Create Pacts with your family and friends - set them a challenge! Do 10,000 steps a day, walk the dogs more, or anything you can think of!" />
        </View>
        {/* Second screen */}
        <View style={[styles.slide]}>
          <OnboardingItem text="Pactive is better with others - invite your friends, family, colleagues, and start challenging!" />
        </View>
        {/* Third screen */}
        <View style={[styles.slide]}>
          <OnboardingItem text="Work towards your Pacts by keeping track of your step count, uploading photos, and more!" />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  // Header styles
});
