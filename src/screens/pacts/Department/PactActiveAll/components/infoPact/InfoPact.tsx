import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../constants/Colors';

const InfoPact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Walking 500 Meters Daily</Text>
      <Text style={styles.text}>From 9 March 2023 05: 00</Text>
      <Text style={styles.text}>sssasasasasas</Text>
      <Text style={styles.textFooter}>sasasasasas</Text>
    </View>
  );
};

export default InfoPact;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 17,
    color: COLORS.pactiveGray,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: COLORS.pactiveGray,
    marginTop: 20,
  },
  textFooter: {
    fontSize: 16,
    color: COLORS.pactiveGray,
    marginTop: 30,
  },
});
