import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  client_id: string = '6c4dcfbc901f404f24fa';
  client_secret: string = 'a7ec68e44a0064bb260221c5a842a6ecdc5842fe'

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(`https://api.github.com/users/jegger06?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

}
