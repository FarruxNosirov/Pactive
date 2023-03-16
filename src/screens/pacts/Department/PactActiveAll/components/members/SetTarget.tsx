import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import BottomHeight from '../../../../../../components/BottomHeight';
import Counter from '../../../../../../components/Counter';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';
import Imagebacground from '../../../../../../components/Imagebacground';
import GoBacknavbar from '../../../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../../../constants/Colors';
import NavigationService from '../../../../../../navigation/NavigationScren';
const Data = [{id: 0, name: ''}];
const SetTarget = () => {
  const [addValue, setAdValue] = useState(0);
  return (
    <View style={styles.container}>
      <GoBacknavbar
        backgroundColor={COLORS.fixedHeaderBg}
        name="Cancel"
        onPress={() => NavigationService.goBack()}
      />

      <FlatList
        data={Data}
        ListHeaderComponent={
          <Imagebacground
            imageUrl={require('../../../../../../assets/images/heroImages/home-hero-small.png')}
            width={'100%'}
            height={220}
            boxShadow={false}
            title="set Targets"
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View>
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
                marginTop: 10,
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
          </View>
        )}
        ListFooterComponent={
          <>
            <DefaultButton
              title="Invite to Pact"
              onPress={() => NavigationService.navigate('PactActiveAll')}
              disabled={addValue < 0 ? true : false}
            />
            <BottomHeight height={50} />
          </>
        }
        ListFooterComponentStyle={{paddingHorizontal: 20, paddingTop: 40}}
      />
    </View>
  );
};

export default SetTarget;

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
