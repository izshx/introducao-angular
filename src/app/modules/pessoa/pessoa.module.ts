import { NgModule } from '@angular/core';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaService } from './pessoa.service';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        CadPessoaComponent,
        ListaPessoaComponent
    ],
    imports: [
        PessoaRoutingModule,
        SharedModule
        
    ],
    exports: [],
    providers: [
        PessoaService
    ],
})
export class PessoaModule { }