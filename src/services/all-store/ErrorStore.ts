import {makeAutoObservable} from 'mobx';
const SIGN_IN_ERROR_MESSAGE = 'Unable to sign in, please try again';
export default class ErrorStore {
  errorText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  showError = (text: string): void => {
    this.errorText = text;
  };

  friendlyErrorMessage = (error: any) => {
    let message = SIGN_IN_ERROR_MESSAGE;

    switch (error.code) {
      case 'auth/captcha-check-failed':
        break;
      case 'auth/invalid-phone-number':
        message = 'Please enter a valid phone number';
        break;
      case 'auth/missing-phone-number':
        message = 'Please enter a phone number';
        break;
      case 'auth/quota-exceeded':
        break;
      case 'auth/user-disabled':
        break;
      case 'auth/invalid-verification-code':
        message = 'Please enter the PIN number we texted to you';
        break;
    }

    this.showError(message);
  };

  hideError = (): void => {
    this.errorText = '';
  };

  get isError(): boolean {
    return !!this.errorText;
  }
}
