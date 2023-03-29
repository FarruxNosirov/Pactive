// import {Alert, Platform} from 'react-native';

// import axios from 'axios';

// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';

// /*
// axios.interceptors.request.use(request => {
//     console.log('Starting Request', request)
//     return request
//   })

//   axios.interceptors.response.use(response => {
//     console.log('Response:', response)
//     return response
//   })
// */

// import Config from 'react-native-config';
// const BASE_URL = Config.BASE_URL;

// //const BASE_URL= "https://us-central1-pactive-stage-v2-79689.cloudfunctions.net/api/v2/";

// const APP_KEY = '90f7a0bf-eb00-4b3c-b5a7-fbf6c6d328b3';

// // getErrorMessage = (response) => {
// //   let message = "Status: " + response.status;
// //   if (!response.data) return message;

// //   message += ". API version: " + response.data.api;
// //   if (response.data.error) {
// //     message += ". Message: " + response.data.error.message;
// //   } else {
// //     message += ". Message: Firebase has throttled this response";
// //   }
// //   message += ". Timestamp: " + response.data.timestamp;
// //   return message;
// // };
// const APITimeout = 90000;
// const errorResponseMessage = (error: any) => {
//   if (!error) return null;
//   if (!error.response) return null;
//   if (!error.response.data) return null;
//   if (!error.response.data.error) return null;
//   if (!error.response.data.error.message) return null;

//   if (typeof error !== 'object') {
//     return 'Sorry, there has been an error.';
//   }

//   return error.response.data.error.message;
// };

// export const invokeWebService = async (
//   url: string | undefined,
//   action: string,
//   method: string,
//   collection: string | null,
//   uid: null,
//   timeout: any,
//   data: {displayName?: any; email?: any} | null,
//   progressCallback: null,
// ) => {
//   try {
//     if (!firebase.auth().currentUser) {
//       throw new Error(`user-not-authenticated-(${action}, ${method})`);
//     }
//     const tokenId = await firebase.auth().currentUser.getIdToken();
//     console.log(`API START (${method})::  ${action}`);
//     const response = await axios({
//       method: method,
//       baseURL: url,
//       url: action,
//       data: data,
//       headers: {
//         Authorization: 'Bearer ' + tokenId,
//         'Content-Type': 'application/json',
//         uid: uid,
//         collection: collection,
//       },
//       timeout: timeout,
//       onUploadProgress: progressCallback,
//     });
//     console.log(`API RETURNED (${method})::  ${action}`);
//     return response.data;
//   } catch (error) {
//     console.log(`Action, ${action}, error:`);
//     console.log(error);
//     if (!error) {
//       try {
//         throw new Error(`No server error returned for ${action}`);
//       } catch (error) {}
//       return;
//     }
//     logError(action, error);
//     const errorMessageFromServer = errorResponseMessage(error);

//     throw errorMessageFromServer ? new Error(errorMessageFromServer) : error;
//   }
// };

// //notifications
// export const wsUpdateNotificationStatus = async (nid: string, uid: null) => {
//   return await invokeWebService(
//     BASE_URL,
//     'notification/' + nid + '/remove',
//     'GET',
//     'notifications',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsRemoveAllNotifications = async (
//   uid: null,
//   notificationIds: {displayName?: any; email?: any} | null,
// ) => {
//   const action = `notification/${uid}/removeAll`;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'notifications',
//     uid,
//     APITimeout,
//     notificationIds,
//     null,
//   );
// };
// //health kit
// export const wsUpdateHealthData = async data => {
//   // console.log('Updating tracking data?:')
//   // console.log(data);
//   const action = 'track/' + data.uid;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     null,
//     data.uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// //Past tracking data
// export const wsGetTrackingData = async data => {
//   const action = 'track/' + data.uid + '/' + data.date;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     data.uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// //User
// export const updateUser = async user => {
//   return await invokeWebService(
//     BASE_URL,
//     'user/' + user.id,
//     'POST',
//     'users',
//     user.id,
//     APITimeout,
//     user,
//     null,
//   );
// };

// export const getMe = async id => {
//   return await invokeWebService(
//     BASE_URL,
//     'user/' + id,
//     'GET',
//     'users',
//     id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const checkDisplayName = async displayName => {
//   return await invokeWebService(
//     BASE_URL,
//     'user/validate',
//     'POST',
//     'users',
//     null,
//     APITimeout,
//     {displayName: displayName},
//     null,
//   );
// };

// export const checkEmail = async email => {
//   return await invokeWebService(
//     BASE_URL,
//     'user/validate',
//     'POST',
//     'users',
//     null,
//     APITimeout,
//     {email: email},
//     null,
//   );
// };

