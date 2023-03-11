import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
const {height} = Dimensions.get('window');
export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    width: '100%',
  },
  heroHeaderWrapper: {
    backgroundColor: '#eee',
    width: '100%',
    height: height / 1.75,
  },
  titleText: {
    marginTop: 20,
    fontSize: 32,
    alignSelf: 'center',
    color: '#ffffff',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  bodyText: {
    marginTop: 15,
    fontSize: 18,
    alignSelf: 'center',
  },
  heroHeaderImageBcg: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
