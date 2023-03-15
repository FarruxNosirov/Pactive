import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import GoBacknavbar from '../../../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../../../constants/Colors';
import NavigationService from '../../../../../../navigation/NavigationScren';
import EditImageBack from '../../../../../../components/editImageBack/EditImageBack';
import DefaultInput from '../../../../../../components/defaultInput/DefaultInput';
import MesseageActive from '../../../../../../components/MesseageActive';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';
import BottomHeight from '../../../../../../components/BottomHeight';

const ClosePact = () => {
  const [state, setState] = useState({
    closeMessege: '',
  });
  const onStateChange = (e: Event, key: any) => {
    setState({...state, [key]: e});
  };
  const disabled = state?.closeMessege?.length;
  return (
    <View style={styles.container}>
      <GoBacknavbar
        name="Cancel"
        backgroundColor={COLORS.fixedHeaderBg}
        onPress={() => NavigationService.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <EditImageBack
          title="Close Pact"
          imageBac={require('../../../../../../assets/images/heroImages/home-hero.jpg')}
        />
        <View
          style={{width: '100%', paddingHorizontal: 20, marginVertical: 20}}>
          <DefaultInput
            title="closing message"
            onChange={e => onStateChange(e, 'closeMessege')}
            value={state.closeMessege}
            error="You must enter a pact name"
          />
          <View style={{marginTop: 20}}>
            <MesseageActive
              title="Add Reward"
              minValue={80}
              inputTitle="WHAT Will The winner get?"
            />
            <MesseageActive
              title="Add Forfeit"
              minValue={80}
              inputTitle="WHAT HAPPENS TO THE PERSON IN LAST PLACE?"
            />
          </View>
          <DefaultButton
            title="close pact"
            disabled={disabled > 0 ? false : true}
          />
        </View>

        <BottomHeight height={100} />
      </ScrollView>
    </View>
  );
};

export default ClosePact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
});
