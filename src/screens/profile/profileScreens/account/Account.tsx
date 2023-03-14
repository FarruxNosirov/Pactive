import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Switch} from 'react-native-switch';

import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import BirthDay from '../../../../components/BirthDay';
import BottomHeight from '../../../../components/BottomHeight';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';
import ImageEdit from '../../../../components/ImageEdit';
import Imagebacground from '../../../../components/Imagebacground';
import DefaultInput from '../../../../components/defaultInput/DefaultInput';
import GoBacknavbar from '../../../../components/gobacknavbar/goBacknavbar';
import {COLORS} from '../../../../constants/Colors';

const DATA = [
  {
    id: 0,
    name: 'Famale',
  },
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Other',
  },
];

const Account = (props: any) => {
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());
  const [url, setUrl] = useState<any>('');
  const [state, setState] = useState({
    firstname: '',
    surname: '',
    displayname: '',
    email: '',
    birthday: date,
    gender: '',
    cmvalyu: '',
    ftvalyu: '',
    invalyu: '',
    kgvalyu: '',
    stvalyu: '',
    lbvalyu: '',
    photo: '',
  });

  const navigation = useNavigation();
  const [openDate, setOpenDate] = useState(false);

  const [checkBox, setCheckBox] = useState({
    active1: false,
    active2: false,
  });

  let onStateChange = (e: Event, key: any) => {
    setState({...state, [key]: e});
  };
  console.log(url);

  const changePhoto = async () => {
    await launchImageLibrary({mediaType: 'photo'}, ({assets}: any) => {
      if (assets) {
        setUrl(assets[0].uri);
        setState({
          ...state,
          //@ts-ignore
          photo: {
            name: assets[0].fileName,
            type: assets[0].type,
            uri:
              Platform.OS === 'ios'
                ? assets[0].uri.replace('file://', '')
                : assets[0].uri,
          },
        });
      }
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBacknavbar
        onPress={() => navigation.goBack()}
        name="Cancel"
        backgroundColor={COLORS.fixedHeaderBg}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.heroHeaderWrapper]}>
          <Imagebacground
            width={'100%'}
            height={220}
            imageUrl={require('../../../../assets/images/heroImages/home-hero-small.png')}
            title="Account"
            boxShadow={true}
          />
          <ImageEdit changePhoto={changePhoto} state={url} />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 30,
            flex: 1,
            marginTop: 50,
          }}>
          <DefaultInput
            title="First Name"
            error="You must enter a name"
            value={state.firstname}
            onChange={e => onStateChange(e, 'firstname')}
          />

          <DefaultInput
            title="SURNAME"
            error="You must enter a family name"
            value={state.surname}
            onChange={e => onStateChange(e, 'surname')}
          />

          <DefaultInput
            title="DISPLAY NAME"
            error=" Display Name is required for social message feeds"
            value={state.displayname}
            onChange={e => onStateChange(e, 'displayname')}
          />

          <DefaultInput
            title="EMAIL"
            error="You must enter a valid email addresss"
            value={state.email}
            onChange={e => onStateChange(e, 'email')}
          />
          {/* DATE OF BIRTH */}

          <BirthDay
            date={date}
            setOpenDate={setOpenDate}
            openDate={openDate}
            setDate={setDate}
          />

          {/* GENDER */}
          <View style={{marginBottom: 30, marginTop: 30}}>
            <Text style={styles.inputLabel}>GENDER</Text>
            <View style={styles.radioBtn}>
              {DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.radioRadioGroupItem}
                    onPress={() => {
                      setGender(item.name);
                      setState({...state, gender: item.name});
                    }}>
                    <View style={styles.radioRadioGroupItemIndicator}>
                      {gender === item.name ? (
                        <View style={styles.radioRadioGroupItemIndicatorDot} />
                      ) : null}
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.textColor,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {/* YOUR HEIGHT */}
          <View>
            <View>
              <Text style={styles.inputLabel}>YOUR HEIGHT</Text>
              <View style={styles.switchWrapper}>
                <Text style={styles.switchLabelLeft}>ft'in</Text>
                <Switch
                  value={checkBox.active1}
                  onValueChange={() =>
                    setCheckBox({...checkBox, active1: !checkBox.active1})
                  }
                  activeText={''}
                  inActiveText={''}
                  circleSize={30}
                  barHeight={20}
                  circleBorderWidth={0}
                  backgroundActive={'#CDCDCD'}
                  backgroundInactive={'#CDCDCD'}
                  circleActiveColor={'#16E9A3'}
                  circleInActiveColor={'#16E9A3'}
                  containerStyle={{
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                  disabled={false}
                />
                <Text style={styles.switchLabelRight}>cm</Text>
              </View>
            </View>
            {checkBox.active1 ? (
              <View>
                <Text style={styles.inputLabel}>CM</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={e => onStateChange(e, 'cmvalyu')}
                  value={state.cmvalyu}
                />
              </View>
            ) : (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                  <Text style={styles.inputLabel}>FT</Text>
                  <TextInput
                    style={styles.inputField}
                    onChangeText={e => onStateChange(e, 'ftvalyu')}
                    value={state.ftvalyu}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <Text style={styles.inputLabel}>IN</Text>
                  <TextInput
                    style={styles.inputField}
                    onChangeText={e => onStateChange(e, 'invalyu')}
                    value={state.invalyu}
                  />
                </View>
              </View>
            )}
          </View>
          {/* <HeightWeight
            checkBox={undefined}
            state={undefined}
            onStateChange={()=>onStateChange('')}
          /> */}
          {/* YOUR WEIGHT */}
          <View>
            <View style={{marginTop: 20}}>
              <Text style={styles.inputLabel}>YOUR HEIGHT</Text>
              <View style={styles.switchWrapper}>
                <Text style={styles.switchLabelLeft}>st'lb</Text>
                <Switch
                  value={checkBox.active2}
                  onValueChange={() =>
                    setCheckBox({...checkBox, active2: !checkBox.active2})
                  }
                  activeText={''}
                  inActiveText={''}
                  circleSize={30}
                  barHeight={20}
                  circleBorderWidth={0}
                  backgroundActive={'#CDCDCD'}
                  backgroundInactive={'#CDCDCD'}
                  circleActiveColor={'#16E9A3'}
                  circleInActiveColor={'#16E9A3'}
                  containerStyle={{
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                  disabled={false}
                />
                <Text style={styles.switchLabelRight}>kg</Text>
              </View>
            </View>
            {checkBox.active2 ? (
              <View>
                <Text style={styles.inputLabel}>KG</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={e => onStateChange(e, 'kgvalyu')}
                  value={state.kgvalyu}
                />
              </View>
            ) : (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                  <Text style={styles.inputLabel}>ST</Text>
                  <TextInput
                    style={styles.inputField}
                    onChangeText={e => onStateChange(e, 'stvalyu')}
                    value={state.stvalyu}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <Text style={styles.inputLabel}>LB</Text>
                  <TextInput
                    style={styles.inputField}
                    onChangeText={e => onStateChange(e, 'lbvalyu')}
                    value={state.lbvalyu}
                  />
                </View>
              </View>
            )}
          </View>
        </View>

        <View style={{width: '100%', paddingHorizontal: 20, marginTop: 30}}>
          <DefaultButton title="Save Profile" />
        </View>
        <BottomHeight height={30} />
      </ScrollView>
    </View>
  );
};

export default Account;
export const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 25,
    width: '100%',
    minHeight: 80,
    zIndex: -1,
  },
  inputLabel: {
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
  inputField: {
    color: COLORS.textColor,
    fontWeight: 'normal',
    borderBottomColor: COLORS.textColor,
    borderBottomWidth: 0.5,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    textAlignVertical: 'center',
    fontSize: 16,
    marginBottom: 5,
    zIndex: -1,
  },
  inputError: {
    color: 'red',
    margin: 0,
  },
  heroHeaderWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  heroHeaderImageWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroHeaderBackdrop: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroHeaderImageBcg: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  bgIconst: {
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -50,
  },
  heroHeaderContentHeading: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  svg_big: {
    position: 'relative',
  },
  svg: {
    position: 'relative',
    zIndex: 10,
  },
  wrapper: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  hexagonContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagonContentLabel: {
    color: '#fff',
    textAlign: 'center',
    width: '80%',
  },
  radioBtn: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  radioRadioGroupWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 10,
  },
  radioRadioGroupItem: {
    width: '33%',
    paddingVertical: 8,
    paddingRight: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioRadioGroupItemIndicator: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#16E9A3',
    width: 20,
    height: 20,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  radioRadioGroupItemIndicatorDot: {
    backgroundColor: '#16E9A3',
    width: 10,
    height: 10,
    borderRadius: 30,
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  switchLabelLeft: {
    paddingRight: 8,
    color: COLORS.textColor,

    textTransform: 'uppercase',
  },
  switchLabelRight: {
    paddingLeft: 8,
    color: COLORS.textColor,
    textTransform: 'uppercase',
  },
  edit: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    right: -15,
  },
  title: {
    position: 'absolute',
    top: 70,
  },
  account_title: {
    color: COLORS.white,
    fontSize: 30,
  },
  header: {
    backgroundColor: '#9999A9',
    paddingVertical: 14,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  header_title: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
