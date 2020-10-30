import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User = new User;
  constructor(private github:GithubService) { }

  ngOnInit(): void {
    this.github.getData().subscribe((data:User ) => {
      this.user = data;
    });
  }

}
