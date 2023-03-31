import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PactItemCart from '../../../components/PactItemCart';
import {COLORS} from '../../../constants/Colors';
const data = [
  {id: 0, name: 'salom salom salom salom  '},
  {id: 1, name: 'salom salom salom salom '},
  {id: 2, name: 'salom salom'},
  {id: 3, name: 'salom'},
];
const PactSocial = () => {
  return (
    <View
      style={{backgroundColor: COLORS.white, height: '100%', paddingTop: 20}}>
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
