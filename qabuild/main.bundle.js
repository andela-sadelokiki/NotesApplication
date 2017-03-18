webpackJsonp([0,4],{

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(467);


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ApiService = (function () {
    function ApiService(http) {
        this.token = 'randomToken';
        this.httpService = http;
    }
    ApiService.prototype.request = function (url, type, data, headers, stringify, isImage) {
        if (data === void 0) { data = {}; }
        if (headers === void 0) { headers = null; }
        if (stringify === void 0) { stringify = true; }
        if (isImage === void 0) { isImage = false; }
        this.bodyData = stringify ? JSON.stringify(data) : data;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](headers || {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.header.append('alat-token', this.getToken());
        this.header.append('alat-client-apiKey', 'ERTojertoijertoijert');
        this.header.append('Authorization', 'Bearer');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.header });
        if (type.toLowerCase() === 'get') {
            this.service = this.httpService.get(url, this.options);
        }
        else {
            this.service = this.httpService.post(url, this.bodyData, this.options);
        }
        return this.service.map(function (res) {
            if (isImage) {
                return res;
            }
            else {
                return res._body !== '' ? res.json() : null;
            }
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error');
        });
    };
    ApiService.prototype.getToken = function () {
        return sessionStorage.getItem('alat-token');
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/api.service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var crypto = __webpack_require__(770);


var DataService = (function () {
    function DataService() {
        this.dataHolder = {};
        this.persistedData = {
            userId: '__ss0001',
            customers: '__ss0002',
            fieldofficers: '__ss0003',
            unassignedCustomers: '__ss0004',
            username: '__ss0005'
        };
    }
    DataService.prototype.keepData = function (key, sharedData) {
        if (Object.keys(this.persistedData).indexOf(key) !== -1) {
            this.persistData(this.persistedData[key], this.encryptData(sharedData));
        }
        this.dataHolder[key] = sharedData;
    };
    DataService.prototype.getData = function (key) {
        if (Object.keys(this.persistedData).indexOf(key) !== -1) {
            return this.getPersistedData(this.persistedData[key]) ?
                this.decryptData(this.getPersistedData(this.persistedData[key])) : false;
        }
        return this.dataHolder[key];
    };
    DataService.prototype.removeData = function (key) {
        if (Object.keys(this.persistedData).indexOf(key) !== -1) {
            sessionStorage.removeItem(this.persistedData[key]);
            return;
        }
        delete this.dataHolder[key];
    };
    DataService.prototype.encryptData = function (unEncryptedData) {
        var data = typeof unEncryptedData === 'object' ? JSON.stringify(unEncryptedData) : unEncryptedData;
        return crypto.AES.encrypt(data, __WEBPACK_IMPORTED_MODULE_1__constant__["b" /* SystemConstant */].ENCRYPTIONSECERTKEY).toString();
    };
    DataService.prototype.decryptData = function (encryptedData) {
        var result;
        var decryptedData = crypto.AES.decrypt(encryptedData.toString(), __WEBPACK_IMPORTED_MODULE_1__constant__["b" /* SystemConstant */].ENCRYPTIONSECERTKEY).toString(crypto.enc.Utf8);
        try {
            result = JSON.parse(decryptedData);
        }
        catch (e) {
            result = decryptedData;
        }
        return result;
    };
    DataService.prototype.persistData = function (key, encryptedNumber) {
        sessionStorage.setItem(key, encryptedNumber);
    };
    DataService.prototype.getPersistedData = function (key) {
        return sessionStorage.getItem(key);
    };
    DataService.prototype.clearData = function () {
        var _this = this;
        Object.keys(this.persistedData).forEach(function (data) { return _this.removeData(data); });
        this.dataHolder = {};
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/shared-data.service.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api_service__ = __webpack_require__(254);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service_shared_data_service__ = __webpack_require__(255);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__store_service_shared_data_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(389);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_guard_route_guard_service__ = __webpack_require__(615);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__route_guard_route_guard_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__route_guard_route_guard_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__route_guard_route_guard_service__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geolocation_geolocation_service__ = __webpack_require__(614);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__geolocation_geolocation_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_emitter_event_emitter_service__ = __webpack_require__(613);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__event_emitter_event_emitter_service__["a"]; });






//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/index.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SystemConstant; });

console.log('env', __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */]);
var routes = {
    LOGIN_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/FoLogin',
    CUSTOMERS_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetFieldOfficerCustomer?loggedUserId=',
    FO_CUSTOMERS: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetFieldOfficersAssignments',
    GET_FO_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetFieldOfficers?loggedUserId=',
    GMAP_URL: 'https://maps.googleapis.com/maps/api/geocode/json',
    CREATE_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/CreatefieldOfficer',
    UPDATE_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/EditfieldOfficer',
    SUBMIT_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/customerverification',
    UNASSIGNED_CUSTOMERS: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetUnassignCustomer',
    CITIES: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetCity',
    FO_ASSIGN: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/AssignCustomersToFOUser',
    DISABLE_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/DisableFOUser',
    ENABLE_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/EnableFOUser',
    LGA_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetLGA?stateId=',
    STATES_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetStates',
    REASSIGN_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/ReassignAllFieldOfficerCustomers',
    ALL_UNASSIGNED_CUSTOMERS: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetUnassignCustomer?loggedOnUserId=',
    ALL_ASSIGNED_CUSTOMERS: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetCustomerForFAdminReport?loggedUserId=60&statusId=0',
    ALL_UNVERIFIED_CUSTOMERS: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetCustomerForFAdminReport?',
    ACCEPT_REPORT_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/ApproveCustomerAddressVerification',
    REJECT_REPORT_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/RejectCustomerAddressVerification',
    FAILED_REPORT_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/FailCustomerAddressVerification',
    BUILDINGIMAGE_URL: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetCustomerHouseImage?filename=',
    CUSTOMER_AVATAR: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL +
        '/Kyc.WebApi/api/fieldOfficer/GetImage/Passport?filename=',
    FO_REPORTS: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetCustomerForFAdminReportByOfficer?',
    GET_UNASSIGNED_CUSTOMERS_BY_CITY: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetUnassignedCustomerByCity',
    GET_FO_BY_CITY: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_URL + '/Kyc.WebApi/api/fieldOfficer/GetFieldOfficerSummaryByCity',
};
var SystemConstant = {
    EMAILREGEX: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    ENCRYPTIONSECERTKEY: '</#%!WeMa_AlAt!%#/>'
};
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/constant.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlankComponent = (function () {
    function BlankComponent(router, api, auth) {
        this.ioptions = {};
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent.prototype.showImage = function () {
        this.ioptions.show = true;
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-blank',
        template: __webpack_require__(823),
        styles: [__webpack_require__(800)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */]) === "function" && _c || Object])
], BlankComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/blank.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateuserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateuserComponent = (function () {
    function CreateuserComponent(api, store, router, em, auth) {
        var _this = this;
        this.api = api;
        this.store = store;
        this.router = router;
        this.em = em;
        this.auth = auth;
        this.wrapperClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.type = 'create';
        this.fieldOfficer = {};
        this.firstnameInvalid = false;
        this.lastnameInvalid = false;
        this.statesInvalid = false;
        this.emailInvalid = false;
        this.mobileInvalid = false;
        this.cityInvalid = false;
        this.cities = [];
        this.loaderOptions = {};
        this.loading = false;
        this.serverError = false;
        this.invalidEmail = false;
        em.emitter$.subscribe(function (item) {
            _this.newuser.get('firstname').setValue('');
            _this.newuser.get('lastname').setValue('');
            _this.newuser.get('email').setValue('');
            _this.newuser.get('mobile').setValue('');
            _this.clearErrors('all');
            if (item === 'update') {
                setTimeout(function () {
                    _this.newuser.get('firstname').setValue(_this.fieldOfficer.firstName || '');
                    _this.newuser.get('lastname').setValue(_this.fieldOfficer.lastName || '');
                    _this.newuser.get('email').setValue(_this.fieldOfficer.email || '');
                    _this.newuser.get('mobile').setValue(_this.fieldOfficer.mobileNumber || '');
                }, 200);
            }
        });
        this.firstnameInvalid = false;
        this.lastnameInvalid = false;
        this.statesInvalid = false;
        this.emailInvalid = false;
        this.mobileInvalid = false;
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Failed to create User'
        };
        this.modalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'success',
            hide: true,
            icon: false,
            title: 'Confirm Submission',
            message: 'Are you sure you want to submit, click the Submit button to proceed',
            button: {
                text: 'Submit',
                action: function () {
                    _this.create();
                }
            }
        };
        this.loaderOptions = {
            width: '30px',
            height: '30px',
            text: 'Fetching Customers...'
        };
    }
    CreateuserComponent.prototype.credentialsIsCorrect = function () {
        this.firstnameInvalid = this.newuser.get('firstname').value.trim() === '';
        this.lastnameInvalid = this.newuser.get('lastname').value.trim() === '';
        this.statesInvalid = this.newuser.get('states').value.trim() === '';
        this.emailInvalid = this.newuser.get('email').value.trim() === '' || !__WEBPACK_IMPORTED_MODULE_5__constant__["b" /* SystemConstant */].EMAILREGEX.test(this.newuser.get('email').value);
        this.mobileInvalid = this.newuser.get('mobile').value.trim() === '';
        this.serverError = false;
        return !this.firstnameInvalid && !this.lastnameInvalid && !this.statesInvalid && !this.emailInvalid && !this.mobileInvalid;
    };
    CreateuserComponent.prototype.clickWrapper = function ($e) {
        if ($($e.target).hasClass('modal-wrapper') || $($e.target).hasClass('close')) {
            this.wrapperClicked.emit('clicked');
        }
    };
    CreateuserComponent.prototype.onSubmit = function () {
        if (this.credentialsIsCorrect()) {
            this.modalOptions.hide = false;
        }
        else {
            this.modalOptions.hide = true;
            return false;
        }
    };
    CreateuserComponent.prototype.stateSelected = function (stateId) {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].CITIES + "?stateId=" + stateId, 'GET').subscribe(function (data) {
            _this.cities = data;
            $(document).ready(function () {
                $('.myselect').material_select('destroy');
                $('.myselect').material_select();
            });
        });
    };
    CreateuserComponent.prototype.getSelectedCities = function () {
        var unparsedData = $('select.myselect').val();
        console.log('cal', unparsedData, 'selec');
        var cityIds = [];
        unparsedData.forEach(function (data) {
            cityIds.push(+data.split(':')[1].trim().replace(new RegExp('\'', 'g'), ''));
        });
        return cityIds;
    };
    CreateuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            $('.myselect').material_select('destroy');
            $('.myselect').material_select();
        });
        this.newuser = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            states: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].STATES_URL, 'GET').subscribe(function (data) {
            _this.states = data;
        });
    };
    CreateuserComponent.prototype.clearErrors = function (specificError) {
        switch (specificError) {
            case 'firstname':
                this.firstnameInvalid = false;
                break;
            case 'lastname':
                this.lastnameInvalid = false;
                break;
            case 'states':
                this.statesInvalid = false;
                break;
            case 'email':
                this.emailInvalid = false;
                break;
            case 'city':
                this.cityInvalid = false;
                break;
            case 'mobile':
                this.mobileInvalid = false;
                break;
            case 'all':
                this.firstnameInvalid = false;
                this.lastnameInvalid = false;
                this.statesInvalid = false;
                this.emailInvalid = false;
                this.mobileInvalid = false;
                break;
            default:
                break;
        }
    };
    CreateuserComponent.prototype.create = function () {
        var _this = this;
        var route = this.type === 'create' ? __WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].CREATE_URL : __WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].UPDATE_URL;
        var newuser = {
            firstname: this.newuser.get('firstname').value,
            lastname: this.newuser.get('lastname').value,
            EmailAddress: this.newuser.get('email').value,
            username: this.newuser.get('email').value,
            mobileNumber: this.newuser.get('mobile').value,
            city: this.getSelectedCities(),
            createdBy: +this.auth.currentUser()
        };
        if (this.type !== 'create') {
            newuser.userId = this.fieldOfficer.fieldOfficerId;
        }
        this.modalOptions.hide = true;
        this.loading = true;
        this.api.request(route, 'POST', newuser).subscribe(function (data) {
            _this.loading = false;
            _this.errorModalOptions.hide = false;
            _this.errorModalOptions.title = 'Success';
            _this.errorModalOptions.message = _this.type === 'create' ? 'User created successfully' : 'User updated successfully';
            location.reload();
        }, function (err) {
            _this.loading = false;
            _this.modalOptions.hide = true;
            _this.errorModalOptions.message = _this.type === 'create' ? 'Failed to create User' : 'Failed to update User';
            _this.errorModalOptions.hide = false;
        });
    };
    ;
    return CreateuserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], CreateuserComponent.prototype, "wrapperClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], CreateuserComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], CreateuserComponent.prototype, "fieldOfficer", void 0);
CreateuserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-createuser',
        template: __webpack_require__(824),
        styles: [__webpack_require__(801)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__shared__["b" /* LoaderComponent */], __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["h" /* EventEmitterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["h" /* EventEmitterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */]) === "function" && _e || Object])
], CreateuserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/createuser.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(602);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blank_blank_component__ = __webpack_require__(385);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__blank_blank_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landingpage_landingpage_component__ = __webpack_require__(601);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__landingpage_landingpage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kycform_kycform_component__ = __webpack_require__(600);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__kycform_kycform_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createuser_createuser_component__ = __webpack_require__(386);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__createuser_createuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_fieldofficers_all_fieldofficers_component__ = __webpack_require__(593);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__all_fieldofficers_all_fieldofficers_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fieldofficerdashboard_fieldofficerdashboard_component__ = __webpack_require__(596);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__fieldofficerdashboard_fieldofficerdashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_customers_all_customers_component__ = __webpack_require__(592);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__all_customers_all_customers_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(595);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fieldreport_fieldreport_component__ = __webpack_require__(597);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__fieldreport_fieldreport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_list_modal_customer_list_modal_component__ = __webpack_require__(594);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__customer_list_modal_customer_list_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fo_list_modal_fo_list_modal_component__ = __webpack_require__(598);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__fo_list_modal_fo_list_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reject_report_reject_report_component__ = __webpack_require__(603);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__reject_report_reject_report_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__image_viewer_image_viewer_component__ = __webpack_require__(599);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_13__image_viewer_image_viewer_component__["a"]; });














//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/index.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.options = {};
    }
    return LoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], LoaderComponent.prototype, "options", void 0);
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__(839),
        styles: [__webpack_require__(815)]
    })
], LoaderComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/loader.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_service_shared_data_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_idle_core__ = __webpack_require__(378);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(_store, _router, _api, idle) {
        this.idle = idle;
        this.store = _store;
        this.router = _router;
        this.api = _api;
    }
    AuthService.prototype.login = function (credentials, cb) {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].LOGIN_URL, 'POST', credentials).subscribe(function (data) {
            _this.store.keepData('userId', data.userId.toString());
            _this.store.keepData('username', data.firstName + " " + data.lastName);
            sessionStorage.setItem('alat-token', data.token);
            cb(null, data);
        }, function (err) {
            cb(err);
        });
    };
    AuthService.prototype.logout = function () {
        this.store.clearData();
        sessionStorage.removeItem('alat-token');
        sessionStorage.removeItem('alat-auth-timer');
        sessionStorage.removeItem('alat-auth-time');
        this.router.navigate(['/']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.store.getData('userId') !== false ? true : false;
    };
    AuthService.prototype.currentUser = function () {
        return this.store.getData('userId');
    };
    AuthService.prototype.getUserName = function () {
        return this.store.getData('username');
    };
    AuthService.prototype.watchForInActivity = function (inactivityTimeout) {
        var _this = this;
        this.idle.setIdle(5);
        this.idle.setTimeout(inactivityTimeout);
        this.idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_5__ng_idle_core__["b" /* DEFAULT_INTERRUPTSOURCES */]);
        this.idle.onIdleEnd.subscribe(function () { return console.log('No longer this.idle.'); });
        this.idle.onIdleStart.subscribe(function () { return console.log('You\'ve gone idle!'); });
        this.idle.onTimeout.subscribe(function () {
            _this.logout();
        });
        this.idle.watch();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__store_service_shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__store_service_shared_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_idle_core__["c" /* Idle */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_idle_core__["c" /* Idle */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/auth.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    envName: 'qa',
    API_URL: "https://196.43.215.170"
};
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/environment.qa.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_tooltip_component__ = __webpack_require__(611);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__tooltip_tooltip_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_loader_component__ = __webpack_require__(388);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__loader_loader_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_state_error_component__ = __webpack_require__(604);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__error_state_error_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__ = __webpack_require__(610);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(608);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_screen_loading_screen_component__ = __webpack_require__(609);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__loading_screen_loading_screen_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errorpageuser_errorpageuser_component__ = __webpack_require__(607);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__errorpageuser_errorpageuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__errorpageadmin_errorpageadmin_component__ = __webpack_require__(606);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__errorpageadmin_errorpageadmin_component__["a"]; });








//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/index.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = ".menu-bar {\n  width: 100%;\n  height: 10rem;\n  background-color: #A00B40;\n  text-align: center;\n  margin-bottom: 2rem; }\n  .menu-bar .menu {\n    width: 90%;\n    display: inline-block;\n    height: 100%; }\n    .menu-bar .menu i.fa-arrow-left {\n      color: #FFFFFF;\n      margin-top: 3.5rem;\n      float: left;\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s; }\n      .menu-bar .menu i.fa-arrow-left:hover {\n        opacity: 0.8;\n        cursor: pointer; }\n      @media (max-width: 600px) {\n        .menu-bar .menu i.fa-arrow-left {\n          margin-left: 1rem; } }\n    .menu-bar .menu span.name {\n      color: #ffffff;\n      margin: 3.3rem;\n      font-size: 1.5rem;\n      float: left; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.name {\n          margin-left: 2rem;\n          margin-top: 3.5rem;\n          margin-right: 0; } }\n    .menu-bar .menu span.dashboard {\n      float: right;\n      margin: 3.1rem 1rem;\n      background: #FFFFFF;\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 3px;\n      padding: 1rem;\n      cursor: pointer;\n      -webkit-transition: opacity .2s ease-in;\n      transition: opacity .2s ease-in; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.dashboard {\n          display: none; } }\n      .menu-bar .menu span.dashboard:hover {\n        opacity: 0.8; }\n    .menu-bar .menu span.reports {\n      float: right;\n      margin: 3.1rem 0;\n      background: #FFFFFF;\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 3px;\n      padding: 1rem;\n      cursor: pointer; }\n\n.wrapper {\n  text-align: center; }\n  .wrapper .box-wrapper {\n    width: 90%;\n    display: inline-block; }\n    .wrapper .box-wrapper .custom-search {\n      width: 100%;\n      display: inline-block;\n      position: relative;\n      background: #FFFFFF;\n      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n      border-radius: 8px;\n      height: 4.28rem;\n      margin-bottom: 1rem; }\n      .wrapper .box-wrapper .custom-search i {\n        position: absolute;\n        left: 0.8rem;\n        top: calc(50% - 0.6rem);\n        font-size: 1.3rem;\n        vertical-align: middle;\n        color: #AB0B4B; }\n      .wrapper .box-wrapper .custom-search input {\n        display: inline-block;\n        margin: 0;\n        width: calc(100% - 4rem);\n        padding: 0 0.9rem 0 3.1rem;\n        height: 100%; }\n        .wrapper .box-wrapper .custom-search input:focus {\n          outline: none;\n          border: none; }\n    .wrapper .box-wrapper .info p {\n      float: left;\n      opacity: 0.5;\n      font-size: 1rem;\n      color: #000000; }\n      @media (max-width: 600px) {\n        .wrapper .box-wrapper .info p {\n          font-size: 0.8rem; } }\n    .wrapper .box-wrapper .info span.sort {\n      background: #FFFFFF;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);\n      border-radius: 3px;\n      float: left;\n      margin-left: 2rem;\n      padding: 0.3rem;\n      color: #000000;\n      opacity: 0.5;\n      margin-top: 0.5rem; }\n      @media (max-width: 600px) {\n        .wrapper .box-wrapper .info span.sort {\n          margin-left: 1rem; } }\n      .wrapper .box-wrapper .info span.sort i.fa {\n        padding: 0.2rem; }\n    .wrapper .box-wrapper .info span.btns {\n      float: right; }\n      .wrapper .box-wrapper .info span.btns .assign {\n        margin-right: 1rem; }\n        @media (max-width: 600px) {\n          .wrapper .box-wrapper .info span.btns .assign {\n            margin-right: 0; } }\n      @media (max-width: 600px) {\n        .wrapper .box-wrapper .info span.btns .reassign {\n          display: none; } }\n    .wrapper .box-wrapper table {\n      background: #FFFFFF;\n      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n      border-radius: 8px; }\n      .wrapper .box-wrapper table p {\n        margin-left: 20px; }\n      @media (max-width: 600px) {\n        .wrapper .box-wrapper table label {\n          margin-top: 7px; } }\n      .wrapper .box-wrapper table thead {\n        background-color: #A00B40;\n        color: #ffffff; }\n        .wrapper .box-wrapper table thead tr th {\n          border-radius: 0; }\n      .wrapper .box-wrapper table tbody p {\n        color: #000000; }\n        .wrapper .box-wrapper table tbody p label {\n          padding-left: 0;\n          margin-right: 20px; }\n      .wrapper .box-wrapper table tbody tr td {\n        color: #43063C; }\n      .wrapper .box-wrapper table tbody tr td.reassign {\n        color: #AB0B4B;\n        text-decoration: underline; }\n        .wrapper .box-wrapper table tbody tr td.reassign:hover {\n          opacity: 0.6;\n          cursor: pointer; }\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 466;


