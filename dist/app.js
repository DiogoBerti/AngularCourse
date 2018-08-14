var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    // Construtor reduzido (enxuto)
    // define que a classe possui um atributo propulsor
    // que recebe uma string...
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    // Atributos de classe não precisam da keyword function...
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering Hyperspace with " + this.propulsor);
    };
    ;
    return Spacecraft;
}());
;
var ship = new Spacecraft('Hyperdrive');
ship.jumpIntoHyperSpace();
var MilleniumFalcion = /** @class */ (function (_super) {
    __extends(MilleniumFalcion, _super);
    function MilleniumFalcion() {
        var _this = _super.call(this, 'Hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    ;
    MilleniumFalcion.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log("Failed!");
        }
        ;
    };
    ;
    return MilleniumFalcion;
}(Spacecraft));
;
var millenium = new MilleniumFalcion();
millenium.jumpIntoHyperSpace();
;
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + goodForTheJob(millenium));
