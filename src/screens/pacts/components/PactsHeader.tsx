import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Imagebacground from '../../../components/Imagebacground';
import Hexagon from '../../../components/Hexagon';
import NavigationService from '../../../navigation/NavigationScren';
const height = Dimensions.get('window').height;
const PactsHeader = () => {
  return (
    <View
      style={{
        height: height / 1.75,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Imagebacground
        imageUrl={require('../../../assets/images/heroImages/pacts-hero.png')}
        width={'100%'}
      />
      <View style={styles.heroHeaderContentWrapper}>
        <View style={styles.heroHeaderContent}>
          <View style={styles.topHeroHeaderRow}>
            <Hexagon
              size="90"
              stroke="#16E9A3"
              fill="transparent"
              gradient={false}
              marginHorizontal={0}
            />
            <TouchableOpacity
              onPress={() => NavigationService.navigate('HistoryPact')}>
              <Hexagon
                size="90"
                fill="#16E9A3"
                gradient={false}
                marginHorizontal={0}
                label="HISTORY"
                opacity={0.75}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.middleHeroHeaderRow}>
            <Hexagon
              size="90"
              stroke="#16E9A3"
              fill="transparent"
              gradient={false}
              marginHorizontal={0}
            />
            <TouchableOpacity
              onPress={() => NavigationService.navigate('CreatePactScreen')}>
              <Hexagon
                size="90"
                fill="#16E9A3"
                gradient={false}
                marginHorizontal={0}
                label="Create a Pact"
                opacity={0.75}
              />
            </TouchableOpacity>
            <Hexagon
              size="90"
              stroke="#16E9A3"
              fill="transparent"
              gradient={false}
              marginHorizontal={0}
            />
          </View>
          <View style={styles.bottomHeroHeaderRow}>
            <Hexagon
              size="90"
              stroke="#16E9A3"
              fill="transparent"
              gradient={false}
              marginHorizontal={0}
            />
            <Hexagon
              size="90"
              stroke="#16E9A3"
              fill="transparent"
              gradient={false}
              marginHorizontal={0}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PactsHeader;
const styles = StyleSheet.create({
  heroHeaderContentWrapper: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    zIndex: 11,
  },
  heroHeaderContent: {
    alignItems: 'center',
    height: '50%',
    zIndex: 1,
  },
  topHeroHeaderRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomHeroHeaderRow: {
    flex: 1,
    flexDirection: 'row',
  },
  middleHeroHeaderRow: {
    flex: 1,
    flexDirection: 'row',
  },
});
