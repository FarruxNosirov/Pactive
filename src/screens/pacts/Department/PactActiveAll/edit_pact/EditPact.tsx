import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import EditImageBack from '../../../../../components/editImageBack/EditImageBack';
import GoBacknavbar from '../../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../../constants/Colors';
import NavigationService from '../../../../../navigation/NavigationScren';
import DefaultInput from '../../../../../components/defaultInput/DefaultInput';
import BottomHeight from '../../../../../components/BottomHeight';
import BirthOfData from '../../../../../components/birthOfData/BirthOfData';

const EditPact = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <GoBacknavbar
        name="Cancel"
        backgroundColor={COLORS.fixedHeaderBg}
        onPress={() => NavigationService.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <EditImageBack
          title="Edit Pact"
          imageBac={require('../../../../../assets/images/heroImages/home-hero.jpg')}
        />
        <View
          style={{width: '100%', paddingHorizontal: 20, marginVertical: 20}}>
          <DefaultInput title="Pact Title" />
          <DefaultInput
            title="Pact Description"
            multiline={true}
            minHeight={80}
          />
          <BirthOfData
            title="End"
            setData={setDate}
            setTime={setTime}
            time={time}
            data={date}
          />
        </View>
        <BottomHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default EditPact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
});
