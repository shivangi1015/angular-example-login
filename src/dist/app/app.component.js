"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const intern_1 = require("./intern");
const app_service_1 = require("./app.service");
let AppComponent = class AppComponent {
    constructor(service) {
        this.service = service;
        this.name = 'Angular';
        this.color = 'red';
        this.intern = new intern_1.Intern();
    }
    ngOnInit() {
        this.myInterns = this.service.interns;
    }
    clickMe(param) {
        alert(param);
    }
    submit() {
        alert(JSON.stringify(this.intern.id));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        providers: [app_service_1.AppService]
    }), 
    __metadata('design:paramtypes', [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map