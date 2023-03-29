import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {
  static async getItem(key: string) {
    try {
      let value: any = await AsyncStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } catch (e) {
      console.error('caught error', e);
      return null;
    }
  }

  static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('caught error', e);
    }
  }

  static async setItem(key: string, data: string) {
    data = typeof data == 'string' ? data : JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error('caught error', e);
    }
  }
}
