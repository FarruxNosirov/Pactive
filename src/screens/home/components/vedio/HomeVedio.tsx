import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeVedio = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>How to Video</Text>
      </View>
      <ImageBackground
        style={{
          width: Dimensions.get('window').width - 20,
          height: Dimensions.get('window').width / 1.89,
          marginHorizontal: 10,
        }}
        source={require('../../../../assets/images/heroImages/home-hero.jpg')}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width - 20,
            height: Dimensions.get('window').width / 1.89,
            borderRadius: 4,
          }}>
          <TouchableOpacity style={styles.player}>
            <Icon name="play" style={{fontSize: 24, color: COLORS.white}} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
        }}>
        <Text style={styles.text}>Don't show again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeVedio;

const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  header: {
    fontSize: 20,
  },
  text: {
    color: COLORS.textColor,
    flex: 1,
    fontSize: 16,
  },
  player: {
    backgroundColor: 'rgba(250,250,250,0.4)',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
});
