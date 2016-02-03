System.register(['./src/toast', './src/toast-container.component', './src/toast-options'], function(exports_1) {
    var toast_1, toast_container_component_1, toast_options_1;
    var TOAST_DIRECTIVES;
    return {
        setters:[
            function (toast_1_1) {
                toast_1 = toast_1_1;
            },
            function (toast_container_component_1_1) {
                toast_container_component_1 = toast_container_component_1_1;
            },
            function (toast_options_1_1) {
                toast_options_1 = toast_options_1_1;
            }],
        execute: function() {
            exports_1("TOAST_DIRECTIVES", TOAST_DIRECTIVES = [toast_1.Toast, toast_1.ToastsManager, toast_container_component_1.ToastContainer, toast_options_1.ToastOptions]);
        }
    }
});
//# sourceMappingURL=toastr.js.map