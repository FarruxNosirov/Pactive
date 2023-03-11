import * as React from 'react';
import {View} from 'react-native';

import {
  Walking,
  Running,
  Cycling,
  Meditation,
  Drinking,
  Sleeping,
  Fiveaday,
  Other,
} from './HexagonOptionIcons';

const getIconToReturn = (activity: any) => {
  switch (activity) {
    case 'WALKING':
      return Walking;
    case 'RUNNING':
      return Running;
    case 'CYCLING':
      return Cycling;
    case 'MEDITATION':
      return Meditation;
    case 'DRINKING':
      return Drinking;
    case 'SLEEPING':
      return Sleeping;
    case 'FIVEADAY':
      return Fiveaday;
    default:
      return Other;
  }
};

const HexagonTrackPage = ({activity}: any) => {
  const IconComponent = getIconToReturn(activity);
  return (
    <View>
      <IconComponent trackPage />
    </View>
  );
};

export default HexagonTrackPage;
