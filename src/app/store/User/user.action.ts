import { Action } from '@ngrx/store';

export const UserActionsTypes = {
    CHANGE_NAME_ACTION: '[USER] -Change name-',
};


export class ChangeName implements Action {
    type = UserActionsTypes.CHANGE_NAME_ACTION;
    constructor(public payload: any) { }
}


export type UserActions =
    | ChangeName