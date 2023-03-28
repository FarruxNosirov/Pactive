import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  signInContentWrapper: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    width: '100%',
    padding: 10,
    paddingTop: 100,
  },
  registerHeadline: {
    fontSize: 24,
    color: '#16E9A3',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 24,
  },
  registerHeadlineCopy: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
    color: '#fff',
  },
  registerHeadlineLabel: {
    textAlign: 'center',
    marginBottom: 6,
    fontSize: 14,
    color: '#fff',
  },
  registerHeadlineSubLabel: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 12,
    color: '#fff',
  },
  phoneInputText: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#fff',
    width: '100%',
    paddingBottom: 2,
    backgroundColor: 'transparent',
  },
  phoneNumber: {
    color: '#fff',
    paddingTop: 0,
    paddingBottom: 0,
  },
  tcsWrapper: {
    marginVertical: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  tcsLabelText: {
    marginLeft: 16,
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  buttonPrimary: {
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
    width: '100%',
  },
  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    lineHeight: 20,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  checkBox: {
    borderRadius: 3,
    left: 0,
    borderColor: COLORS.pactiveGreen,

    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: COLORS.transparent,
    flexGrow: 1,
    height: 40,
    color: COLORS.white,
    padding: 0,
    marginTop: 5,
  },
  inputContainer: {
    backgroundColor: COLORS.transparent,
    flexGrow: 1,
    padding: 0,
    margin: 0,
    height: '100%',
  },
  codeTextStyle: {
    color: COLORS.white,
  },

  flagButtonStyle: {
    width: 50,
    height: 40,
    alignSelf: 'center',
  },
  inputContainer2: {
    backgroundColor: COLORS.transparent,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});
