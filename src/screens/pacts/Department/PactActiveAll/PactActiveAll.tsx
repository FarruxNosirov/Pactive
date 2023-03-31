import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import BackEditHeader from '../../../../components/BackEditHeader';
import BottomHeight from '../../../../components/BottomHeight';
import {COLORS} from '../../../../constants/Colors';
import Text from '../../../../constants/Text';
import NavigationService from '../../../../navigation/NavigationScren';
import PactActiveAllHeader from './components/PactActiveAllHeader';
import InfoPact from './components/infoPact/InfoPact';
import Members from './components/members/Members';
import Messages from './components/messages/Messages';

const PactActiveAll = () => {
  const [active, setActive] = useState({
    info: true,
    messages: false,
    members: false,
  });

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <BackEditHeader
        backgroundColor={COLORS.fixedHeaderBg}
        name="Back"
        onBackPress={() => NavigationService.goBack()}
        active={true}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={active.messages ? false : true}>
        {!active.messages ? <PactActiveAllHeader /> : null}

        <View style={styles.topBar}>
          <TouchableOpacity
            style={[active.info ? styles.btnActive : styles.btn]}
            onPress={() =>
              setActive({
                ...active,
                info: true,
                messages: false,
                members: false,
              })
            }>
            <Text style={[active.info ? styles.textActive : styles.text]}>
              Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              setActive({
                ...active,
                messages: true,
                info: false,
                members: false,
              })
            }>
            <Text style={[active.messages ? styles.textActive : styles.text]}>
              Messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              setActive({
                ...active,
                members: true,
                info: false,
                messages: false,
              })
            }>
            <Text style={[active.members ? styles.textActive : styles.text]}>
              Members
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {active.info && <InfoPact />}
          {active.messages && <Messages />}
          {active.members && <Members />}
        </View>
        <BottomHeight height={40} />
      </ScrollView>
    </View>
  );
};

export default PactActiveAll;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: COLORS.pactiveHeaderColor,
  },
  btn: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.activeTabTextColor,
  },
  text: {
    color: COLORS.white,
    fontSize: 17,
    textTransform: 'uppercase',
  },
  textActive: {
    color: COLORS.activeTabTextColor,
    fontSize: 17,
    textTransform: 'uppercase',
  },
  body: {
    width: '100%',
    paddingTop: 30,
    backgroundColor: COLORS.white,
    minHeight: '100%',
  },
});
