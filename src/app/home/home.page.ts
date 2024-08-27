import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(){
    this.getPaises();
  }

  getPaises(){
    fetch('https://restcountries.com/v3.1/all?fields=cnn3,flags,name')
    .then(dados => dados.json())
    .then(dados => {console.log(dados)})
    .catch(erro => {console.log(erro)})
    .finally(() => {console.log('processo finalizado')})
  }


}
