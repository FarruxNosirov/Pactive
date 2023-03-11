import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {Style} from './Style';

const {width} = Dimensions.get('window');
type propsType = {
  text?: string;
  id?: number;
};
const OnboardingItem = (props: propsType) => {
  let imageUrl = '../../assets/images/onboardingImages/0.png';
  if (props.id === 1) {
    imageUrl = '../../assets/images/onboardingImages/1.png';
  }
  return (
    <View style={Style.container}>
      <View style={Style.heroHeaderWrapper}>
        <Image
          style={Style.heroHeaderImageBcg}
          source={require('../../assets/images/onboardingImages/0.png')}
        />
      </View>
      <View style={Style.bodyContainer}>
        <Text style={Style.bodyText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
