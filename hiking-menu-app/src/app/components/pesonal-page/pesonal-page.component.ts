import { Component, OnInit } from '@angular/core';
import { PersonalPageService } from 'src/app/services/personal-page.service';

@Component({
  selector: 'app-pesonal-page',
  templateUrl: './pesonal-page.component.html',
  styleUrls: ['./pesonal-page.component.scss']
})
export class PesonalPageComponent implements OnInit {
  public nickname: string = '';
  constructor(
    private service: PersonalPageService
  ) { }

  ngOnInit(): void {
  }

  public watchSomeInfo() {
    this.service.getInfoAboutMe()
      .subscribe((res: any) => {
        console.log(res)
        this.nickname = res.username
      })
  }
}
