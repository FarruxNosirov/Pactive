import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/Colors';
import {PlusIcon} from '../../../../assets/icons/iconst';
import NavigationService from '../../../../navigation/NavigationScren';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const CreatePactBtn = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: COLORS.pactiveLightGray,
        alignItems: 'center',
      }}>
      <Text
        style={{
          width: Dimensions.get('window').width - 170,
          paddingRight: 10,
          paddingVertical: 20,
          fontWeight: 'bold',
        }}>
        Set yourself a new goal and achieve it with others!
      </Text>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => NavigationService.navigate('CreatePactScreen')}>
        <View
          style={{
            backgroundColor: COLORS.pactiveGreen,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
            paddingLeft: 5,
          }}>
          <IconAntDesign name="plus" size={22} color={COLORS.white} />
          <Text style={styles.text}>Create Pact</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePactBtn;

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },
});
