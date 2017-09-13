import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-lists-users',
  templateUrl: './lists-users.component.html',
  styleUrls: ['./lists-users.component.css']
})
export class ListsUsersComponent implements OnInit {
  noUserResult: boolean = false;
  user:any = {};
  repos: Array<Object> = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {

    // this.githubService.getUsers().subscribe(res => {
    //   console.log(res);
    //   this.user = res;
    // });

    // this.githubService.getRepos().subscribe(res => {
    //   console.log(res);
    //   this.repos = res;
    // });
    this.user = 0;

  }

  updateUser(username: string) {
    if(username.length == 0) {
      this.user = 0;
    } else {

      this.githubService.updateUser(username);
      this.githubService.getUser().subscribe(res => {
        // console.log(res);
          this.user = res;
          this.noUserResult = false;
      }, err => {
        console.log(err.statusText);
        this.user = false;
        this.noUserResult = true;
      });
      
      this.githubService.getRepos().subscribe(res => {
        // console.log(res);
        this.repos = res;
      });

    }
  }

}
