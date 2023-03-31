import React, {useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AllNavigation from './src/navigation/AllNavigation';
import {Platform, StatusBar} from 'react-native';
import {COLORS} from './src/constants/Colors';

const App = () => {
  return (
    <>
      <SafeAreaProvider style={{backgroundColor: COLORS.fixedHeaderBg}}>
        <StatusBar
          barStyle={'dark-content'}
          hidden={false}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        <AllNavigation />
      </SafeAreaProvider>
    </>
  );
};

export default App;
