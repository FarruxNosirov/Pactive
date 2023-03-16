import React, {useState} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/Colors';

import IconDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Text from '../constants/Text';
import NavigationService from '../navigation/NavigationScren';

type propsType = {
  onBackPress?: () => void | undefined;
  name?: string;
  backgroundColor?: string;
  position?: string;
  active?: boolean;
  social?: boolean;
  modalOf?: boolean;
};

const BackEditHeader = (props: propsType) => {
  const [modalVisible, setModalVisible] = useState(false);

  const EditHandler = () => {
    NavigationService.navigate('EditPact');
    setModalVisible(false);
  };
  const CloseHandler = () => {
    NavigationService.navigate('ClosePact');
    setModalVisible(false);
  };
  const SocialHandler = () => {
    NavigationService.navigate('ReportPact');
    setModalVisible(false);
  };
  return (
    <>
      <View
        style={[
          styles.header,
          {
            backgroundColor: props.backgroundColor ? props.backgroundColor : '',
          },
        ]}>
        <TouchableOpacity
          onPress={props.onBackPress}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconEntypo
            name="chevron-thin-left"
            style={{color: 'white', fontSize: 20}}
          />
          <Text style={styles.header_title}>{props.name}</Text>
        </TouchableOpacity>
        {props.modalOf ? null : (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <IconDesign
              name="ellipsis1"
              style={{color: '#fff', fontSize: 30}}
            />
          </TouchableOpacity>
        )}
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={{width: '100%', height: '100%'}}
          onPress={() => setModalVisible(false)}>
          <View
            style={{
              backgroundColor: COLORS.white,
              position: 'absolute',
              right: 20,
              top: 60,
              borderRadius: 5,
              justifyContent: 'space-around',
              paddingLeft: 20,
              paddingRight: 25,
              paddingVertical: 10,
            }}>
            {props.active && (
              <TouchableOpacity onPress={EditHandler} style={styles.btn}>
                <Text>Edit Pact</Text>
              </TouchableOpacity>
            )}
            {props.active && (
              <TouchableOpacity onPress={CloseHandler} style={styles.btn}>
                <Text>Close Pact</Text>
              </TouchableOpacity>
            )}
            {props.social && (
              <TouchableOpacity onPress={SocialHandler} style={styles.btn}>
                <Text>Report Pact</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default BackEditHeader;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 25,
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_title: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: 18,
    marginLeft: 5,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  btn: {
    marginVertical: 5,
  },
});
