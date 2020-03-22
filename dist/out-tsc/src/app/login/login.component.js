import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor() {
        this.hide = true;
    }
    ngOnInit() {
    }
    inputFocused(event) {
        if (event.getModifierState && event.getModifierState('CapsLock')) {
            this.capsOn = true;
        }
        else {
            this.capsOn = false;
        }
    }
    inputUnfocused() {
        this.capsOn = false;
    }
    keyupCheck(event) {
        if (event.getModifierState && event.getModifierState('CapsLock')) {
            this.capsOn = true;
        }
        else {
            this.capsOn = false;
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map