(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utilities-utilities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/item-utilities/item-utilities.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/item-utilities/item-utilities.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên tiện ích</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên tiện ích không được để trống\r\n          </div>\r\n        </div>\r\n        <label>Mô tả</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"description\"\r\n          id=\"description\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['description'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['description'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Mô tả không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Không hoạt động</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/list-utilities/list-utilities.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/list-utilities/list-utilities.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách tiện ích</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách tiện ích</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Không hoạt động</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-utilitie\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên tiện ích</th>\r\n          <th style=\"text-align: center\">Mô tả</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let utilitie of listUtilitie; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listUtilitie[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ utilitie.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{utilitie.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{utilitie.description}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"utilitie.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"utilitie.status === false\">Không hoạt động</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(utilitie, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(utilitie, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-check\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(utilitie, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getUtilitieId(utilitie.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa tiện ích</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa tiện ích này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUtilitie()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách tiện ích</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách tiện ích này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListUtilitie()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n<app-item-utilities (eventEmit)=\"getAllUtilitie()\"></app-item-utilities>\r\n");

/***/ }),

/***/ "./src/app/service/utilitie/utilitie.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/utilitie/utilitie.service.ts ***!
  \******************************************************/
/*! exports provided: UtilitieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitieService", function() { return UtilitieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`;
let UtilitieService = class UtilitieService {
    constructor(http) {
        this.http = http;
    }
    getAllUtilitie() {
        return this.http.get(API_URL + '/utilities');
    }
    getAllUtilitieStatusTrue() {
        return this.http.get(API_URL + '/utilities/statusTrue');
    }
    createUtilitie(utilitie) {
        return this.http.post(API_URL + '/utilities', utilitie);
    }
    getUtilitie(id) {
        return this.http.get(API_URL + `/utilities/${id}`);
    }
    updateUtilitie(id, utilitie) {
        return this.http.put(API_URL + `/utilities/${id}`, utilitie);
    }
    deleteUtilitie(id) {
        return this.http.delete(API_URL + `/utilities/${id}`);
    }
    deleteListUtilitie(id) {
        return this.http.post(API_URL + '/utilities/deleteList', id);
    }
};
UtilitieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UtilitieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilitieService);



/***/ }),

/***/ "./src/app/utilities/item-utilities/item-utilities.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/utilities/item-utilities/item-utilities.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdGllcy9pdGVtLXV0aWxpdGllcy9pdGVtLXV0aWxpdGllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/utilities/item-utilities/item-utilities.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/utilities/item-utilities/item-utilities.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemUtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUtilitiesComponent", function() { return ItemUtilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/utilitie/utilitie.service */ "./src/app/service/utilitie/utilitie.service.ts");





let ItemUtilitiesComponent = class ItemUtilitiesComponent {
    constructor(modalService, fb, utilitieService) {
        this.modalService = modalService;
        this.fb = fb;
        this.utilitieService = utilitieService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'tiện ích';
    }
    updateFormType(type) {
        switch (type) {
            case 'add':
                this.isInfo = false;
                this.isEdit = false;
                this.isAdd = true;
                this.title = `Thêm mới thông tin ${this.formName}`;
                break;
            case 'show':
                this.isInfo = true;
                this.isEdit = false;
                this.isAdd = false;
                this.title = `Xem chi tiết thông tin ${this.formName}`;
                break;
            case 'edit':
                this.isInfo = false;
                this.isEdit = true;
                this.isAdd = false;
                this.title = `Xác nhận thông tin ${this.formName}`;
                break;
            default:
                this.isInfo = false;
                this.isEdit = false;
                this.isAdd = true;
                break;
        }
    }
    ngOnInit() {
        this.submitted = false;
    }
    view(model, type = null) {
        this.arrCheck = this.listUtilities;
        this.open(this.childModal);
        this.type = type;
        this.model = model;
        this.submitted = false;
        this.updateFormType(type);
        if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
                name: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                description: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: false, disabled: this.isInfo }],
            });
        }
        else {
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                description: [{ value: this.model.description, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: this.isInfo }]
            });
        }
    }
    // tslint:disable-next-line:typedef
    open(content) {
        this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'sl',
        });
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    save() {
        let Utilitie;
        this.submitted = true;
        if (this.formGroup.invalid) {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Kiểm tra thông tin các trường đã nhập'
                });
            });
            return;
        }
        if (this.isEdit) {
            Utilitie = {
                name: this.formGroup.get('name').value,
                description: this.formGroup.get('description').value,
                status: this.formGroup.get('status').value,
                id: this.model.id,
            };
        }
        else {
            Utilitie = {
                name: this.formGroup.get('name').value,
                description: this.formGroup.get('description').value,
                status: this.formGroup.get('status').value,
            };
        }
        if (this.isAdd) {
            this.utilitieService.createUtilitie(Utilitie).subscribe(res => {
                this.closeModalReloadData();
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'Thêm mới thành công'
                    });
                });
                this.modalReference.dismiss();
            }, err => {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Thêm mới thất bại'
                    });
                });
            });
        }
        if (this.isEdit) {
            this.utilitieService.updateUtilitie(Utilitie.id, Utilitie).subscribe(res => {
                this.closeModalReloadData();
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'Cập nhật thành công'
                    });
                });
                this.modalReference.dismiss();
            }, err => {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Cập nhật thất bại'
                    });
                });
            });
        }
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    closeModalReloadData() {
        this.submitted = false;
        this.eventEmit.emit('success');
    }
};
ItemUtilitiesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_4__["UtilitieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], ItemUtilitiesComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemUtilitiesComponent.prototype, "listUtilities", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ItemUtilitiesComponent.prototype, "eventEmit", void 0);
ItemUtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-utilities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-utilities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/item-utilities/item-utilities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-utilities.component.scss */ "./src/app/utilities/item-utilities/item-utilities.component.scss")).default]
    })
], ItemUtilitiesComponent);



