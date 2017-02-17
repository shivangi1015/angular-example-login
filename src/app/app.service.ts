import {Injectable} from '@angular/core'
import {Intern} from "./intern";

@Injectable()
export class AppService {
  interns: Intern[] = [{
    name : 'Akshay',
    id : 1
  },{
    name : 'Akhil',
    id : 2
  },{
    name : 'Kunal',
    id : 3
  }];



}
