import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Intern} from "../intern";
import {AppService} from "../app.service";

@Component({
  selector: 'login',
  templateUrl: './app/login/login.component.html',
  styleUrls: ['']
})
export class LoginComponent implements OnInit{
  index: number;
  intern: Intern;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: AppService) {}

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.id;
      this.intern = this.service.interns.filter((intern: Intern) => intern.id === this.index)[0];
     // alert(JSON.stringify(this.intern))
      this.service.addTask().subscribe(data =>{
        alert(JSON.stringify(data))
      }, error => alert(error))
    }, () => {
      alert("Completed")
    });

  }
//use then with promise and subscribe with obsevable
  goToHome() {
    this.router.navigate(['home'])
  }
}
