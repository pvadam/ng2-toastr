import { ComponentRef, DynamicComponentLoader, ApplicationRef } from 'angular2/core';
export declare class Toast {
    type: string;
    message: string;
    title: string;
    id: number;
    constructor(type: string, message: string, title?: string);
}
export declare class ToastsManager {
    private loader;
    private appRef;
    container: ComponentRef;
    private options;
    private index;
    constructor(loader: DynamicComponentLoader, appRef: ApplicationRef, options: any);
    show(toast: Toast): void;
    createTimeout(toastId: number): void;
    setupToast(toast: Toast): void;
    clearToast(toastId: number): void;
    dispose(): void;
    error(message: any, title: any): void;
    info(message: any, title: any): void;
    success(message: any, title: any): void;
    warning(message: any, title: any): void;
}
