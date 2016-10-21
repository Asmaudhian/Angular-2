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
var vehicule_1 = require('./vehicule');
var VehiculeDetailComponent = (function () {
    function VehiculeDetailComponent() {
    }
    VehiculeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.vehiculeService.getVehicule(id)
                .then(function (vehicule) { return _this.vehicule = vehicule; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vehicule_1.Vehicule)
    ], VehiculeDetailComponent.prototype, "vehicule", void 0);
    VehiculeDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-vehicule-detail',
            template: "\n <div *ngIf=\"vehicule\">\n  <h2>Le v\u00E9hicule s\u00E9l\u00E9ctionn\u00E9 est : {{vehicule.name}}</h2>\n  <div><label>id: </label>{{vehicule.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"vehicule.name\" placeholder=\"name\"/>\n  </div>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], VehiculeDetailComponent);
    return VehiculeDetailComponent;
}());
exports.VehiculeDetailComponent = VehiculeDetailComponent;
//# sourceMappingURL=vehicule-detail.component.js.map