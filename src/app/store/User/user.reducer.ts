import { UserState } from './user.state';
import { UserActions, UserActionsTypes } from './user.action';

export const appInitialState: UserState = {
    nome: 'Carlos Eduardo',
    sobrenome: 'Monteiro de Andrade'
};


export function userReducer(state = appInitialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionsTypes.CHANGE_NAME_ACTION: {
            return Object.assign(state, {
                ...state,
                nome: action.payload
            });
        }

        default: {
            return state;
        }
    }
}