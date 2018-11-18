import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-itens',
  templateUrl: './listagem-itens.component.html',
  styleUrls: ['./listagem-itens.component.scss']
})
export class ListagemItensComponent implements OnInit {

  public itens: any = [];

  constructor() { }

  ngOnInit() {
    this.preencherItens();
  }

  private preencherItens() {
    this.itens = [
      {
        valor: 100,
        nome: 'xxxxx',
        adicionado: false
      },
      {
        valor: 100,
        nome: 'xxxxx',
        adicionado: false
      }
    ];
  }

  public alterarStatusItem(i) {
    this.itens[i].adicionado = !this.itens[i].adicionado;
  }

}
