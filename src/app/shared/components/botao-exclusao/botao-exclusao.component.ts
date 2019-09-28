import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-botao-exclusao',
    templateUrl: './botao-exclusao.component.html',
    styleUrls: ['./botao-exclusao.component.css']
})
export class BotaoExclusaoComponent implements OnInit {

    @Output() excluir = new EventEmitter();

    ngOnInit(): void {
        
    }

}