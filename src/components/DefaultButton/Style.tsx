import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: COLORS.pactiveGreen,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    elevation: 6,
    height: 'auto',
    width: '100%',
  },
  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    lineHeight: 20,
    textAlign: 'center',
  },
});
