import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username: FormControl;
  @Output() myEvent = new EventEmitter();

  constructor(private githubService: GithubService) {
    this.username = new FormControl();
  }

  ngOnInit() {
    this.username.valueChanges.debounceTime(700).subscribe(username => {
      this.updateUser(username);
    });
  }

  updateUser(username) {
    this.myEvent.emit(username);
  }

}