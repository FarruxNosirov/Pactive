import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import AuthStore from './all-store/AuthStore';
import ErrorStore from './all-store/ErrorStore';

export class AppRootStore {
  auth: AuthStore;
  error: ErrorStore;

  constructor() {
    makeAutoObservable(this);
    this.auth = new AuthStore();
    this.error = new ErrorStore();
  }
}
const rootStore = new AppRootStore();
export default createContext(rootStore);
