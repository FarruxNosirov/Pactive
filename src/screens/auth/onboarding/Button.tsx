import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import {COLORS} from '../../../constants/Colors';

export default class Button extends Component<any> {
  render({onPress} = this.props) {
    return (
      <View style={styles.button}>
        <DefaultButton onPress={onPress} title="NEXT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    height: 100,
    paddingTop: 20,
  },
});
