import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-cad-pessoa',
    templateUrl: './cad-pessoa.component.html',
    styleUrls: ['./cad-pessoa.component.css']
})
export class CadPessoaComponent implements OnInit {

    public cadForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private pessoaService: PessoaService,
        private _snackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        this.cadForm = this.formBuilder.group({
            nome: [''],
            idade: [''],
            profissao: ['']
        });
    }

    confirmar() {
        console.log(this.cadForm.value.nome);
        console.log(this.cadForm.value.idade);
        console.log(this.cadForm.value.profissao);
        let novaPessoa: Pessoa = {
            nome: this.cadForm.value.nome,
            idade: this.cadForm.value.idade,
            profissao: this.cadForm.value.profissao
        }

        this.pessoaService.inserirPessoa(novaPessoa).subscribe(r => {
            console.log(r);
            this.abrirSnackBar('Pessoa cadastrada com sucesso!');
            
        });
    }

    abrirSnackBar(message: string) {
        this._snackBar.open(message, null, {
            duration: 3000,
            verticalPosition: "top"
        });
    }

}