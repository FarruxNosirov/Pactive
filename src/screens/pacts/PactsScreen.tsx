// import React from 'react';
// import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
// import PactsHeader from './components/PactsHeader';

// import TabStacks from '../../navigation/stacks/TabStacks';
// import {COLORS} from '../../constants/Colors';

// const PactsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
//         <PactsHeader />
//         <TabStacks />
//       </ScrollView>
//     </View>
//   );
// };

// export default PactsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
// });

import React from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import PactActive from './Department/PactActive';
import PactsHeader from './components/PactsHeader';
import {COLORS} from '../../constants/Colors';
import TabStacks from '../../navigation/stacks/TabStacks';

function Tabs({style}: any) {
  return (
    <Animated.ScrollView
      horizontal
      style={[styles.tabs, style]}
      scrollEnabled={false}>
      <DefaultButton title="siginIn" />
    </Animated.ScrollView>
  );
}
const height = Dimensions.get('window').height;
const IMAGE_HEIGHT = height / 1.9;

const PactsScreen = () => {
  const statusBarHeight = 0;
  const tabsScroll = new Animated.Value(0);

  const tabsTop = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [IMAGE_HEIGHT + statusBarHeight, statusBarHeight],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          scrollEventThrottle={20}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: tabsScroll,
                },
              },
            },
          ])}
          showsVerticalScrollIndicator={false}>
          <PactsHeader />
          <TabStacks />
        </ScrollView>
        {/* <Tabs style={{transform: [{translateY: tabsTop}]}} /> */}
      </SafeAreaView>
    </>
  );
};

export default PactsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.white,
  },
  scrollView: {},
  image: {
    height: IMAGE_HEIGHT,
    width: '100%',
  },
  tabs: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: COLORS.pactiveHeaderColor,
  },
  tabText: {
    fontSize: 20,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: '#fff',
  },
  activeTabText: {
    fontWeight: '700',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
