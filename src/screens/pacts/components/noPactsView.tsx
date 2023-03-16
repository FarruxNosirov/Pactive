import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../../constants/Text';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  text: {
    color: '#B6B6B6',
    marginBottom: 10,
  },
  icon: {
    color: '#B6B6B6',
    fontSize: 32,
  },
});

export default function NoPactsView(props: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No {props.title}, pull to refresh</Text>
      <Icon name="arrow-down" size={24} color={COLORS.textColor} />
    </View>
  );
}
