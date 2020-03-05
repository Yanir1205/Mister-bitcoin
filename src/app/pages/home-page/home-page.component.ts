import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin-service.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  user: UserModel
  userSubscriber: Subscription;
  coinsValue: number
  coins$: Observable<number>

  constructor(private userService: UserService, private route: ActivatedRoute, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(user => {
      this.user = user
      this.coins$ = this.bitcoinService.getBitCoinRate(this.user.coins)
    })
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }

}
