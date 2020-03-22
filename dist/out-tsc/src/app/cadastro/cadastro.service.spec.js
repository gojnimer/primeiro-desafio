import { TestBed } from '@angular/core/testing';
import { CadastroService } from './cadastro.service';
describe('CadastroService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CadastroService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cadastro.service.spec.js.map