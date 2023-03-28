import React, {useState} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import RadioGroup from '../../../../../../components/radioGroup/RadioGroup';
import {COLORS} from '../../../../../../constants/Colors';
import SwitchPro from './SwitchPro';
import Target from './Target';
import MesseageActive from '../../../../../../components/MesseageActive';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';

type propsType = {
  walkingData?: any;
};
const Measurement = (props: propsType) => {
  const [data, setData] = useState(props?.walkingData);
  const [size, setSize] = useState(props?.walkingData[0].title);
  const [sizeName, setSizeName] = useState(size);

  const onPressActivity = (value: any) => {
    setSize(value.title);
    setData((oldData: any[]) =>
      oldData.map(item =>
        item.id === value.id
          ? {...item, isPress: true}
          : {...item, isPress: false},
      ),
    );
  };
  console.log('ItemName', sizeName);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Measurement</Text>
      <SwitchPro />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RadioGroup
            value={item.title}
            isPress={item.isPress}
            onPress={() => onPressActivity(item)}
          />
        )}
        numColumns={3}
        columnWrapperStyle={{width: '100%'}}
      />
      {size == 'Yes/No' ? null : (
        <Target inputValue="0" inputTitle={'Metres'} btnName="0.25 km" />
      )}
      <View
        style={{
          paddingTop: 30,
          width: '100%',
        }}>
        <View style={{paddingTop: 20}}>
          <MesseageActive
            title="Add Reward"
            inputTitle="WHAT WILL THE WINNER GET?"
          />
          <MesseageActive
            title="Add Forfeit"
            inputTitle="WHAT HAPPENS TO THE PERSON IN LAST PLACE?"
          />
        </View>
      </View>
      <DefaultButton title="Create a pact" ButtonStyle={{marginTop: 20}} />
    </View>
  );
};

export default Measurement;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    paddingTop: 10,
    color: COLORS.pactiveBlue,
    fontSize: 25,
  },
});
