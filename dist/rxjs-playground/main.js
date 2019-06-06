(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">\n  Nak Makan Apa?\n  <small>(BETA)</small>\n</h1>\n\n<div class=\"flex-container\">\n  <div style=\"background:yellow\">\n    <app-game></app-game>\n  </div>\n  <div style=\"width:100%;background:url('assets/images/notepad.jpg');text-align:center\">\n    <app-timer></app-timer>\n    <hr>\n    <h2>\n      Orders\n    </h2>\n    <div *ngIf=\"foodService.orders\">\n      <app-order [order]=\"foodService.getTopOrder()\"></app-order>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  align-items: stretch; }\n\n* {\n  font-family: 'Caveat', cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvcnhqcy1wbGF5Z3JvdW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLCtCQUNGLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.service */ "./src/app/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(foodService) {
        this.foodService = foodService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _plate_plate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plate/plate.component */ "./src/app/plate/plate.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food.service */ "./src/app/food.service.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _plate_plate_component__WEBPACK_IMPORTED_MODULE_3__["PlateComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enum.ts":
/*!*************************!*\
  !*** ./src/app/enum.ts ***!
  \*************************/
/*! exports provided: KEY_CODE, ItemType, DrinkName, FoodName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkName", function() { return DrinkName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodName", function() { return FoodName; });
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
})(KEY_CODE || (KEY_CODE = {}));
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Drink"] = 0] = "Drink";
    ItemType[ItemType["Food"] = 1] = "Food";
})(ItemType || (ItemType = {}));
var DrinkName;
(function (DrinkName) {
    DrinkName[DrinkName["TehTarik"] = 0] = "TehTarik";
    DrinkName[DrinkName["Kopi"] = 1] = "Kopi";
    DrinkName[DrinkName["SoyaCincau"] = 2] = "SoyaCincau";
    DrinkName[DrinkName["LimauAis"] = 3] = "LimauAis";
    DrinkName[DrinkName["SirapBandung"] = 4] = "SirapBandung";
})(DrinkName || (DrinkName = {}));
var FoodName;
(function (FoodName) {
    FoodName[FoodName["RotiCanai"] = 0] = "RotiCanai";
    FoodName[FoodName["NasiLemak"] = 1] = "NasiLemak";
    FoodName[FoodName["AsamLaksa"] = 2] = "AsamLaksa";
    FoodName[FoodName["RotiBakar"] = 3] = "RotiBakar";
    FoodName[FoodName["AyamRendang"] = 4] = "AyamRendang";
})(FoodName || (FoodName = {}));


/***/ }),

/***/ "./src/app/food.service.ts":
/*!*********************************!*\
  !*** ./src/app/food.service.ts ***!
  \*********************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enum */ "./src/app/enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FoodService = /** @class */ (function () {
    function FoodService() {
        this.gameDurationInSeconds = 10;
        this.maxItemsCount = this.gameDurationInSeconds * 2;
    }
    FoodService.prototype.timeRunsOut = function (isTimer) {
        if (isTimer === void 0) { isTimer = false; }
        if (isTimer) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])((this.gameDurationInSeconds + 3) * 1000);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.gameDurationInSeconds * 1000);
    };
    FoodService.prototype.startTimer = function () {
        var _this = this;
        this.timeKeeper(true)
            .subscribe(function () { return _this.gameDurationInSeconds--; });
    };
    FoodService.prototype.timeKeeper = function (isTimer, intervalUnit) {
        if (isTimer === void 0) { isTimer = false; }
        if (intervalUnit === void 0) { intervalUnit = 1000; }
        var gameEnds = this.timeRunsOut(isTimer);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(intervalUnit)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(gameEnds));
    };
    FoodService.prototype.prepareItemsAndOrder = function () {
        var queuedItems = [];
        var orders = [];
        var orderLength = { max: 3, min: 1 };
        var currentOrder = [];
        var maxCurrentOrderCount = Math.random() * (orderLength.max - orderLength.min) + orderLength.min;
        while (queuedItems.length < this.maxItemsCount) {
            var randomItem = this.randomizeItem();
            queuedItems.push(randomItem);
            if (currentOrder.length < maxCurrentOrderCount) {
                // just push every item first - must randomize!
                currentOrder.push(randomItem);
            }
            else {
                orders.push(currentOrder);
                currentOrder = [];
                maxCurrentOrderCount = Math.random() * (orderLength.max - orderLength.min) + orderLength.min;
            }
        }
        this.orders = orders;
        return queuedItems;
    };
    FoodService.prototype.randomizeItem = function () {
        var totalTypes = Object.keys(_enum__WEBPACK_IMPORTED_MODULE_3__["ItemType"]).length / 2;
        var randomizedType = _enum__WEBPACK_IMPORTED_MODULE_3__["ItemType"][this.randomizeIndex(totalTypes)];
        var itemName = (randomizedType === _enum__WEBPACK_IMPORTED_MODULE_3__["ItemType"][_enum__WEBPACK_IMPORTED_MODULE_3__["ItemType"].Drink]) ? _enum__WEBPACK_IMPORTED_MODULE_3__["DrinkName"] : _enum__WEBPACK_IMPORTED_MODULE_3__["FoodName"];
        var totalNames = Object.keys(itemName).length / 2;
        var randomizedName = itemName[this.randomizeIndex(totalNames)];
        return { type: randomizedType, name: randomizedName };
    };
    FoodService.prototype.randomizeIndex = function (maxValue) {
        return Math.floor(Math.random() * Math.floor(maxValue));
    };
    FoodService.prototype.getTopOrder = function () {
        return this.orders[0];
    };
    FoodService.prototype.checkOrder = function (itemName) {
        var currentOrder = this.getTopOrder();
        var foundOrder = currentOrder.find(function (item) { return item.name === itemName; });
        if (foundOrder) {
            this.updateOrder();
            return true;
        }
        else {
            return false;
        }
    };
    FoodService.prototype.updateOrder = function () {
        /** if all fulfilled */
        this.orders.shift();
    };
    FoodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FoodService);
    return FoodService;
}());

