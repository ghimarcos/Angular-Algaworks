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
      //log mostrando no console "Adicionando" e concatenando o valor da variavel nome;
      console.log(`Adicionando ${this.nome}`);

      //Adiciona um numéro aleatório até 100
      const numero = Math.round(Math.random() * 100) ;
      //passando nome João + numero aleatório de 0 a 100
      this.nome = 'João ' + numero
    }

    //evento alterar nome que está no input do html recebendo um "event"
    alterarNome(event : any){
      //imprimindo no console oque está sendo capturado no evento
      console.log(event)
      //dentro do método event busco o target.value, que trás exatamente o valor que está sendo digitado dentro da label
      this.nome = event.target.value;
    }
}
