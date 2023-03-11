import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/Colors';
const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 25,
    width: '100%',
    minHeight: 80,
    zIndex: -1,
  },
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
  inputField: {
    color: COLORS.textColor,
    fontWeight: 'normal',
    borderBottomColor: COLORS.textColor,
    borderBottomWidth: 0.5,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    textAlignVertical: 'center',
    fontSize: 16,
    marginBottom: 5,
    zIndex: -1,
  },
  inputError: {
    color: 'red',
    margin: 0,
  },
  heroHeaderWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  heroHeaderImageWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroHeaderBackdrop: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroHeaderImageBcg: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  bgIconst: {
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -50,
  },
  heroHeaderContentHeading: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  svg_big: {
    position: 'relative',
  },
  svg: {
    position: 'relative',
    zIndex: 10,
  },
  wrapper: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  hexagonContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagonContentLabel: {
    color: '#fff',
    textAlign: 'center',
    width: '80%',
  },
  radioBtn: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  radioRadioGroupWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 10,
  },
  radioRadioGroupItem: {
    width: '33%',
    paddingVertical: 8,
    paddingRight: 8,
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
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  switchLabelLeft: {
    paddingRight: 8,
    color: COLORS.textColor,

    textTransform: 'uppercase',
  },
  switchLabelRight: {
    paddingLeft: 8,
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
  edit: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    right: -15,
  },
  title: {
    position: 'absolute',
    top: 70,
  },
  account_title: {
    color: COLORS.white,
    fontSize: 30,
  },
  header: {
    backgroundColor: '#9999A9',
    paddingVertical: 14,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  header_title: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
