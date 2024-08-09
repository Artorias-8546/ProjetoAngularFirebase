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

  constructor(){ }
}
