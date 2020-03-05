import { Injectable } from '@angular/core';
import storageService from '../storage-service/storage-service.service'
import UserModel from '../../models/user.model'
import ContactModel from '../../models/contact.model'
import { BehaviorSubject } from 'rxjs';
import utilsService from '../utils-service/utils-sercice.service'
@Injectable(
  { providedIn: 'root' }
)
export class UserService {

  //mock the server - make it a private variable
  private _user: UserModel

  //private behaviorSubject array of contacts:
  private _user$ = new BehaviorSubject<UserModel>(null)

  //public observable of the privat var above
  public user$ = this._user$.asObservable()

  constructor(private storageService: storageService, private utilsService: utilsService) { }

  public signup(userName: string) {
    //this method gets a string representing a userName
    //the method will check if there is a user in the local storage
    //if there is a user in the local storage - return it
    //otherwise - set a new user with 100 coins and the userName which was entered and return it 
    let user = this.storageService.load('bitcoin-user')
    if (!user || user.name !== userName) {
      user = {}
      user.name = userName;
      user.coins = 100;
      user.moves = []
      this.storageService.saveToStorage('bitcoin-user', user)
    }
    this._user = user
    let sortedMoves = [...this._user.moves]
    sortedMoves = this.sortMoves(sortedMoves)
    this._user.moves = sortedMoves
    this._user$.next(this._user)
  }

  public addMove(contact: ContactModel, amount: number) {
    //moves an amount of coins from the current user to the given contact
    const newTransaction = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    }
    if (this._user.coins - amount >= 0 && amount !== 0) {
      this._user.coins -= amount
      this._user.moves.push(newTransaction)
      let sortedMoves = [...this._user.moves]
      sortedMoves = this.sortMoves(sortedMoves)
      this._user.moves = sortedMoves
      this.storageService.saveToStorage('bitcoin-user', this._user)
      this._user$.next(this._user)
    }
  }

  public isAuthenticated() {
    const user = this._user$.getValue()
    return (user) ? true : false;
  }

  private sortMoves(moves) {
    return moves.sort((move1, move2) => {
      if (move1.at < move2.at) return 1
      else if (move1.at > move2.at) return -1
      else return 0;
    })
  }
}
