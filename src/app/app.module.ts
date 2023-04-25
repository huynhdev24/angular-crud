import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerDeleteComponent } from './owner/owner-delete/owner-delete.component';
import { OwnerDetailsComponent } from './owner/owner-details/owner-details.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerUpdateComponent } from './owner/owner-update/owner-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnerAccountsComponent } from './owner/owner-details/owner-accounts/owner-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OwnerCreateComponent,
    OwnerDeleteComponent,
    OwnerDetailsComponent,
    OwnerListComponent,
    OwnerUpdateComponent,
    OwnerAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
