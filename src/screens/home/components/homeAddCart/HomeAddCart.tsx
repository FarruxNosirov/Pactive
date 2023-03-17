import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialShare from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../../constants/Colors';
import Text from '../../../../constants/Text';
const HomeAddCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.oneBox}>
        <TouchableOpacity style={styles.addPerson}>
          <MaterialIcon
            name="account-multiple-plus"
            style={{color: COLORS.activeTabTextColor}}
            size={24}
          />
        </TouchableOpacity>
        <View style={styles.description}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            necessitatibus!
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.share}>
        <MaterialShare
          name="share"
          style={{color: COLORS.activeTabTextColor}}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeAddCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.pactiveBlue,
    backgroundColor: COLORS.pactiveLightGray,
    marginVertical: 10,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  oneBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    borderWidth: 1,
  },
  addPerson: {},
  share: {},
  description: {
    paddingLeft: 10,
  },
});
