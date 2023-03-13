import React from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import BottomHeight from '../../components/BottomHeight';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Imagebacground from '../../components/Imagebacground';
import {COLORS} from '../../constants/Colors';
import {fontNormal} from '../../constants/Fonts';

import HelpCart from './components/HelpCart';
import {HelpData} from './components/DataHelp';
import Text from '../../constants/Text';
const Data = [
  {
    id: 0,
    name: 'salom',
  },
];
const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Imagebacground
            title="Help"
            imageUrl={require('../../assets/images/heroImages/help-hero.png')}
            width={'100%'}
            height={200}
          />
        }
        showsVerticalScrollIndicator={false}
        data={HelpData}
        renderItem={({item}) => (
          <HelpCart title={item?.title} content={item.content} />
        )}
        ListFooterComponent={
          <>
            <View style={{paddingTop: 20, marginHorizontal: 20}}>
              <View style={styles.helpTextWrapper}>
                <Text style={styles.helpText}>
                  Still can't find what you're looking for?
                </Text>
                <Text style={styles.helpText}>
                  Send us a message with your query.
                </Text>
              </View>

              <TextInput multiline={true} style={styles.textArea} />
              <View style={{marginTop: 20, paddingHorizontal: 80}}>
                <DefaultButton title="send" />
              </View>
            </View>
            <View style={{paddingTop: 20}}>
              <Text style={styles.appVersion}>App version: - build</Text>
            </View>
            <BottomHeight height={50} />
          </>
        }
      />
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  helpTextWrapper: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  helpText: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
  },
  appVersion: {
    paddingBottom: 28,
    opacity: 0.8,
    textAlign: 'center',
  },
  paragraph: {
    marginTop: 8,
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    lineHeight: 20,
    flexDirection: 'row',
    marginBottom: 4,
  },
  listItemIcon: {},
  link: {
    color: '#1A16A1',
    textDecorationLine: 'underline',
  },
  textArea: {
    width: '100%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: COLORS.gray,
    fontFamily: fontNormal,
    padding: 10,
  },
});
