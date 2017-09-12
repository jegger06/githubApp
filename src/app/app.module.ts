import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module Imports
import { HttpModule } from '@angular/http';
// Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ListsUsersComponent } from './components/lists-users/lists-users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
// Service Imports
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    ListsUsersComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