// https://medium.com/front-end-weekly/dynamically-add-components-to-the-dom-with-angular-71b0cb535286


/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"background:url('assets/images/scott-webb-50450-unsplash.jpg');height:90vh;width:80vw;display:flex;flex-direction:row\">\n  <div *ngFor=\"let item of items\">\n    <app-item style=\"position:fixed;transition:all 0.5s linear\" [name]=\"item.name\" [type]=\"item.type\"\n      [positionX]=\"item.positionX\">\n    </app-item>\n  </div>\n  <div *ngIf=\"showGameOver\" style=\"margin:auto; text-shadow: 2px 2px white; text-align: center\">\n    <div style=\"font-size: -webkit-xxx-large\">\n      GAME OVER!\n      <br>\n      Your score is {{score}}.\n    </div>\n    <br>\n    <button (click)=\"restart()\" class=\"btn btn-primary\">Play again?</button>\n  </div>\n  <!-- <app-plate #plate></app-plate> -->\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
/* harmony import */ var _plate_plate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plate/plate.component */ "./src/app/plate/plate.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(foodService) {
        this.foodService = foodService;
        this.maxWidth = 70;
        this.items = [];
        this.score = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queueItemsAndOrder();
        // end everything together
        this.foodService.timeKeeper(false, 500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(this.gameOver.bind(this)))
            .subscribe(function () {
            _this.spawnItem();
        });
        // this.foodService.timeKeeper(false, 1)
        //   .subscribe(this.handleCollision.bind(this));
    };
    GameComponent.prototype.gameOver = function () {
        this.showGameOver = true;
        this.items = [];
    };
    GameComponent.prototype.spawnItem = function () {
        var positionX = this.foodService.randomizeIndex(this.maxWidth);
        var queuedItem = this.queuedItems.pop();
        if (!queuedItem) {
            return;
        }
        this.items.push(__assign({ positionX: positionX }, queuedItem));
    };
    GameComponent.prototype.queueItemsAndOrder = function () {
        this.queuedItems = this.foodService.prepareItemsAndOrder();
    };
    GameComponent.prototype.restart = function () {
        location.reload();
        // refinement : refresh timer, orders and game only
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_plate_plate_component__WEBPACK_IMPORTED_MODULE_3__["PlateComponent"]),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "plateComponent", void 0);
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]])
    ], GameComponent);
    return GameComponent;
}());

// https://stackblitz.com/edit/rxjs-breakout?file=index.ts - collision


