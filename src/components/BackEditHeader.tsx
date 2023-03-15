import React, {useState} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/Colors';

import IconDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Text from '../constants/Text';
import NavigationService from '../navigation/NavigationScren';
import {useNavigation} from '@react-navigation/native';
import {AllRoutes} from '../routes/AllRoutes';

type propsType = {
  onBackPress?: () => void | undefined;
  name?: string;
  backgroundColor?: string;
  position?: string;
};

const BackEditHeader = (props: propsType) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const EditHandler = () => {
    // NavigationService.navigate('EditPact');
    navigation.navigate(AllRoutes.EditPact as never);
    setModalVisible(false);
  };
  const CloseHandler = () => {
    NavigationService.navigate('ClosePact');
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <IconDesign name="ellipsis1" style={{color: '#fff', fontSize: 30}} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: 130,
            height: 80,
            position: 'absolute',
            right: 20,
            top: 60,
            borderRadius: 5,
            justifyContent: 'space-around',
            paddingLeft: 20,
          }}>
          <TouchableOpacity onPress={EditHandler}>
            <Text>Edit Pact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={CloseHandler}>
            <Text>Close Pact</Text>
          </TouchableOpacity>
        </View>
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
});
