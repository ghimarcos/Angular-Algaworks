import { noUndefined } from '@angular/compiler/src/util';
import { Component, Input } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ultimoId = 0;
  nome = "Ana";
  adicionado = false;
  //cria um array para adicionar os elementos do *ngFor
  funcionarios = [];
  //evento adicionar que está no botão do html com metodo (click)
  adicionar() {
    console.log(`Adicionando ${this.nome}`)
    // muda o bolean para true;
    this.adicionado = true;
    //Adiona um novo elemento no array
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome : this.nome
    });
  }

}
