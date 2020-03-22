import { __decorate } from "tslib";
import { CadastroService } from './cadastro.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
let CadastroModule = class CadastroModule {
};
CadastroModule = __decorate([
    NgModule({
        declarations: [CadastroComponent, FormCadastroComponent],
        imports: [
            CommonModule,
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatButtonModule
        ],
        exports: [CadastroComponent],
        providers: [CadastroService]
    })
], CadastroModule);
export { CadastroModule };
//# sourceMappingURL=cadastro.module.js.map