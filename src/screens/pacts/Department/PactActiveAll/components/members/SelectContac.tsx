import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Imagebacground from '../../../../../../components/Imagebacground';
import SearchContact from '../../../../../../components/SearchContact';
import {COLORS} from '../../../../../../constants/Colors';
import ContactItem from './ContactItem';

const SelectContac = () => {
  return (
    <View style={styles.container}>
      <Imagebacground
        imageUrl={require('../../../../../../assets/images/heroImages/home-hero-small.png')}
        width={'100%'}
        height={220}
        boxShadow={false}
        title="Select Contacts"
      />
      <View>
        <SearchContact placeholder="Search contacts" btnName="Cancel" />
        <ContactItem />
      </View>
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
