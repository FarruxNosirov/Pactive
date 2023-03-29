import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {Switch} from 'react-native-switch';
import ButtomHeght from '../../../components/BottomHeight';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import {COLORS} from '../../../constants/Colors';
import {styles} from './style';

import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageEdit from '../../../components/ImageEdit';
import Imagebacground from '../../../components/Imagebacground';
import GoBacknavbar from '../../../components/gobacknavbar/goBacknavbar';
import {AllRoutes} from '../../../routes/AllRoutes';

const data = [
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

const Register = (props: any) => {
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());
  const [url, setUrl] = useState<any>('');
  const [state, setState] = useState<any>({
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

  const changePhoto = async () => {
    await launchImageLibrary({mediaType: 'photo'}, ({assets}: any) => {
      if (assets) {
        setUrl(assets[0].uri);
        setState({
          ...state,
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
        backgroundColor="#9999A9"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.heroHeaderWrapper]}>
            <Imagebacground
              width={'100%'}
              height={220}
              imageUrl={require('../../../assets/images/heroImages/home-hero-small.png')}
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
            <View style={styles.textInputContainer}>
              <Text style={styles.inputLabel}>FIRST NAME</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={e => onStateChange(e, 'firstname')}
                value={state.firstname}
              />
              {state.firstname.length <= 0 ? (
                <Text style={styles.inputError}>You must enter a name</Text>
              ) : null}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.inputLabel}>SURNAME</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={e => onStateChange(e, 'surname')}
                value={state.surname}
              />
              {state.surname.length <= 0 ? (
                <Text style={styles.inputError}>
                  You must enter a family name
                </Text>
              ) : null}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.inputLabel}>DISPLAY NAME</Text>
              <TextInput
                style={styles.inputField}
                value={state.displayname}
                onChangeText={e => onStateChange(e, 'displayname')}
              />
              {state.displayname.length <= 0 ? (
                <Text style={styles.inputError}>
                  Display Name is required for social message feeds.
                </Text>
              ) : null}
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.inputLabel}>EMAIL</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={e => onStateChange(e, 'email')}
                value={state.email}
              />
              {state.email.length <= 0 ? (
                <Text style={styles.inputError}>
                  You must enter a valid email addresss
                </Text>
              ) : null}
            </View>
            {/* DATE OF BIRTH */}
            <View style={styles.textInputContainer}>
              <Text style={styles.inputLabel}>DATE OF BIRTH</Text>
              <DatePicker
                modal
                mode="date"
                open={openDate}
                date={date}
                onConfirm={date => {
                  setOpenDate(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpenDate(false);
                }}
              />
              <TextInput
                style={styles.inputField}
                onPressIn={() => setOpenDate(true)}
                value={date.toISOString().split('T')[0]}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            {/* GENDER */}
            <View style={{marginBottom: 30, marginTop: 30}}>
              <Text style={styles.inputLabel}>GENDER</Text>
              <View style={styles.radioBtn}>
                {data.map((item, index) => {
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
                          <View
                            style={styles.radioRadioGroupItemIndicatorDot}
                          />
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
            <DefaultButton
              title="Save Profile"
              onPress={() =>
                navigation.navigate(AllRoutes.BottomStacks as never)
              }
            />
          </View>
          <ButtomHeght height={30} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
