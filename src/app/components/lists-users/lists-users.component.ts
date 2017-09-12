import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-lists-users',
  templateUrl: './lists-users.component.html',
  styleUrls: ['./lists-users.component.css']
})
export class ListsUsersComponent implements OnInit {
  user:any = {};

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUsers().subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }

}
