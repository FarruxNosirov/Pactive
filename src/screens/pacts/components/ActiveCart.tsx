import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '../../../constants/Text';
import Imagebacground from '../../../components/Imagebacground';
import NavigationService from '../../../navigation/NavigationScren';
import {COLORS} from '../../../constants/Colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const TILE_WIDTH = Math.floor(SCREEN_WIDTH / 2) - 15;
const TILE_HEIGHT = Math.floor(TILE_WIDTH * 1.17);
type propsType = {
  imageUrl?: string;
  name?: string;
};
const ActiveCart = (props: propsType) => {
  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => NavigationService.navigate('PactActiveAll')}>
      <View style={styles.imageBgWrap}>
        <Imagebacground imageUrl={props.imageUrl} />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.titleText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveCart;

const styles = StyleSheet.create({
  tile: {
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 5,
    position: 'relative',
    height: TILE_HEIGHT,
    width: TILE_WIDTH,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    zIndex: 1,
  },
  imageBgWrap: {
    flex: 1,
  },
  imageBgOverlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 2,
  },
  textContent: {
    position: 'absolute',
    zIndex: 20,
    bottom: 0,
    padding: 7,
  },
  titleText: {
    color: 'white',
    fontSize: 13,
  },
});
