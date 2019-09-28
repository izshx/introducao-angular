import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BotaoExclusaoComponent } from './components/botao-exclusao/botao-exclusao.component';

@NgModule({
    declarations: [
        BotaoExclusaoComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BotaoExclusaoComponent
    ]
})
export class SharedModule {

}