/***/ }),

/***/ "./src/app/utilities/list-utilities/list-utilities.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/utilities/list-utilities/list-utilities.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdGllcy9saXN0LXV0aWxpdGllcy9saXN0LXV0aWxpdGllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/utilities/list-utilities/list-utilities.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/utilities/list-utilities/list-utilities.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListUtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUtilitiesComponent", function() { return ListUtilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/utilitie/utilitie.service */ "./src/app/service/utilitie/utilitie.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _item_utilities_item_utilities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-utilities/item-utilities.component */ "./src/app/utilities/item-utilities/item-utilities.component.ts");






let ListUtilitiesComponent = class ListUtilitiesComponent {
    constructor(utilitieService, modalService, authenticationService) {
        this.utilitieService = utilitieService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listDelete = [];
        this.listFilterResult = [];
        this.isSelected = true;
        this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            for (const role of roleList) {
                if (role.authority === 'ROLE_USER') {
                    this.hasRoleUser = true;
                }
                if (role.authority === 'ROLE_ADMIN') {
                    this.hasRoleAdmin = true;
                }
            }
        }
    }
    ngOnInit() {
        this.getAllUtilitie();
    }
    getUtilitieId(id) {
        this.id = id;
    }
    initModal(model, type = null) {
        this.view.view(model, type);
    }
    checkAllCheckBox(ev) {
        this.listUtilitie.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedUtilitie = [...this.listUtilitie]
            .filter((utilitie) => utilitie.checked)
            .map((p) => p.id);
        if (selectedUtilitie.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    deleteUtilitie() {
        this.utilitieService.deleteUtilitie(this.id).subscribe(() => {
            this.utilitieService.getAllUtilitie().subscribe(listUtilitie => {
                this.listUtilitie = listUtilitie;
            });
            $(function () {
                $('#modal-delete').modal('hide');
            });
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Xóa thành công'
                });
            });
        }, () => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xóa thất bại'
                });
            });
        });
    }
    getAllUtilitie() {
        this.utilitieService.getAllUtilitie().subscribe(listUtilitie => {
            this.listUtilitie = listUtilitie;
            this.listFilterResult = this.listUtilitie;
            $(function () {
                $('#table-utilitie').DataTable({
                    'paging': true,
                    'lengthChange': true,
                    'searching': true,
                    'retrieve': true,
                    'ordering': false,
                    'info': false,
                    'autoWidth': true,
                });
            });
        });
    }
    deleteListUtilitie() {
        for (var i = 0; i < this.listUtilitie.length; i++) {
            if (this.listUtilitie[i].checked === true) {
                this.listDelete.push(this.listUtilitie[i].id);
            }
        }
        this.utilitieService.deleteListUtilitie(this.listDelete).subscribe(res => {
            this.getAllUtilitie();
            $(function () {
                $('#modal-delete-list').modal('hide');
            });
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Xóa thành công'
                });
            });
            this.listDelete = [];
            this.isDelete = true;
        }, err => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xóa thất bại'
                });
            });
        });
        this.getAllUtilitie();
    }
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listUtilitie = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listUtilitie = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listUtilitie = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
};
ListUtilitiesComponent.ctorParameters = () => [
    { type: _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_3__["UtilitieService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_utilities_item_utilities_component__WEBPACK_IMPORTED_MODULE_5__["ItemUtilitiesComponent"])
], ListUtilitiesComponent.prototype, "view", void 0);
ListUtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-utilities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-utilities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/list-utilities/list-utilities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-utilities.component.scss */ "./src/app/utilities/list-utilities/list-utilities.component.scss")).default]
    })
], ListUtilitiesComponent);



/***/ }),

/***/ "./src/app/utilities/utilities-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/utilities/utilities-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UtilitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesRoutingModule", function() { return UtilitiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _list_utilities_list_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-utilities/list-utilities.component */ "./src/app/utilities/list-utilities/list-utilities.component.ts");





const routes = [
    {
        path: '',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _list_utilities_list_utilities_component__WEBPACK_IMPORTED_MODULE_4__["ListUtilitiesComponent"]
    }
];
let UtilitiesRoutingModule = class UtilitiesRoutingModule {
};
UtilitiesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UtilitiesRoutingModule);



/***/ }),

/***/ "./src/app/utilities/utilities.module.ts":
/*!***********************************************!*\
  !*** ./src/app/utilities/utilities.module.ts ***!
  \***********************************************/
/*! exports provided: UtilitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesModule", function() { return UtilitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _utilities_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities-routing.module */ "./src/app/utilities/utilities-routing.module.ts");
/* harmony import */ var _list_utilities_list_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-utilities/list-utilities.component */ "./src/app/utilities/list-utilities/list-utilities.component.ts");
/* harmony import */ var _item_utilities_item_utilities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-utilities/item-utilities.component */ "./src/app/utilities/item-utilities/item-utilities.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let UtilitiesModule = class UtilitiesModule {
};
UtilitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_utilities_list_utilities_component__WEBPACK_IMPORTED_MODULE_4__["ListUtilitiesComponent"], _item_utilities_item_utilities_component__WEBPACK_IMPORTED_MODULE_5__["ItemUtilitiesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _utilities_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilitiesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], UtilitiesModule);



/***/ })

}]);
//# sourceMappingURL=utilities-utilities-module-es2015.js.map