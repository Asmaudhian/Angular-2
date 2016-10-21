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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var vehicule_detail_component_1 = require('./vehicule-detail.component');
var vehicule_component_1 = require('./vehicule.component');
var vehicule_service_1 = require('./vehicule.service');
var dashboard_component_1 = require('./dashboard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'vehicules', component: vehicule_component_1.VehiculeComponent },
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                    { path: 'detail/:id', component: vehicule_detail_component_1.VehiculeDetailComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                vehicule_detail_component_1.VehiculeDetailComponent,
                vehicule_component_1.VehiculeComponent,
                dashboard_component_1.DashboardComponent
            ],
            providers: [vehicule_service_1.VehiculeService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map