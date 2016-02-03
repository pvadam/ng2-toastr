import {Injectable} from 'angular2/core';

@Injectable()
export class ToastOptions {
  messageClass: string;
  titleClass: string;
  positionClass: string;
  autoDismiss: boolean;
  maxShown: number;
  toastLife: number;

  constructor(options: Object) {
    Object.assign(this, options);
  }
}
