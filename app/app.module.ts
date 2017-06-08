import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } form '@angular/http';
import { AppComponent }   from './app.component';
import { UserListComponent } from './userList.component';
import { UserDetailsComponent } from './userDetails.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, UserListComponent, UserDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
