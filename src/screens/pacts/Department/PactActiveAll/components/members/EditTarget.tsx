import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Imagebacground from '../../../../../../components/Imagebacground';
import Counter from '../../../../../../components/Counter';
import {COLORS} from '../../../../../../constants/Colors';

const EditTarget = () => {
  return (
    <View style={styles.container}>
      <Imagebacground
        imageUrl={require('../../../../../../assets/images/heroImages/home-hero-small.png')}
        width={'100%'}
        height={220}
        boxShadow={false}
        title="Edit Targets"
      />
      <View
        style={{
          backgroundColor: COLORS.pactiveLightGray,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 5,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.pactiveLightGray,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 5,
        }}>
        <Counter
          btnValue={250}
          valueName={'metres'}
          inputStyle={true}
          ButtonStyle={{backgroundColor: COLORS.pactiveGreen}}
          defaultValue="0"
        />
      </View>
    </View>
  );
};

export default EditTarget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trackComponentContentsContainer: {
    paddingHorizontal: 10,
  },
  automaticallyLabel: {
    marginBottom: 16,
  },
  automaticallyLabelText: {
    fontSize: 12,

    opacity: 0.4,
  },
});
