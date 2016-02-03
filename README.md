Angular 2: Toastr
===================

The project is in progress since it's built with Angular 2 Beta. 

The lib is inspired by [angular-toastr] (https://github.com/Foxandxss/angular-toastr). 

## Usage

```javascript
    import { TOAST_DIRECTIVES } from './toastr'
    
    @Component({
      selector: 'awesome-component',
      template: '<button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>',
      providers: [ToastsManager]
    })
    export class AppComponent {
      public toastr: ToastsManager;
    
      constructor(toastr: ToastsManager) {
      }
        
      showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
      }
    
      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }
    
      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }
    
      showInfo() {
        this.toastr.info('Just some information for you.');
      }
    }
```


### Configurations

By default, the toastr will show up at top right corner

## TODOs

### Animation
No animation so far for toasts showing and disappearing. Wait until Angular 2 Animation Api is finalized.

