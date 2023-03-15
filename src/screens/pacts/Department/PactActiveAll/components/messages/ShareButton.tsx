import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native';

import Share from 'react-native-share';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../../../../constants/Text';
import {COLORS} from '../../../../../../constants/Colors';
import {fontBold} from '../../../../../../constants/Fonts';

const styles = StyleSheet.create({
  bigShareButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 10,
    right: 20,
  },
  smallShareButton: {
    height: 20,
    flexDirection: 'row',
    width: 60,
    paddingTop: 5,
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
    fontFamily: fontBold,
    lineHeight: 20,
    textAlign: 'center',
  },
  buttonPrimaryIcon: {
    paddingRight: 15,
    color: '#fff',
    fontSize: 20,
  },
});

function fileShareOptions(url: any, title: string, message: string) {
  const options = Platform.select({
    ios: {
      activityItemSources: [
        {
          placeholderItem: {type: 'url', content: url},
          item: {
            default: {type: 'url', content: url},
          },
          subject: {
            default: title,
          },
          linkMetadata: {originalUrl: url, url, title},
        },
        {
          placeholderItem: {type: 'text', content: message},
          item: {
            default: {type: 'text', content: message},
            message: message, // Specify no text to share via Messages app.
          },
        },
      ],
    },
    default: {
      title,
      subject: title,
      message: `${message} ${url}`,
    },
  });

  return options;
}

function messageShareOptions(url: any, title: string, message: any) {
  const options = Platform.select({
    ios: {
      activityItemSources: [
        {
          placeholderItem: {type: 'text', content: message},
          item: {
            default: {type: 'text', content: message},
            message: null, // Specify no text to share via Messages app.
          },
          linkMetadata: {
            // For showing app icon on share preview.
            title: message,
          },
        },
      ],
    },
    default: {
      title,
      subject: title,
      message: `${message} ${url}`,
    },
  });

  return options;
}

function createOptions(props: {
  uri: any;
  user: {profile: {displayName: string}};
  pactName: string;
  message: any;
}) {
  const title = '';
  let options = null;

  if (props.uri) {
    const message =
      props.user.profile.displayName + ' has posted this in ' + props.pactName;
    options = fileShareOptions(props.uri, title, message);
  } else {
    options = messageShareOptions(props.uri, title, props.message);
  }
  return options;
}

export function BigShareButton(props: {
  uri: any;
  user: {profile: {displayName: string}};
  pactName: string;
  message: any;
}) {
  const options: any = createOptions(props);

  return (
    <View style={styles.bigShareButton}>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => {
          Share.open(options);
        }}>
        <IconMaterial name="share-variant" style={styles.buttonPrimaryIcon} />
        <Text style={styles.buttonPrimaryLabel}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

export function SmallShareButton(props: any) {
  const options: any = createOptions(props);
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.imageUrl) {
          props.openShareImageModal(props.imageUrl);
        } else {
          Share.open(options);
        }
      }}>
      <View>
        <IconMaterial
          name="share-variant"
          style={{
            padding: 10,
            fontSize: 24,
            color: props.inBubble ? COLORS.pactiveBlue : COLORS.pactiveBlue,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