/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(590);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/main.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(820),
        styles: [__webpack_require__(797)]
    })
], AppComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/app.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_search_filter_search_filter_pipe__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blank_blank_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(591);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["b" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["c" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["d" /* ToolTipComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_blank_blank_component__["a" /* BlankComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["e" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["b" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["f" /* LoadingScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["c" /* KycFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["g" /* ErrorpageuserComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_shared__["h" /* ErrorpageadminComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["d" /* CreateuserComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["e" /* AllFieldOfficersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["f" /* FieldOfficerDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_search_filter_search_filter_pipe__["a" /* SearchFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_6__components__["g" /* AllCustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["h" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["i" /* FieldreportComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["j" /* CustomerListModalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["k" /* FoListModalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["l" /* RejectReportComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components__["m" /* ImageViewerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["a" /* NgIdleModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_8__services__["b" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_8__services__["c" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services__["d" /* GeolocationService */],
            __WEBPACK_IMPORTED_MODULE_8__services__["e" /* IsLoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services__["f" /* CustomerExistsGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services__["g" /* IsLoggedOutGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services__["h" /* EventEmitterService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/app.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components___ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services___ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components___["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services___["g" /* IsLoggedOutGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components___["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services___["g" /* IsLoggedOutGuard */]] },
    { path: 'form/:id', component: __WEBPACK_IMPORTED_MODULE_1__components___["c" /* KycFormComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__components___["b" /* LandingPageComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__components_shared__["h" /* ErrorpageadminComponent */] },
    { path: 'allfieldofficers/:filter', component: __WEBPACK_IMPORTED_MODULE_1__components___["e" /* AllFieldOfficersComponent */] },
    { path: 'pageNotFound', component: __WEBPACK_IMPORTED_MODULE_3__components_shared__["h" /* ErrorpageadminComponent */] },
    { path: 'allcustomers', component: __WEBPACK_IMPORTED_MODULE_1__components___["g" /* AllCustomersComponent */] },
    { path: 'showcase', component: __WEBPACK_IMPORTED_MODULE_1__components___["n" /* BlankComponent */] },
    { path: 'pageNotFound', component: __WEBPACK_IMPORTED_MODULE_3__components_shared__["h" /* ErrorpageadminComponent */] },
    { path: 'fieldofficer/:id', component: __WEBPACK_IMPORTED_MODULE_1__components___["f" /* FieldOfficerDashboardComponent */] },
    { path: 'admindashboard', component: __WEBPACK_IMPORTED_MODULE_1__components___["h" /* DashboardComponent */] },
    { path: 'fieldreport/:id', component: __WEBPACK_IMPORTED_MODULE_1__components___["i" /* FieldreportComponent */] },
    { path: 'reject', component: __WEBPACK_IMPORTED_MODULE_1__components___["l" /* RejectReportComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_shared__["g" /* ErrorpageuserComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/app.routing.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllCustomersComponent = (function () {
    function AllCustomersComponent(router, auth, api) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.api = api;
        this.checkAll = false;
        this.loading = true;
        this.selectedIds = [];
        this.modal = false;
        this.sFilter = '';
        this.states = null;
        this.cities = [];
        this.selectedCity = null;
        this.assignOptions = {
            fo_list: [],
            submit: null
        };
        this.showLoadingScreen = false;
        var formControls;
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Please select a customer.'
        };
        this.api.request("" + (__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].ALL_UNASSIGNED_CUSTOMERS + auth.currentUser()), 'GET').subscribe(function (data) {
            _this.loading = false;
            _this.customerList = data;
            formControls = _this.getControls();
            _this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
            _this.api.request(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].STATES_URL, 'GET').subscribe(function (data) {
                _this.states = data;
                _this.triggerMaterializeSelectFields();
            });
        }, function (err) {
            _this.loading = false;
            _this.errorModalOptions.hide = false;
            _this.errorModalOptions.title = 'Server Occured';
            _this.errorModalOptions.message = 'Could not load customers, please refresh page';
            _this.customerList = [];
            formControls = _this.getControls();
            _this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
        });
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Please select a customer.'
        };
        api.request(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].GET_FO_URL + this.auth.currentUser(), 'GET', {}).subscribe(function (data) {
            _this.assignOptions.fo_list = data;
        });
    }
    AllCustomersComponent.prototype.triggerMaterializeSelectFields = function () {
        var _this = this;
        $(document).ready(function () {
            $('.select').material_select('destroy');
            $('.select').material_select();
            $('select#state').on('change', function ($event) {
                var stateId = $($event.target).val();
                if (stateId) {
                    _this.updateCity(stateId);
                }
            });
            $('select#city').on('change', function ($event) {
                var cityId = $($event.target).val();
                if (cityId) {
                    _this.selectedCity = cityId;
                    _this.reloadList(cityId);
                }
                else {
                    _this.selectedCity = null;
                    _this.customerList = [];
                }
            });
        });
    };
    AllCustomersComponent.prototype.showModalAssign = function (id, cityId) {
        var _this = this;
        if (id === void 0) { id = null; }
        if (cityId === void 0) { cityId = null; }
        var payload = {
            currentUserId: +this.auth.currentUser(),
            city: cityId || this.selectedCity
        };
        this.showLoadingScreen = true;
        if (!id) {
            this.getSelectedIds();
            if (this.selectedIds.length === 0) {
                this.showLoadingScreen = false;
                this.errorModalOptions.hide = false;
                this.errorModalOptions.title = 'Error';
                this.errorModalOptions.message = 'Please select a customer';
                return;
            }
        }
        this.api.request(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].GET_FO_BY_CITY, 'POST', payload).subscribe(function (data) {
            _this.showLoadingScreen = false;
            _this.assignOptions.fo_list = data;
            if (id) {
                _this.selectedIds = [id];
            }
            else {
                _this.getSelectedIds();
            }
            _this.initializeSubmitCallback();
            _this.modal = true;
        }, function (err) {
            _this.showLoadingScreen = false;
            _this.errorModalOptions.hide = false;
            _this.errorModalOptions.title = 'Server Error';
            _this.errorModalOptions.message = 'failed to fetch field officers';
        });
    };
    ;
    AllCustomersComponent.prototype.initializeSubmitCallback = function () {
        var _this = this;
        this.assignOptions.submit = function (selectedFO, cb) {
            var payload = {
                loggedOnUser: _this.auth.currentUser(),
                fieldOfficerTo: selectedFO.fieldOfficerId,
                customerId: _this.selectedIds
            };
            _this.api.request(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].FO_ASSIGN, 'POST', payload).subscribe(function (data) {
                _this.refreshList();
                cb(null, data);
            }, function (err) {
                cb(err);
            });
        };
    };
    AllCustomersComponent.prototype.getControls = function () {
        var controls = {};
        this.customerList.forEach(function (_, i) {
            controls["checkbox-" + i] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](false);
        });
        return controls;
    };
    ;
    AllCustomersComponent.prototype.ngOnInit = function () { };
    AllCustomersComponent.prototype.refreshList = function () {
        var _this = this;
        var formControls;
        this.api.request("" + (__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].ALL_UNASSIGNED_CUSTOMERS + this.auth.currentUser()), 'GET').subscribe(function (data) {
            _this.customerList = data;
            formControls = _this.getControls();
            _this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
        });
    };
    AllCustomersComponent.prototype.hideModal = function (display) {
        this.modal = (display === 'hide');
    };
    ;
    AllCustomersComponent.prototype.getSelectedIds = function () {
        var _this = this;
        this.selectedIds = [];
        this.customerList.forEach(function (customer, i) {
            if (_this.myForm.value["checkbox-" + i]) {
                _this.selectedIds.push(customer.customerId);
            }
        });
    };
    ;
    AllCustomersComponent.prototype.toggleAll = function () {
        var _this = this;
        this.checkAll = !this.checkAll;
        this.customerList.forEach(function (_, i) {
            _this.myForm.controls["checkbox-" + i].setValue(_this.checkAll);
        });
    };
    ;
    AllCustomersComponent.prototype.updateCity = function (stateId) {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].CITIES + "?stateId=" + stateId, 'GET').subscribe(function (data) {
            _this.cities = data;
            $(document).ready(function () {
                $('.select').material_select('destroy');
                $('.select').material_select();
            });
        });
    };
    AllCustomersComponent.prototype.reloadList = function (cityId) {
        var _this = this;
        var payload = {
            currentUserId: +this.auth.currentUser(),
            city: cityId
        };
        this.api.request(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].GET_UNASSIGNED_CUSTOMERS_BY_CITY, 'POST', payload).subscribe(function (data) {
            _this.customerList = data;
        });
    };
    AllCustomersComponent.prototype.dummyData = function () {
        return [
            { id: 12, firstName: 'Bolade Fredrick', lastName: '', customerId: 1, account: '3427717015', customerCity: '1/1/10' },
            { id: 1, firstName: 'George James', lastName: '', customerId: 2, account: '3427717001', customerCity: '1/2/10' },
            { id: 10, firstName: 'Frank Dunnelly ', lastName: '', customerId: 3, account: '3427717002', customerCity: '2/2/10' },
            { id: 9, firstName: 'Kenny James', lastName: '', customerId: 4, account: '3427717003', customerCity: '2/4/16' },
            { id: 11, firstName: 'Bolade Yemisi', lastName: '', customerId: 5, account: '33427717004', customerCity: '3/6/09' },
            { id: 2, firstName: 'Tunde Kelani', lastName: '', customerId: 6, account: '3427717005', customerCity: '5/10/15' },
            { id: 3, firstName: 'Thomas Friday', lastName: '', customerId: 7, account: '3427717006', customerCity: '12/11/17' },
            { id: 121, firstName: 'Shakira Pique', lastName: '', customerId: 8, account: '3427717007', customerCity: '1/5/10' },
            { id: 32, firstName: 'Shawn Davies', lastName: '', customerId: 9, account: '3427717008', customerCity: '2/4/12' },
            { id: 42, firstName: 'Tutu Sade', lastName: '', customerId: 10, account: '3427717009', customerCity: '3/1/12' },
            { id: 52, firstName: 'Timothy Haruna', lastName: '', customerId: 11, account: '3427717010', customerCity: '2/4/02' }
        ];
    };
    return AllCustomersComponent;
}());
AllCustomersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-all-customers',
        template: __webpack_require__(821),
        styles: [__webpack_require__(798), __webpack_require__(435)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["a" /* ApiService */]) === "function" && _c || Object])
], AllCustomersComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/all-customers.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createuser_createuser_component__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFieldOfficersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllFieldOfficersComponent = (function () {
    function AllFieldOfficersComponent(api, router, auth, route, em, store) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.em = em;
        this.store = store;
        this.loading = true;
        this.sFilter = '';
        this.visible = false;
        this.modalCreate = false;
        this.modalReassign = false;
        this.currentFieldOfficer = null;
        this.modal = false;
        this.showAssign = false;
        this.currentFO = null;
        this.allfieldOfficers = [];
        this.states = ['aa'];
        this.cities = [];
        this.loadingScreenOptions = { text: 'loading...' };
        this.fetchStatus();
        api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].GET_FO_URL + this.auth.currentUser(), 'GET', {}).subscribe(function (data) {
            _this.allfieldOfficers = data;
            _this.loading = false;
            _this.store.keepData('fieldofficers', data);
            _this.sortFieldOfficers(data);
            _this.updateStates();
        }, function (err) {
            _this.loading = false;
            _this.fOfficers = [];
            _this.loading = false;
            _this.updateStates();
        });
        this.assignOptions = {
            customers: [],
            submit: null
        };
        this.reassignOptions = {
            fo_list: [],
            submit: null
        };
        this.loggedinUser = Number(auth.currentUser());
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
        };
        this.createModalType = 'create';
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Server Error',
            message: ''
        };
    }
    AllFieldOfficersComponent.prototype.updateStates = function () {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].STATES_URL, 'GET').subscribe(function (data) {
            _this.states = data;
            _this.triggerMaterializeSelectFields();
        });
    };
    AllFieldOfficersComponent.prototype.triggerMaterializeSelectFields = function () {
        var _this = this;
        $(document).ready(function () {
            $('.select').material_select('destroy');
            $('.select').material_select();
            $('select#state').on('change', function ($event) {
                var stateId = $($event.target).val();
                if (stateId) {
                    _this.updateCity(stateId);
                }
            });
            $('select#city').on('change', function ($event) {
                var cityId = $($event.target).val();
                if (cityId) {
                    _this.fOfficers = _this.updateFieldOfficersList(cityId);
                }
                else {
                    _this.sortFieldOfficers(_this.allfieldOfficers);
                }
            });
        });
    };
    AllFieldOfficersComponent.prototype.updateFieldOfficersList = function (cityId) {
        var newList = [];
        this.allfieldOfficers.forEach(function (fo) {
            if (fo.citys.length) {
                fo.citys.forEach(function (f) {
                    if (f.id === +cityId) {
                        newList.push(fo);
                        return;
                    }
                });
            }
        });
        return newList;
    };
    AllFieldOfficersComponent.prototype.updateCity = function (stateId) {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].CITIES + "?stateId=" + stateId, 'GET').subscribe(function (data) {
            _this.cities = data;
            $(document).ready(function () {
                $('.select').material_select('destroy');
                $('.select').material_select();
            });
        });
    };
    AllFieldOfficersComponent.prototype.ngOnInit = function () {
        switch (this.foStatus) {
            case 'all':
                this.title = 'All Field Officers';
                break;
            case 'unavailable':
                this.title = 'Unavailable Field Officers';
                break;
            case 'available':
                this.title = 'Available Field Officers';
                break;
            default:
                this.title = 'Field Officers';
        }
    };
    AllFieldOfficersComponent.prototype.showModal = function (display, type, fieldOfficer) {
        this.modal = (display === 'show');
        this.createModalType = type;
        this.currentFieldOfficer = fieldOfficer;
        this.em.emitter$.emit(type);
    };
    ;
    AllFieldOfficersComponent.prototype.assign = function (id) {
        var _this = this;
        this.loading = true;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].UNASSIGNED_CUSTOMERS, 'POST', {
            fieldOfficerId: id,
            loggedUser: +this.auth.currentUser()
        }).subscribe(function (data) {
            _this.loading = false;
            _this.assignOptions.customers = data;
            _this.configureAssignOptions(id);
        }, function (err) {
            _this.loading = false;
            _this.errorModalOptions.message = 'Could not load customers';
            _this.errorModalOptions.hide = false;
        });
    };
    AllFieldOfficersComponent.prototype.configureAssignOptions = function (id) {
        var _this = this;
        this.assignOptions.submit = function (selectedCustomers, cb) {
            var payload = {
                loggedOnUser: _this.auth.currentUser(),
                fieldOfficerTo: id,
                customerId: []
            };
            selectedCustomers.forEach(function (customer) {
                payload.customerId.push(customer.customerId);
            });
            _this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].FO_ASSIGN, 'POST', payload).subscribe(function (data) {
                _this.refreshList();
                cb(null, data);
            }, function (err) {
                cb(err);
            });
        };
        this.currentFO = id;
        this.showAssign = true;
    };
    AllFieldOfficersComponent.prototype.hideModal = function (display) {
        this.modal = (display === 'hide');
    };
    ;
    AllFieldOfficersComponent.prototype.pageBodyClicked = function ($e) {
        var target = $($e.target);
        if (!target.hasClass('dropdown') && this.previouslyOpenedDropdown) {
            this.previouslyOpenedDropdown.hide();
        }
    };
    AllFieldOfficersComponent.prototype.hideModalReassign = function (display) {
        if (display === 'refresh') {
            this.refreshList();
        }
        this.modalReassign = (display === 'hide');
    };
    ;
    AllFieldOfficersComponent.prototype.openDropdown = function (id, customer) {
        var enabledCircle;
        var dropdown;
        var wrapper;
        if (customer) {
            enabledCircle = $(customer).find('.fa-circle');
            if (enabledCircle.hasClass('bd-green')) {
                this.enabled = true;
            }
            else if (enabledCircle.hasClass('bd-red')) {
                this.enabled = false;
            }
            dropdown = $(customer).find('.ddcontent');
            wrapper = $(customer).find('.ctx-menu');
            if (this.previouslyOpenedDropdown && this.previouslyOpenedDropdown.attr('id') !== dropdown.attr('id')) {
                this.previouslyOpenedDropdown.hide();
            }
            wrapper.css('position', 'relative');
            dropdown.css({ position: 'absolute', 'z-index': 70 });
            dropdown.slideToggle();
            this.previouslyOpenedDropdown = dropdown;
        }
    };
    AllFieldOfficersComponent.prototype.openFOPage = function (id) {
        this.router.navigate(['fieldofficer', id || 11]);
    };
    AllFieldOfficersComponent.prototype.disable = function (id, customer) {
        var _this = this;
        var enabledCircle;
        if (customer) {
            $(customer).parent().addClass('-grey');
            this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].DISABLE_URL, 'POST', {
                officerTDisable: id,
                loggedUser: this.loggedinUser
            }).subscribe(function (data) {
                enabledCircle = $(customer).find('.fa-circle');
                enabledCircle.removeClass('bd-green');
                enabledCircle.addClass('bd-red');
                _this.errorModalOptions.hide = false;
                _this.errorModalOptions.title = 'Success';
                _this.errorModalOptions.message = 'User disabled successfully';
                $(customer).parent().removeClass('-grey');
                if (_this.foStatus === 'available') {
                    _this.fOfficers.forEach(function (data, i) {
                        if (data.fieldOfficerId === id) {
                            _this.fOfficers.splice(i, 1);
                            return;
                        }
                    });
                }
            }, function (err) {
                _this.errorModalOptions.hide = false;
                _this.errorModalOptions.title = 'Failed';
                _this.errorModalOptions.message = 'Failed to disable user';
                $(customer).parent().removeClass('-grey');
            });
        }
    };
    AllFieldOfficersComponent.prototype.enable = function (id, customer) {
        var _this = this;
        var disabledCircle;
        if (customer) {
            $(customer).parent().addClass('-grey');
            this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].ENABLE_URL, 'POST', {
                officerToEnable: id,
                loggedUser: this.loggedinUser
            }).subscribe(function (data) {
                disabledCircle = $(customer).find('.fa-circle');
                disabledCircle.removeClass('bd-red');
                disabledCircle.addClass('bd-green');
                _this.errorModalOptions.hide = false;
                _this.errorModalOptions.title = 'Success';
                _this.errorModalOptions.message = 'User enabled successfully';
                $(customer).parent().removeClass('-grey');
                if (_this.foStatus === 'unavailable') {
                    _this.fOfficers.forEach(function (data, i) {
                        if (data.fieldOfficerId === id) {
                            _this.fOfficers.splice(i, 1);
                            return;
                        }
                    });
                }
            }, function (err) {
                _this.errorModalOptions.hide = false;
                _this.errorModalOptions.title = 'Failed';
                _this.errorModalOptions.message = 'Failed to enable user';
                $(customer).parent().removeClass('-grey');
            });
        }
    };
    AllFieldOfficersComponent.prototype.wrapperClicked = function (data) {
        this.showAssign = false;
    };
    AllFieldOfficersComponent.prototype.refreshList = function () {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].GET_FO_URL + this.auth.currentUser(), 'GET', {}).subscribe(function (data) {
            _this.fOfficers = _this.getEnabledCustomers(data);
        }, function (err) {
            _this.fOfficers = [];
        });
    };
    AllFieldOfficersComponent.prototype.getEnabledCustomers = function (customers) {
        return customers.filter(function (cs) { return cs.isEnable; });
    };
    AllFieldOfficersComponent.prototype.fetchStatus = function () {
        var _this = this;
        var sub = this.route.params.subscribe(function (params) {
            var status = params['filter'];
            _this.foStatus = status;
        });
    };
    AllFieldOfficersComponent.prototype.sortFieldOfficers = function (data) {
        var availablecount = [];
        var unavailablecount = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].isEnable === true) {
                availablecount.push(data[i]);
            }
            else if (data[i].isEnable === false) {
                unavailablecount.push(data[i]);
            }
        }
        if (this.foStatus === 'all') {
            this.fOfficers = data;
        }
        else if (this.foStatus === 'available') {
            this.fOfficers = availablecount;
        }
        else if (this.foStatus === 'unavailable') {
            this.fOfficers = unavailablecount;
        }
        else {
            this.router.navigate(['pageNotFound']);
        }
    };
    AllFieldOfficersComponent.prototype.getAssignmentId = function (foId, cb) {
        var assignmentIds;
        var requestPayload = { fieldOfficerId: foId, loggedUser: +this.auth.currentUser() };
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].FO_CUSTOMERS, 'POST', requestPayload).subscribe(function (data) {
            assignmentIds = data.map(function (r) { return r.id; });
            cb(assignmentIds);
        });
    };
    AllFieldOfficersComponent.prototype.dummyData = function () {
        return [
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'George James', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Frank Dunnelly ', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Kenny James', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Bolade Yemisi', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Tunde Kelani', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Thomas Friday', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Shakira Pique', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Shawn Davies', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Tutu Sade', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Timothy Haruna', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Kim Kelly', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Dumebi Joseph', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Joseph Dumal Fredrick', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'James Shina', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Tola Coker', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Funmi Badmus', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 }
        ];
    };
    return AllFieldOfficersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChildren */])('cs'),
    __metadata("design:type", Object)
], AllFieldOfficersComponent.prototype, "fieldOfficers", void 0);
AllFieldOfficersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-field-officers',
        template: __webpack_require__(822),
        styles: [__webpack_require__(799)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__shared__["c" /* ModalComponent */], __WEBPACK_IMPORTED_MODULE_5__createuser_createuser_component__["a" /* CreateuserComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services__["h" /* EventEmitterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["h" /* EventEmitterService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* DataService */]) === "function" && _f || Object])
], AllFieldOfficersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/all-fieldofficers.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerListModalComponent = (function () {
    function CustomerListModalComponent(auth, api) {
        this.auth = auth;
        this.api = api;
        this.wrapperClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.checkAll = false;
        this.selectedCustomers = [];
        this.loading = false;
    }
    CustomerListModalComponent.prototype.getControls = function () {
        var controls = {};
        this.customerList.forEach(function (customer, index) {
            controls["checkbox-" + index] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](false);
        });
        return controls;
    };
    CustomerListModalComponent.prototype.clickWrapper = function ($e) {
        if ($($e.target).hasClass('modal-wrapper')) {
            this.wrapperClicked.emit('clicked');
        }
    };
    CustomerListModalComponent.prototype.ngOnInit = function () {
        var formControls;
        this.customerList = this.options.customers || [];
        formControls = this.getControls();
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */](formControls);
        this.modalOptions = {
            hide: true,
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            icon: false,
            title: 'Failed!',
            message: ''
        };
    };
    CustomerListModalComponent.prototype.getSelectedCustomers = function () {
        var _this = this;
        this.selectedCustomers = [];
        this.customerList.forEach(function (customer, i) {
            if (_this.myForm.value["checkbox-" + i]) {
                _this.selectedCustomers.push(customer);
            }
        });
        return this.selectedCustomers;
    };
    CustomerListModalComponent.prototype.toggleSelectAll = function () {
        var _this = this;
        this.checkAll = !this.checkAll;
        this.customerList.forEach(function (_, i) {
            _this.myForm.controls["checkbox-" + i].setValue(_this.checkAll);
        });
    };
    CustomerListModalComponent.prototype.submit = function () {
        var _this = this;
        var postData;
        this.loading = true;
        if (this.getSelectedCustomers().length === 0) {
            this.showErrorModal('You need to select a customer');
            this.loading = false;
        }
        else {
            this.loading = true;
            this.options.submit(this.getSelectedCustomers(), function (err, data) {
                _this.loading = false;
                if (err) {
                    _this.modalOptions.hide = false;
                    _this.modalOptions.title = 'failed';
                    _this.modalOptions.message = 'A server error occured';
                }
                else {
                    _this.modalOptions.hide = false;
                    _this.modalOptions.title = 'Success';
                    _this.modalOptions.message = 'This request was successful';
                    setTimeout(function () { return _this.wrapperClicked.emit('clicked'); }, 1000);
                }
            });
        }
    };
    CustomerListModalComponent.prototype.dummyData = function () {
        return [
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'George James', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Frank Dunnelly ', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Kenny James', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Yemisi', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Tunde Kelani', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Thomas Friday', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Shakira Pique', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Shawn Davies', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Tutu Sade', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Timothy Haruna', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Kim Kelly', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Dumebi Joseph', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Joseph Dumal Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'James Shina', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Tola Coker', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Funmi Badmus', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 32, selected: this.checkAll },
            { firstName: 'Bolade Fredrick', totalCustomer: 3, selected: this.checkAll }
        ];
    };
    CustomerListModalComponent.prototype.showErrorModal = function (message) {
        this.modalOptions.hide = false;
        this.modalOptions.message = message;
    };
    return CustomerListModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], CustomerListModalComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], CustomerListModalComponent.prototype, "wrapperClicked", void 0);
CustomerListModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-customer-list-modal',
        template: __webpack_require__(825),
        styles: [__webpack_require__(802)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */]) === "function" && _b || Object])
], CustomerListModalComponent);

var _a, _b;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/customer-list-modal.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(api, auth, router) {
        this.api = api;
        this.auth = auth;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUser = +this.auth.currentUser();
        this.currentUserName = this.auth.getUserName();
        var availablecount = 0;
        var unavailablecount = 0;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].ALL_UNVERIFIED_CUSTOMERS + "loggedUserId=" + this.loggedUser + "&statusId=1", 'GET').subscribe(function (data) {
            _this.fieldReports = data.length;
        });
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].ALL_UNASSIGNED_CUSTOMERS + this.loggedUser, 'GET').subscribe(function (data) {
            _this.noofCustomers = "" + data.length;
        });
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].GET_FO_URL + this.auth.currentUser(), 'GET', {}).subscribe(function (data) {
            _this.noofFieldOfficers = data;
            for (var i = 0; i < _this.noofFieldOfficers.length; i++) {
                if (_this.noofFieldOfficers[i].isEnable === true) {
                    availablecount++;
                }
                else if (_this.noofFieldOfficers[i].isEnable === false) {
                    unavailablecount++;
                }
            }
            _this.availableOfficers = availablecount;
            _this.unavailableOfficers = unavailablecount;
        }, function (err) {
            _this.noofFieldOfficers = 'Not available';
        });
    };
    ;
    DashboardComponent.prototype.gotoCustomersPage = function () {
        this.router.navigate(['allcustomers']);
    };
    ;
    DashboardComponent.prototype.dummyData = function () {
        return [
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'George James', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Frank Dunnelly ', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Kenny James', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Bolade Yemisi', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Tunde Kelani', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Thomas Friday', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Shakira Pique', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Shawn Davies', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Tutu Sade', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Timothy Haruna', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Kim Kelly', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Dumebi Joseph', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Joseph Dumal Fredrick', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'James Shina', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Tola Coker', totalCustomer: 32, enable: false },
            { userId: 1, firstName: 'Funmi Badmus', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32, enable: true },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 },
            { userId: 1, firstName: 'Bolade Fredrick', totalCustomer: 32 }
        ];
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(826),
        styles: [__webpack_require__(803)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/dashboard.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldOfficerDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FieldOfficerDashboardComponent = (function () {
    function FieldOfficerDashboardComponent(router, auth, api, route, store) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.api = api;
        this.route = route;
        this.store = store;
        this.checkAll = false;
        this.selectedCustomers = [];
        this.selectedIds = [];
        this.modal = false;
        this.sFilter = '';
        this.showAssign = false;
        this.foDetails = {};
        this.fetched = false;
        this.cities = [];
        this.states = null;
        this.loadingScreen = false;
        var formControls;
        this.customerList = [];
        this.fetchId();
        this.foDetails = this.getFoDetails(this.foId);
        formControls = this.getControls();
        this.my_form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Please select a customer.'
        };
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].UNASSIGNED_CUSTOMERS, 'POST', {
            fieldOfficerId: this.foId,
            loggedUser: +this.auth.currentUser()
        }).subscribe(function (data) {
            _this.assignOptions.customers = data;
            _this.customers = data;
        });
        this.assignOptions = {
            customers: [],
            submit: null
        };
        this.reassignOptions = {
            fo_list: [],
            submit: null
        };
        var requestPayload = { fieldOfficerId: this.foId, loggedUser: +this.auth.currentUser() };
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].FO_CUSTOMERS, 'POST', requestPayload).subscribe(function (data) {
            _this.allCustomers = data;
            _this.customerList = _this.allCustomers;
            formControls = _this.getControls();
            _this.my_form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
            _this.fetched = true;
        });
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].STATES_URL, 'GET').subscribe(function (data) {
            _this.states = data;
            _this.triggerMaterializeSelectFields();
        });
    }
    ;
    FieldOfficerDashboardComponent.prototype.triggerMaterializeSelectFields = function () {
        var _this = this;
        $(document).ready(function () {
            $('.select').material_select('destroy');
            $('.select').material_select();
            $('select#state').on('change', function ($event) {
                var stateId = $($event.target).val();
                if (stateId) {
                    _this.updateCity(stateId);
                }
            });
            $('select#city').on('change', function ($event) {
                var cityId = $($event.target).val();
                if (cityId) {
                    _this.selectedCity = cityId;
                    _this.reloadList(cityId);
                }
                else {
                    _this.selectedCity = null;
                    _this.customerList = [];
                }
            });
        });
    };
    FieldOfficerDashboardComponent.prototype.updateCity = function (stateId) {
        var _this = this;
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].CITIES + "?stateId=" + stateId, 'GET').subscribe(function (data) {
            _this.cities = data;
            $(document).ready(function () {
                $('.select').material_select('destroy');
                $('.select').material_select();
            });
        });
    };
    FieldOfficerDashboardComponent.prototype.reloadList = function (cityId) {
        this.customerList = this.allCustomers.filter(function (cs) { return cs.customerCityId === +cityId; });
    };
    FieldOfficerDashboardComponent.prototype.showModal = function (display, id, cityId) {
        if (id === void 0) { id = null; }
        if (cityId === void 0) { cityId = null; }
        if (!id && this.getSelectedCustomers().length === 0) {
            this.errorModalOptions.message = 'Please select a customer.';
            this.errorModalOptions.hide = false;
        }
        else {
            this.openFOModal(display, id, cityId);
        }
    };
    ;
    FieldOfficerDashboardComponent.prototype.openFOModal = function (display, id, cityId) {
        var _this = this;
        if (cityId === void 0) { cityId = null; }
        console.log('aaa');
        this.loadingScreen = true;
        this.getFObyCity(cityId, function () {
            _this.loadingScreen = false;
            _this.selectedCustomerIds = id ? [id] : _this.getSelectedIds();
            _this.modal = (display === 'show');
            _this.reassignOptions.fo_list = _this.getEnabledCustomers(_this.allfieldOfficers).filter(function (cs) { return cs.fieldOfficerId !== _this.foId; });
            _this.reassignOptions.submit = (function (selectedFO, cb) {
                _this.getAssignmentId(_this.selectedCustomerIds, _this.foId, (function (assignmentIds) {
                    var reassignparams;
                    reassignparams = {
                        loggedOnUser: _this.auth.currentUser(),
                        fieldOfficerTo: selectedFO.fieldOfficerId,
                        fieldOfficerFrom: _this.foId,
                        assignmentId: assignmentIds
                    };
                    cb(null, '1');
                    _this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].REASSIGN_URL, 'POST', reassignparams).subscribe(function (data) {
                        _this.refreshList();
                        cb(null, data);
                    }, function (err) {
                        cb(err);
                    });
                }));
            });
        });
    };
    FieldOfficerDashboardComponent.prototype.getFObyCity = function (cityId, cb) {
        var _this = this;
        console.log('selected CIty', this.selectedCity, cityId);
        var payload = {
            currentUserId: +this.auth.currentUser(),
            city: cityId || this.selectedCity
        };
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].GET_FO_BY_CITY, 'POST', payload).subscribe(function (data) {
            _this.allfieldOfficers = data;
            cb();
        }, function (err) {
            _this.allfieldOfficers = [];
            cb();
        });
    };
    FieldOfficerDashboardComponent.prototype.showModalAssign = function () {
        var _this = this;
        if (this.getSelectedCustomers().length !== 0) {
            this.errorModalOptions.hide = false;
            this.errorModalOptions.message = 'Selected customer(s) have already been assigned to this field officer';
        }
        else {
            this.assignOptions.submit = function (selectedCustomers, cb) {
                var payload = {
                    loggedOnUser: _this.auth.currentUser(),
                    fieldOfficerTo: _this.foId,
                    customerId: []
                };
                selectedCustomers.forEach(function (customer) {
                    payload.customerId.push(customer.customerId);
                });
                _this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].FO_ASSIGN, 'POST', payload).subscribe(function (data) {
                    _this.refreshList();
                    cb(null, data);
                }, function (err) {
                    cb(err);
                });
            };
            this.showAssign = true;
        }
    };
    ;
    FieldOfficerDashboardComponent.prototype.getEnabledCustomers = function (customers) {
        return customers.filter(function (cs) { return cs.isEnable; });
    };
    FieldOfficerDashboardComponent.prototype.hideModal = function (display) {
        this.modal = (display === 'hide');
    };
    ;
    FieldOfficerDashboardComponent.prototype.wrapperClicked = function (display) {
        this.showAssign = false;
    };
    ;
    FieldOfficerDashboardComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['/admin-dashboard']);
    };
    ;
    FieldOfficerDashboardComponent.prototype.refreshList = function () {
        var _this = this;
        var formControls;
        var requestPayload = { fieldOfficerId: this.foId, loggedUser: +this.auth.currentUser() };
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].FO_CUSTOMERS, 'POST', requestPayload).subscribe(function (data) {
            _this.allCustomers = data;
            _this.customerList = _this.allCustomers;
            formControls = _this.getControls();
            _this.my_form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
            _this.fetched = true;
        });
    };
    FieldOfficerDashboardComponent.prototype.getAssignmentId = function (selectedIds, foId, cb) {
        var assignmentIds;
        var requestPayload = { fieldOfficerId: foId, loggedUser: +this.auth.currentUser() };
        this.api.request(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* routes */].FO_CUSTOMERS, 'POST', requestPayload).subscribe(function (data) {
            assignmentIds = data.filter(function (d) {
                if (selectedIds.indexOf(d.customerId) !== -1) {
                    return d;
                }
            }).map(function (r) { return r.id; });
            cb(assignmentIds);
        });
    };
    FieldOfficerDashboardComponent.prototype.getControls = function (dft) {
        if (dft === void 0) { dft = null; }
        var controls = {};
        if (dft) {
            controls["checkbox"] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](false);
            return controls;
        }
        for (var i = 0; i < this.customerList.length; i++) {
            controls["check-box-" + i] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](false);
        }
        return controls;
    };
    ;
    FieldOfficerDashboardComponent.prototype.getSelectedCustomers = function () {
        var _this = this;
        this.selectedCustomers = [];
        this.customerList.forEach(function (customer, i) {
            if (_this.my_form.value["check-box-" + i]) {
                _this.selectedCustomers.push(customer);
            }
        });
        return this.selectedCustomers;
    };
    ;
    FieldOfficerDashboardComponent.prototype.goBack = function () {
        history.back();
    };
    FieldOfficerDashboardComponent.prototype.getSelectedIds = function () {
        var _this = this;
        this.selectedIds = [];
        this.customerList.forEach(function (customer, i) {
            if (_this.my_form.value["check-box-" + i]) {
                _this.selectedIds.push(customer.customerId);
            }
        });
        return this.selectedIds;
    };
    ;
    FieldOfficerDashboardComponent.prototype.toggleAll = function () {
        this.checkAll = !this.checkAll;
        for (var i = 0; i < this.foDetails.assignmentCount; i++) {
            this.my_form.controls["check-box-" + i].setValue(this.checkAll);
        }
    };
    ;
    FieldOfficerDashboardComponent.prototype.getFoDetails = function (id) {
        var fieldofficers = this.store.getData('fieldofficers');
        for (var i = 0; i < fieldofficers.length; i++) {
            if (fieldofficers[i].fieldOfficerId === id) {
                return fieldofficers[i];
            }
        }
    };
    ;
    FieldOfficerDashboardComponent.prototype.getFoReport = function (id) {
        this.router.navigate(['fieldreport', id]);
    };
    FieldOfficerDashboardComponent.prototype.ngOnInit = function () { };
    ;
    FieldOfficerDashboardComponent.prototype.fetchId = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.foId = id;
        });
    };
    FieldOfficerDashboardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ;
    FieldOfficerDashboardComponent.prototype.dummyData = function () {
        return [
            { id: 12, name: 'Bolade Fredrick', account: '3427717015', dateAss: '1/1/10' },
            { id: 1, name: 'George James', account: '3427717001', dateAss: '1/2/10' },
            { id: 10, name: 'Frank Dunnelly ', account: '3427717002', dateAss: '2/2/10' },
            { id: 9, name: 'Kenny James', account: '3427717003', dateAss: '2/4/16' },
            { id: 11, name: 'Bolade Yemisi', account: '33427717004', dateAss: '3/6/09' },
            { id: 2, name: 'Tunde Kelani', account: '3427717005', dateAss: '5/10/15' },
            { id: 3, name: 'Thomas Friday', account: '3427717006', dateAss: '12/11/17' },
            { id: 121, name: 'Shakira Pique', account: '3427717007', dateAss: '1/5/10' },
            { id: 32, name: 'Shawn Davies', account: '3427717008', dateAss: '2/4/12' },
            { id: 42, name: 'Tutu Sade', account: '3427717009', dateAss: '3/1/12' },
            { id: 52, name: 'Timothy Haruna', account: '3427717010', dateAss: '2/4/02' }
        ];
    };
    return FieldOfficerDashboardComponent;
}());
FieldOfficerDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-fieldofficerdashboard',
        template: __webpack_require__(827),
        styles: [__webpack_require__(435)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["c" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["b" /* DataService */]) === "function" && _e || Object])
], FieldOfficerDashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/fieldofficerdashboard.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldreportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FieldreportComponent = (function () {
    function FieldreportComponent(router, auth, api, route, store) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.api = api;
        this.route = route;
        this.store = store;
        this.allCustomers = [];
        this.loading = false;
        this.loadingbutton = false;
        this.selectedCustomerVerificationId = null;
        this.selectedFieldOfficerId = null;
        this.modal = false;
        this.imageViewerOptions = { show: false };
        this.fetchStatus();
        this.fetchId();
        this.fo = this.getFoDetails(this.foId);
        this.loading = true;
        this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].ALL_UNVERIFIED_CUSTOMERS + "loggedUserId=" + auth.currentUser() + "&statusId=1", 'GET').subscribe(function (data) {
            _this.loading = false;
            _this.sortReports(data);
            if (_this.allCustomers.length) {
                _this.customer = _this.allCustomers[0];
                _this.selectedCustomerVerificationId = _this.customer.customerAddressVerificationId;
                _this.selectedFieldOfficerId = _this.customer.fieldOfficerId;
                _this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].BUILDINGIMAGE_URL + _this.customer.imageName, 'GET', null, null, true, true).subscribe(function (data) {
                    _this.buildingImage = data.url;
                    _this.imageViewerOptions.url = data.url;
                });
            }
        }, function (err) {
            _this.loading = false;
            _this.sortReports([]);
        });
        this.loaderOptions = {
            width: '30px',
            height: '30px'
        };
        this.modalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'success',
            hide: true,
            icon: false,
            title: 'Confirm Report',
            button: {
                text: 'Confirm and Submit',
                action: function () {
                    _this.acceptReport();
                }
            }
        };
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Failed to Accept Report'
        };
        this.createModalType = 'reject';
    }
    FieldreportComponent.prototype.getRelationshipStatus = function () {
        var _this = this;
        this.relationshipList = this.relationshipwithCustomer();
        this.relationshipList.forEach(function (data, i) {
            if (_this.relationshipList[i].id.toString() === _this.customer.personMetRelationshipToCustomer) {
                _this.relationshipStatus = _this.relationshipList[i].value;
            }
        });
    };
    FieldreportComponent.prototype.showCustomerReport = function (id) {
        for (var i = 0; i < this.allCustomers.length; i++) {
            if (this.allCustomers[i].customerId === id) {
                this.customer = this.allCustomers[i];
                this.selectedCustomerVerificationId = this.customer.customerAddressVerificationId;
                this.selectedFieldOfficerId = this.customer.fieldOfficerId;
                break;
            }
        }
        return this.customer;
    };
    FieldreportComponent.prototype.showModal = function (display, type, cid, fid) {
        if (cid === void 0) { cid = null; }
        if (fid === void 0) { fid = null; }
        this.createModalType = type;
        this.selectedCustomerVerificationId = cid;
        this.selectedFieldOfficerId = fid;
        this.modal = (display === 'show');
    };
    FieldreportComponent.prototype.wrapperClicked = function (display) {
        this.modal = (display === 'hide');
    };
    FieldreportComponent.prototype.acceptReport = function () {
        var _this = this;
        var payload = {
            currentUserId: +this.auth.currentUser(),
            customerAddressVerificationId: this.customer.customerAddressVerificationId,
        };
        this.loadingbutton = true;
        this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].ACCEPT_REPORT_URL, 'POST', payload).subscribe(function (data) {
            _this.modalOptions.hide = true;
            _this.loadingbutton = false;
            _this.errorModalOptions.hide = false;
            _this.errorModalOptions.message = 'Report Accepted Successfully';
            _this.errorModalOptions.title = 'Success';
            _this.allCustomers.forEach(function (data, i) {
                if (data.customerId === _this.customer.customerId) {
                    _this.allCustomers.splice(i, 1);
                    _this.customer = _this.allCustomers[0];
                }
            });
        }, function (err) {
            _this.modalOptions.hide = true;
            _this.loadingbutton = false;
            _this.errorModalOptions.hide = false;
            _this.errorModalOptions.message = 'Failed to accept Report';
            _this.errorModalOptions.title = 'Failed';
        });
    };
    FieldreportComponent.prototype.openAcceptModal = function () {
        this.modalOptions.hide = false;
    };
    FieldreportComponent.prototype.failedToRejectOrFail = function (event) {
        this.modal = false;
        this.errorModalOptions.hide = false;
        this.errorModalOptions.title = 'Failure';
        this.errorModalOptions.message = event.type === 'reject' ? 'Failed to reject Report' : 'Failed to fail Report';
    };
    FieldreportComponent.prototype.removeCustomer = function (event) {
        var _this = this;
        this.modal = false;
        this.errorModalOptions.hide = false;
        this.errorModalOptions.title = 'Success';
        this.errorModalOptions.message = event.type === 'reject' ? 'Report rejected' : 'Report failed';
        this.allCustomers.forEach(function (data, i) {
            if (data.customerAddressVerificationId === event.cvid) {
                _this.allCustomers.splice(i, 1);
                _this.customer = _this.allCustomers[0];
            }
        });
    };
    ;
    FieldreportComponent.prototype.fetchStatus = function () {
        var _this = this;
        var sub = this.route.params.subscribe(function (params) {
            var status = params['id'];
            _this.foStatus = status;
        });
    };
    FieldreportComponent.prototype.sortReports = function (data) {
        var _this = this;
        if (this.foStatus === 'all') {
            this.allCustomers = data;
            this.setInfo(this.allCustomers);
        }
        else if (this.foId) {
            this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].FO_REPORTS + 'loggedUserId=' + this.auth.currentUser() + '&' +
                'fieldOfficerID=' + this.foId + '&' + 'statusId=' + 1, 'GET').subscribe(function (data) {
                _this.allCustomers = data;
                _this.setInfo(_this.allCustomers);
                _this.showFo = true;
            });
        }
        else {
            this.router.navigate(['pageNotFound']);
        }
    };
    FieldreportComponent.prototype.setInfo = function (data) {
        var _this = this;
        if (data.length) {
            this.customer = data[0];
            this.selectedCustomerVerificationId = this.customer.customerAddressVerificationId;
            this.selectedFieldOfficerId = this.customer.fieldOfficerId;
            this.getRelationshipStatus();
            this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].BUILDINGIMAGE_URL + this.customer.imageName, 'GET', null, null, true, true).subscribe(function (data) {
                _this.buildingImage = data.url;
            });
        }
    };
    FieldreportComponent.prototype.fetchId = function () {
        var _this = this;
        var subId = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.foId = id;
        });
    };
    FieldreportComponent.prototype.getFoDetails = function (id) {
        var fieldofficers = this.store.getData('fieldofficers');
        for (var i = 0; i < fieldofficers.length; i++) {
            if (fieldofficers[i].fieldOfficerId === id) {
                return fieldofficers[i];
            }
        }
    };
    ;
    FieldreportComponent.prototype.openImageViewer = function (url) {
        this.imageViewerOptions.show = true;
        this.imageViewerOptions.url = url;
    };
    FieldreportComponent.prototype.ngOnInit = function () {
    };
    FieldreportComponent.prototype.dummyData = function () {
        return [
            { id: 12, customerName: 'Bolade Fredrick', account: '3427717015', customerCity: '1/1/10', customerId: 12, fieldOfficerId: 1 },
            { id: 1, customerName: 'George James', account: '3427717001', customerCity: '1/2/10', customerId: 10, fieldOfficerId: 8 },
            { id: 10, customerName: 'Frank Dunnelly ', account: '3427717002', customerCity: '2/2/10', customerId: 22, fieldOfficerId: 99 },
            { id: 9, customerName: 'Kenny James', account: '3427717003', customerCity: '2/4/16' },
            { id: 11, customerName: 'Bolade Yemisi', account: '33427717004', customerCity: '3/6/09' },
            { id: 2, customerName: 'Tunde Kelani', account: '3427717005', customerCity: '5/10/15' },
            { id: 3, customerName: 'Thomas Friday', account: '3427717006', customerCity: '12/11/17' },
            { id: 121, customerName: 'Shakira Pique', account: '3427717007', customerCity: '1/5/10' },
            { id: 32, customerName: 'Shawn Davies', account: '3427717008', customerCity: '2/4/12' },
            { id: 42, customerName: 'Tutu Sade', account: '3427717009', customerCity: '3/1/12' },
            { id: 52, customerName: 'Timothy Haruna', account: '3427717010', customerCity: '2/4/02' }
        ];
    };
    FieldreportComponent.prototype.relationshipwithCustomer = function () {
        return [
            { id: 1, value: 'Mother' },
            { id: 2, value: 'Father' },
            { id: 3, value: 'Brother' },
            { id: 4, value: 'Sister' },
            { id: 5, value: 'Cousin' },
            { id: 6, value: 'Nephew' },
            { id: 7, value: 'Niece' },
            { id: 8, value: 'Aunty' },
            { id: 9, value: 'Uncle' },
            { id: 10, value: 'Grandmother' },
            { id: 11, value: 'Grandfather' },
            { id: 12, value: 'Friend' },
            { id: 13, value: 'Colleague' },
            { id: 14, value: 'Other' }
        ];
    };
    return FieldreportComponent;
}());
FieldreportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-fieldreport',
        template: __webpack_require__(828),
        styles: [__webpack_require__(804)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__shared__["b" /* LoaderComponent */], __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* DataService */]) === "function" && _e || Object])
], FieldreportComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/fieldreport.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoListModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoListModalComponent = (function () {
    function FoListModalComponent(api, store, auth, route, router) {
        this.api = api;
        this.store = store;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.wrapperClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.loading = false;
    }
    FoListModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formControls;
        if (this.options) {
            this.officerList = this.options.fo_list || [];
        }
        else {
            this.officerList = [];
        }
        formControls = this.getControls();
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](formControls);
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Please select a field officer.'
        };
        this.modalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'success',
            hide: true,
            icon: false,
            title: 'Confirm Submission',
            message: 'Are you sure you want to submit, click the Submit button to proceed',
            button: {
                text: 'Submit',
                action: function () {
                    _this.loading = true;
                    _this.modalOptions.hide = true;
                    _this.options.submit(_this.selectedFieldOfficer, function (err, data) {
                        _this.loading = false;
                        if (err) {
                            _this.errorModalOptions.message = 'A server error occured';
                            _this.errorModalOptions.title = 'Failed';
                            _this.errorModalOptions.hide = false;
                        }
                        else {
                            _this.errorModalOptions.title = 'Success';
                            _this.errorModalOptions.message = 'Request Successful.';
                            _this.errorModalOptions.hide = false;
                            setTimeout(function () { _this.wrapperClicked.emit('clicked'); }, 1000);
                        }
                    });
                }
            }
        };
    };
    FoListModalComponent.prototype.getControls = function () {
        var controls = {};
        this.officerList.forEach(function (officer, index) {
            controls["radio-" + index] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](false);
        });
        return controls;
    };
    FoListModalComponent.prototype.clickWrapper = function ($e) {
        if ($($e.target).hasClass('modal-wrapper') || $($e.target).hasClass('close')) {
            this.wrapperClicked.emit('clicked');
        }
    };
    FoListModalComponent.prototype.getSelectedFieldOfficer = function () {
        var _this = this;
        this.officerList.forEach(function (officer, i) {
            if (_this.myForm.value["radio-" + i]) {
                _this.selectedFieldOfficer = officer;
            }
        });
        return this.selectedFieldOfficer;
    };
    FoListModalComponent.prototype.onSubmit = function () {
        if (this.getSelectedFieldOfficer() === undefined) {
            this.errorModalOptions.title = 'Failed';
            this.errorModalOptions.message = 'Please select a field officer';
            this.errorModalOptions.hide = false;
        }
        else {
            this.modalOptions.message = 'Are you sure you want to submit, click the Submit button to proceed';
            this.modalOptions.hide = false;
        }
    };
    FoListModalComponent.prototype.dummyData = function () {
        return [
            { firstName: 'Bolade Fredrick', assignmentCount: '20' },
            { firstName: 'George James', assignmentCount: '13' },
            { firstName: 'Frank Dunnelly ', assignmentCount: '24' },
            { firstName: 'Kenny James', assignmentCount: '27' },
            { firstName: 'Bolade Yemisi', assignmentCount: '40' },
            { firstName: 'Tunde Kelani', assignmentCount: '50' },
            { firstName: 'Thomas Friday', assignmentCount: '70' },
            { firstName: 'Shakira Pique', assignmentCount: '80' },
            { firstName: 'Shawn Davies', assignmentCount: '40' },
            { firstName: 'Tutu Sade', assignmentCount: '20' },
            { firstName: 'Timothy Haruna', assignmentCount: '10' }
        ];
    };
    return FoListModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], FoListModalComponent.prototype, "wrapperClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], FoListModalComponent.prototype, "options", void 0);
FoListModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-fo-list-modal',
        template: __webpack_require__(829),
        styles: [__webpack_require__(805)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object])
], FoListModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/fo-list-modal.component.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageViewerComponent = (function () {
    function ImageViewerComponent() {
        this.options = {};
        this.show = false;
        this.options.show = false;
        this.options.url = 'assets/images/image-viewer.jpg';
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.image-viewer-wrapper').css('opacity', 1);
        });
    };
    ImageViewerComponent.prototype.clickWrapper = function (event) {
        if ($(event.target).hasClass('image-viewer-wrapper')) {
            this.options.show = false;
        }
    };
    return ImageViewerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], ImageViewerComponent.prototype, "options", void 0);
ImageViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-image-viewer',
        template: __webpack_require__(830),
        styles: [__webpack_require__(806)]
    }),
    __metadata("design:paramtypes", [])
], ImageViewerComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/image-viewer.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KycFormComponent = (function () {
    function KycFormComponent(auth, route, store, api, router, geo) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.store = store;
        this.api = api;
        this.router = router;
        this.geo = geo;
        this.loading = false;
        this.addressInvalid = false;
        this.presentorabsentInvalid = false;
        this.customerRepInvalid = false;
        this.buildingDetailsInvalid = false;
        this.landmarkInvalid = false;
        this.commentsInvalid = false;
        this.photoInvalid = false;
        this.relationInvalid = false;
        this.picTaken = false;
        this.retake = false;
        this.submitWarning = false;
        this.serverError = false;
        this.serverErrorMsg = 'Please fill all required fields';
        this.modalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'success',
            hide: true,
            icon: false,
            title: 'Confirm Submission',
            message: 'Are you sure you want to submit, click the Submit button to proceed',
            button: {
                text: 'Submit',
                action: function () {
                    _this.sendData();
                }
            }
        };
        this.loadingOptions = { text: 'submitting...' };
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'A server error occured, please try again.'
        };
        auth.watchForInActivity(300);
    }
    ;
    KycFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geo.getLocation(function (err, location) {
            if (err) {
                _this.picTakenAt = 'Location is not available';
            }
            _this.picTakenAt = location;
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.customerId = id;
            _this.customerDetails = _this.getCustomerDetails(id);
            _this.assignmentId = _this.getAssignmentId(id);
            _this.customer = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                customername: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                presentorabsent: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                customerrep: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                buildingdetails: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                landmark: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                comments: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                relation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
                img: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('')
            });
            console.log('aa', _this.customerDetails);
            _this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].CUSTOMER_AVATAR + _this.customerDetails.imageUrl, 'GET', null, null, true, true).subscribe(function (data) {
                _this.customerAvatar = data.url;
            });
        });
    };
    KycFormComponent.prototype.getAssignmentId = function (id) {
        var aId;
        this.store.getData('customers').forEach(function (c) {
            if (c.customerId === id) {
                aId = c.fieldOfficerAssignmentId;
                return;
            }
        });
        return aId;
    };
    KycFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    KycFormComponent.prototype.getCustomerDetails = function (id) {
        var customers = this.store.getData('customers');
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].customerId === id) {
                return customers[i];
            }
        }
        return null;
    };
    KycFormComponent.prototype.fileChange = function (input) {
        var _this = this;
        var reader = new FileReader();
        this.fileInput = input;
        this.readFile(input.files[0], reader, function (result) {
            if (input.files[0].size > 100000) {
                var img = document.createElement('img');
                img.src = result;
                _this.resize(img, 250, 250, function (resized_image) {
                    _this.previewLink = resized_image;
                    _this.passport = resized_image;
                });
            }
            else {
                _this.previewLink = result;
                _this.passport = result;
            }
        });
        this.picTaken = true;
    };
    ;
    KycFormComponent.prototype.readFile = function (file, reader, cb) {
        reader.onload = function () {
            cb(reader.result);
        };
        reader.readAsDataURL(file);
    };
    KycFormComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = function () {
            // Get the images current width and height
            var width = img.width;
            var height = img.height;
            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            // create a canvas object
            var canvas = document.createElement('canvas');
            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    ;
    KycFormComponent.prototype.credentialsIsCorrect = function () {
        this.addressInvalid = (this.customer.get('address').dirty && this.customer.get('address').invalid)
            || (this.customer.get('address').untouched && this.customer.get('address').invalid);
        this.presentorabsentInvalid = (this.customer.get('presentorabsent').dirty && this.customer.get('presentorabsent').invalid)
            || (this.customer.get('presentorabsent').untouched && this.customer.get('presentorabsent').invalid);
        if (this.customer.get('presentorabsent').value === 'no') {
            this.customerRepInvalid = this.customer.get('customerrep').value.trim() === '';
            this.relationInvalid = (this.customer.get('relation').dirty && this.customer.get('relation').invalid)
                || (this.customer.get('relation').untouched && this.customer.get('relation').invalid);
        }
        this.buildingDetailsInvalid = this.customer.get('buildingdetails').value.trim() === '';
        this.landmarkInvalid = this.customer.get('landmark').value.trim() === '';
        this.commentsInvalid = this.customer.get('comments').value.trim() === '';
        this.photoInvalid = this.passport === undefined;
        this.serverError = false;
        return !this.addressInvalid && !this.customerRepInvalid && !this.buildingDetailsInvalid && !this.landmarkInvalid
            && !this.commentsInvalid && !this.photoInvalid && !this.relationInvalid;
    };
    KycFormComponent.prototype.onSubmit = function () {
        if (this.credentialsIsCorrect()) {
            this.modalOptions.hide = false;
        }
        return false;
    };
    KycFormComponent.prototype.clearErrors = function (error) {
        switch (error) {
            case 'address':
                this.addressInvalid = false;
                break;
            case 'presentorabsent':
                this.presentorabsentInvalid = false;
                break;
            case 'customerrep':
                this.customerRepInvalid = false;
                break;
            case 'relation':
                this.relationInvalid = false;
                break;
            case 'buildingdetails':
                this.buildingDetailsInvalid = false;
                break;
            case 'landmark':
                this.landmarkInvalid = false;
                break;
            case 'comments':
                this.commentsInvalid = false;
                break;
            case 'img':
                this.photoInvalid = false;
                break;
            default:
                break;
        }
    };
    KycFormComponent.prototype.sendData = function () {
        var _this = this;
        var cs = this.getFormData();
        this.modalOptions.hide = true;
        this.loading = true;
        this.api.request(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* routes */].SUBMIT_URL, 'POST', cs, {}, false).subscribe(function (data) {
            _this.store.keepData('customer-details', data);
            _this.loading = false;
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.serverError = true;
            _this.loading = false;
            _this.modalOptions.hide = true;
            _this.errorModalOptions.hide = false;
        });
    };
    KycFormComponent.prototype.getFormData = function () {
        var cs = new FormData();
        cs.append('CustomerId', this.customerId);
        cs.append('LocationAddressSameAsDocument', this.customer.get('address').value === 'yes');
        cs.append('CustomerPresent', this.customer.get('presentorabsent').value === 'yes');
        cs.append('NameofPersonMet', this.customer.get('customerrep').value);
        cs.append('BuildingDescription', this.customer.get('buildingdetails').value);
        cs.append('Landmarks', this.customer.get('landmark').value);
        cs.append('Comments', this.customer.get('comments').value);
        cs.append('File', this.canvasToFile(this.passport), this.fileInput.files[0].name);
        cs.append('PersonMetRelationshipToCustomer', this.customer.get('relation').value);
        cs.append('FieldOfficerAssignmentId', this.assignmentId);
        return cs;
    };
    KycFormComponent.prototype.canvasToFile = function (dataURL) {
        var blobBin = atob(dataURL.split(',')[1]);
        var array = [];
        for (var i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
        }
        var file = new Blob([new Uint8Array(array)], { type: 'image/png' });
        return file;
    };
    return KycFormComponent;
}());
KycFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-kycform',
        template: __webpack_require__(831),
        styles: [__webpack_require__(807)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services__["d" /* GeolocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["d" /* GeolocationService */]) === "function" && _f || Object])
], KycFormComponent);

;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/kycform.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingPageComponent = (function () {
    function LandingPageComponent(auth, api, dataService, router) {
        this.auth = auth;
        this.api = api;
        this.dataService = dataService;
        this.router = router;
        this.loading = false;
        this.serverError = false;
        this.sFilter = '';
        this.loaderOptions = {
            width: '30px',
            height: '30px',
            text: 'Fetching Customers...'
        };
        this.modalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'success',
            icon: false,
            title: 'An error occured',
            message: 'Please click the button below to try again',
            button: {
                text: 'Try Again',
                action: function () {
                    location.reload();
                }
            }
        };
        auth.watchForInActivity(300);
    }
    ;
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var foId = this.dataService.getData('userId');
        this.loading = true;
        this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].CUSTOMERS_URL + foId, 'GET').subscribe(function (data) {
            _this.customers = data;
            _this.dataService.keepData('customers', _this.customers);
            _this.loading = false;
        }, function (err) {
            _this.customers = [];
            _this.dataService.keepData('customers', _this.customers);
            // this.serverError = true;
            _this.loading = false;
        });
    };
    ;
    LandingPageComponent.prototype.openCustomerForm = function (id) {
        this.router.navigate(['form', id]);
    };
    LandingPageComponent.prototype.dummyData = function () {
        return [
            {
                customerId: 1,
                firstName: 'John',
                lastName: 'Doe',
                customerName: 'John Doe',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 2,
                firstName: 'Niccolo',
                lastName: 'Machiavelli',
                customerName: 'Niccolo Machiavelli',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 3,
                firstName: 'Genghis',
                lastName: 'Khan',
                customerName: 'Genghis Khan',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 4,
                firstName: 'Leonardo',
                lastName: 'Davinci',
                customerName: 'Leonardo Davinci',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 6,
                firstName: 'The',
                lastName: 'Medici',
                customerName: 'The Medici',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 7,
                firstName: 'Micheal',
                lastName: 'Angelo',
                customerName: 'Micheal Angelo',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 8,
                firstName: 'Van',
                lastName: 'Gogh',
                customerName: 'Van Gogh',
                address: 'placeholder address, Lagos Nigeria'
            },
            {
                customerId: 9,
                firstName: 'Shawn',
                lastName: 'Carter',
                customerName: 'Shawn Carter',
                address: 'placeholder address, Lagos Nigeria'
            }
        ];
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-landingpage',
        template: __webpack_require__(832),
        styles: [__webpack_require__(808)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LandingPageComponent);

;
var _a, _b, _c, _d;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/landingpage.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_auth, _router) {
        this.loading = false;
        this.serverError = false;
        this.serverErrorMsg = 'username/password is incorrect';
        this.usrnameInvalid = false;
        this.pwordInvalid = false;
        this.router = _router;
        this.auth = _auth;
        this.loaderOptions = {
            width: '30px',
            height: '30px'
        };
    }
    LoginComponent.prototype.onSubmit = function () {
        if (this.credentialsIsCorrect()) {
            this.login();
        }
        return false;
    };
    LoginComponent.prototype.credentialsIsCorrect = function () {
        this.usrnameInvalid = this.user.get('username').value.trim() === '';
        this.pwordInvalid = this.user.get('password').value.trim() === '';
        this.serverError = false;
        return !this.usrnameInvalid && !this.pwordInvalid;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
    };
    LoginComponent.prototype.clearErrors = function (specificError) {
        switch (specificError) {
            case 'username':
                this.usrnameInvalid = false;
                break;
            case 'password':
                this.pwordInvalid = false;
                break;
            default:
                break;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = {
            username: this.user.get('username').value,
            password: this.user.get('password').value
        };
        this.loading = true;
        this.auth.login(user, function (err, data) {
            if (err) {
                _this.serverError = true;
                _this.loading = false;
            }
            else {
                _this.loading = false;
                if (data.roleId === 5) {
                    _this.router.navigate(['/dashboard']);
                }
                else if (data.roleId === 4) {
                    _this.router.navigate(['/admindashboard']);
                }
                else {
                    _this.auth.logout();
                    _this.router.navigate(['/pageNotFound']);
                }
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(833),
        styles: [__webpack_require__(809)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__shared__["b" /* LoaderComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/login.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RejectReportComponent = (function () {
    function RejectReportComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.wrapperClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.reportHandled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.failedToHandleReport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.type = 'reject';
        this.loading = false;
        this.commentInvalid = false;
        this.modal = true;
        this.errorModalOptions = {
            overlayColor: 'rgba(0,0,0,0.3)',
            type: 'error',
            hide: true,
            icon: false,
            title: 'Failed',
            message: 'Failed to Reject Report'
        };
        this.loaderOptions = {
            width: '30px',
            height: '30px',
            text: 'Fetching Customers...'
        };
        this.modal = true;
    }
    RejectReportComponent.prototype.ngOnInit = function () {
        this.validateReport = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            comment: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
    };
    RejectReportComponent.prototype.credentialsIsCorrect = function () {
        this.commentInvalid = this.validateReport.get('comment').value.trim() === '';
        return !this.commentInvalid;
    };
    RejectReportComponent.prototype.clickWrapper = function ($e) {
        if ($($e.target).hasClass('modal-wrapper')) {
            this.errorModalOptions.hide = true;
            this.wrapperClicked.emit('clicked');
        }
    };
    RejectReportComponent.prototype.hidemodal = function () {
        console.log('hiding me');
        this.modal = false;
    };
    RejectReportComponent.prototype.onSubmit = function () {
        if (this.credentialsIsCorrect()) {
            this.reject();
        }
    };
    RejectReportComponent.prototype.reject = function () {
        var _this = this;
        var route = this.type === 'reject' ? __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].REJECT_REPORT_URL : __WEBPACK_IMPORTED_MODULE_4__constant__["a" /* routes */].FAILED_REPORT_URL;
        var reqparams = {
            currentUserId: +this.auth.currentUser(),
            customerAddressVerificationId: this.customerAddressVerificationId
        };
        if (this.type !== 'reject') {
            reqparams.failedComment = this.validateReport.get('comment').value;
        }
        else {
            reqparams.rejectComment = this.validateReport.get('comment').value;
        }
        this.loading = true;
        this.api.request(route, 'POST', reqparams).subscribe(function (data) {
            console.log('should not be here');
            _this.loading = false;
            _this.hidemodal();
            _this.reportHandled.emit({ cvid: _this.customerAddressVerificationId, type: _this.type });
        }, function (err) {
            console.log('got here on failure');
            _this.loading = false;
            _this.hidemodal();
            _this.failedToHandleReport.emit({ cvid: _this.customerAddressVerificationId, type: _this.type });
            console.log('got here on failure');
            _this.errorModalOptions.hide = false;
            _this.errorModalOptions.message = _this.type === 'reject' ? 'Failed to reject report' : 'Failed to fail report';
        });
    };
    return RejectReportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], RejectReportComponent.prototype, "wrapperClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], RejectReportComponent.prototype, "reportHandled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], RejectReportComponent.prototype, "failedToHandleReport", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], RejectReportComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], RejectReportComponent.prototype, "customerAddressVerificationId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], RejectReportComponent.prototype, "foId", void 0);
RejectReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-reject-report',
        template: __webpack_require__(834),
        styles: [__webpack_require__(810)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__shared__["c" /* ModalComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* AuthService */]) === "function" && _b || Object])
], RejectReportComponent);

