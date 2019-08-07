import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { ChangeName } from '../store/User/user.action';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	nome: Observable<string>;
	nomeUpdated;

	constructor(private store: Store<AppState>) {
		this.nome = this.store.select(state => state.user.nome);
	}

	ngOnInit() {

	}

	onChangeName() {
		this.store.dispatch(new ChangeName(this.nomeUpdated));
	}

}
