import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BottomHeight from '../../../../../../components/BottomHeight';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';
import Imagebacground from '../../../../../../components/Imagebacground';
import GoBacknavbar from '../../../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../../../constants/Colors';
import NavigationService from '../../../../../../navigation/NavigationScren';
import {HelpData} from '../../../../../help/components/DataHelp';
import ContactItem from './ContactItem';

const RemoveMembers = () => {
  return (
    <View style={styles.container}>
      <GoBacknavbar
        backgroundColor={COLORS.fixedHeaderBg}
        name="Cancel"
        onPress={() => NavigationService.goBack()}
      />
      <FlatList
        ListHeaderComponent={
          <>
            <Imagebacground
              imageUrl={require('../../../../../../assets/images/heroImages/home-hero-small.png')}
              width={'100%'}
              height={220}
              boxShadow={false}
              title="Remove Members"
            />
          </>
        }
        ListHeaderComponentStyle={{marginBottom: 40}}
        showsVerticalScrollIndicator={false}
        data={HelpData}
        renderItem={() => (
          <View style={{width: '100%', paddingHorizontal: 20}}>
            <ContactItem />
          </View>
        )}
        ListFooterComponent={
          <>
            <DefaultButton title="Remove" />
            <BottomHeight height={50} />
          </>
        }
        ListFooterComponentStyle={{paddingHorizontal: 20, paddingTop: 20}}
      />
    </View>
  );
};

export default RemoveMembers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
