import {Platform} from 'react-native';
import Config from 'react-native-config';

export default {
  API_URL:
    'https://us-central1-pactive-stage-v2-79689.cloudfunctions.net/api/v2/',
  URL_SCHEME: Config.URL_SCHEME,
  production_API_URL:
    'https://europe-west2-pactive-v2.cloudfunctions.net/api/v2/',
  staging_API_URL:
    'https://us-central1-pactive-stage-v2-79689.cloudfunctions.net/api/v2/',
  APITimeout: 90000,
  permissionsContacts:
    'Connect with your contacts now, and join in shared Pacts. Allow Pactive to access your contacts?',
  permissionsCamera:
    'Share pictures with other pact members. Allow Pactive to access your camera?',
  permissionsSMS:
    'Send invitations to your friends and family. Allow Pactive to send text messages?',
  terms: 'https://pactiveapi.co.uk/terms-and-conditions.pdf',
  privacyPolicy: 'https://pactiveapi.co.uk/privacy-policy.pdf',
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
  sharingLinkMessage: 'Get Pactve, come join me ',
  notificationSharingLinkMessage: 'Get Pactve, come join me ',
  sharingLinkURL: 'https://pactive-stage-v2-79689.firebaseapp.com/invite/',
  sharingPactiveURL: 'https://www.getpactive.co.uk',
  sharingLinkSuffix: '#app',
  sharingPactiveImageURL: Config.sharingPactiveImageURL,
  dynamicLink: Config.dynamicLink,
  messageLimit: 99,
  notificationLimit: 99,
  videoDurationLimit: 15,
  nominalPactLimit: 20,
  activePactLimit: 999,
  pactRefreshTime: 1200000, //20 minutes...
  baseFont: 'Quicksand-Medium',
  fontCondensed: 'Abel-Regular',
  fontNormal: 'Quicksand-Medium',
  fontBold: 'Quicksand-Bold',
  codePushIOSStaging: 'r1W5GUl8-QEssv9oHxAtvtkrpArcsCSfAlKAy',
  codePushAndroidStaging: 'JU3qKwYicFPLpkmZ0iq-PW6quZXy2uh6wjy_U',
};
