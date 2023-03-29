import {makeAutoObservable, runInAction} from 'mobx';

export default class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  validationCode: string = '';
  confirm: any = null;

  // setValidationCode = (code: string) => {
  //   runInAction(() => {
  //     this.validationCode = code;
  //   });
  // };

  setConfirm = (conform: any) => {
    this.confirm = conform;
  };
}
