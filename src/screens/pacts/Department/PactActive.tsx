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
    <FlatList
      style={styles.containerFlatList}
      data={Data}
      renderItem={({item}) => {
        return (
          <ActiveCart
            imageUrl={require('../../../assets/images/heroImages/walking-hero.jpg')}
            name={item.name}
          />
        );
      }}
      numColumns={2}
    />
  );
};

export default PactActive;

const styles = StyleSheet.create({
  containerFlatList: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
});
