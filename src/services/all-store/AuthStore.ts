import {makeAutoObservable, runInAction} from 'mobx';

export default class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  validationCode: string = '';
  confirm: any = null;

  setConfirm = (conform: any) => {
    this.confirm = conform;
  };
}
