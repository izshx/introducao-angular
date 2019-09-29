import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';

const routes: Routes = [
    { path: '', redirectTo: 'lista-pessoa', pathMatch: 'full' },
    { path: 'lista-pessoa', component: ListaPessoaComponent },
    { path: 'cad-pessoa', component: CadPessoaComponent },
    { path: 'cad-pessoa/:id', component: CadPessoaComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PessoaRoutingModule { }