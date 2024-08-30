import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  pessoa = {
    foto: 'https://professionalmoron.com/wp-content/uploads/2012/05/alpaca-985158_640.jpg',
    nome: 'Barrigudinha Seleide',
    objetivo: 'Programador HTML & CSS',
    contato: {
      telefone: '15999999999',
      email: 'seleide@hotmail',
      github: 'github.com/seleide',
      linkedin: 'linkedin.'
    }
  }

  isLoading: boolean = false;
  paises: any;

  constructor(
    private router: Router
  ){
    this.getPaisCode();
  }
  
  getPaisCode() {
    this.isLoading = true;

    fetch('https://restcountries.com/v3.1/all?fields=name,flags,ccn3')
    .then( dados => dados.json() ) // converter os dados recebidos para json
    .then((dados) => {
      console.log(dados);
      this.paises = dados;
    }) // fazer as ações desejadas com os dados
    .catch((erro) => {
      console.log(erro);
    }) // exibir mensagens de erro
    .finally(() => {
      console.log('O processo foi finalizado!');
      this.isLoading = false;
    }) // fazer alguma coisas quando finalizar tudo
  }

  verDetalhesPais(code: string){
    this.router.navigate(['/ver-detalhes-pais'],
      {
        state: { codigo: code}
      }
    );
  }

}
