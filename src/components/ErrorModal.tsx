import React from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import useRootStore from '../hooks/useRootStore';
import {observer} from 'mobx-react';

const ErrorModal = () => {
  const {errorText, isError, hideError} = useRootStore().error;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isError}
      onRequestClose={hideError}>
      <View style={styles.container}>
        <Text>{errorText}</Text>
        <Text>sdadasasdsa</Text>
        <Text>sdadasasdsa</Text>
        <Text>sdadasasdsa</Text>
        <Text>sdadasasdsa</Text>
        <Text>sdadasasdsa</Text>
        <Text>sdadasasdsa</Text>
        <Text>sdadasasdsa</Text>
        <Button title="close" onPress={hideError} />
      </View>
    </Modal>
  );
};

export default observer(ErrorModal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
});
