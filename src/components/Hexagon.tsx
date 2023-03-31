// @flow

import {StyleSheet, View} from 'react-native';
import Svg, {
  ClipPath,
  Defs,
  G,
  Image,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import Text from '../constants/Text';

const width = 173.20508075688772;
const height = 200;

const ratio = width / height;
type propsType = {
  image?: string;
  size?: any;
  fill?: string;
  stroke?: any;
  children?: any;
  blank?: any;
  marginHorizontal?: any;
  gradient?: any;
  borderWidth?: number;
  opacity?: any;
  icon?: any;
  label?: string;
};
const Hexagon = (props: propsType) => {
  const {
    size,
    fill,
    stroke,
    children,
    blank,
    gradient,
    borderWidth = 5.5,
    opacity = 1,
    icon,
  } = props;
  const width = 173.20508075688772;
  const height = 200;

  const calculateScale = (size: any, border: number) => {
    return [(width - 2 * border) / width, (height - 2 * border) / height];
  };
  const relativeBorderWidth = (height / props.size) * borderWidth;
  const scale = calculateScale(props.size, relativeBorderWidth);
  return (
    <View
      style={[
        styles.wrapper,
        {
          opacity: parseFloat(opacity),
          height: parseFloat(size),
          width: parseFloat(size) * ratio,
        },
      ]}>
      <Svg
        style={styles.svg}
        height={size}
        width={size * ratio}
        viewBox={`${0} ${0} ${width} ${height}`}>
        {gradient ? (
          <Defs>
            <LinearGradient id="grad" x1="120" y1="-120" x2="250" y2="0">
              <Stop offset="0%" stopColor="#14EA70" stopOpacity="1" />
              <Stop offset="100%" stopColor="#16E9A3" stopOpacity="1" />
            </LinearGradient>
          </Defs>
        ) : null}
        <Path
          d="M77.94228634059948 4.999999999999999Q86.60254037844386 0 95.26279441628824 4.999999999999999L164.54482671904333 45Q173.20508075688772 50 173.20508075688772 60L173.20508075688772 140Q173.20508075688772 150 164.54482671904333 155L95.26279441628824 195Q86.60254037844386 200 77.94228634059948 195L8.660254037844387 155Q0 150 0 140L0 60Q0 50 8.660254037844387 45Z"
          fill={blank || (gradient ? 'url(#grad)' : fill)}
          stroke={stroke}
          strokeWidth={stroke && borderWidth}
        />
        {props.children ? (
          <G
            transform={`scale(${scale[0]} ${scale[1]}) translate(${relativeBorderWidth} ${relativeBorderWidth})`}>
            <Defs>
              <ClipPath id="clip">
                <Path d="M77.94228634059948 4.999999999999999Q86.60254037844386 0 95.26279441628824 4.999999999999999L164.54482671904333 45Q173.20508075688772 50 173.20508075688772 60L173.20508075688772 140Q173.20508075688772 150 164.54482671904333 155L95.26279441628824 195Q86.60254037844386 200 77.94228634059948 195L8.660254037844387 155Q0 150 0 140L0 60Q0 50 8.660254037844387 45Z" />
              </ClipPath>
            </Defs>
            <Image
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              opacity={1}
              clipPath="url(#clip)"
            />
          </G>
        ) : null}
      </Svg>
      <View style={styles.hexagonContent}>
        {props?.icon ? <View>{props.icon}</View> : null}
        {props.label ? (
          <Text allowFontScaling={false} style={styles.hexagonContentLabel}>
            {props?.label}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
export default Hexagon;
const styles = StyleSheet.create({
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
    marginHorizontal: 5,
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
  hexagonContentIcon: {
    color: '#fff',
  },
  hexagonContentLabel: {
    color: '#fff',
    textAlign: 'center',
    width: '80%',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
