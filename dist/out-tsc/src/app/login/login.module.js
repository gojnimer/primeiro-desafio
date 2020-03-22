import { __decorate } from "tslib";
import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        imports: [
            CommonModule,
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatButtonModule,
            MatIconModule
        ],
        exports: [LoginComponent],
        providers: [LoginService]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map