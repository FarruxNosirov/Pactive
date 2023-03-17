import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../../../constants/Colors';
import GoBacknavbar from '../../../../../components/gobacknavbar/goBacknavbar';
import NavigationService from '../../../../../navigation/NavigationScren';
import Hexagon from '../../../../../components/Hexagon';
import {PenIcon} from '../../../../../assets/icons/iconst';
import FormPactScreen from './components/FormPactScreen';
import ButtomHeght from '../../../../../components/BottomHeight';

import ActivityCart from './components/ActivityCart';
import {
  Walking,
  Running,
  Cycling,
  Meditation,
  Drinking,
  Sleeping,
  Fiveaday,
  Other,
} from '../../../../../components/HexagonOptionIcons';
import Measurement from './components/Measurement';
import {launchImageLibrary} from 'react-native-image-picker';

const DATA = [
  {
    id: '1',
    title: 'WALKING',
    Icon: Walking,
    isPress: false,
  },
  {
    id: '2',
    title: 'RUNNING',
    Icon: Running,
    isPress: false,
  },
  {
    id: '3',
    title: 'CYCLING',
    Icon: Cycling,
    isPress: false,
  },
  {
    id: '4',
    title: 'MEDITATION',
    Icon: Meditation,
    isPress: false,
  },
  {
    id: '5',
    title: 'DRINKING',
    Icon: Drinking,
    isPress: false,
  },
  {
    id: '6',
    title: 'SLEEPING',
    Icon: Sleeping,
    isPress: false,
  },
  {
    id: '7',
    title: 'FIVEADAY',
    Icon: Fiveaday,
    isPress: false,
  },
  {
    id: '8',
    title: 'OTHER',
    Icon: Other,
    isPress: false,
  },
];
const height = Dimensions.get('window').height;

const CreatePactScreen = () => {
  const [data, setData] = useState(DATA);
  const [idDate, setIdDate] = useState<any>();
  const [url, setUrl] = useState<any>('');
  const [state, setState] = useState<any>({
    firstname: '',
    email: '',
    photo: '',
  });
  const onPressActivity = (id: string) => {
    setData(oldData =>
      oldData.map(item =>
        item.id === id ? {...item, isPress: true} : {...item, isPress: false},
      ),
    );
    setIdDate(id);
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={60}>
        <GoBacknavbar
          name="Cancel"
          onPress={() => NavigationService.goBack()}
          backgroundColor="#9999A9"
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={styles.progressContainer}>
                <ImageBackground
                  source={require('../../../../../assets/images/heroImages/home-hero.jpg')}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                  }}>
                  <View style={styles.imageContent}>
                    <Text style={styles.title}>Create Pact</Text>
                    <View style={styles.imagediv}>
                      <Image
                        style={styles.image}
                        source={require('../../../../../assets/images/allImage/image-edit.png')}
                      />
                    </View>
                    <View style={styles.profileImageEditIcon}>
                      <TouchableOpacity onPress={changePhoto}>
                        <Hexagon
                          size={30}
                          fill={COLORS.pactiveBlue}
                          icon={<PenIcon fill={COLORS.white} />}
                        />
                        <Text
                          style={styles.profileImageEditIconText}
                          allowFontScaling={false}>
                          Edit image
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.heroHeaderBackdrop}></View>
                </ImageBackground>
              </View>
              <FormPactScreen />
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                }}>
                <Text style={styles.label}>Activity</Text>
              </View>
            </>
          }
          data={data}
          renderItem={({item}) => (
            <ActivityCart
              isPressed={item.isPress}
              Icon={item.Icon}
              title={item.title}
              onPress={() => onPressActivity(item.id)}
            />
          )}
          ListFooterComponent={
            <>
              <Measurement idDate={idDate} />
              <ButtomHeght height={100} />
            </>
          }
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.cardStyle}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreatePactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    height: height / 2,
    position: 'relative',
    justifyContent: 'center',
  },
  heroHeaderBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  progressContainerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 22,
    marginBottom: 20,
    flex: 1,
  },
  buttonContant: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    height: '100%',
    paddingVertical: 20,
  },
  buttonPrimary: {
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: COLORS.pactiveGreen,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
  },
  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',

    lineHeight: 20,
    textAlign: 'center',
  },
  imageContent: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 25,
    position: 'relative',
    zIndex: 10,
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
  },
  imagediv: {
    marginTop: 50,
    width: 120,
    height: 120,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileImageEditIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -15,
    zIndex: 9,
    left: 25,
  },
  profileImageEditIconText: {
    color: '#fff',
    textTransform: 'uppercase',
    paddingTop: 5,
    left: -25,
  },
  flatList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  cardStyle: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
  },
  label: {
    paddingTop: 10,
    color: COLORS.pactiveBlue,
    fontSize: 25,
  },
});
