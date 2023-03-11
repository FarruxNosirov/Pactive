import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AllNavigation from './src/navigation/AllNavigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar animated={true} backgroundColor="#61dafb" />
        <AllNavigation />
      </SafeAreaProvider>
    </>
  );
};

export default App;
