import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.nome = this.store.select(state => state.user.nome);
  }

  ngOnInit() {
  }

}
