import { Component, OnInit } from '@angular/core';
import {Intern} from "./intern";
import {AppService} from "./app.service";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers : [AppService]
})
export class AppComponent implements OnInit{
  name = 'Angular';
  color: string = 'red';
  intern: Intern = new Intern();
  myInterns: Intern[];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.myInterns = this.service.interns;
  }

  clickMe(param: string) {
    alert(param)
  }

  submit() {
    alert(JSON.stringify(this.intern.id))
  }

}
