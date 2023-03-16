import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Imagebacground from '../../../../../../components/Imagebacground';
import Counter from '../../../../../../components/Counter';
import {COLORS} from '../../../../../../constants/Colors';
import GoBacknavbar from '../../../../../../components/gobacknavbar/goBacknavbar';
import NavigationService from '../../../../../../navigation/NavigationScren';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';

const EditTarget = () => {
  const [addValue, setAdValue] = useState(0);
  return (
    <View style={styles.container}>
      <GoBacknavbar
        backgroundColor={COLORS.fixedHeaderBg}
        name="Cancel"
        onPress={() => NavigationService.goBack()}
      />
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
          setAdValue={setAdValue}
          addValue={addValue}
        />
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 40}}>
        {addValue > 0 ? <DefaultButton title="Update targats" /> : null}
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
