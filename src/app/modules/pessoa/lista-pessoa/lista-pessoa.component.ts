import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lista-pessoa',
    templateUrl: './lista-pessoa.component.html',
    styleUrls: ['./lista-pessoa.component.css']
})

export class ListaPessoaComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'idade', 'profissao', 'criado', 'action'];
    dataSource: Pessoa[] = [];
    date = new Date('2019-02-02');


    constructor(private pessoaService: PessoaService,
        private router: Router) { }

    ngOnInit() {
        this.trazerPessoas();
    }

    excluir(element: Pessoa) {
        this.pessoaService.excluirPessoa(element.id).subscribe(r => {
            this.trazerPessoas();

        })

    }

    editar(element: Pessoa) {
        this.router.navigate(['pessoa/cad-pessoa/'.concat(element.id.toString())])
    }

    trazerPessoas(): void {
        this.pessoaService.obterPessoas().subscribe(p => this.dataSource = p);
    }
}