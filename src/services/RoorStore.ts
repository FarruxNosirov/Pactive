import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import AuthStore from './all-store/AuthStore';

export class AppRootStore {
  auth: AuthStore;
  constructor() {
    makeAutoObservable(this);
    this.auth = new AuthStore();
  }
}
const rootStore = new AppRootStore();
export default createContext(rootStore);
