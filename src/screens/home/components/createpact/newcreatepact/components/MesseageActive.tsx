import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DefaultInput from '../../../../../../components/defaultInput/DefaultInput';
import {
  ArrowBottomMarked,
  BottomArrow,
} from '../../../../../../assets/icons/iconst';
import {COLORS} from '../../../../../../constants/Colors';
type propsType = {
  title?: string;
  inputTitle?: string;
  value?: string;
  onChangeInput?: (val: string) => void;
};
const MesseageActive = (props: propsType) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.conmtainer}>
      <TouchableOpacity
        style={styles.active}
        onPress={() => setOpenModal(a => !a)}>
        <Text style={styles.title}>{props?.title}</Text>
        <View style={{position: 'absolute', right: 10}}>
          <BottomArrow fill={'#000'} />
        </View>
      </TouchableOpacity>
      {openModal ? (
        <DefaultInput
          title={props?.inputTitle}
          multiline={true}
          minHeight={80}
          value={props?.value}
          onChange={props.onChangeInput}
        />
      ) : null}
    </View>
  );
};

export default MesseageActive;

const styles = StyleSheet.create({
  conmtainer: {
    width: '100%',
    marginBottom: 30,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  active: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  title: {
    color: COLORS.activeTabTextColor,
    fontSize: 20,
  },
});
