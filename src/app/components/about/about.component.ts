import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  user:User = new User;
  constructor(private github:GithubService) { }

  ngOnInit(): void {
    this.github.getData().subscribe((data:User ) => {
      this.user = data;
    });
  }
}

