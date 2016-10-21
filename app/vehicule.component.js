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
var vehicule_service_1 = require('./vehicule.service');
var VehiculeComponent = (function () {
    function VehiculeComponent(vehiculeService) {
        this.vehiculeService = vehiculeService;
        this.vehicules = vehicule_1.Vehicule[''];
    }
    VehiculeComponent.prototype.onSelect = function (vehicule) {
        this.selectedVehicule = vehicule;
    };
    VehiculeComponent.prototype.getVehicule = function () {
        var _this = this;
        this.vehiculeService.getVehicule().then(function (vehicules) { return _this.vehicules = vehicules; });
    };
    VehiculeComponent.prototype.ngOnInit = function () {
        this.getVehicule();
    };
    VehiculeComponent = __decorate([
        core_1.Component({
            selector: 'my-vehicule',
            styles: ["\n  \n  .selected {\n    background-color: #607D8B !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 20em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            template: "\n  <h2>Mes V\u00E9hicules</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let vehicule of vehicules\" (click)=\"onSelect(vehicule)\" [class.selected]=\"vehicule === selectedVehicule\">\n      <span class=\"badge\">{{vehicule.id}}</span> {{vehicule.name}} // {{vehicule.type}} // Passagers : {{vehicule.passengers}}\n    </li>\n  </ul>\n  <my-vehicule-detail [vehicule]=\"selectedVehicule\"></my-vehicule-detail>\n  "
        }), 
        __metadata('design:paramtypes', [vehicule_service_1.VehiculeService])
    ], VehiculeComponent);
    return VehiculeComponent;
}());
exports.VehiculeComponent = VehiculeComponent;
//# sourceMappingURL=vehicule.component.js.map