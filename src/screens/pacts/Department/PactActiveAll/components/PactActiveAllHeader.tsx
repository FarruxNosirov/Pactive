import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Imagebacground from '../../../../../components/Imagebacground';
import CircularProgress from '../../../../../components/CircularProgress';
import Text from '../../../../../constants/Text';
import {COLORS} from '../../../../../constants/Colors';
import DatePicker from 'react-native-date-picker';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontBold} from '../../../../../constants/Fonts';
import ShareModal from './ShareModal';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Data = [
  {
    id: 1,
    name: '',
  },
  {
    id: 2,
    name: '',
  },
  {
    id: 3,
    name: '',
  },
  {
    id: 4,
    name: '',
  },
];
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const PactActiveAllHeader = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());

  const [index, setIndex] = useState(0);
  const isCorusel = useRef<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.topBox}>
      <Imagebacground
        imageUrl={require('../../../../../assets/images/heroImages/walking-hero.jpg')}
        width={'100%'}
        height={height / 2}
      />
      <View style={{position: 'absolute', width: '100%'}}>
        <View style={styles.title_box}>
          <Text style={styles.title}>Trinerovka</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setOpenDate(true)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: COLORS.white}}>Today</Text>
                <IconMaterial
                  name="calendar"
                  style={{color: '#fff', fontSize: 20}}
                />
              </View>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <IconMaterial
                name="share-variant"
                style={{color: '#fff', fontSize: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Carousel
            ref={isCorusel}
            data={Data}
            renderItem={() => (
              <CircularProgress
                value={'0'}
                percentageFill={''}
                label={'Metres'}
                cumulativeLabel={'1 Member'}
                target={'of 500'}
                percent={0}
              />
            )}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setIndex(index)}
            keyExtractor={(_, index) => index.toString()}
            firstItem={0}
            enableMomentum={true}
            removeClippedSubviews={false}
            // loop
          />
        </View>
        <View
          style={[
            styles.sliderFooterWrapper,
            {
              marginBottom: 10,
            },
          ]}>
          {index > 0 ? (
            <TouchableOpacity
              onPress={() => isCorusel.current.snapToPrev()}
              style={{
                position: 'absolute',
                left: 20,
                top: '50%',
                marginTop: -13,
                zIndex: 3,
              }}>
              <IconEntypo
                name="chevron-thin-left"
                style={{color: 'white', fontSize: 26}}
              />
            </TouchableOpacity>
          ) : null}

          <View style={styles.sliderFooterContent}>
            <Text style={styles.sliderContentHeading}>Salom</Text>
          </View>
          {index === Data.length - 1 ? null : (
            <TouchableOpacity
              onPress={() => isCorusel.current.snapToNext()}
              style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                marginTop: -13,
                zIndex: 3,
              }}>
              <IconEntypo
                name="chevron-thin-right"
                style={{color: 'white', fontSize: 26}}
              />
            </TouchableOpacity>
          )}
        </View>
        <Pagination
          dotsLength={Data.length}
          activeDotIndex={index}
          dotStyle={[{width: 150 / Data.length}, styles.sliderPaginationDot]}
          inactiveDotStyle={styles.sliderPaginationDotInactive}
          containerStyle={styles.sliderPaginationContainer}
          dotContainerStyle={styles.sliderPaginationDotContainer}
        />
      </View>
      <ShareModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Imagebacground
              imageUrl={require('../../../../../assets/images/heroImages/walking-hero.jpg')}
            />
            <View style={styles.modalTitleBoxContainer}>
              <View style={styles.modalTitleBox}>
                <Text style={styles.modalTitle}>Trinerovka</Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  padding: 5,
                  minHeight: 30,
                }}>
                <Image
                  source={require('../../../../../assets/images/allImage/logo_ico.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
            </View>
          </View>
          <View style={{backgroundColor: COLORS.white, width: '100%'}}>
            <Text style={styles.imageShareReady}>Ready to Share...</Text>
            <View style={styles.shareImageOptionsRow}>
              <TouchableOpacity style={styles.shareButton}>
                <MaterialIcon
                  name="share-variant"
                  style={{color: '#fff', fontSize: 16, marginRight: 5}}
                />
                <Text style={styles.shareButtonText}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalCloseButton}>
                <Text style={styles.modalCloseButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ShareModal>
    </View>
  );
};

export default PactActiveAllHeader;

const styles = StyleSheet.create({
  topBox: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  title_box: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    color: COLORS.white,
    marginBottom: 20,
    marginTop: 40,
  },
  sliderFooterWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  sliderFooterContent: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  sliderContentHeading: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 22,
    fontFamily: fontBold,
  },
  sliderPaginationContainer: {
    paddingTop: 8,
    paddingBottom: 4,
    flex: 1,
  },
  sliderPaginationDotContainer: {
    marginHorizontal: 2,
  },
  sliderPaginationDot: {
    height: 3,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  sliderPaginationDotInactive: {
    marginHorizontal: 1,
  },
  modal: {
    width: '100%',
    height: 320,
  },
  modalTitleBoxContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  modalTitleBox: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  modalContainer: {
    width: '100%',
    height: 400,
    position: 'relative',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  modalTitle: {
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalFooter: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 80,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.pactiveHeaderColor,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imageShareReady: {
    alignSelf: 'center',
    color: COLORS.textColor,
    paddingTop: 10,
  },
  shareImageOptionsRow: {
    flexDirection: 'row',
    padding: 10,
  },
  shareButton: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: COLORS.pactiveGreen,
    borderRadius: 5,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.pactiveGreen,
    marginRight: 10,
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  modalCloseButton: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#d3d3d3',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
