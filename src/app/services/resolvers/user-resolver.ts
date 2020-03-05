import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import UserModel from 'src/app/models/user.model';
import { UserService } from '../user-service/user-service.service';

import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserModel> {

    constructor(private service: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
        return this.service.user$.pipe(catchError(err => {
            this.router.navigateByUrl('/error')
            return of(null)
        }))
    }
}
