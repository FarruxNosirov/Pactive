import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/Colors';
const data = [
  {id: 0, name: 'salom salom salom salom '},
  {id: 1, name: 'salom salom salom salom '},
  {id: 2, name: 'salom salom'},
  {id: 3, name: 'salom'},
];
const SCREEN_WIDTH = Dimensions.get('window').width;
const TILE_WIDTH = Math.floor(SCREEN_WIDTH / 2) - 15;
const TILE_HEIGHT = Math.floor(TILE_WIDTH * 1.17);
const SocialPacts = () => {
  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Social Pacts</Text>
          <TouchableOpacity>
            <Text style={styles.link}>View All</Text>
          </TouchableOpacity>
        </View>
      }
      style={styles.container}
      data={data}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.tile}>
            <View style={styles.iconstContent}>
              <View style={styles.iconst}>
                <Image
                  style={styles.iconst_img}
                  source={require('../../../../assets/images/allImage/bootsplash_logo.png')}
                />
              </View>
              <Text style={{color: COLORS.pactiveGreen}}>Pactive</Text>
            </View>
            <View style={styles.imageBgWrap}>
              <ImageBackground
                resizeMode={'cover'}
                style={styles.imageBg}
                source={require('../../../../assets/images/heroImages/account-hero.png')}></ImageBackground>
              <View style={styles.imageBgOverlay}></View>
            </View>
            <View style={styles.textContent}>
              <Text style={styles.titleText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default SocialPacts;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
  tile: {
    flex: 1,
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
  titleText: {
    color: 'white',
    fontSize: 13,
  },
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
  link: {
    color: COLORS.pactiveGreen,
    textTransform: 'uppercase',
    fontSize: 14,
  },
  imageBgWrap: {
    flex: 1,
    height: TILE_HEIGHT,
    width: TILE_WIDTH,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
  imageBg: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  textContent: {
    position: 'absolute',
    zIndex: 20,
    bottom: 0,
    padding: 7,
  },
  iconstContent: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 20,
    minHeight: 100,
    minWidth: 100,
  },
  iconst: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconst_img: {
    width: 40,
    height: 45,
  },
});
