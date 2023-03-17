import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../constants/Colors';

import HexagonTrackPage from '../../../components/HexagonTrackPage';
import Counter from '../../../components/Counter';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TrackElements = () => {
  const [addValue, setAdValue] = useState(0);
  return (
    <View style={styles.trackComponentOuterContainer}>
      <View style={styles.trackComponentHeading}>
        <HexagonTrackPage activity={'WALKING'} />
        <Text style={styles.activityText}>Walking</Text>
      </View>
      <View style={styles.trackComponentContainer}>
        <View style={styles.trackComponentMetricContainer}>
          <TouchableOpacity style={styles.trackComponentMetric}>
            <Text style={styles.trackComponentMetricName}>Metres</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trackComponentContentsContainer}>
          <View style={styles.automaticallyLabel}>
            <Text style={styles.automaticallyLabelText}>
              Tracked Automatically
            </Text>
          </View>
          <Counter
            updateBtn={true}
            btnValue={250}
            valueName={'metres'}
            btnTextStyle={{color: COLORS.pactiveGray}}
            setAdValue={setAdValue}
            addValue={addValue}
          />
        </View>
        <View style={styles.percent}>
          <View style={styles.percent_content}>
            <Text style={styles.percent_title}>Trinerovka</Text>
            <View style={styles.percent_content_value}>
              <View style={styles.percent_one_value}>
                <Text style={{fontSize: 13, color: COLORS.black}}>250</Text>
              </View>
              <View>
                <Text style={{fontSize: 13, color: COLORS.black}}>250 m</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackElements;

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D5D7',
  },
  trackButtonContainer: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  trackButton: {
    justifyContent: 'center',
    backgroundColor: COLORS.pactiveLightGray,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    height: 'auto',
    flexWrap: 'wrap',
    minWidth: SCREEN_WIDTH / 4,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  incrementButton: {
    borderColor: COLORS.fixedHeaderBg,
  },
  trackButtonText: {
    fontSize: 15,
    fontWeight: '900',

    color: '#ffffff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  incrementButtonText: {
    color: COLORS.fixedHeaderBg,
  },
  updateButton: {
    borderColor: COLORS.pactiveGreen,
    backgroundColor: COLORS.pactiveGreen,
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftButtonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  metricValueLabelContainer: {
    marginLeft: 2,
  },
  trackInputFieldInput: {
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.textColor,
    fontSize: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.pactiveGreen,
  },

  button: {
    minWidth: 70,
    paddingHorizontal: 10,
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
    height: 'auto',
    flexWrap: 'wrap',
  },
  buttonPrimaryLabel: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',

    lineHeight: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  trackRowWrap: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackPageTrackValue: {
    alignItems: 'center',
  },

  automaticallyLabelText: {
    fontSize: 12,

    opacity: 0.4,
  },
  automaticallyLabel: {
    marginBottom: 16,
  },
  trackComponentOuterContainer: {
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  trackComponentHeading: {
    display: 'flex',
    flexDirection: 'row',
  },
  activityText: {
    paddingLeft: 10,
    paddingBottom: 18,
    fontSize: 24,
  },
  trackComponentContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: 20,
    backgroundColor: COLORS.itemContainerColor,
    borderRadius: 6,
    marginTop: 2,
  },
  trackComponentMetricContainer: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE',
  },
  trackComponentMetric: {
    flexDirection: 'row',
    backgroundColor: '#E6E6E6',
    flex: 1,
    display: 'flex',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  trackComponentMetricName: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    fontSize: 14,
    color: '#B5B5B5',
    fontWeight: 'bold',
  },

  trackComponentContentsContainer: {
    paddingHorizontal: 10,
  },
  metricValueLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  percent: {
    width: '100%',
  },
  percent_content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  percent_content_value: {
    flexDirection: 'row',
  },
  percent_title: {
    color: COLORS.black,
    fontSize: 13,
  },
  percent_one_value: {
    borderRightWidth: 1,
    marginRight: 5,
    paddingRight: 5,
  },
});
