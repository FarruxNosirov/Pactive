import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Hexagon from '../../../../../../components/Hexagon';
import {COLORS} from '../../../../../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontBold} from '../../../../../../constants/Fonts';
import DefaultButton from '../../../../../../components/DefaultButton/DefaultButton';
import NavigationService from '../../../../../../navigation/NavigationScren';

const Members = () => {
  return (
    <View style={styles.container}>
      <View style={styles.personContent}>
        <Hexagon
          size="42"
          fill={COLORS.pactiveGreen}
          icon={
            <MaterialIcon
              name="account"
              style={{color: COLORS.white}}
              size={20}
            />
          }
        />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>Orihero</Text>
          <Text style={styles.personText}>pact test</Text>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <DefaultButton
          title="Invite members"
          onPress={() => NavigationService.navigate('SelectContac')}
        />
        <DefaultButton
          title="edit targets"
          onPress={() => NavigationService.navigate('EditTarget')}
        />
      </View>
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  personContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.pactiveLightGray,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  personInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  personName: {
    fontFamily: fontBold,

    color: COLORS.pactiveGray,
    fontSize: 17,
  },
  personText: {
    fontSize: 10,
    color: COLORS.pactiveGray,
  },
});
