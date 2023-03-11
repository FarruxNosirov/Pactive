import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  radioRadioGroupItem: {
    width: '32%',
    paddingVertical: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioRadioGroupItemIndicator: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#16E9A3',
    width: 20,
    height: 20,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  radioRadioGroupItemIndicatorDot: {
    backgroundColor: '#16E9A3',
    width: 10,
    height: 10,
    borderRadius: 30,
  },
});
