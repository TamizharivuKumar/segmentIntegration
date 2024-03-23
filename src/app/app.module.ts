import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, UserComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}