/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"positionStyle\">\n  <div #item>\n    <img [src]=\"imageSource\" [width]=\"width\" [height]=\"height\" style=\"object-fit: contain\">\n  </div>\n  <span id=\"itemClicked\" *ngIf=\"clicked\" [class.green]=\"addScore\" [class.red]=\"!addScore\">\n    {{scoreText}}\n    <br>\n    {{addScore ? \"+1\" : \"-1\"}}\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/item/item.component.scss":
/*!******************************************!*\
  !*** ./src/app/item/item.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  transition: all linear 0.1s;\n  position: relative; }\n  div:hover {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  span, span > * {\n  position: relative;\n  opacity: 0;\n  font-size: xx-large;\n  text-shadow: 1px 1px black;\n  -webkit-animation: scoreDisappear 1s linear;\n          animation: scoreDisappear 1s linear;\n  top: -50px; }\n  .red {\n  color: red; }\n  .green {\n  color: lightgreen; }\n  @-webkit-keyframes scoreDisappear {\n  0%, 90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  @keyframes scoreDisappear {\n  0%, 90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  .clicked {\n  opacity: 0;\n  -webkit-animation: disappear 0.5s linear;\n          animation: disappear 0.5s linear; }\n  @-webkit-keyframes disappear {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(-50deg);\n            transform: scale(0.1) rotate(-50deg); } }\n  @keyframes disappear {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(-50deg);\n            transform: scale(0.1) rotate(-50deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZW5keWtvbmcvRG9jdW1lbnRzL3NpZGUvcnhqcy1wbGF5Z3JvdW5kL3NyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTJCO0VBQzNCLG1CQUFpQixFQUtwQjtFQVBEO0lBS1EsOEJBQXFCO1lBQXJCLHNCQUFxQixFQUN4QjtFQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixvQkFBbUI7RUFDbkIsMkJBQTBCO0VBQzFCLDRDQUFtQztVQUFuQyxvQ0FBbUM7RUFDbkMsV0FBVSxFQUNiO0VBRUQ7RUFDSSxXQUFVLEVBQ2I7RUFFRDtFQUNJLGtCQUFpQixFQUNwQjtFQUdEO0VBQ0k7SUFDSSxXQUFVLEVBQUE7RUFFZDtJQUNJLFdBQVUsRUFBQSxFQUFBO0VBTGxCO0VBQ0k7SUFDSSxXQUFVLEVBQUE7RUFFZDtJQUNJLFdBQVUsRUFBQSxFQUFBO0VBSWxCO0VBQ0ksV0FBVTtFQUNWLHlDQUFnQztVQUFoQyxpQ0FBZ0MsRUFDbkM7RUFFRDtFQUNJO0lBQ0ksV0FBVSxFQUFBO0VBRWQ7SUFDSSxXQUFVO0lBQ1YsNkNBQW9DO1lBQXBDLHFDQUFvQyxFQUFBLEVBQUE7RUFONUM7RUFDSTtJQUNJLFdBQVUsRUFBQTtFQUVkO0lBQ0ksV0FBVTtJQUNWLDZDQUFvQztZQUFwQyxxQ0FBb0MsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIH1cbn1cblxuc3Bhbiwgc3Bhbj4qIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xuICAgIGFuaW1hdGlvbjogc2NvcmVEaXNhcHBlYXIgMXMgbGluZWFyO1xuICAgIHRvcDogLTUwcHg7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cblxuQGtleWZyYW1lcyBzY29yZURpc2FwcGVhciB7XG4gICAgMCUsIDkwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLmNsaWNrZWQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBkaXNhcHBlYXIgMC41cyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgZGlzYXBwZWFyIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKC01MGRlZyk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum */ "./src/app/enum.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemComponent = /** @class */ (function () {
    function ItemComponent(foodService) {
        this.foodService = foodService;
        this.startingPositionY = 0;
        this.movementYUnit = 1;
        this.movementInterval = 50;
        this.maxHeight = 85;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderItem();
        if (this.isStatic) {
            this.width = 40;
            this.height = 40;
            return;
        }
        this.width = 80;
        this.height = 80;
        this.positionY = this.startingPositionY;
        this.positionStyle = {
            top: this.positionY + 'vh',
            left: this.positionX + 'vw'
        };
        var clicked = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.itemComponent.nativeElement, 'click');
        this.foodService.timeKeeper(false, this.movementInterval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(clicked), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { _this.clickedItem(); }))
            .subscribe(this.descending.bind(this));
    };
    ItemComponent.prototype.clickedItem = function () {
        if (this.foodService.gameOver) {
        }
        var orderFulfilled = this.foodService.checkOrder(this.name);
        this.clicked = true;
        this.addScore = orderFulfilled ? true : false;
        this.scoreText = this.getScoreText();
        this.itemComponent.nativeElement.classList.add('clicked');
    };
    ItemComponent.prototype.getScoreText = function () {
        if (this.addScore) {
            return 'Cool!';
        }
        else {
            return 'Nooo!';
        }
    };
    ItemComponent.prototype.renderItem = function () {
        switch (this.name) {
            case _enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"][_enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"].TehTarik]:
                this.imageSource = 'assets/images/drink_tehtarik.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"][_enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"].Kopi]:
                this.imageSource = 'assets/images/drink_kopi.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"][_enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"].LimauAis]:
                this.imageSource = 'assets/images/drink_limauais.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"][_enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"].SoyaCincau]:
                this.imageSource = 'assets/images/drink_soyacincau.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"][_enum__WEBPACK_IMPORTED_MODULE_2__["DrinkName"].SirapBandung]:
                this.imageSource = 'assets/images/drink_bandung.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"][_enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"].RotiCanai]:
                this.imageSource = 'assets/images/food_roticanai.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"][_enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"].NasiLemak]:
                this.imageSource = 'assets/images/food_nasilemak.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"][_enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"].AsamLaksa]:
                this.imageSource = 'assets/images/food_asamlaksa.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"][_enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"].RotiBakar]:
                this.imageSource = 'assets/images/food_rotibakar.png';
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"][_enum__WEBPACK_IMPORTED_MODULE_2__["FoodName"].AyamRendang]:
                this.imageSource = 'assets/images/food_ayamrendang.png';
                break;
            default:
                break;
        }
    };
    ItemComponent.prototype.descending = function () {
        if (this.positionY <= this.maxHeight) {
            this.positionY += this.movementYUnit;
            this.positionStyle.top = this.positionY + 'vh';
        }
        else {
            this.removeFromDisplay();
        }
    };
    ItemComponent.prototype.removeFromDisplay = function () {
        this.positionStyle = {
            display: 'none'
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ItemComponent.prototype, "isStatic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "positionX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('item'),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "itemComponent", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of order\">\n  <app-item [name]=\"item.name\" isStatic=\"true\"></app-item>\n  {{item.name}}\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/order/order.component.scss":
/*!********************************************!*\
  !*** ./src/app/order/order.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "order", void 0);
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/plate/plate.component.html":
/*!********************************************!*\
  !*** ./src/app/plate/plate.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:fixed;transition:all 0.2s linear;bottom:40px\" [ngStyle]=\"{'left': positionX+'vw'}\">\n  <svg width=\"110\" height=\"20\">\n    <rect width=\"110\" height=\"20\" style=\"fill:pink\" />\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/plate/plate.component.scss":
/*!********************************************!*\
  !*** ./src/app/plate/plate.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXRlL3BsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/plate/plate.component.ts":
/*!******************************************!*\
  !*** ./src/app/plate/plate.component.ts ***!
  \******************************************/
/*! exports provided: PlateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateComponent", function() { return PlateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum */ "./src/app/enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlateComponent = /** @class */ (function () {
    function PlateComponent() {
        this.movementUnit = 10;
        this.maxLeft = 69;
        this.minLeft = 2;
    }
    PlateComponent.prototype.keyEvent = function (event) {
        this.updatePositionX(event.keyCode);
    };
    PlateComponent.prototype.ngOnInit = function () {
        this.positionX = 35;
    };
    PlateComponent.prototype.updatePositionX = function (key) {
        switch (key) {
            case _enum__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].LEFT_ARROW:
                if (this.positionX > this.minLeft) {
                    var updatedPositionX = this.positionX - this.movementUnit;
                    this.positionX = (updatedPositionX < this.minLeft) ? this.minLeft : updatedPositionX;
                }
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].RIGHT_ARROW:
                if (this.positionX < this.maxLeft) {
                    var updatedPositionX = this.positionX + this.movementUnit;
                    this.positionX = (updatedPositionX > this.maxLeft) ? this.maxLeft : updatedPositionX;
                }
                break;
            default:
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PlateComponent.prototype, "keyEvent", null);
    PlateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plate',
            template: __webpack_require__(/*! ./plate.component.html */ "./src/app/plate/plate.component.html"),
            styles: [__webpack_require__(/*! ./plate.component.scss */ "./src/app/plate/plate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlateComponent);
    return PlateComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.component.html":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:20vh\">\n  <h2>\n    TIMER\n  </h2>\n  <div *ngIf=\"gameDuration > 0; else timeIsUp\">\n    <h1>{{gameDuration}}</h1>\n    <h2>seconds left</h2>\n  </div>\n</div>\n\n<ng-template #timeIsUp>\n  <h1>Time is up!</h1>\n</ng-template>"

/***/ }),

/***/ "./src/app/timer/timer.component.scss":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent(foodService) {
        this.foodService = foodService;
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameDuration = this.foodService.gameDurationInSeconds;
        this.foodService.timeKeeper(true)
            .subscribe(function () { return _this.gameDuration--; });
    };
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.scss */ "./src/app/timer/timer.component.scss")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wendykong/Documents/side/rxjs-playground/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map