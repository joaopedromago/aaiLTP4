import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    public itens: any = [];

    model = {
        left: true,
        middle: false,
        right: false
    };
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
            }
        ];
    }

    public alterarStatusItem(i) {
        this.itens[i].adicionado = !this.itens[i].adicionado;
    }
}
