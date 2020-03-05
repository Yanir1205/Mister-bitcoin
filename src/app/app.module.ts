import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component'
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './cmps/chart/chart.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BitTransferComponent } from './cmps/bit-transfer/bit-transfer.component';
import { TransactionsListComponent } from './cmps/transactions-list/transactions-list.component';
import { TransactionPreviewComponent } from './cmps/transaction-preview/transaction-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './directives/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactPageComponent,
    HomePageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    StatisticsPageComponent,
    ChartComponent,
    FilterComponent,
    SignupPageComponent,
    BitTransferComponent,
    TransactionsListComponent,
    TransactionPreviewComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
