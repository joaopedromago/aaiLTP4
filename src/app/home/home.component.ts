import { Component, OnInit, ViewChild } from '@angular/core';
import { ListagemItensComponent } from '../shared/listagem-itens/listagem-itens.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {
    }
}
