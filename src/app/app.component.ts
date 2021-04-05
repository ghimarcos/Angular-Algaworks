import { noUndefined } from '@angular/compiler/src/util';
import { Component, Input } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nome = "Giovani";

    //evento adicionar que está no botão do html com metodo (click)
    adicionar(){
    console.log(`Adicionando ${this.nome}`)

    const numero = Math.round(Math.random() * 100)
    this.nome = 'João' + numero
    }

}
