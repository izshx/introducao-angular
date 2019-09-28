import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';

@Component({
    selector: 'app-lista-pessoa',
    templateUrl: './lista-pessoa.component.html',
    styleUrls: ['./lista-pessoa.component.css']
})

export class ListaPessoaComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'idade', 'profissao', 'criado', 'action'];
    dataSource: Pessoa[] = [];
    date = new Date('2019-02-02');


    constructor(private pessoaService: PessoaService) { }

    ngOnInit() {
        this.trazerPessoas();
    }

    excluir(element: Pessoa){
        console.log(element);
        this.pessoaService.excluirPessoa(element.id).subscribe(r => {
            console.log(r);
            this.trazerPessoas();
            
        })
                
    }

    trazerPessoas(): void {
        this.pessoaService.obterPessoas().subscribe(p => this.dataSource = p);
    }
}