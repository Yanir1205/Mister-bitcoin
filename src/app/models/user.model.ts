import TransactionModel from './transaction.model';

export default class UserModel {

    constructor(public name: string, public coins: number, public moves: TransactionModel[]) {

    }

}