// //pacts

// export const wsGetPact = async request => {
//   const action = 'pact/' + request.id;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     request.id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetAllPacts = async request => {
//   const action = 'user/' + request.id + '/allPacts';
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     request.id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetActivePacts = async request => {
//   let action =
//     'user/' +
//     request.id +
//     '/activePacts?start=' +
//     request.start +
//     '&limit=' +
//     request.limit;
//   if (request.refreshCache) {
//     action = `${action}&refresh=true`;
//   }
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     request.id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetHistoricPacts = async request => {
//   const action =
//     'user/' +
//     request.id +
//     '/historicPacts?start=' +
//     request.start +
//     '&limit=' +
//     request.limit;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     request.id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetSocialPacts = async request => {
//   let action =
//     'user/' +
//     request.id +
//     '/socialPacts?start=' +
//     request.start +
//     '&limit=' +
//     request.limit;
//   if (request.refreshCache) {
//     action = `${action}&refresh=true`;
//   }
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     request.id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsUpdatePact = async (uid, pactId, pactData) => {
//   let action = 'pact';
//   if (pactId !== null) {
//     action += '/' + pactId;
//   }

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'pact',
//     uid,
//     APITimeout,
//     pactData,
//     null,
//   );
// };

// export const wsClosePact = async (uid, pactId, pactData) => {
//   let action = 'pact';
//   if (pactId !== null) {
//     action += '/' + pactId + '/close';
//   }

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'pact',
//     uid,
//     APITimeout,
//     pactData,
//     null,
//   );
// };

// export const wsLeavePact = async (uid, pactId) => {
//   let action = 'pact';
//   if (pactId !== null) {
//     action += '/' + pactId + '/leave';
//   }

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'pact',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsSendReportMessage = async (uid, pactId, data) => {
//   let action = 'request/' + pactId;

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'pact',
//     uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// // Get user's requestId based on uid and pactId
// export const wsGetUserPactJoinRequest = async (uid, pactId) => {
//   let action = 'user/' + uid + '/pactRequest/' + pactId;

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'userRequests',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// // Remove user's request based on requestIs
// export const wsRemoveUserPactJoinRequest = async (uid, requestId) => {
//   let action = 'request/' + requestId + '/remove/';

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'userRequests',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsSendFeedbackMessage = async (uid, data) => {
//   let action = 'request/';

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'pact',
//     uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// //invites
// export const wsGetInvitesPacts = async request => {
//   const action =
//     'user/' +
//     request.id +
//     '/invitePacts?start=' +
//     request.start +
//     '&limit=' +
//     request.limit;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     request.id,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsIsUserInvitedToPact = async (uid, pactId) => {
//   const action = 'user/' + uid + '/pact/' + pactId;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     null,
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetMembers = async (uid, pactId) => {
//   const action = 'pact/' + pactId + '/members/all';
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'members',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsRemoveMember = async (uid, pactId, data) => {
//   const action = 'pact/' + pactId + '/remove';
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'members',
//     uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// export const wsInviteMembers = async (uid, pactId, data) => {
//   const action = 'invite/' + pactId;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'invitations',
//     uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// export const wsJoinSocialPact = async (uid, pactId, phoneNumber) => {
//   const action = 'invite/' + pactId + '/' + phoneNumber + '/' + 'self';
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'invitations',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsAcceptInvitation = async (uid, data) => {
//   let action = null;
//   if (data.accepted) {
//     action = 'accept';
//   } else {
//     action = 'decline';
//   }
//   action += '/invite/' + data.pactId;

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'invitations',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// //organisations
// export const wsGetOrganisation = async organisationId => {
//   const action = 'organisation/' + organisationId;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'organisations',
//     null,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetOrganisationPacts = async (organisationId, uid = null) => {
//   const action = 'organisation/' + organisationId + '/pacts/social';
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'organisations',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// //progress
// export const wsGetPactProgress = async (pactId, timestamp) => {
//   const action = 'pact/' + pactId + '/progress/' + timestamp;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'members',
//     null,
//     APITimeout,
//     null,
//     null,
//   );
// };

// //progress per pact
// export const wsGetUserPactProgress = async (pactId, uid, timestamp) => {
//   const action = 'user/' + uid + '/pact/' + pactId + '/progress/' + timestamp;
//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'progress',
//     null,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsGetUserProgress = async (uid, timestamp) => {
//   let action = 'user/' + uid + '/progress';
//   if (timestamp) action += '/' + timestamp;

//   return await invokeWebService(
//     BASE_URL,
//     action,
//     'GET',
//     'progress',
//     null,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsUserActive = async (uid, state) => {
//   const data = {
//     type: state,
//     platform: Platform.OS.toUpperCase(),
//   };
//   const action = 'user/active';
//   //return await invokeWebService(BASE_URL, action, 'POST', 'active', uid, APITimeout, data, null);
//   return;
// };

// export const wsGetUserAdverts = async data => {
//   const action = `userAdvert/`;
//   const advertResponse = await invokeWebService(
//     BASE_URL,
//     action,
//     'POST',
//     'advertising',
//     null,
//     APITimeout,
//     data,
//     null,
//   );
//   return advertResponse && advertResponse.data ? advertResponse.data : [];
// };

// export const wsRegisterAdvertImpression = async data => {
//   return invokeWebService(
//     BASE_URL,
//     'userAdvert/impression',
//     'POST',
//     'advertising',
//     data.uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// export const wsRegisterAdvertClick = async data => {
//   return invokeWebService(
//     BASE_URL,
//     'userAdvert/click',
//     'POST',
//     'advertising',
//     data.uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// export const wsRegisterAdvertVideoStart = async data => {
//   return invokeWebService(
//     BASE_URL,
//     'userAdvert/videoStart',
//     'POST',
//     'advertising',
//     data.uid,
//     APITimeout,
//     data,
//     null,
//   );
// };

// export const wsRegisterAdvertVideoEnd = async data => {
//   return invokeWebService(
//     BASE_URL,
//     'userAdvert/videoEnd',
//     'POST',
//     'advertising',
//     data.uid,
//     APITimeout,
//     data,
//     null,
//   );
// };
// export const wsProcessShareImage = async data => {
//   const {pactId, uid} = data;

//   if (!data.pactId) {
//     return {};
//   }
//   const actionBase = 'processImage/pact/' + pactId;
//   const action = uid ? actionBase + '/user/' + uid : actionBase;
//   try {
//     if (!firebase.auth().currentUser) {
//       throw new Error(`user-not-authenticated-(${action}, ${method})`);
//     }
//     const tokenId = await firebase.auth().currentUser.getIdToken();
//     const response = await axios({
//       method: 'POST',
//       baseURL: BASE_URL,
//       url: action,
//       data: createFormData(data),
//       headers: {
//         Authorization: 'Bearer ' + tokenId,
//         'Content-Type': 'multipart/form-data',
//         uid: uid,
//         collection: 'collection',
//       },
//       timeout: APITimeout,
//       onUploadProgress: null,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     console.log(action);
//     logError(action, error);
//     const errorMessageFromServer = errorResponseMessage(error);

//     throw errorMessageFromServer ? new Error(errorMessageFromServer) : error;
//   }
// };

// const createFormData = parameterData => {
//   const {imageFile, imageURL, userId, notificationType} = parameterData;
//   const data = new FormData();
//   if (imageFile) {
//     data.append('photo', {
//       name: imageFile.fileName || 'new-photo',
//       type: imageFile.type,
//       uri:
//         Platform.OS === 'android'
//           ? imageFile.uri
//           : imageFile.uri.replace('file://', ''),
//     });
//   }
//   if (userId) {
//     data.append('userId', userId);
//   } else {
//     data.append('userId', '');
//   }
//   if (imageURL) {
//     data.append('imageURL', imageURL);
//   }
//   if (notificationType) {
//     data.append('notificationType', notificationType);
//   }
//   return data;
// };

// export const wsGetHowToMedia = async uid => {
//   return invokeWebService(
//     BASE_URL,
//     'pactive/howto',
//     'GET',
//     'pactive',
//     uid,
//     APITimeout,
//     null,
//     null,
//   );
// };

// export const wsLoadEarlierMessages = async data => {
//   const serverData = await invokeWebService(
//     BASE_URL,
//     `loadMessages/${data.pactId}/${data.lastMessageId}`,
//     'GET',
//     'messages',
//     null,
//     APITimeout,
//     data,
//     null,
//   );
//   return serverData.data || [];
// };

// export const wsDeleteMessage = async data => {
//   return invokeWebService(
//     BASE_URL,
//     `deleteMessage`,
//     'POST',
//     'messages',
//     null,
//     config.APITimeout,
//     data,
//     null,
//   );
// };

// export const wsGenerateMessageCount = async pactId => {
//   return invokeWebService(
//     BASE_URL,
//     `generateInitialMessageCount/${pactId}`,
//     'GET',
//     ' newMessages',
//     null,
//     config.APITimeout,
//     null,
//     null,
//   );
// };
