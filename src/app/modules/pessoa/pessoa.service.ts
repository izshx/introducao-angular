import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class PessoaService {
    constructor(private httpClient: HttpClient) { }

    obterPessoas(): Observable<Pessoa[]> {
        return this.httpClient.get<Pessoa[]>('http://localhost:8000/api/pessoas');
    }
    obterPessoaPorId(id: number): Observable<Pessoa> {
        return this.httpClient.get<Pessoa>('http://localhost:8000/api/pessoas/'+id);
    }

    inserirPessoa(pessoa: Pessoa) {
        return this.httpClient.post('http://localhost:8000/api/pessoas', pessoa);
    }

    excluirPessoa(id: number) {
        return this.httpClient.delete('http://localhost:8000/api/pessoas/'+id);
    }
}