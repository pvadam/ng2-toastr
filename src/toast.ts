import {Injectable, ComponentRef, ElementRef, DynamicComponentLoader, ApplicationRef,
  Inject, Optional, Injector, provide} from 'angular2/core';
import {ToastContainer} from './toast-container.component';
import {ToastOptions} from './toast-options';

export class Toast {
  id: number;
  constructor(public type: string,
              public message: string,
              public title?: string) {

  }
}

@Injectable()
export class ToastsManager {
  container: ComponentRef;
  private options = {
    autoDismiss: true,
    toastLife: 3000,
  };
  private index = 0;

  constructor(private loader: DynamicComponentLoader,
              private appRef: ApplicationRef,
              @Optional() @Inject(ToastOptions) options) {
    if (options) {
      Object.assign(this.options, options);
    }
  }

  show(toast: Toast) {
    if (!this.container) {
      // a hack to get app element in shadow dom
      let appElement: ElementRef = this.appRef._rootComponents[0].location;

      let bindings = Injector.resolve([provide(ToastOptions, {useValue: <ToastOptions>this.options})]);

      this.loader.loadNextToLocation(ToastContainer, appElement, bindings)
        .then((ref) => {
          this.container = ref;
          this.setupToast(toast);
        });
    } else {
      this.setupToast(toast);
    }
  }

  createTimeout(toastId: number) {
    setTimeout(() => {
      this.clearToast(toastId);
    }, this.options.toastLife);
  }

  setupToast(toast: Toast) {
    toast.id = ++this.index;
    this.container.instance.addToast(toast);
    if (this.options.autoDismiss) {
      this.createTimeout(toast.id);
    }
  }

  clearToast(toastId: number) {
    if (this.container) {
      let instance = this.container.instance;
      instance.removeToast(toastId);
      if (!instance.anyToast()) {
        this.dispose();
      }
    }
  }

  dispose() {
    this.container.dispose();
    this.container = null;
  }

  error(message, title) {
    let toast = new Toast('error', message, title);
    this.show(toast);
  }

  info(message, title) {
    let toast = new Toast('info', message, title);
    this.show(toast);
  }

  success(message, title) {
    let toast = new Toast('success', message, title);
    this.show(toast);
  }

  warning(message, title) {
    let toast = new Toast('warning', message, title);
    this.show(toast);
  }
}
