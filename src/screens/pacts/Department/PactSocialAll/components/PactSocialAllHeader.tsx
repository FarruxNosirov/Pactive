import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Imagebacground from '../../../../../components/Imagebacground';
import DefaultButton from '../../../../../components/DefaultButton/DefaultButton';
import {COLORS} from '../../../../../constants/Colors';

const height = Dimensions.get('window').height;
// const DynamicHeader = ({animHeaderValue}) => {
//   return null;
// };
type propsType = {
  about?: boolean;
  info?: boolean;
};
const PactSocialAllHeader = (props: propsType) => {
  return (
    <>
      {props.info && (
        <View style={styles.container}>
          <View style={styles.header}>
            <Imagebacground
              width={'100%'}
              height={'100%'}
              imageUrl={require('../../../../../assets/images/heroImages/cycling-hero.png')}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.body_header}>
              <View style={styles.body_header_one}>
                <Image
                  style={styles.body_header_one_image}
                  source={require('../../../../../assets/images/allImage/logo_ico.png')}
                />
              </View>
              <View style={styles.body_header_two}>
                <Text style={styles.body_header_two_text}>
                  Alxheimer's Society - Memory Walk
                </Text>
              </View>
            </View>
            <View style={styles.body_footer}>
              <DefaultButton title="I want to join" />
              <TouchableOpacity style={styles.body_footer_btn}>
                <Text style={styles.body_footer_btn_text}>
                  Reject Invitation
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {props.about && (
        <View style={styles.container}>
          <View style={styles.header}>
            <Imagebacground
              width={'100%'}
              height={'100%'}
              imageUrl={require('../../../../../assets/images/heroImages/drinking-hero.png')}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.body_header}>
              <View style={styles.body_header_one}>
                <Image
                  style={styles.body_header_one_image}
                  source={require('../../../../../assets/images/allImage/logo_ico.png')}
                />
              </View>
              <View style={styles.body_header_two}>
                <Text style={styles.body_header_two_text}>
                  Alxheimer's Society - Memory Walk
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default PactSocialAllHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 1.8,
    position: 'relative',
  },
  header: {
    position: 'relative',
  },
  body: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  body_header: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  body_header_one: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.white,
    alignItems: 'center',
  },
  body_header_one_image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  body_header_two: {
    marginTop: 10,
  },
  body_header_two_text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  body_footer: {
    alignItems: 'center',
  },
  body_footer_btn: {
    marginBottom: 20,
  },
  body_footer_btn_text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
