import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../constants/Colors';

type propsType = {};
const Chackbox = (props: propsType) => {
  const [chack, setChack] = useState(false);
  return (
    <View
      style={{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <View style={styles.container}></View>
      <TouchableOpacity
        style={styles.btnActive}
        onPress={() => setChack(a => !a)}>
        {chack ? (
          <Icon name="check" color={COLORS.pactiveHeaderColor} size={27} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default Chackbox;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.pactiveHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    borderRadius: 5,
  },
  btnActive: {
    position: 'absolute',
    zIndex: 2,
    paddingLeft: 5,
    paddingBottom: 5,
    width: 30,
    height: 30,
  },
});
