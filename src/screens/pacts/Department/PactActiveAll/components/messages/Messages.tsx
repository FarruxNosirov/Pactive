import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../../../../constants/Colors';
import IconMessage from 'react-native-vector-icons/Entypo';
import IconImage from 'react-native-vector-icons/Feather';
import MesseageItemMe from './MesseageItemMe';

const Data = [
  {
    id: 0,
    name: 'Farrux',
    message: 'Salom',
    time: '14:43 15-03-23',
  },
  {
    id: 2,
    name: 'Farrux',
    message: 'Salom',
    time: '14:43 15-03-23',
  },
  {
    id: 3,
    name: 'Farrux',
    message: 'Salom',
    time: '14:43 15-03-23',
  },
  {
    id: 4,
    name: 'Farrux',
    message: 'Salom Salom',
    time: '14:43 15-03-23',
  },
];

const Messages = () => {
  const [sendingMsg, setSendingMsg] = useState('');

  return (
    <View style={styles.container}>
      <View style={{height: '78%', paddingBottom: 10}}>
        <FlatList
          style={styles.chat}
          data={Data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => <MesseageItemMe item={item} />}
          inverted
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.send_cart}>
        <View
          style={[
            styles.send_cart_item,
            {width: sendingMsg.length > 0 ? '70%' : '85%'},
          ]}>
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.backContainer}
            placeholder="Type a message"
            onChangeText={text => setSendingMsg(text)}
            value={sendingMsg}
          />
        </View>
        <TouchableOpacity style={styles.sendIconImage}>
          <IconImage name="paperclip" size={24} color={COLORS.white} />
        </TouchableOpacity>
        {sendingMsg.length > 0 ? (
          <TouchableOpacity style={styles.sendIconCart}>
            <IconMessage name="paper-plane" size={24} color={COLORS.white} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    position: 'relative',
    height: '100%',
  },
  chat: {
    marginHorizontal: 15,
    position: 'relative',
  },
  send_cart_item: {
    height: '100%',
    borderRadius: 10,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  send_cart: {
    position: 'absolute',
    backgroundColor: '#C8C8C8',
    width: '100%',
    bottom: 50,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    width: '90%',
    color: COLORS.black,
    height: 50,
  },
  sendIconCart: {
    width: 50,
    height: 45,
    backgroundColor: COLORS.pactiveHeaderColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIconImage: {
    width: 50,
    height: 45,
    backgroundColor: COLORS.pactiveHeaderColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
