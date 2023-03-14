import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Hexagon from '../Hexagon';
import {COLORS} from '../../constants/Colors';
import {PenIcon} from '../../assets/icons/iconst';
import {launchImageLibrary} from 'react-native-image-picker';

const height = Dimensions.get('window').height;

type propsType = {
  imageBac?: any;
  title?: string;
  imageCenter?: any;
  setImage?: any;
};

const EditImageBack = (props: propsType) => {
  const [url, setUrl] = useState<any>('');
  const [state, setState] = useState<any>({
    firstname: '',
    email: '',
    photo: '',
  });
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
    <View style={styles.progressContainer}>
      <ImageBackground
        source={props?.imageBac}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        <View style={styles.imageContent}>
          <Text style={styles.title}>{props?.title}</Text>
          <View style={styles.imagediv}>
            <Image
              style={styles.image}
              source={
                props.imageCenter
                  ? props.imageCenter
                  : require('../../assets/images/allImage/image-edit.png')
              }
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
  );
};

export default EditImageBack;

const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    height: height / 2,
    position: 'relative',
    justifyContent: 'center',
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
  heroHeaderBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
  },
});
