import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../animations/route-animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class ProfileComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;

  loading: boolean = false;
  noUserResult: boolean = false;
  user:any = {};
  imageLoading: boolean = true;
  repos: Array<Object> = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.user = 0;
  }

  updateUser(username: any) {
    this.loading = true;
    this.imageLoading = true;
    if(username.length == 0) {
      setTimeout(() => {
        this.user = 0;
        this.noUserResult = false;
        this.loading = false;
      }, 400);
    } else {

      this.githubService.updateUser(username);
      this.githubService.getUser().subscribe(res => {
        // console.log(res);
          this.user = res;
          this.noUserResult = false;
          this.loading = false;
      }, err => {
        console.log(err.statusText);
        this.user = false;
        this.noUserResult = true;
        this.loading = false;
      });
      
      this.githubService.getRepos().subscribe(res => {
        // console.log(res);
        this.repos = res;
      });

    }

  }

  imageLoad() {
    this.imageLoading = false;
  }

}