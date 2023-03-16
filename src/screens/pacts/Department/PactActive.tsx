import {FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants/Colors';
import {HelpData} from '../../help/components/DataHelp';
import ActiveCart from '../components/ActiveCart';
import BottomHeight from '../../../components/BottomHeight';

const Data = [
  {
    id: 0,
    name: 'salom',
  },
  {
    id: 1,
    name: 'salom',
  },

  {
    id: 2,
    name: 'salom',
  },
  {
    id: 3,
    name: 'salom',
  },
  {
    id: 4,
    name: 'salom',
  },
];
const PactActive = () => {
  return (
    <View
      style={{backgroundColor: COLORS.white, height: '100%', paddingTop: 20}}>
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ActiveCart
              imageUrl={require('../../../assets/images/heroImages/walking-hero.jpg')}
              name={item.name}
            />
          );
        }}
        style={styles.container}
        numColumns={2}
      />
    </View>
  );
};

export default PactActive;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
});
