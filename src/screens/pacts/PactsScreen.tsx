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

import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../constants/Colors';
import Text from '../../constants/Text';
import PactActive from './Department/PactActive';
import PactsHeader from './components/PactsHeader';
import TabStacks from '../../navigation/stacks/TabStacks';

function Tabs({style, setActive, active}: any) {
  return (
    <Animated.ScrollView
      horizontal
      style={[styles.tabs, style]}
      scrollEnabled={false}>
      <TouchableOpacity
        onPress={() => setActive({...active})}
        style={{
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Invite</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Social</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
}
const height = Dimensions.get('window').height;
const IMAGE_HEIGHT = height / 1.9;

const PactsScreen = () => {
  const statusBarHeight = 0;
  const tabsScroll = useRef(new Animated.Value(0)).current;

  const tabsTop = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [IMAGE_HEIGHT + statusBarHeight, statusBarHeight],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });
  const [active, setActive] = useState({
    active: false,
    invite: false,
    Social: false,
  });
  return (
    <>
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

          {/* <PactActive /> */}
        </ScrollView>
        {/* <Tabs
          style={{transform: [{translateY: tabsTop}]}}
          setActive={setActive}
          active={active}
        /> */}
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
    height: 50,
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
