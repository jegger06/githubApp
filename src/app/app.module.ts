import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Router Import
import { RouterModule, Routes } from '@angular/router';
// Module Imports
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
// Service Imports
import { GithubService } from './services/github.service';

const appRoutes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    ProfileComponent,
    AboutComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
