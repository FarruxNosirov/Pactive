import React, {useState} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import RadioGroup from '../../../../../../components/radioGroup/RadioGroup';
import {COLORS} from '../../../../../../constants/Colors';
import SwitchPro from './SwitchPro';
import Target from './Target';
import MesseageActive from '../../../../../../components/MesseageActive';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';
import {launchImageLibrary} from 'react-native-image-picker';

const WalkingData = [
  {
    id: '1',
    title: 'Km',
    isPress: false,
  },
  {
    id: '2',
    title: 'Metres',
    isPress: false,
  },
  {
    id: '3',
    title: 'Hours',
    isPress: false,
  },
  {
    id: '4',
    title: 'Minutes',
    isPress: false,
  },
  {
    id: '5',
    title: 'Steps',
    isPress: false,
  },
  {
    id: '6',
    title: 'Count',
    isPress: false,
  },
  {
    id: '7',
    title: 'Yes/No',
    isPress: false,
  },
];

type propsType = {
  idDate?: any;
};
const Measurement = (props: propsType) => {
  console.log(props.idDate);

  const [data, setData] = useState(WalkingData);

  const onPressActivity = (id: string) => {
    setData(oldData =>
      oldData.map(item =>
        item.id === id ? {...item, isPress: true} : {...item, isPress: false},
      ),
    );
  };

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
            onPress={() => onPressActivity(item.id)}
          />
        )}
        numColumns={3}
        columnWrapperStyle={{width: '100%'}}
      />
      <Target inputValue="0" inputTitle="kilometres" btnName="0.25 km" />
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
