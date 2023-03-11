import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {AllRoutes} from '../../../../routes/AllRoutes';
import NavigationService from '../../../../navigation/NavigationScren';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
const height = Dimensions.get('window').height;

const CreatePactBacground = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.progressContainer}>
      <ImageBackground
        source={require('../../../../assets/images/heroImages/home-hero.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.buttonContant}>
          <Text style={styles.progressContainerText}>
            You don't have any active pacts
          </Text>
          <View style={{width: '100%', paddingHorizontal: 90}}>
            <DefaultButton
              title="CREATE A PACT"
              onPress={() => NavigationService.navigate('CreatePactScreen')}
            />
          </View>
        </View>
        <View style={styles.heroHeaderBackdrop}></View>
      </ImageBackground>
    </View>
  );
};

export default CreatePactBacground;

const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    height: height / 2,
    position: 'relative',
  },
  heroHeaderBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
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
});
