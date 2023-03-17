import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})

export class WelcomePageComponent implements OnInit {

  constructor() { }

  public authFormVisible: boolean = false;

  ngOnInit(): void {
  }

  public hideAuthoForm() {
    this.authFormVisible = false
  }
}