var _a, _b;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/reject-report.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_interface__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__error_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
        this.errorData = {};
    }
    ErrorComponent.prototype.ngAfterContentChecked = function () {
        this.errorData.width = this.options.width;
        this.errorData.message = this.options.message;
    };
    return ErrorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__error_interface__["ErrorOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__error_interface__["ErrorOptions"]) === "function" && _a || Object)
], ErrorComponent.prototype, "options", void 0);
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__(835),
        styles: [__webpack_require__(811)]
    })
], ErrorComponent);

var _a;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/error.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/error.interface.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorpageadminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageadminComponent = (function () {
    function ErrorpageadminComponent() {
    }
    ErrorpageadminComponent.prototype.ngOnInit = function () {
    };
    return ErrorpageadminComponent;
}());
ErrorpageadminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-errorpageadmin',
        template: __webpack_require__(836),
        styles: [__webpack_require__(812)]
    }),
    __metadata("design:paramtypes", [])
], ErrorpageadminComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/errorpageadmin.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorpageuserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageuserComponent = (function () {
    function ErrorpageuserComponent() {
    }
    ErrorpageuserComponent.prototype.ngOnInit = function () {
    };
    return ErrorpageuserComponent;
}());
ErrorpageuserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-errorpageuser',
        template: __webpack_require__(837),
        styles: [__webpack_require__(813)]
    }),
    __metadata("design:paramtypes", [])
], ErrorpageuserComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/errorpageuser.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_auth) {
        this.auth = _auth;
    }
    ;
    HeaderComponent.prototype.ngOnInit = function () { };
    ;
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(838),
        styles: [__webpack_require__(814)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

;
var _a;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/header.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_loader_component__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingScreenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingScreenComponent = (function () {
    function LoadingScreenComponent() {
        this.options = {};
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
    };
    return LoadingScreenComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], LoadingScreenComponent.prototype, "options", void 0);
LoadingScreenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-loading-screen',
        template: __webpack_require__(840),
        styles: [__webpack_require__(816)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__loader_loader_component__["a" /* LoaderComponent */]]
    })
], LoadingScreenComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/loading-screen.component.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngAfterViewInit = function () { };
    ModalComponent.prototype.close = function () {
        this.caption.hide = true;
    };
    ModalComponent.prototype.clickWrapper = function ($e) {
        if ($($e.target).hasClass('modal-wrapper')) {
            this.caption.hide = true;
        }
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "caption", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__(841),
        styles: [__webpack_require__(817)]
    })
], ModalComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/modal.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolTipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a reusable tooltip component class. It is used to add tooltips that point
 *      point any element of your choice
 *
 * Usage: Wrap the tooltip element and the element it references in a div. The tooltip
 *      element has to be below the element its referencing
 */

var ToolTipComponent = (function () {
    function ToolTipComponent() {
        var randomStr = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        this.tooltipClass = 'tooltip-' + randomStr;
    }
    ToolTipComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(document).ready(function () {
            _this.tooltip = $('.' + _this.tooltipClass).parent();
            _this.tooltipRef = $(_this.elementRef);
            _this.tooltipParent = _this.tooltipRef.parent();
            // make position of parent relative
            _this.tooltipParent.css('position', 'relative');
            _this.tooltip.css('position', 'absolute');
            // calculate horizontal position for tooltip
            if (_this.position === 'right') {
                _this.xPos = _this.tooltipRef.width() + parseInt(_this.tooltipRef.css('margin-left'), 10);
            }
            else {
                _this.xPos = 0 - _this.tooltip.width() + parseInt(_this.tooltipRef.css('margin-left'), 10);
            }
            // calculate vertical position for tooltip
            _this.yPos = 0;
            if (_this.tooltip.height() < _this.tooltipRef.height()) {
                _this.yPos = ((_this.tooltipRef.height() - _this.tooltip.height()) / 2) + parseInt(_this.tooltipRef.css('margin-top'), 10);
            }
            _this.tooltip.css('left', _this.xPos);
            _this.tooltip.css('top', _this.yPos);
        });
    };
    return ToolTipComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", String)
], ToolTipComponent.prototype, "elementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", String)
], ToolTipComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(),
    __metadata("design:type", Object)
], ToolTipComponent.prototype, "tooltipWidth", void 0);
ToolTipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-tooltip',
        template: __webpack_require__(842),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [])
], ToolTipComponent);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/tooltip.component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (haystack, filter, fields) {
        if (fields === void 0) { fields = null; }
        var filtered = [];
        var hs = '';
        if (filter.trim() === '') {
            return haystack;
        }
        var allFields = fields ? fields.split(',') : null;
        var _loop_1 = function (i) {
            hs = '';
            if (allFields) {
                allFields.forEach(function (field) {
                    hs += haystack[i][field] + " ";
                });
                hs = hs.trim();
            }
            if (hs.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                filtered.push(haystack[i]);
            }
        };
        for (var i = 0; i < haystack.length; i++) {
            _loop_1(i);
        }
        return filtered;
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'searchFilter'
    })
], SearchFilterPipe);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/search-filter.pipe.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventEmitterService = (function () {
    function EventEmitterService() {
        this.emitter$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    return EventEmitterService;
}());
EventEmitterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventEmitterService);

//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/event-emitter.service.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeolocationService = (function () {
    function GeolocationService(api) {
        this.api = api;
    }
    GeolocationService.prototype.setPosition = function (position) {
        this.imglocationlat = position.coords.latitude;
        this.imglocationlong = position.coords.longitude;
    };
    ;
    GeolocationService.prototype.getLocation = function (callback) {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p) {
                _this.setPosition(p);
                _this.api.request(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* routes */].GMAP_URL + '?latlng=' + _this.imglocationlat + "," + _this.imglocationlong, 'GET', {}, { 'Accept': 'application/json' }).subscribe(function (data) {
                    callback(null, data.results[0].formatted_address);
                }, function (err) {
                    callback(err);
                });
            });
        }
        ;
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], GeolocationService);

var _a;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/geolocation.service.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_service_shared_data_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IsLoggedOutGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomerExistsGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsLoggedInGuard = (function () {
    function IsLoggedInGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    IsLoggedInGuard.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        else {
            return true;
        }
    };
    return IsLoggedInGuard;
}());
IsLoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], IsLoggedInGuard);

var IsLoggedOutGuard = (function () {
    function IsLoggedOutGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    IsLoggedOutGuard.prototype.canActivate = function () {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    return IsLoggedOutGuard;
}());
IsLoggedOutGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], IsLoggedOutGuard);

