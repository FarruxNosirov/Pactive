import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {MinusIcon, PlusIcon} from '../../../assets/icons/iconst';
import {COLORS} from '../../../constants/Colors';
import Text from '../../../constants/Text';

const HelpCart = ({title, content}: any) => {
  const [active, setActive] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.active}
        onPress={() => setActive(a => !a)}>
        <View style={{width: '80%'}}>
          <Text>{title}</Text>
        </View>
        {active ? (
          <PlusIcon fill={COLORS.gray} />
        ) : (
          <MinusIcon fill={COLORS.gray} />
        )}
      </TouchableOpacity>
      {active ? null : <View style={styles.noActive}>{content}</View>}
    </View>
  );
};

export default HelpCart;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  active: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  noActive: {
    paddingRight: 20,
    marginTop: 10,
  },
});
