import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-botao-edicao',
    templateUrl: './botao-edicao.component.html',
    styleUrls: ['./botao-edicao.component.css']
})
export class BotaoEdicaoComponent implements OnInit {
    @Output() editar = new EventEmitter();

    ngOnInit(): void {

    }

}