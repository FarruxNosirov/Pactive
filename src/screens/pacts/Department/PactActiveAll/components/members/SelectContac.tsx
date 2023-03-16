import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Imagebacground from '../../../../../../components/Imagebacground';
import SearchContact from '../../../../../../components/SearchContact';
import {COLORS} from '../../../../../../constants/Colors';
import ContactItem from './ContactItem';
import {HelpData} from '../../../../../help/components/DataHelp';
import GoBacknavbar from '../../../../../../components/gobacknavbar/goBacknavbar';
import NavigationService from '../../../../../../navigation/NavigationScren';
import BottomHeight from '../../../../../../components/BottomHeight';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';

const SelectContac = () => {
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
              title="Select Contacts"
            />
            <SearchContact placeholder="Search contacts" btnName="Cancel" />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={HelpData}
        renderItem={() => (
          <View style={{width: '100%', paddingHorizontal: 20}}>
            <ContactItem />
          </View>
        )}
        ListFooterComponent={
          <>
            <DefaultButton
              title="Next"
              onPress={() => NavigationService.navigate('SetTarget')}
            />
            <BottomHeight height={50} />
          </>
        }
        ListFooterComponentStyle={{paddingHorizontal: 20, paddingTop: 20}}
      />
    </View>
  );
};

export default SelectContac;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
