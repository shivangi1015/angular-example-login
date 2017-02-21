import {Injectable} from '@angular/core'
import {Intern} from "./intern";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {$$observable} from "rxjs/symbol/observable";
import {HttpModule, Headers, Http} from "@angular/http";

@Injectable()
export class AppService {

  constructor(private http: Http) {

  }

  interns: Intern[] = [{
    name: 'Akshay',
    id: 1
  }, {
    name: 'Akhil',
    id: 2
  }, {
    name: 'Kunal',
    id: 3
  }];

 getData():Observable<any> {
   return Observable.of<any>(this.interns);
//     return Promise.reject(new Error("error encountered"))
// return Observable.throw(new Error("error encountered"))
//    return Promise.resolve<any>(this.interns);
//
//    let jsonheaders = new Headers({
//      'Content-Type': 'application/json'
//    })
//
//
//    this.http.get('http://localhost: 9000', {headers: jsonheaders})
//        .map(response => {
//          this.extractData(response)
//
//
//        });




 }

  addTask(): Observable<any> {

    let jsonheaders = new Headers({
      'Content-Type': 'application/json'
    });


    let obj = {
      date: "2090-11-10",
      title: "fgjgnv",
      description: "sajcdhjsak",
      priority: "high"


    };

    return this.http.post('http://localhost:9000/add', obj,
        {headers: jsonheaders})
        .map(data => {
          return this.extractData(data)
        })
        .catch(this.handleError)
  }

  extractData(res: any) {
    let body = res.json();
    return body;
  }

  private handleError(error: any){
    let errMsg:string;
    try{
      if(JSON.parse(error._body).message){
        errMsg = JSON.parse(error._body).message;
      } else{
        errMsg = 'Something went wrong. Please try again later.';
      }
    }catch(e){
      errMsg = 'Something went wrong. Please try again later.';
    }
    return Observable.throw(new Error(errMsg));
  }
}

