import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../constants/Colors';

import {SmallShareButton} from './ShareButton';
import Config from 'react-native-config';
import Text from '../../../../../../constants/Text';

const MesseageItemMe = ({item, currentMessage}: any) => {
  const user = {
    _id: 'advert-123',
    avatar: null,
  };
  const shareText = currentMessage?.image
    ? Config.sharingPactiveImageURL +
      `/messages/${item?.pactId}/${currentMessage?._id}`
    : currentMessage?.text;
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{padding: 10}}>
            <SmallShareButton
              user={user}
              inBubble
              pactName={'Orihero'}
              message={'Salom'}
              uri={''}
            />
          </TouchableOpacity>
          <View style={styles.messege}>
            <Text style={styles.messege_text}>{item?.message}</Text>
            <Text style={styles.date_text}>{item?.time}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default MesseageItemMe;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  personNime: {
    color: '#3F3535',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 40,
  },
  messege: {
    paddingRight: 9,
    borderColor: COLORS.activeTabTextColor,
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 15,
  },
  messege_text: {
    color: '#717171',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
  date_text: {
    color: '#717171',
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 5,
  },
});
