import {Platform} from 'react-native';

export const COLORS = {
  transparent: 'transparent',
  white: '#fff',
  pactiveHeaderColor: '#16E9A3',
  itemContainerColor: '#f4f4f6',
  pactiveStatusBarColor: Platform.OS === 'ios' ? '#16E9A3' : 'transparent',
  sharingLinkTitle: 'get Pactive!',
  pactiveGreen: '#16E9A3',
  pactiveBlue: '#5B57D5',
  pactivePink: '#EA3A6A',
  pactiveGray: '#5A5A5A',
  fixedHeaderBg: '#9999A9',
  pactiveLightGray: '#F6F6F8',
  textColor: '#5A5A5A',
  activeTabTextColor: '#5B57D5',
  inactiveTabTextColor: '#ffffff',
  black: '#000',
  accountIconColor: '#FF9501',
  healthIconColor: '#ff1919',
  gold: 'gold',
  newsLetter: '#007AFF',
  gray: 'gray',
  lightblue: 'lightblue',
};