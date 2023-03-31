import React from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native-svg';

const ImagePerson = ({photo, clipPath}: any) => {
  return (
    <Image
      x="0"
      y="0"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      opacity={1}
      href={photo}
      key={photo}
      clipPath={clipPath}
    />
  );
};

export default ImagePerson;

const styles = StyleSheet.create({});
