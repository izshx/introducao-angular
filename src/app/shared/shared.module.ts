import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BotaoExclusaoComponent } from './components/botao-exclusao/botao-exclusao.component';
import { BotaoEdicaoComponent } from './components/botao-edicao/botao-edicao.component';

@NgModule({
    declarations: [
        BotaoExclusaoComponent,
        BotaoEdicaoComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BotaoExclusaoComponent,
        BotaoEdicaoComponent
    ]
})
export class SharedModule {

}