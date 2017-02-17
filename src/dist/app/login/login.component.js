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
const router_1 = require('@angular/router');
const app_service_1 = require("../app.service");
let LoginComponent = class LoginComponent {
    constructor(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.index = +data.id;
            this.intern = this.service.interns.filter((intern) => intern.id === this.index)[0];
            alert(JSON.stringify(this.intern));
        });
    }
    goToHome() {
        this.router.navigate(['home']);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/login/login.component.html',
        styleUrls: ['']
    }), 
    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map