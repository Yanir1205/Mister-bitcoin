import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class UtilsSerciceService {

  constructor() { }

  public _makeId?(length = 10) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }

}