var CustomerExistsGuard = (function () {
    function CustomerExistsGuard(store, router, auth) {
        this.store = store;
        this.router = router;
        this.auth = auth;
        this.state = router.routerState;
        this.snapshot = this.state.snapshot;
    }
    CustomerExistsGuard.prototype.canActivate = function (route, state) {
        var customerId = this.getIdFromUrl(state.url);
        if (this.customerExists(customerId)) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    CustomerExistsGuard.prototype.getIdFromUrl = function (url) {
        return Number(url.replace('/form/', ''));
    };
    CustomerExistsGuard.prototype.customerExists = function (customerId) {
        var customers = this.store.getData('customers');
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].customerId === customerId) {
                return true;
            }
        }
        return false;
    };
    return CustomerExistsGuard;
}());
CustomerExistsGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__store_service_shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_service_shared_data_service__["a" /* DataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
], CustomerExistsGuard);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/route-guard.service.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/susanadelokiki/Documents/source/KYC.FieldVerifier/src/polyfills.js.map

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = ".container-fluid .menu-bar .menu {\n  position: relative; }\n  .container-fluid .menu-bar .menu span:nth-child(1) {\n    position: absolute;\n    top: calc(50% - 1.8rem);\n    font-weight: 100;\n    left: 0;\n    height: auto;\n    font-size: 1.8rem;\n    color: #FFFFFF;\n    letter-spacing: 0; }\n  .container-fluid .menu-bar .menu span.cust-name {\n    height: auto;\n    padding: 11px 27px;\n    margin-left: 0;\n    cursor: pointer;\n    -webkit-transition: opacity .2s ease-in;\n    transition: opacity .2s ease-in;\n    margin: 3.3rem 0 3.3rem 3.3rem;\n    background: #FFFFFF;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    position: relative;\n    width: 100%;\n    max-width: 20rem; }\n    .container-fluid .menu-bar .menu span.cust-name:hover {\n      opacity: 0.8; }\n    @media (max-width: 600px) {\n      .container-fluid .menu-bar .menu span.cust-name {\n        width: 100%;\n        max-width: 10rem;\n        margin: 2.5rem;\n        height: 4rem;\n        margin-right: 0; } }\n    .container-fluid .menu-bar .menu span.cust-name h1 {\n      font-size: 3rem;\n      color: #43063C;\n      float: left;\n      margin-top: -0.1rem;\n      margin-left: 1rem;\n      margin-bottom: 0; }\n      @media (max-width: 600px) {\n        .container-fluid .menu-bar .menu span.cust-name h1 {\n          font-size: 2rem;\n          margin-top: 0.5em; } }\n      .container-fluid .menu-bar .menu span.cust-name h1.numb {\n        color: #4A4A4A;\n        font-size: 1.2rem;\n        margin-top: 0.7em; }\n        @media (max-width: 600px) {\n          .container-fluid .menu-bar .menu span.cust-name h1.numb {\n            font-size: 1rem;\n            margin-top: -2rem;\n            padding-left: 2rem; } }\n\n.container-fluid .box-wrapper .custom-search {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  background: #FFFFFF;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  height: 4.28rem;\n  margin-bottom: 1rem; }\n  .container-fluid .box-wrapper .custom-search i {\n    position: absolute;\n    left: 0.8rem;\n    top: calc(50% - 0.6rem);\n    font-size: 1.3rem;\n    vertical-align: middle;\n    color: #AB0B4B; }\n  .container-fluid .box-wrapper .custom-search input {\n    display: inline-block;\n    margin: 0;\n    width: calc(100% - 4rem);\n    padding: 0 0.9rem 0 3.1rem;\n    height: 100%; }\n    .container-fluid .box-wrapper .custom-search input:focus {\n      outline: none;\n      border: none; }\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = ".menu-bar {\n  width: 100%;\n  height: 10rem;\n  background-color: #A00B40;\n  text-align: center;\n  margin-bottom: 2rem; }\n  .menu-bar .menu {\n    position: relative;\n    width: 90%;\n    display: inline-block;\n    height: 100%; }\n    .menu-bar .menu span:nth-child(1) {\n      position: absolute;\n      top: calc(50% - 1.8rem);\n      font-weight: 100;\n      left: 0;\n      height: auto;\n      font-size: 1.8rem;\n      color: #FFFFFF;\n      letter-spacing: 0; }\n    .menu-bar .menu i.fa-arrow-left {\n      color: #FFFFFF;\n      margin-top: 3.5rem;\n      float: left;\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s; }\n      .menu-bar .menu i.fa-arrow-left:hover {\n        opacity: 0.8;\n        cursor: pointer; }\n      @media (max-width: 600px) {\n        .menu-bar .menu i.fa-arrow-left {\n          margin-left: 1rem; } }\n    .menu-bar .menu span.name {\n      color: #ffffff;\n      margin: 3.3rem;\n      font-size: 1.5rem;\n      float: left; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.name {\n          margin-left: 2rem;\n          margin-top: 3.5rem;\n          margin-right: 0; } }\n    .menu-bar .menu span.cust-name {\n      margin: 3.3rem 0 3.3rem 0rem;\n      background: #FFFFFF;\n      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n      border-radius: 5px;\n      padding: 11px 27px;\n      height: auto;\n      position: relative;\n      width: 100%;\n      cursor: pointer;\n      -webkit-transition: opacity .2s ease-in;\n      transition: opacity .2s ease-in;\n      max-width: 20rem; }\n      .menu-bar .menu span.cust-name:hover {\n        opacity: 0.8; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.cust-name {\n          width: 100%;\n          max-width: 10rem;\n          margin: 2.5rem;\n          height: 4rem;\n          margin-right: 0; } }\n      .menu-bar .menu span.cust-name h1 {\n        font-size: 3rem;\n        color: #43063C;\n        float: left;\n        margin-top: -0.1rem;\n        margin-left: 1rem;\n        margin-bottom: 0; }\n        @media (max-width: 600px) {\n          .menu-bar .menu span.cust-name h1 {\n            font-size: 2rem;\n            margin-top: 0.5em; } }\n        .menu-bar .menu span.cust-name h1.numb {\n          color: #4A4A4A;\n          font-size: 1.2rem;\n          margin-top: 0.7em; }\n          @media (max-width: 600px) {\n            .menu-bar .menu span.cust-name h1.numb {\n              font-size: 1rem;\n              margin-top: -2rem;\n              padding-left: 2rem; } }\n\n.no-margin-bottom {\n  margin-bottom: 0; }\n\n.my-container {\n  width: 90%;\n  margin: auto; }\n  .my-container .body-header .create-user-button {\n    text-align: left;\n    margin-top: 1rem; }\n    .my-container .body-header .create-user-button button {\n      letter-spacing: 0;\n      height: 4.28rem; }\n    @media (min-width: 993px) {\n      .my-container .body-header .create-user-button {\n        text-align: right;\n        margin-top: 0; } }\n  .my-container .body-header .custom-search {\n    width: 80%;\n    display: inline-block;\n    position: relative;\n    background: #FFFFFF;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    height: 4.28rem; }\n    .my-container .body-header .custom-search i {\n      position: absolute;\n      left: 0.8rem;\n      top: calc(50% - 0.6rem);\n      font-size: 1.3rem;\n      vertical-align: middle;\n      color: #AB0B4B; }\n    .my-container .body-header .custom-search input {\n      display: inline-block;\n      margin: 0;\n      width: calc(100% - 4rem);\n      padding: 0 0.9rem 0 3.1rem;\n      height: 100%; }\n      .my-container .body-header .custom-search input:focus {\n        outline: none;\n        border: none; }\n  .my-container .body-header .filter-option {\n    display: inline-block;\n    margin-left: 2rem;\n    color: rgba(0, 0, 0, 0.5);\n    -webkit-transition: color .5s;\n    transition: color .5s; }\n    @media (max-width: 600px) {\n      .my-container .body-header .filter-option {\n        margin-left: 0.4rem; } }\n    .my-container .body-header .filter-option:hover {\n      cursor: pointer;\n      color: #000; }\n  .my-container .body-header .btn-wema {\n    width: auto;\n    border: 1px solid #AB0B4B;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 0 0.9rem;\n    text-transform: none; }\n  .my-container .all-customers {\n    margin-top: 5rem; }\n    .my-container .all-customers .dropdown-content a {\n      font-size: 1rem;\n      color: rgba(0, 0, 0, 0.87);\n      line-height: 20px; }\n    .my-container .all-customers .h-title {\n      opacity: 0.5;\n      font-size: 1rem;\n      color: #000000;\n      letter-spacing: 0; }\n    .my-container .all-customers .col {\n      margin-bottom: 2rem; }\n      .my-container .all-customers .col .customers {\n        padding: 2rem 1rem;\n        background: rgba(73, 73, 73, 0.05);\n        border: 1px solid rgba(73, 73, 73, 0.05);\n        border-radius: 4px;\n        -webkit-transition: background .2s;\n        transition: background .2s; }\n        .my-container .all-customers .col .customers:hover {\n          background: #AB0B4B;\n          color: white;\n          cursor: pointer; }\n          .my-container .all-customers .col .customers:hover .name {\n            color: white; }\n        .my-container .all-customers .col .customers .col {\n          margin-bottom: 0; }\n        .my-container .all-customers .col .customers .row {\n          margin-bottom: 0; }\n        .my-container .all-customers .col .customers span.name, .my-container .all-customers .col .customers span.address {\n          font-size: 1.2rem;\n          color: #43063C;\n          letter-spacing: 0;\n          line-height: 1.8rem; }\n\n.dropdown {\n  padding: 0 0.4rem; }\n  .dropdown i.fa-ellipsis-v {\n    color: #4d4d4d !important;\n    -webkit-transition: color .2s;\n    transition: color .2s; }\n  .dropdown:hover {\n    cursor: pointer; }\n    .dropdown:hover i {\n      color: #999999 !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.ddcontent {\n  display: none;\n  -webkit-transition: display .3s;\n  transition: display .3s;\n  width: 9.4rem;\n  padding: 1.2rem 0;\n  margin: 0;\n  background: #FAFAFA;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);\n  border-radius: 2px; }\n  .ddcontent li {\n    color: rgba(0, 0, 0, 0.87);\n    cursor: pointer;\n    line-height: 1.5rem;\n    width: 100%;\n    text-align: left;\n    text-transform: none;\n    padding: 1rem; }\n    .ddcontent li:hover {\n      background: #EEEEEE; }\n    .ddcontent li a {\n      color: rgba(0, 0, 0, 0.87); }\n\n.-grey {\n  opacity: .4; }\n"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = ".modal-wrapper {\n  background: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 10; }\n  .modal-wrapper .create-box {\n    background-color: #FFFFFF;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 0.8rem;\n    height: auto;\n    width: 50%;\n    margin: auto;\n    position: relative; }\n    @media (max-width: 600px) {\n      .modal-wrapper .create-box {\n        width: 90%;\n        min-width: 14rem; } }\n    .modal-wrapper .create-box .myheader {\n      height: 6rem;\n      background-color: #A00B40;\n      border-top-right-radius: 0.8rem;\n      border-top-left-radius: 0.8rem;\n      margin-top: -2rem; }\n      .modal-wrapper .create-box .myheader .header-text {\n        position: relative;\n        top: 33%; }\n        .modal-wrapper .create-box .myheader .header-text p {\n          font-size: 1.5rem;\n          color: #ffffff; }\n    .modal-wrapper .create-box .form-body {\n      padding: 2.5rem; }\n      .modal-wrapper .create-box .form-body .form-group label {\n        display: block;\n        text-align: left;\n        font-size: 1rem;\n        color: #43063C;\n        letter-spacing: 0;\n        margin-top: 1rem; }\n      .modal-wrapper .create-box .form-body .form-group p {\n        color: red;\n        text-align: left;\n        margin-top: 0; }\n      .modal-wrapper .create-box .form-body .form-group.lga select {\n        height: 3.4rem; }\n    .modal-wrapper .create-box .submit-box {\n      width: 100%;\n      background: #e8e8e8;\n      text-align: center;\n      border-bottom-right-radius: 0.8rem;\n      border-bottom-left-radius: 0.8rem; }\n      .modal-wrapper .create-box .submit-box .sbtn {\n        margin: 1.5rem;\n        height: 4rem; }\n  .modal-wrapper .dropdown-content li span {\n    color: #AB0B4B !important; }\n\ninput[type=text], input[type=password] {\n  margin: 0; }\n\n.select {\n  display: none; }\n\n.myselect {\n  display: none; }\n\ninput.select-dropdown {\n  margin: 14px 0 20px 0 !important; }\n\n.select-wrapper {\n  margin-top: 1rem !important; }\n\n.select-wrapper input.select-dropdown {\n  margin-top: 1rem !important; }\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = ".modal-wrapper {\n  background: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 10; }\n  .modal-wrapper .create-box {\n    background-color: #FFFFFF;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 0.8rem;\n    height: auto;\n    width: 50%;\n    max-width: 50rem;\n    margin: auto;\n    position: relative; }\n    @media (max-width: 600px) {\n      .modal-wrapper .create-box {\n        width: 90%;\n        min-width: 14rem; } }\n    .modal-wrapper .create-box .red-text {\n      padding: 2rem 0; }\n    .modal-wrapper .create-box .myheader {\n      height: 6rem;\n      background-color: #A00B40;\n      border-top-right-radius: 0.8rem;\n      border-top-left-radius: 0.8rem;\n      margin-top: -2rem; }\n      .modal-wrapper .create-box .myheader .header-text {\n        position: relative;\n        top: 33%; }\n        .modal-wrapper .create-box .myheader .header-text p {\n          font-size: 1.5rem;\n          color: #ffffff; }\n    .modal-wrapper .create-box .body {\n      max-height: 27rem;\n      overflow: scroll; }\n      @media (max-width: 600px) {\n        .modal-wrapper .create-box .body {\n          max-height: 35rem; } }\n    .modal-wrapper .create-box .submit-box {\n      width: 100%;\n      background: #e8e8e8;\n      text-align: center;\n      border-bottom-right-radius: 0.8rem;\n      border-bottom-left-radius: 0.8rem; }\n      .modal-wrapper .create-box .submit-box .sbtn {\n        margin: 1.5rem;\n        height: 4rem; }\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 3rem; }\n\n.wrapper .wrapper-box {\n  padding: 8rem; }\n  @media (max-width: 600px) {\n    .wrapper .wrapper-box {\n      padding: 5rem; } }\n  .wrapper .wrapper-box h5 {\n    border-bottom: 1px solid #9B9B9B; }\n  .wrapper .wrapper-box .box {\n    margin-top: 3rem;\n    margin-bottom: 2rem;\n    background: #FFFFFF;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    -webkit-transition: background-color .15s ease;\n    transition: background-color .15s ease; }\n    .wrapper .wrapper-box .box:hover {\n      background-color: #ab0b57;\n      opacity: 0.8;\n      cursor: pointer; }\n      .wrapper .wrapper-box .box:hover h1, .wrapper .wrapper-box .box:hover p {\n        color: #fff; }\n    .wrapper .wrapper-box .box .details {\n      padding: 3rem 1rem;\n      text-align: center;\n      position: relative; }\n  .wrapper .wrapper-box span {\n    float: right;\n    font-size: 1.1rem;\n    text-decoration: underline;\n    color: #AB0B4B; }\n    .wrapper .wrapper-box span:hover {\n      opacity: 0.8;\n      cursor: pointer; }\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = ".menu-bar {\n  width: 100%;\n  height: 10rem;\n  background-color: #A00B40;\n  text-align: center;\n  margin-bottom: 2rem; }\n  .menu-bar .menu {\n    width: 90%;\n    display: inline-block;\n    height: 100%; }\n    .menu-bar .menu span.name {\n      color: #ffffff;\n      margin: 3.3rem;\n      font-size: 2.4rem;\n      float: left; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.name {\n          margin-left: 2rem;\n          margin-top: 3.5rem;\n          margin-right: 0; } }\n    .menu-bar .menu span.fo {\n      color: #ffffff;\n      margin: 3.3rem;\n      font-size: 2rem;\n      float: left; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.fo {\n          margin-left: 2rem;\n          margin-top: 3.5rem;\n          margin-right: 0; } }\n    .menu-bar .menu span.dashboard {\n      float: right;\n      margin: 3.1rem 1rem;\n      background: #FFFFFF;\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 3px;\n      padding: 1rem; }\n      @media (max-width: 600px) {\n        .menu-bar .menu span.dashboard {\n          display: none; } }\n      .menu-bar .menu span.dashboard:hover {\n        opacity: 0.8;\n        cursor: pointer; }\n\n.wrapper {\n  width: 90%;\n  background: #FFFFFF;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 8px; }\n  .wrapper .left-col {\n    padding: 0;\n    box-shadow: 0 0px 5px -3px;\n    border-top-left-radius: 8px;\n    height: 900px;\n    overflow: scroll; }\n    .wrapper .left-col .cust-title {\n      background-color: #A00B40;\n      padding: 1.5rem;\n      border-top-left-radius: 8px; }\n      .wrapper .left-col .cust-title .title {\n        color: #FFFFFF;\n        font-size: 1.5rem; }\n  .wrapper .right-col {\n    padding: 0; }\n    .wrapper .right-col .info-wrapper {\n      width: 60%;\n      color: #43063C;\n      margin: 0rem 4rem; }\n      .wrapper .right-col .info-wrapper .info-box {\n        background: #FFFFFF;\n        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n        border-radius: 5px; }\n        .wrapper .right-col .info-wrapper .info-box .info-details {\n          padding: 2rem; }\n          @media (max-width: 600px) {\n            .wrapper .right-col .info-wrapper .info-box .info-details img {\n              width: 40%; } }\n          .wrapper .right-col .info-wrapper .info-box .info-details p {\n            margin: 0;\n            padding: 0; }\n          .wrapper .right-col .info-wrapper .info-box .info-details p.title {\n            font-size: 0.9rem; }\n          .wrapper .right-col .info-wrapper .info-box .info-details p.report {\n            font-size: 1.1rem; }\n      .wrapper .right-col .info-wrapper p {\n        font-size: 1.5rem;\n        padding: 1rem 1rem; }\n      .wrapper .right-col .info-wrapper .btn-box .pass {\n        width: 9rem;\n        border-radius: 0.4rem; }\n      .wrapper .right-col .info-wrapper .btn-box .fail {\n        width: 9rem;\n        color: #A00B40;\n        border: 1px solid #A00B40; }\n      .wrapper .right-col .info-wrapper .img-holder {\n        background: #FFFFFF;\n        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n        border-radius: 5px;\n        margin: 2rem 0; }\n        .wrapper .right-col .info-wrapper .img-holder .img-details {\n          padding: 1rem;\n          background-size: cover; }\n          .wrapper .right-col .info-wrapper .img-holder .img-details .building {\n            height: 25rem;\n            width: 18.5rem; }\n            @media (min-width: 601px) and (max-width: 992px) {\n              .wrapper .right-col .info-wrapper .img-holder .img-details .building {\n                width: 15rem; } }\n            @media (max-width: 600px) {\n              .wrapper .right-col .info-wrapper .img-holder .img-details .building {\n                width: 15rem; } }\n          .wrapper .right-col .info-wrapper .img-holder .img-details span {\n            padding: 1rem;\n            text-decoration: underline;\n            color: #43063C; }\n  .wrapper .cust-details {\n    padding: 0;\n    border-bottom: 1px solid rgba(151, 151, 151, 0.2); }\n    .wrapper .cust-details .details {\n      margin: 1.2rem 1rem;\n      padding-left: 38px;\n      color: #43063C; }\n      @media (max-width: 600px) {\n        .wrapper .cust-details .details {\n          margin: 1rem 0; } }\n      .wrapper .cust-details .details p {\n        margin: 0; }\n      .wrapper .cust-details .details p.top {\n        font-size: 0.9rem; }\n  .wrapper .list {\n    margin-bottom: 0;\n    color: #43063C; }\n    .wrapper .list:hover {\n      cursor: pointer; }\n      .wrapper .list:hover span {\n        color: #ffffff; }\n      .wrapper .list:hover i {\n        color: #ffffff; }\n    .wrapper .list:last-child {\n      border-bottom-left-radius: 8px; }\n    .wrapper .list .customer-name {\n      padding: 2rem; }\n      .wrapper .list .customer-name span {\n        font-size: 1.1rem; }\n\n.odd {\n  background-color: #ffffff; }\n\n.even {\n  background-color: rgba(74, 74, 74, 0.25); }\n\n.active, .wrapper .list:hover {\n  background-color: #AB0B4B; }\n\np.red-text {\n  padding: 3rem; }\n\ndiv.img-details div.building {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100% !important; }\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = ".modal-wrapper {\n  background: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 10; }\n  .modal-wrapper .create-box {\n    background-color: #FFFFFF;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 0.8rem;\n    height: auto;\n    width: 50%;\n    max-width: 50rem;\n    margin: auto;\n    position: relative; }\n    .modal-wrapper .create-box .fa-close {\n      position: absolute;\n      font-size: 1.5rem;\n      left: 10px;\n      top: 10px;\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s; }\n      .modal-wrapper .create-box .fa-close:hover {\n        opacity: 0.6;\n        cursor: pointer; }\n    @media (max-width: 600px) {\n      .modal-wrapper .create-box {\n        width: 90%;\n        min-width: 14rem; } }\n    .modal-wrapper .create-box .pageloader {\n      margin: 2rem 0rem 2rem 0rem; }\n    .modal-wrapper .create-box .myheader {\n      height: 6rem;\n      background-color: #A00B40;\n      border-top-right-radius: 0.8rem;\n      border-top-left-radius: 0.8rem;\n      margin-top: -2rem; }\n      .modal-wrapper .create-box .myheader .header-text {\n        position: relative;\n        top: 33%; }\n        .modal-wrapper .create-box .myheader .header-text p {\n          font-size: 1.5rem;\n          color: #ffffff; }\n    .modal-wrapper .create-box .body {\n      max-height: 27rem;\n      overflow: scroll; }\n      @media (max-width: 600px) {\n        .modal-wrapper .create-box .body {\n          max-height: 35rem; } }\n      .modal-wrapper .create-box .body .name p label {\n        color: #43063C; }\n      .modal-wrapper .create-box .body .cust-num p {\n        margin-top: 15px;\n        color: #4A4A4A; }\n    .modal-wrapper .create-box .submit-box {\n      width: 100%;\n      background: #e8e8e8;\n      text-align: center;\n      border-bottom-right-radius: 0.8rem;\n      border-bottom-left-radius: 0.8rem; }\n      .modal-wrapper .create-box .submit-box .sbtn {\n        margin: 1.5rem;\n        height: 4rem; }\n  .modal-wrapper .formBody {\n    max-height: 40rem;\n    overflow: scroll; }\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = ".image-viewer-wrapper {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transition: opacity .4s ease-in;\n  transition: opacity .4s ease-in; }\n  .image-viewer-wrapper img {\n    max-width: 90%;\n    height: auto;\n    max-height: 90%;\n    margin: auto; }\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = ".profile-heading {\n  margin-top: 1.6rem; }\n\n.wrapper {\n  padding: 3rem;\n  height: auto; }\n\np.heading {\n  font-size: 1.2rem;\n  color: #43063C; }\n\n.profile-box {\n  width: 100%;\n  height: 16rem;\n  box-shadow: 0 4px 20px 0;\n  color: rgba(0, 0, 0, 0.1);\n  border-radius: 0.5rem; }\n\n.img-container {\n  margin-top: 2rem;\n  margin-left: 2rem; }\n\n.img-box {\n  height: 12rem;\n  width: 12rem;\n  margin-left: 1.25rem;\n  margin-top: 2rem; }\n  @media screen and (max-width: 450px) {\n    .img-box {\n      margin-left: 0; } }\n\n.name {\n  margin-top: 2rem; }\n  @media screen and (max-width: 450px) {\n    .name {\n      margin-left: 2.3rem; } }\n\np.title {\n  font-size: 1rem;\n  color: #9B9B9B;\n  letter-spacing: 0; }\n\np.details {\n  font-size: 1.2rem;\n  color: #000000;\n  letter-spacing: 0;\n  line-height: 1.2rem; }\n\np.form {\n  padding-top: 2.5rem;\n  color: #43063C;\n  font-size: 1.2rem; }\n\n.form-box {\n  width: 100%;\n  height: auto;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n  background: #FFFFFF;\n  border-radius: 0.5rem;\n  padding: 1.5rem; }\n  .form-box .form-group {\n    margin-bottom: 2rem; }\n    .form-box .form-group label {\n      text-align: left;\n      font-size: 1rem;\n      color: #43063C;\n      letter-spacing: 0; }\n    .form-box .form-group p {\n      color: red;\n      text-align: left; }\n    .form-box .form-group input {\n      margin-bottom: 0; }\n  .form-box i.fa-camera {\n    color: #000000;\n    padding: 0.5rem; }\n  .form-box p.location {\n    color: #A00B40; }\n\n.radio-btns label {\n  font-size: 1rem;\n  margin-right: 2.3rem;\n  color: #43063C; }\n\n.radiolabel2 {\n  padding-top: 1.3rem; }\n\nlabel.radio {\n  font-size: 1rem;\n  color: #43063C;\n  margin-top: 1.6rem;\n  padding-top: 1.6rem; }\n\n.repname {\n  padding-top: 2.3rem; }\n\n.photo {\n  display: inline-block;\n  margin-top: 1rem;\n  height: 2.5rem;\n  background-color: #9B9B9B;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 0.4rem; }\n  .photo a {\n    color: #000000;\n    font-size: 1rem;\n    line-height: 1rem; }\n  .photo input {\n    display: none; }\n  .photo span {\n    color: #000000;\n    margin-right: 1em; }\n\n.btn-submit {\n  text-align: center; }\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ".customers-header {\n  width: 100%;\n  height: 8rem;\n  background-color: #43063C; }\n\np.customers {\n  color: #ffffff;\n  font-size: 1.6rem;\n  margin-left: 5.2rem;\n  padding-top: 2.6rem; }\n\n.logo {\n  margin-left: 2.4rem;\n  height: 4rem;\n  margin-top: 2rem; }\n\n.customer {\n  height: auto;\n  padding: 2rem 0; }\n\n.details {\n  width: 100%;\n  padding: 0 1rem; }\n  .details p:nth-child(2) {\n    margin-top: 0.3rem; }\n\np.name {\n  font-size: 1.2rem;\n  color: #43063C;\n  line-height: 22px; }\n\np.address {\n  font-size: 1rem;\n  color: #43063C; }\n\n.odd {\n  background-color: #ffffff; }\n\n.even {\n  background-color: rgba(74, 74, 74, 0.25); }\n\n.user-row {\n  -webkit-transition: background-color .2s ease-in;\n  transition: background-color .2s ease-in; }\n\n.user-row:hover {\n  cursor: pointer; }\n  .user-row:hover p {\n    color: #fff; }\n\n.active, .user-row:hover {\n  background-color: #AB0B4B; }\n\n.loader {\n  position: relative;\n  left: 45%; }\n\n.custom-search {\n  margin-top: 1rem;\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  background: #FFFFFF;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  height: 4.28rem;\n  margin-bottom: 2rem; }\n  .custom-search i {\n    position: absolute;\n    left: 0.8rem;\n    top: calc(50% - 0.6rem);\n    font-size: 1.3rem;\n    vertical-align: middle;\n    color: #AB0B4B; }\n  .custom-search input {\n    display: inline-block;\n    margin: 0;\n    width: calc(100% - 4rem);\n    padding: 0 0.9rem 0 3.1rem;\n    height: 100%; }\n    .custom-search input:focus {\n      outline: none;\n      border: none; }\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  height: 100%; }\n  @media (max-height: 400px) {\n    .page-wrapper .login-footer {\n      display: none !important; } }\n  .page-wrapper .login-form {\n    width: 85%;\n    padding: 4rem 0 0 0;\n    margin-left: auto;\n    margin-right: auto; }\n    .page-wrapper .login-form .server-error {\n      color: red; }\n    .page-wrapper .login-form .header {\n      margin-bottom: 4rem; }\n    .page-wrapper .login-form .body {\n      background: #FFFFFF;\n      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n      border-radius: 5px;\n      padding: 2rem; }\n      @media (min-width: 993px) {\n        .page-wrapper .login-form .body {\n          width: 40%;\n          margin: 0 auto; } }\n      @media (min-width: 601px) and (max-width: 992px) {\n        .page-wrapper .login-form .body {\n          width: 70%;\n          margin: 0 auto; } }\n      .page-wrapper .login-form .body .form-group {\n        margin-bottom: 2rem; }\n        .page-wrapper .login-form .body .form-group label {\n          display: block;\n          text-align: left;\n          font-size: 1rem;\n          color: #43063C;\n          letter-spacing: 0; }\n        .page-wrapper .login-form .body .form-group span {\n          color: red;\n          text-align: left; }\n        .page-wrapper .login-form .body .form-group input {\n          margin-bottom: 0; }\n      .page-wrapper .login-form .body button.btn-wema {\n        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n        border-radius: 4px;\n        font-size: 1rem;\n        color: #FFFFFF;\n        letter-spacing: 0;\n        line-height: 1rem; }\n\n.login-footer {\n  position: absolute;\n  bottom: 3rem;\n  width: 100%;\n  text-align: center;\n  opacity: 0.5;\n  font-size: 1rem;\n  color: #000000;\n  letter-spacing: 0;\n  line-height: 1rem; }\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ".modal-wrapper {\n  background: rgba(0, 0, 0, 0.9);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 10; }\n  .modal-wrapper p {\n    font-size: 1.5rem; }\n  .modal-wrapper .reject-box {\n    background-color: #ffffff;\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    width: 40%;\n    margin: auto; }\n  .modal-wrapper .comments {\n    padding: 2rem; }\n    .modal-wrapper .comments p {\n      margin-top: 0;\n      color: red; }\n  .modal-wrapper textarea {\n    height: 110px;\n    background: rgba(155, 155, 155, 0.05);\n    border: 1px solid #7A0060;\n    border-radius: 6px; }\n  .modal-wrapper .btn-box {\n    padding: 1.5rem; }\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = ".valign-wrapper {\n  margin-bottom: 0.7rem; }\n  .valign-wrapper .error-info {\n    background: #D0021B;\n    border-radius: 5px;\n    color: #fff;\n    margin: 0;\n    padding: 0.6rem;\n    -webkit-transition: .2s width ease-out;\n    transition: .2s width ease-out; }\n    .valign-wrapper .error-info i {\n      vertical-align: middle;\n      font-size: 20px;\n      padding-right: 5px; }\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #43063C;\n  width: 100%;\n  height: 100%; }\n  .wrapper .error {\n    text-align: center;\n    width: 100%;\n    position: fixed;\n    top: 10.3rem; }\n    .wrapper .error img.erroricon {\n      width: 20%;\n      padding-bottom: 4.5rem; }\n    .wrapper .error img.logo {\n      padding-top: 5rem; }\n    .wrapper .error p.text {\n      margin-top: 3.5rem; }\n    .wrapper .error p {\n      font-size: 1rem;\n      color: #ffffff; }\n    .wrapper .error span {\n      text-decoration: underline; }\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100%;\n  background: url(\"../../assets/images/bg image.png\") 100%;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n  .wrapper img.icon {\n    position: relative;\n    height: 6rem;\n    margin-left: 2.3rem;\n    width: 6.3rem;\n    top: 2.1rem; }\n  .wrapper .error {\n    text-align: center;\n    position: fixed;\n    width: 100%;\n    top: 20rem; }\n    .wrapper .error img.erroricon {\n      width: 15rem;\n      padding-bottom: 2.2rem; }\n    .wrapper .error p {\n      font-size: 1rem;\n      color: #ffffff;\n      letter-spacing: 0; }\n  .wrapper .help {\n    text-align: center;\n    position: fixed;\n    top: 38rem;\n    width: 100%; }\n    .wrapper .help span {\n      text-decoration: underline;\n      padding-right: 0.5rem;\n      color: #ffffff; }\n  .wrapper .footer {\n    background-image: -webkit-linear-gradient(left, #CF0923 3%, #9F073E 49%, #7F064F 97%);\n    background-image: linear-gradient(90deg, #CF0923 3%, #9F073E 49%, #7F064F 97%);\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    height: 6rem; }\n    .wrapper .footer img.footericon {\n      padding-bottom: 4.3rem;\n      float: right;\n      margin-right: 4.7rem;\n      margin-top: 2.4rem; }\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 8rem;\n  width: 100%;\n  box-shadow: 0 1px 10px 0;\n  color: rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n  position: relative;\n  z-index: 100; }\n\nbutton.logout {\n  position: absolute;\n  right: 0px;\n  margin-right: 2.5rem;\n  margin-top: 2.3rem; }\n\n.logo {\n  margin-left: 2.4rem;\n  height: 4rem;\n  margin-top: 2rem; }\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = ".custom-spinner {\n  background-image: url(\"assets/images/spin.svg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  width: 40px;\n  height: 40px;\n  display: inline-block; }\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = ".screen-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5); }\n  .screen-wrapper .loader-body {\n    display: block;\n    width: 100%; }\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = ".modal-wrapper {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 10; }\n  .modal-wrapper .modal-container {\n    background: #FFFFFF;\n    border-radius: 0.36rem;\n    color: #000;\n    width: 40%;\n    min-width: 34rem;\n    margin: auto;\n    height: auto;\n    padding: 5rem;\n    position: relative;\n    box-shadow: 6px 3px 15px 0px #dddddd; }\n    .modal-wrapper .modal-container .fa-close {\n      position: absolute;\n      font-size: 1.5rem;\n      left: 10px;\n      top: 10px;\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s; }\n      .modal-wrapper .modal-container .fa-close:hover {\n        opacity: 0.6;\n        cursor: pointer; }\n    @media (max-width: 600px) {\n      .modal-wrapper .modal-container {\n        width: 90%;\n        padding: 2rem; } }\n    .modal-wrapper .modal-container h3 {\n      font-size: 1.8rem;\n      color: #AB0B4B;\n      letter-spacing: 0;\n      text-transform: capitalize; }\n    .modal-wrapper .modal-container p {\n      font-size: 1rem;\n      color: #43063C; }\n    .modal-wrapper .modal-container .check {\n      position: absolute;\n      border-radius: 50%;\n      color: #fff;\n      top: -2.5rem;\n      left: calc(50% - 3.1rem);\n      width: 6.2rem;\n      height: 6.2rem; }\n      @media (max-width: 600px) {\n        .modal-wrapper .modal-container .check {\n          left: calc(50% - 1.5rem);\n          top: -1.5rem;\n          width: 3rem;\n          height: 3rem; } }\n      .modal-wrapper .modal-container .check i {\n        font-weight: bold; }\n        @media (max-width: 600px) {\n          .modal-wrapper .modal-container .check i {\n            font-size: 2.5rem;\n            margin-top: 2px; } }\n      .modal-wrapper .modal-container .check i.normalize {\n        font-weight: normal;\n        margin-top: 0.5rem; }\n      .modal-wrapper .modal-container .check img {\n        height: 100%; }\n    .modal-wrapper .modal-container .check.success {\n      background: #50AD59; }\n    .modal-wrapper .modal-container .check.warning {\n      background: #FF5300; }\n    .modal-wrapper .modal-container .check.error {\n      background: #E2231B; }\n    .modal-wrapper .modal-container button {\n      margin-top: 0.9rem;\n      height: 45px;\n      font-size: 1rem;\n      width: 22rem;\n      letter-spacing: 1px; }\n      @media (max-width: 600px) {\n        .modal-wrapper .modal-container button {\n          width: 100%; } }\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = ".triangle-border.right {\n  margin-left: 30px; }\n\n.triangle-border.left {\n  margin-right: 30px; }\n\n.triangle-border {\n  position: relative;\n  padding: 1rem;\n  border: 1px solid #eaeaea;\n  background-color: #fff;\n  border-radius: 6px;\n  width: 16rem;\n  color: #333; }\n\n.triangle-border.right:before {\n  top: 15px;\n  bottom: auto;\n  left: -11px;\n  border-width: 10px 12px 9px 0;\n  border-color: transparent #f2f2f2; }\n\n.triangle-border:before {\n  content: \"\";\n  position: absolute;\n  bottom: -20px;\n  left: 40px;\n  border-width: 20px 20px 0;\n  border-style: solid;\n  border-color: #f2f2f2 transparent;\n  display: block;\n  width: 0; }\n\n.triangle-border.right:after {\n  top: 15px;\n  bottom: auto;\n  left: -8px;\n  border-width: 9px 12px 11px 0;\n  border-color: transparent #ffffff; }\n\n.triangle-border:after {\n  content: \"\";\n  position: absolute;\n  bottom: -13px;\n  left: 47px;\n  border-width: 13px 13px 0;\n  border-style: solid;\n  border-color: #f2f2f2 transparent;\n  display: block;\n  width: 0; }\n\n.triangle-border.left:before {\n  top: 17px;\n  bottom: auto;\n  left: auto;\n  right: -10px;\n  border-width: 9px 0 7px 10px;\n  border-color: transparent #eaeaea; }\n\n.triangle-border.left:after {\n  top: 18px;\n  bottom: auto;\n  left: auto;\n  right: -9px;\n  border-width: 8px 0 5px 9px;\n  border-color: transparent #ffffff; }\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"loading\" [options]=\"{text: 'fetching customers'}\"></app-loading-screen>\n<app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n<div *ngIf=\"!loading\" class=\"container-fluid\">\n  <app-header></app-header>\n  <div class=\"menu-bar\">\n    <div class=\"menu\">\n      <span class=\"pull-left\">All Unassigned Customers</span>\n      <span class=\"cust-name pull-right\" (click)=\"router.navigate(['/admindashboard']);\">Go to dashboard</span>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"box-wrapper\">\n      <div class=\"row\">\n        <div class=\"col s12 l12 m12 no-col-padding\">\n          <div class=\"custom-search\">\n            <i class=\"fa fa-search\"></i>\n            <input type=\"text\" name=\"search\" placeholder=\"Search officers by name\" [(ngModel)]=\"sFilter\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"states\">\n        <div class=\"input-field col s12 m6 l6\">\n          <select class=\"select\" id=\"state\">\n            <option value=\"\" selected>Choose State</option>\n            <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.state}}</option>\n          </select>\n          <label>States</label>\n        </div>\n        <div class=\"input-field col s12 m6 l6\">\n          <select class=\"select\" id=\"city\">\n            <option value=\"\" selected>Choose City</option>\n            <option value=\"{{city.id}}\" *ngFor=\"let city of cities\">{{city.city}}</option>\n          </select>\n          <label>City</label>\n        </div>\n      </div>\n      <div class=\"row info\">\n        <p class=\"title\">All unassigned customers</p>\n        <span class=\"btns\" *ngIf=\"selectedCity && customerList.length\"> \n          <button (click)=\"showModalAssign()\" class=\"assign btn-assign\">Assign</button>\n        </span>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <table class=\"bordered\">\n        <thead>\n          <tr>  \n             <p>\n              <input type=\"checkbox\" id=\"selectAll\" name=\"selectAll\" (click) = \"toggleAll()\" />\n              <label for=\"selectAll\"></label>\n            </p>\n              <th data-field=\"id\">S/N</th>\n              <th data-field=\"name\">Customer Name</th>\n              <th data-field=\"acct\">Account Number</th>\n              <th data-field=\"dateAss\">City</th>\n              <th data-field=\"\"></th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let customer of (customerList | searchFilter: sFilter:'firstName,lastName'); let i = index\">\n            <p>\n              <input type=\"checkbox\" id=\"{{'select-'+i}}\" value='{{i}}' [formControl]=\"myForm.controls['checkbox-' + i]\"/>\n              <label for=\"{{'select-'+i}}\"></label>\n            </p>\n            <td>{{i+1}}</td>\n            <td>{{customer.firstName + ' ' + customer.lastName}}</td>\n            <td>{{customer.customerAccount}}</td>\n            <td>{{customer.customerCity}}</td>\n            <td class=\"reassign\" (click)=\"showModalAssign(customer.customerId, customer.customerCityId)\">Assign</td>\n          </tr>\n        </tbody>\n      </table>\n      </form>\n      <div class=\"box-body\"></div>\n    </div>\n  </div>\n</div>\n<app-fo-list-modal *ngIf=\"modal\" (wrapperClicked)= \"hideModal($event)\" [(options)]=\"assignOptions\"></app-fo-list-modal>\n<app-loading-screen *ngIf=\"showLoadingScreen\"></app-loading-screen>"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n<div class=\"menu-bar\">\n  <div class=\"menu\">\n    <span class=\"pull-left\">{{ title }}</span>\n    <span class=\"cust-name pull-right\" (click)=\"router.navigate(['/admindashboard']);\">Go to dasboard</span>\n  </div>\n</div>\n<div class=\"my-container\" *ngIf=\"!loading\" (click)=\"pageBodyClicked($event)\">\n  <div class=\"body-header\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l9\">\n        <div class=\"custom-search\" *ngIf=\"fOfficers.length\">\n          <i class=\"fa fa-search\"></i>\n          <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"sFilter\">\n        </div>\n        <div class=\"filter-option\" *ngIf=\"fOfficers.length\">\n          <i class=\"fa fa-filter\"></i> Filter\n        </div>\n      </div>\n      <div class=\"col s12 m12 l3 create-user-button\">\n        <button (click)=\"showModal('show', 'create')\" class=\"btn-wema\">Create new user</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"states\">\n    <div class=\"input-field col s12 m6 l6\">\n      <select class=\"select\" id=\"state\">\n        <option value=\"\" selected>Choose State</option>\n        <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.state}}</option>\n      </select>\n      <label>States</label>\n    </div>\n    <div class=\"input-field col s12 m6 l6\">\n      <select class=\"select\" id=\"city\">\n        <option value=\"\" selected>Choose City</option>\n        <option value=\"{{city.id}}\" *ngFor=\"let city of cities\">{{city.city}}</option>\n      </select>\n      <label>City</label>\n    </div>\n  </div>\n  <div class=\"all-customers\">\n    <div class=\"row\">\n      <div class=\"col s12 no-margin-bottom\"><p class=\"h-title\" *ngIf=\"fOfficers.length\">{{ title }}</p>\n      <p *ngIf=\"!fOfficers.length\" class=\"red-text\"><i class=\"fa fa-frown-o\"></i> No Available Field Officers</p>\n      </div>\n      <div class=\"col s12 m6 l4\" *ngFor=\"let customer of (fOfficers | searchFilter: sFilter: 'firstName,lastName'); let item = index\" #cs>\n        <div class=\"customers\" #customerParent>\n          <div class=\"row\">\n            <div class=\"col s2\">\n              <i id=\"circle\" class=\"fa fa-circle {{ customer.isEnable ? 'bd-green': 'bd-red'}}\"></i>\n            </div>\n            <div class=\"col s8\" (click)=\"openFOPage(customer.fieldOfficerId)\">\n              <span class=\"name truncate\">{{ customer.firstName }} {{ customer.lastName }}</span>\n              <em class=\"address\">{{ customer.assignmentCount}} customers assigned</em>\n            </div>\n            <div class=\"col s2 right-align ctx-menu dropdown\" (click) = \"openDropdown(customer.fieldOfficerId, customerParent)\" >\n              <span class=\"dropdown-{{item}} dropdown\">\n                <i class=\"fa fa-ellipsis-v dropdown\"></i>\n              </span>\n                <!-- Dropdown Structure -->\n              <ul id='context-menu-{{item}}' class='ddcontent' #ul>\n                <li (click)=\"assign(customer.fieldOfficerId, customer.citys)\" *ngIf=\"customer.isEnable\">Assign</li>\n                <li (click)=\"showModal('show', 'update', customer)\">Edit</li>\n                <li *ngIf=\"customer.isEnable\" (click)=\"disable(customer.fieldOfficerId, customerParent)\">Disable</li>\n                <li *ngIf=\"!customer.isEnable\" (click)=\"enable(customer.fieldOfficerId, customerParent)\" >Enable</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loading-screen *ngIf=\"loading\" [options]  = \"loadingScreenOptions\"></app-loading-screen>\n<app-createuser [(type)]=\"createModalType\" [(fieldOfficer)]=\"currentFieldOfficer\" (wrapperClicked)= \"hideModal($event)\" class=\"{{modal ? 'show': 'hide'}}\"></app-createuser>\n<app-fo-list-modal *ngIf=\"modalReassign\" (wrapperClicked)= \"hideModalReassign($event)\" [(options)]=\"reassignOptions\"></app-fo-list-modal>\n<app-customer-list-modal *ngIf=\"showAssign\" (wrapperClicked)=\"wrapperClicked($event)\" [(options)]=\"assignOptions\"\n></app-customer-list-modal>\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<app-image-viewer [(options)]=\"ioptions\" *ngIf=\"ioptions.show\"></app-image-viewer>\n<p (click)=\"showImage()\">Show Image</p>"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-wrapper valign-wrapper\" (click)=\"clickWrapper($event)\">\n  <div class=\"create-box\">\n    <app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n    <app-modal [(caption)]=\"modalOptions\"></app-modal>\n    <div class=\"myheader\">\n      <div class=\"header-text\">\n        <p>{{ type === 'create' ? 'Create New User' : 'Update User'}}</p>\n      </div>\n    </div>\n    <div class=\"row body no-margin-bottom\">\n      <form [formGroup]=\"newuser\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"row form-body no-margin-bottom\">\n        <div class=\"col l6 m6 s12 form-group\">\n          <label>First name</label>\n          <input type=\"text\" class=\"input-wema {{ firstnameInvalid ? 'error' : '' }}\" name=\"firstname\" (keyup)=\"clearErrors('firstname')\" formControlName=\"firstname\">\n          <p [class]=\"firstnameInvalid ? 'reveal' : 'conceal'\">First name cannot be blank</p>\n        </div>\n        <div class=\"col l6 m6 s12 form-group\">\n          <label>Last name</label>\n          <input type=\"text\" class=\"input-wema {{ lastnameInvalid ? 'error' : '' }}\" name=\"lastname\" (keyup)=\"clearErrors('lastname')\" formControlName=\"lastname\">\n          <p [class]=\"lastnameInvalid ? 'reveal' : 'conceal'\">Last name cannot be blank</p>\n        </div>\n        <div class=\"col l6 m6 s12 state form-group\">\n          <label>State</label>\n            <select class=\"input-wema\" name=\"states\" (change)=\"clearErrors('states')\" (change)=\"stateSelected($event.target.value)\" formControlName=\"states\">\n              <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.state}}</option>\n          </select>\n          <p [class]=\"stateInvalid ? 'reveal' : 'conceal'\">State cannot be blank</p>\n        </div>\n        <div class=\"input-field col l6 m6 s12 state form-group\">\n          <select class=\"input-wema myselect\" id=\"mycity\" name=\"city\" (change)=\"clearErrors('city')\" formControlName=\"city\" multiple>\n            <option value=\"\" disabled selected>Choose your option</option>\n            <option value=\"{{city.id}}\" *ngFor=\"let city of cities\">{{city.city}}</option>\n          </select>\n          <label>City</label>\n          <p [class]=\"stateInvalid ? 'reveal' : 'conceal'\">State cannot be blank</p>\n        </div>\n        <div class=\"col l6 m6 s12 form-group\">\n          <label>Mobile number</label>\n          <input type=\"text\" class=\"input-wema {{ mobileInvalid ? 'error' : '' }}\" name=\"mobile\" (keyup)=\"clearErrors('mobile')\" formControlName=\"mobile\">\n          <p [class]=\"mobileInvalid ? 'reveal' : 'conceal'\">Mobile number cannot be blank</p>\n        </div>\n        <div class=\"col s6 form-group\">\n          <label>Email address</label>\n          <input type=\"text\" class=\"input-wema {{ emailInvalid ? 'error' : '' }}\" name=\"email\" (keyup)=\"clearErrors('email')\" formControlName=\"email\">\n          <p [class]=\"emailInvalid ? 'reveal' : 'conceal'\">Email is invalid</p>\n        </div>\n      </div>\n      <div class=\"row submit-box no-margin-bottom\">\n        <button class=\"sbtn btn-submit {{ loading ? '-isloading' : ''}}\" type=\"submit\">\n          <span *ngIf=\"!loading\">{{ type === 'create' ? 'Create user' : 'Update User' }}</span>\n          <app-loader *ngIf=\"loading\" [(options)]=\"loaderOptions\"></app-loader>\n        </button>\n      </div>    \n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-wrapper valign-wrapper\" (click)=\"clickWrapper($event)\">\n  <div class=\"create-box\">\n    <div class=\"myheader\">\n      <div class=\"header-text\">\n        <p>Select customers to assign to</p>\n      </div>\n    </div>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submit()\" novalidate>\n      <div *ngIf=\"!customerList\" class=\"row body no-margin-bottom\">\n        <div class=\"col s12 m12 l12\">\n          <p class=\"red-text center-align\"><i class=\"fa fa-frown-o\"></i> No customers available</p>\n        </div>\n      </div>\n      <div *ngIf=\"customerList\" class=\"row body no-margin-bottom\">\n        <div class=\"col s12\">\n          <p>\n            <input type=\"checkbox\" name=\"selectAll\" id=\"selecttAll\" (click) = \"toggleSelectAll()\" />\n            <label for=\"selecttAll\"><em>Select All</em></label>\n          </p>\n        </div>\n        <div class=\"col s12 m6 l6\" *ngFor=\"let customer of customerList; let i = index\">\n          <p>\n            <input type=\"checkbox\" id=\"{{ 'selectt-' + i}}\" value=\"{{ i }}\" [formControl]=\"myForm.controls['checkbox-' + i]\"/>\n            <label for=\"{{ 'selectt-' + i }}\">{{ customer.firstName + ' ' + customer.lastName }}</label>\n          </p>\n        </div>\n      </div>\n    <div class=\"row submit-box no-margin-bottom\">\n      <div *ngIf=\"customerList\" class=\"btn-submit\">\n        <button class=\"sbtn btn-submit {{ loading ? '-isloading' : ''}}\" type=\"submit\"><span *ngIf=\"!loading\">Confirm and submit</span><app-loader *ngIf=\"loading\"></app-loader></button>\n      </div>\n    </div>\n    </form>\n  </div>\n</div>\n<app-modal [(caption)]=\"modalOptions\"></app-modal>"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col s12 l12 m12 center-align\">\n    <h5>Hello {{currentUserName || ''}}</h5>\n  </div>\n</div>\n<div class=\"wrapper\">\n  <div class=\"wrapper-box\">\n    <div class=\"row\">\n     <div class=\"col s12 m6 l6\">\n      <h5>Customers</h5>\n       <div class=\"box\" (click)=\"gotoCustomersPage()\">\n          <div class=\"details\">\n          <h1>{{noofCustomers ? noofCustomers : '-'}}</h1>\n          <p>Unassigned Customers</p>\n          </div>\n      </div>\n     </div>\n      <div class=\"col s12 m6 l6\">\n      <h5>Field Reports</h5>\n       <div class=\"box\" (click)= \"router.navigate(['fieldreport/all'])\">\n          <div class=\"details\">\n          <h1 *ngIf=\"fieldReports\">{{fieldReports ? fieldReports : '-'}}</h1>\n          <h1 *ngIf=\"!fieldReports\">0</h1>\n          <p>Completed Verifications</p>\n          </div>\n      </div>\n     </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12\">\n        <h5>Officers<span (click)= \"router.navigate(['allfieldofficers/all'])\">View all officers</span></h5>\n      </div>\n      <div class=\"col s12 m6 l6\">\n        <div class=\"box\" (click)= \"router.navigate(['allfieldofficers/available'])\">\n          <div class=\"details\">\n            <h1 *ngIf=\"availableOfficers\">{{availableOfficers ? availableOfficers : '-'}}</h1>\n            <h1 *ngIf=\"!availableOfficers\">0</h1>\n            <p>Available Officers</p>\n          </div>\n        </div>\n      </div>\n       <div class=\"col s12 m6 l6\">\n        <div class=\"box\" (click)= \"router.navigate(['allfieldofficers/unavailable'])\">\n          <div class=\"details\">\n            <h1 *ngIf=\"unavailableOfficers\">{{unavailableOfficers ? unavailableOfficers : '-'}}</h1>\n            <h1 *ngIf=\"!unavailableOfficers\">0</h1>\n            <p>Unavailable Officers</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"loading\"></app-loading-screen>\n<app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n<div *ngIf=\"!loading\" class=\"container-fluid\">\n  <app-header></app-header>\n  <div class=\"menu-bar\">\n    <div class=\"menu\">\n      <i class=\"fa fa-arrow-left fa-2x\" (click)=\"goBack()\" aria-hidden=\"true\"></i>\n      <span class=\"name\">{{foDetails.firstName + ' ' + foDetails.lastName }}</span>\n      <span class=\"reports\" (click)=getFoReport(foId)>View Reports</span>\n      <span class=\"dashboard\" (click)=\"router.navigate(['/admindashboard'])\">Go to Dashboard</span>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"box-wrapper\">\n      <div class=\"row\">\n        <div class=\"col s12 l12 m12 no-col-padding\">\n          <div class=\"custom-search\">\n            <i class=\"fa fa-search\"></i>\n            <input type=\"text\" name=\"search\" placeholder=\"Search officers by name\" [(ngModel)]=\"sFilter\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"states\">\n        <div class=\"input-field col s12 m6 l6\">\n          <select class=\"select\" id=\"state\">\n            <option value=\"\" selected>Choose State</option>\n            <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.state}}</option>\n          </select>\n          <label>States</label>\n        </div>\n        <div class=\"input-field col s12 m6 l6\">\n          <select class=\"select\" id=\"city\">\n            <option value=\"\" selected>Choose City</option>\n            <option value=\"{{city.id}}\" *ngFor=\"let city of cities\">{{city.city}}</option>\n          </select>\n          <label>City</label>\n        </div>\n      </div>\n      <div class=\"row info\">\n        <p class=\"title\" *ngIf=\"customerList.length\">All customers assigned to officer</p>\n        <p *ngIf=\"!customerList.length\" class=\"red-text\"><i class=\"fa fa-frown-o\"></i> No customers Assigned</p>\n        <span class=\"sort\"><i class=\"fa fa-sort-amount-desc fa-1x\" aria-hidden=\"true\"></i>Sort by</span>\n        <span class=\"btns\">\n          <button (click)=\"showModalAssign()\" class=\"assign btn-assign\">Assign</button>\n          <button *ngIf=\"customerList.length && selectedCity\" (click)=\"showModal('show')\" class=\"reassign btn-assign\">Reassign</button>\n        </span>\n      </div>\n      <form [formGroup]=\"my_form\">\n        <table class=\"bordered\" *ngIf=\"customerList.length\">\n        <thead>\n          <tr>  \n             <p>\n              <input type=\"checkbox\" id=\"selectAll\" name=\"selectAll\" (click) = \"toggleAll()\" />\n              <label for=\"selectAll\"></label>\n            </p>\n              <th data-field=\"id\">S/N</th>\n              <th data-field=\"name\">Customer Name</th>\n              <th data-field=\"acct\">Account Number</th>\n              <th data-field=\"dateAss\">City</th>\n              <th data-field=\"\"></th>\n          </tr>\n        </thead>\n\n        <tbody *ngIf=\"fetched\">\n          <tr *ngFor=\"let customer of (customerList | searchFilter: sFilter:'customerName'); let i = index\">\n            <p>\n              <input type=\"checkbox\" id=\"{{'select-'+i}}\" value='{{i}}' [formControl]=\"my_form.controls['check-box-' + i]\"/>\n              <label for=\"{{'select-'+i}}\"></label>\n            </p>\n            <td>{{i+1}}</td>\n            <td>{{customer.customerName}}</td>\n            <td>{{customer.account}}</td>\n            <td>{{customer.customerCity}}</td>\n            <td class=\"reassign\" (click)=\"showModal('show', customer.customerId, customer.customerCityId)\">Reassign</td>\n          </tr>\n        </tbody>\n      </table>\n      </form>\n      <div class=\"box-body\"></div>\n    </div>\n  </div>\n</div>\n<app-fo-list-modal *ngIf=\"modal\" (wrapperClicked)= \"hideModal($event)\" [(options)]=\"reassignOptions\"></app-fo-list-modal>\n<app-customer-list-modal *ngIf=\"showAssign\" (wrapperClicked)=\"wrapperClicked($event)\" [(options)]=\"assignOptions\"\n></app-customer-list-modal>\n<app-loading-screen *ngIf=\"loadingScreen\" [options]=\"{text: 'loading...'}\"></app-loading-screen>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n<app-modal [(caption)]=\"modalOptions\"></app-modal>\n<div class=\"menu-bar\">\n  <div class=\"menu\">\n    <span *ngIf=\"!showFo\" class=\"name\">Field Reports</span>\n    <span *ngIf=\"showFo\" class=\"fo\">{{fo.firstName + ' ' + fo.lastName}}'s Report</span>\n    <span class=\"dashboard\" (click)=\"router.navigate(['admindashboard'])\">Go to Dashboard</span>\n  </div>\n</div>\n<p *ngIf=\"!allCustomers.length\" class=\"red-text\"><i class=\"fa fa-frown-o\"></i> No field reports available</p>\n<div *ngIf=\"allCustomers.length\" class=\"row wrapper\">\n  <div class=\"left-col col s4 m4 l4\">\n    <div class=\"cust-title\">\n      <div class=\"title\">Customers</div>\n    </div>\n    <div class=\"center-align\"><app-loader class=\"loader\" *ngIf=\"loading\" [(options)]=\"loaderOptions\"></app-loader></div>\n    <div class=\"row list  {{ loading ? '-isloading' : ''}}\" *ngFor=\"let customer of allCustomers; let i=index; let odd=odd; let even=even;\" [ngClass]=\"{ odd: odd, even: even }\" \n      (click)=\"showCustomerReport(customer.customerId)\">\n      <div class=\"customer-name\">\n        <i id=\"circle\" class=\"fa fa-circle bd-green\"></i>\n        <span class=\"customer-name\">{{customer && customer.customerName ? customer.customerName : '-'}}</span>\n      </div>\n  </div>\n  </div>\n  <div class=\"right-col col s8 m8 l8\">\n    <div class=\"cust-details\">\n      <div class=\"row details\">\n          <div class=\"col s6 m4 l4 dname\">\n            <p class=\"top\">Customer name</p>\n            <p>{{customer ? customer.customerName: '-'}}</p>\n          </div>\n          <span  *ngIf=\"!showFo\" class=\"col s6 m4 l4 officer\">\n              <p class=\"top\">Field Officer</p>\n              <p>{{customer ? customer.fieldOfficer: '-'}}</p>\n          </span>\n      </div>\n    </div>\n    <div class=\"row info-wrapper\">\n        <p class=\"heading\">Submitted KYC Details</p> \n        <div class=\"row\">\n          <div class=\"col s12 m10 l10\">\n            <div class=\"info-box\">\n              <div class=\"info-details\">\n                <div class=\"row\">\n                  <p class=\"title\">Name of customer</p>\n                  <p class=\"report\">{{customer ? customer.customerName : '-'}}</p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"title\">Address visited same as on document?</p>\n                  <p class=\"report\">{{customer && customer.addressVisited ? 'Yes' : 'No'}}</p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"title\">Customer Present?</p>\n                  <p class=\"report\">{{customer && customer.customerPresent ? 'Yes' : 'No'}}</p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"title\">Description of building</p>\n                  <p class=\"report\">{{customer ? customer.description : 'No description'}}</p>\n                </div>    \n                 <div *ngIf=\"customer.nameOfPersonMet\" class=\"row\">\n                  <p class=\"title\">Person met if customer is absent</p>\n                  <p class=\"report\">{{customer ? customer.nameOfPersonMet : '-'}}</p>\n                </div>  \n                 <div *ngIf=\"customer.personMetRelationshipToCustomer\" class=\"row\">\n                  <p class=\"title\">Relationship with customer</p>\n                  <p class=\"report\">{{relationshipStatus}}</p>\n                </div>  \n                <div class=\"row\">\n                  <p class=\"title\">Landmarks</p>\n                  <p class=\"report\">{{customer ? customer.landMark : '-'}}</p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"title\">Comments</p>\n                  <p class=\"report\">{{customer ? customer.comment: '-'}}</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"img-holder\">\n                <div class=\"img-details\">\n                  <div class=\"building\" [style.backgroundImage]=\"'url(' + buildingImage + ')'\"></div>\n                  <span (click)=\"openImageViewer(buildingImage)\" class=\"pointer-on-hover\">Click to expand</span>\n                </div>\n            </div>\n          </div>\n          <div class=\"col s12 m2 l2\"> \n            <div class=\"btn-box\">\n              <p>\n                <button (click)= \"openAcceptModal()\" class=\"pass btn-wema {{ loadingbutton ? '-isloading' : ''}}\" >\n                  <span *ngIf=\"!loadingbutton\">Accept</span>\n                  <app-loader *ngIf=\"loadingbutton\" [(options)]=\"loaderOptions\"></app-loader>\n                </button>\n              </p>\n              <p><button (click)= \"showModal('show', 'reject', customer.customerAddressVerificationId, customer.fieldOfficerId)\" class=\"fail btn-logout\">Reject</button></p>\n              <p><button (click)=\"showModal('show', 'failed', customer.customerAddressVerificationId, customer.fieldOfficerId)\" class=\"fail btn-logout\">Fail</button></p>\n            </div>\n          </div>\n     </div>\n    </div>\n  </div>\n</div>\n<app-reject-report (wrapperClicked)=\"wrapperClicked($event)\" [(type)]=\"createModalType\" (failedToHandleReport)=\"failedToRejectOrFail(event)\" (reportHandled)= \"removeCustomer($event)\" [(customerAddressVerificationId)]=\"selectedCustomerVerificationId\" [(foId)]=\"selectedFieldOfficerId\" *ngIf=\"modal\"></app-reject-report>\n<app-image-viewer [(options)]=\"imageViewerOptions\" *ngIf=\"imageViewerOptions.show\"></app-image-viewer>\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-wrapper valign-wrapper\" (click)=\"clickWrapper($event)\">\n  <div class=\"create-box\">\n    <app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n    <app-modal [(caption)]=\"modalOptions\"></app-modal>\n    <i class=\"close fa fa-close\" (click)=\"clickWrapper($event)\"></i>\n    <div class=\"myheader\">\n      <div class=\"header-text\">\n        <p>Select officers to assign to</p>\n      </div>\n    </div>\n    <div *ngIf=\"cloading\" class=\"pageloader\">\n      <app-loader></app-loader> \n    </div>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" novalidate  *ngIf=\"officerList\">\n      <div class=\"formBody\">\n        <div class=\"row body no-margin-bottom\" *ngFor=\"let officer of officerList; let i = index\">\n          <div class=\"name col s6 m6 l6\">\n            <p>\n              <input type=\"radio\" id=\"{{ 'selectt-' + i}}\" value=\"{{ i }}\" [formControl]=\"myForm.controls['radio-' + i]\"/>\n              <label for=\"{{ 'selectt-' + i}}\">{{officer.firstName + ' ' + (officer.lastName || '')}}</label>\n            </p>\n          </div>\n          <div class=\"cust-num col s6 m6 l6\">\n            <p>{{officer.assignmentCount}} customers</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row submit-box no-margin-bottom\">\n        <div class=\"btn-submit\">\n          <button class=\"sbtn btn-submit {{ loading ? '-isloading' : ''}}\" type=\"submit\"><span *ngIf=\"!loading\">Confirm and submit</span><app-loader *ngIf=\"loading\"></app-loader></button>\n        </div>\n      </div>\n    </form>\n    <div *ngIf=\"!officerList\" class=\"pageloader\">\n      <app-loader></app-loader> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div class=\"image-viewer-wrapper valign-wrapper\" (click)=\"clickWrapper($event)\">\n  <img src=\"{{ options.url || 'assets/images/no-image.jpg' }}\" class=\"valign\" />\n</div>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<app-modal [(caption)]=\"modalOptions\"></app-modal>\n<app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n<app-loading-screen *ngIf=\"loading\" [(options)]=\"loadingOptions\"></app-loading-screen>\n<div class=\"container-fluid\">\n  <app-header></app-header>\n  <div class=\"wrapper\">\n  <div class=\"profile-heading\">\n    <p class=\"heading no-margin-top\">Customer Profile</p>\n  </div>\n  <div class=\"profile-box\">\n    <div class=\"row\">\n      <div class=\"col s4 m4\">\n          <img class=\"img-box\" src=\"{{ customerAvatar || 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI1xAXLnVcOlbK1CIH9F7M8SgWaqF3GavJCuuJWLubYFP1Fo0E-hk3uTE' }}\">\n      </div>\n      <div class=\"col s7 offset-s1\">\n        <div class=\"name\">\n          <p class=\"title no-margin-bottom\">Customer name</p>\n          <p class=\"details no-margin-top\">{{customerDetails.customerName}}</p>\n        </div>\n        <div class=\"name\">\n          <p class=\"title no-margin-bottom\">Home Address</p>\n          <p class=\"details no-margin-top\">{{customerDetails.address}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"form no-margin-top\">Customer Details Form</p>\n  <div class=\"form-box\">\n      <form [formGroup]=\"customer\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"radiolabel\"><label class=\"radio\">Adress visited same as on Document</label></div>\n      <div class=\"form-group radio-btns no-margin-bottom\">\n        <input class=\"with-gap\" name=\"address\" type=\"radio\" id=\"yes\" (click)=\"clearErrors('address')\" formControlName=\"address\" value=\"yes\"/>\n        <label for=\"yes\">Yes</label>\n        <input class=\"with-gap\" name=\"address\" type=\"radio\" id=\"no\" (click)=\"clearErrors('address')\" formControlName=\"address\" value=\"no\"/>\n        <label for=\"no\">No</label>\n        <p class=\"no-margin-top\" *ngIf=\"addressInvalid\">Please fill in address status</p>\n      </div>\n      <div class=\"radiolabel2\"><label class=\"radio\">Customer Present</label></div>\n      <div class=\"form-group radio-btns\">\n        <input class=\"with-gap\" name=\"presentorabsent\" type=\"radio\" id=\"yes2\" (click)=\"clearErrors('presentorabsent')\" formControlName=\"presentorabsent\" value=\"yes\"/>\n        <label for=\"yes2\">Yes</label>\n        <input class=\"with-gap\" name=\"presentorabsent\" type=\"radio\" id=\"no2\" (click)=\"clearErrors('presentorabsent')\"  formControlName=\"presentorabsent\" value=\"no\"/>\n        <label for=\"no2\">No</label>\n        <p class=\"no-margin-top\" *ngIf=\"presentorabsentInvalid\">Please fill in status of customer</p>\n      </div>\n       <div class=\"form-group repname\" *ngIf=\"this.customer.get('presentorabsent').value === 'no'\">\n        <label>Name of person seen if customer was absent</label>\n        <input type=\"text\" class=\"input-wema\" name=\"customerrep\" (keyup)=\"clearErrors('customerrep')\"  placeholder=\"Give name of rep, if customer is absent\" formControlName=\"customerrep\">\n        <p  class=\"no-margin-top\"*ngIf=\"customerRepInvalid\">Please fill in customer representative if customer was absent</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"this.customer.get('presentorabsent').value === 'no'\">\n        <label>Relationship with customer</label>\n        <select class=\"input-wema\" name=\"relation\" (change)=\"clearErrors('relation')\"  formControlName=\"relation\">\n          <option value=\"1\">Mother</option>\n          <option value=\"2\">Father</option>\n          <option value=\"3\">Brother</option>\n          <option value=\"4\">Sister</option>\n          <option value=\"5\">Cousin</option>\n          <option value=\"6\">Nephew</option>\n          <option value=\"7\">Niece</option>\n          <option value=\"8\">Aunty</option>\n          <option value=\"9\">Uncle</option>\n          <option value=\"10\">Grandmother</option>\n          <option value=\"11\">Grandfather</option>\n          <option value=\"12\" selected=\"selected\">Friend</option>\n          <option value=\"13\">Colleague</option>\n          <option value=\"14\">Other</option>\n        </select>\n        <p *ngIf=\"relationInvalid\">Fill in the relationship with the customer</p>\n      </div>\n      <div class=\"form-group\">\n        <label>Description of building</label>\n        <input type=\"text\" class=\"input-wema\" name=\"buildingdetails\" placeholder=\"e.g White colored, 2-storey building\" (keyup)=\"clearErrors('buildingdetails')\" formControlName=\"buildingdetails\">\n        <p class=\"no-margin-top\" *ngIf=\"buildingDetailsInvalid\">Please fill in description of building</p>\n      </div>\n      <div class=\"form-group\">\n        <label>Landmarks</label>\n        <input type=\"text\" class=\"input-wema\" name=\"landmark\" placeholder=\"e.g Total filling station, etc\" (keyup)=\"clearErrors('landmark')\"  formControlName=\"landmark\">\n        <p class=\"no-margin-top\" *ngIf=\"landmarkInvalid\">Please fill in the necessary landmarks</p>\n      </div>\n      <div class=\"form-group no-margin-bottom\">\n        <label>Comments</label>\n        <textarea class=\"materialize-textarea textarea-wema no-margin-bottom no-padding-bottom\" placeholder=\"Give some comments about your visit or any other important details\" (keyup)=\"clearErrors('comments')\"  data-length=\"\" name=\"comments\" formControlName=\"comments\"></textarea>\n        <p class=\"no-margin-top\" *ngIf=\"commentsInvalid\">Please fill in comments</p>\n      </div>\n      <p class=\"location no-margin-bottom\" *ngIf=\"picTaken\"><i class=\"fa fa-map-marker fa-1x\" aria-hidden=\"true\"></i> {{picTakenAt}}</p>\n      <div class=\"row previewPane no-margin-bottom\" *ngIf=\"previewLink\">\n        <div class=\"col s6\">\n           <img src='{{ previewLink }}' id=\"preview\" width=\"100px\" height=\"100px\"/>\n        </div>\n      </div>\n      <div class=\"form-group photo\">\n         <label for=\"capture\">\n          <i class=\"fa fa-camera fa-1x\" aria-hidden=\"true\"></i>\n        </label>\n        <label for=\"capture\" id=\"capture-label\">\n          <span *ngIf=\"!retake\">Take and upload photo of building</span>\n          <span *ngIf=\"retake\">Retake photo of building</span>\n        </label>\n        <input type=\"file\" accept=\"image/*\" id=\"capture\" capture=\"camera\" name=\"img\" (change)=\"clearErrors('img')\" formControlName=\"img\" (change)=\"fileChange(input)\" #input> \n        <p *ngIf=\"photoInvalid\">Please upload a photo of the building</p>\n      </div>\n      <div class=\"btn-submit\">\n        <button class=\"btn-submit {{ loading ? '-isloading' : ''}}\" type=\"submit\" [disabled]=\"loading\">Submit\n        </button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"loading\" [(options)]=\"loaderOptions\" ></app-loading-screen>\n<div *ngIf=\"!loading\" class=\"container-fluid\">\n  <app-header></app-header>\n  <app-modal *ngIf=\"serverError\" [(caption)]=\"modalOptions\"></app-modal>\n  <div class=\"customers-header\">\n      <p class=\"customers no-margin-top\">Customers to visit</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12 l12 m12\">\n      <div class=\"custom-search\">\n        <i class=\"fa fa-search\"></i>\n        <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"sFilter\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row user-row customer no-margin-bottom\" *ngFor=\"let customer of (customers | searchFilter: sFilter:'customerName,address'); let i=index; let odd=odd; let even=even;\"  \n    [ngClass]=\"{ odd: odd, even: even }\" (click)=\"openCustomerForm(customer.customerId)\">\n    <div class=\"details\">\n      <p class=\"name no-margin-top no-margin-bottom\"><i class=\"fa fa-user\"></i> {{customer.customerName}}</p>\n      <p class=\"address truncate no-margin-bottom\"><i class=\"fa fa fa-map-marker\"></i> {{customer.address}}</p>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <div class=\"login-form center-align\">\n    <div class=\"header\">\n      <img src=\"assets/images/Group.svg\" />\n    </div>\n    <div class=\"body\">\n      <form [formGroup]=\"user\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"input-wema {{ usrnameInvalid ? 'error' : '' }}\" name=\"username\" (keyup)=\"clearErrors('username')\" formControlName=\"username\">\n        <span *ngIf=\"usrnameInvalid\">username cannot be blank</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"input-wema {{ pwordInvalid ? 'error' : '' }}\" (keyup)=\"clearErrors('password')\" name=\"password\" formControlName=\"password\">\n        <span *ngIf=\"pwordInvalid\">password cannot be blank</span>\n      </div>\n      <p *ngIf=\"serverError\" class=\"center-align server-error\">{{ serverErrorMsg }}</p>\n      <button class=\"btn-wema {{ loading ? '-isloading' : ''}}\" type=\"submit\">\n        <span *ngIf=\"!loading\">Sign In</span>\n        <app-loader *ngIf=\"loading\" [(options)]=\"loaderOptions\"></app-loader>\n      </button>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"login-footer\">\n    © Wema Bank 2016\n  </div>\n</div>\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<app-modal [(caption)]=\"errorModalOptions\"></app-modal>\n<div class=\"modal-wrapper valign-wrapper\" (click)=\"clickWrapper($event)\">\n  <div class=\"reject-box\">\n    <!--<app-modal [(caption)]=\"modalOptions\"></app-modal>-->\n    <div class=\"myheader\">\n      <div class=\"header-text\">\n        <p class=\"no-margin-bottom\">{{ type === 'reject' ? 'Reject Report' : 'Fail Report'}}</p>\n      </div>\n    </div>\n    <form [formGroup]=\"validateReport\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"comments\">\n      <textarea placeholder=\"Please give a reason for this action\" formControlName=\"comment\"></textarea>\n      <p [class]=\"commentInvalid ? 'reveal' : 'conceal'\">Comment field cannot be blank</p>\n      </div>\n      <div class=\"btn-box\">\n        <button class=\"sbtn btn-submit {{ loading ? '-isloading' : ''}}\" type=\"submit\">\n          <span *ngIf=\"!loading\">{{ type === 'reject' ? 'Reject Report' : 'Fail Report' }}</span>\n          <app-loader *ngIf=\"loading\" [(options)]=\"loaderOptions\"></app-loader>\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"valign-wrapper\">\n  <p class=\"error-info valign\" [style.width]=\"errorData.width\">\n    <i class=\"material-icons\">new_releases</i>\n    <span>{{errorData.message}}</span>\n  </p>\n</div>\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"error\">\n    <img class=\"erroricon\" src=\"assets/images/~404~.png\">\n    <p>Dear human, you seem to have lost your way.</p>\n    <p>Let's help you get back <span>home.</span></p>\n    <p class=\"text\">If you keep finding yourself back here, it</p>\n    <p> might be time to get some <span>help.</span></p>\n    <img class=\"logo\" src=\"assets/images/logo.png\">\n  </div>\n</div>"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <img class=\"icon\" src=\"assets/images/logo.png\">\n  <div class=\"error\">\n    <img class=\"erroricon\" src=\"assets/images/404.png\">\n    <p class=\"no-margin-bottom\">You found this hidden error page against all odds!</p>\n    <p class=\"no-margin-top\">You deserve some help just for that</p>\n  </div>\n  <div class=\"help\">\n    <span>GO BACK HOME</span>\n    <span>READ OUR FAQs</span>\n    <span>CONTACT SUPPORT</span>\n  </div>\n  <div class=\"footer\">\n    <img class=\"footericon\" src=\"assets/images/alat-1.svg\">\n  </div>\n</div>"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<div class=\"row header no-margin-bottom \">\n  <div class=\"col s6\">\n      <img class=\"logo\" src=\"assets/images/Group.svg\" />\n  </div>\n  <div class=\"col s6\">\n    <button class=\"btn-logout logout\" (click)=\"logout()\">Logout</button>\n  </div>\n</div>\n  "

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-spinner\" [style.width]=\"options.width || '40px'\" [style.height]=\"options.height || '40px'\"></div>"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!options.hide\" class=\"screen-wrapper valign-wrapper\">\n  <div class=\"valign center-align loader-body\">\n    <app-loader></app-loader>\n    <p [style.fontSize]=\"options.textSize || '20px'\" [style.color]=\"options.textColor || '#A00B40'\">{{ options.text || 'Loading...' }}</p>\n  </div>\n</div>"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!caption.hide\" class=\"modal-wrapper center-align valign-wrapper\" [style.background]=\"caption.overlayColor || 'rgba(252,252,252,0.5)'\" (click)=\"clickWrapper($event)\">\n    <div class=\"modal-container\">\n        <i class=\"fa fa-close\" (click)=\"close()\"></i>\n        <div *ngIf=\"caption.icon\" class=\"check {{ caption.type || 'success' }}\">\n            <i class=\"large material-icons\" *ngIf=\"caption.type=='success'\">done</i>\n            <img src=\"icons/exclamation.png\" *ngIf=\"caption.type=='warning'\"/>\n            <i class=\"large material-icons\" *ngIf=\"caption.type=='error'\">close</i>\n        </div>\n        <h3 class=\"modal-title\">{{ caption ? caption.title : 'default title' }}</h3>\n        <p class=\"modal-message\">{{ caption ? caption.message : 'default message' }}</p>\n        <button *ngIf=\"caption.button\" class=\"btn-wema\" (click)=\"caption.button.action()\">{{ caption.button.text }}</button>\n    </div>\n</div>"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<div [style.width]=\"tooltipWidth || '18rem'\" class=\"triangle-border {{ position }} {{ tooltipClass }}\">\n    <ng-content></ng-content>\n</div>"

/***/ })

},[1126]);
//# sourceMappingURL=main.bundle.map