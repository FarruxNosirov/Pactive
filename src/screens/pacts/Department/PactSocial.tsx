import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';
import PactItemCart from '../../../components/PactItemCart';
const data = [
  {id: 0, name: 'salom salom salom salom  '},
  {id: 1, name: 'salom salom salom salom '},
  {id: 2, name: 'salom salom'},
  {id: 3, name: 'salom'},
];
const PactSocial = () => {
  return (
    <View
      style={{backgroundColor: COLORS.white, height: '100%', marginTop: 20}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <PactItemCart name={item.name} />;
        }}
        numColumns={2}
        style={styles.container}
      />
    </View>
  );
};

export default PactSocial;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
});
