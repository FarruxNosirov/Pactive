import {FlatList, StyleSheet, Text, View} from 'react-native';
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
function Content({title}: any) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.js</Text> to change this screen
        and then come back to see your edits.
      </Text>
    </View>
  );
}
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
        keyExtractor={(item, index) => index.toString()}
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
  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black,
  },
  highlight: {
    fontWeight: '700',
  },
});
