System.register(['angular2/core', './toast-container.component', './toast-options'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, toast_container_component_1, toast_options_1;
    var Toast, ToastsManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toast_container_component_1_1) {
                toast_container_component_1 = toast_container_component_1_1;
            },
            function (toast_options_1_1) {
                toast_options_1 = toast_options_1_1;
            }],
        execute: function() {
            Toast = (function () {
                function Toast(type, message, title) {
                    this.type = type;
                    this.message = message;
                    this.title = title;
                }
                return Toast;
            })();
            exports_1("Toast", Toast);
            ToastsManager = (function () {
                function ToastsManager(loader, appRef, options) {
                    this.loader = loader;
                    this.appRef = appRef;
                    this.options = {
                        autoDismiss: true,
                        toastLife: 3000,
                    };
                    this.index = 0;
                    if (options) {
                        Object.assign(this.options, options);
                    }
                }
                ToastsManager.prototype.show = function (toast) {
                    var _this = this;
                    if (!this.container) {
                        // a hack to get app element in shadow dom
                        var appElement = this.appRef._rootComponents[0].location;
                        var bindings = core_1.Injector.resolve([core_1.provide(toast_options_1.ToastOptions, { useValue: this.options })]);
                        this.loader.loadNextToLocation(toast_container_component_1.ToastContainer, appElement, bindings)
                            .then(function (ref) {
                            _this.container = ref;
                            _this.setupToast(toast);
                        });
                    }
                    else {
                        this.setupToast(toast);
                    }
                };
                ToastsManager.prototype.createTimeout = function (toastId) {
                    var _this = this;
                    setTimeout(function () {
                        _this.clearToast(toastId);
                    }, this.options.toastLife);
                };
                ToastsManager.prototype.setupToast = function (toast) {
                    toast.id = ++this.index;
                    this.container.instance.addToast(toast);
                    if (this.options.autoDismiss) {
                        this.createTimeout(toast.id);
                    }
                };
                ToastsManager.prototype.clearToast = function (toastId) {
                    if (this.container) {
                        var instance = this.container.instance;
                        instance.removeToast(toastId);
                        if (!instance.anyToast()) {
                            this.dispose();
                        }
                    }
                };
                ToastsManager.prototype.dispose = function () {
                    this.container.dispose();
                    this.container = null;
                };
                ToastsManager.prototype.error = function (message, title) {
                    var toast = new Toast('error', message, title);
                    this.show(toast);
                };
                ToastsManager.prototype.info = function (message, title) {
                    var toast = new Toast('info', message, title);
                    this.show(toast);
                };
                ToastsManager.prototype.success = function (message, title) {
                    var toast = new Toast('success', message, title);
                    this.show(toast);
                };
                ToastsManager.prototype.warning = function (message, title) {
                    var toast = new Toast('warning', message, title);
                    this.show(toast);
                };
                ToastsManager = __decorate([
                    core_1.Injectable(),
                    __param(2, core_1.Optional()),
                    __param(2, core_1.Inject(toast_options_1.ToastOptions)), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ApplicationRef, Object])
                ], ToastsManager);
                return ToastsManager;
            })();
            exports_1("ToastsManager", ToastsManager);
        }
    }
});
//# sourceMappingURL=toast.js.map