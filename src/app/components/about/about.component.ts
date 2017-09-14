import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../animations/route-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
