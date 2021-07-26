(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["host-host-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/bill/bill.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/bill/bill.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách các đơn đặt</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách đơn đặt</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <label>Quản lí đơn đặt theo từng nhà : </label>\r\n      <select (change)=\"changeHouse($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn HomeStay ---</option>\r\n        <option *ngFor=\"let house of listHouseOfHost\" [value]=\"house.id\">{{house.name}}</option>\r\n      </select>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleUser\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n      <mat-form-field appearance=\"fill\" style=\"width: 30%; float: right\">\r\n        <mat-label>Lịch đặt thuê của HomeStay {{currentHouse ? currentHouse.name : ''}}</mat-label>\r\n        <input matInput [matDatepicker]=\"endDate\" [min]=\"minDate\" [matDatepickerFilter]=\"myDateFilter\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker #endDate></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"listBill != null\">\r\n      <table class=\"table table-bordered\" id=\"table-category\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Họ và tên</th>\r\n          <th style=\"text-align: center\">Số điện thoại</th>\r\n          <th style=\"text-align: center\">Ngày đặt</th>\r\n          <th style=\"text-align: center\">Ngày bắt đầu thuê</th>\r\n          <th style=\"text-align: center\">Ngày trả</th>\r\n          <th style=\"text-align: center\">Tổng tiền thanh toán</th>\r\n          <th style=\"text-align: center; width: 250px\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleUser\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let bill of listBill; index as i\">\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{bill.nameUser}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{bill.telephoneNumber}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{bill.bookingDate | date:'dd/MM/yyyy'}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{bill.startDate | date:'dd/MM/yyyy'}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{bill.endDate | date:'dd/MM/yyyy'}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{bill.totalPrice | currency:'VND'}} <br> Đã thanh toán {{bill.totalPrice / 2 | currency:'VND'}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\" *ngIf=\"bill.status != 'Đơn đặt đã bị hủy'\">{{bill.status}}</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\" *ngIf=\"bill.status == 'Đơn đặt đã bị hủy'\">{{bill.status}}</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button mat-raised-button (click)=\"openDialog(bill)\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-check\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getBill(bill)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Hủy đơn đặt</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn hủy đơn đặt này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBill()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách đơn đặt</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách đơn đặt này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListBill()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/bill/example-dialog/example-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/bill/example-dialog/example-dialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Đơn đặt của khách hàng</h1>\r\n<mat-divider></mat-divider>\r\n<div mat-dialog-content>\r\n  <form [formGroup]=\"formGroup\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <div class=\"form-group\">\r\n          <label>Họ và tên người đặt</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"nameUser\"\r\n            id=\"nameUser\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Số điện thoại</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"telephoneNumber\"\r\n            id=\"telephoneNumber\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Email</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"email\"\r\n            id=\"email\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Số tiền đã thanh toán ( VND )</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"totalPrice\"\r\n            id=\"totalPrice\"\r\n          />\r\n        </div>\r\n        <p *ngIf=\"data.voucher>100\"><span\r\n          style=\"color: red; font-weight: bold; margin-bottom: 0px\">* Voucher: </span> Bạn đã sử dụng\r\n          voucher:\r\n          Giảm {{data.voucher| currency:'VND'}} trên tổng hóa đơn</p>\r\n        <p *ngIf=\"data.voucher<100\"><span style=\"color: red; font-weight: bold\">* Voucher: </span> Bạn đã sử dụng\r\n          voucher:\r\n          Giảm {{data.voucher}}% trên tổng hóa đơn</p>\r\n        <div class=\"checkout__order__total\" *ngIf=\"data.status != 'Đã thanh toán'\">\r\n          <div *ngIf=\"checkDate ==1\">\r\n            <p style=\"font-weight: bold; text-align: center; font-size: 24px\"\r\n               *ngIf=\"this.data.voucher > 100\">Số tiền bạn cần thanh toán\r\n              là: {{(((priceService + priceHomeStay - data.voucher) * 1.2 - data.totalPrice / 2))|currency: 'VND'}}</p>\r\n            <p style=\"font-weight: bold; text-align: center; font-size: 24px\"\r\n               *ngIf=\"this.data.voucher < 100\">Số tiền bạn cần thanh toán\r\n              là: {{((((priceService + priceHomeStay) * ((100 - data.voucher) / 100))) * 1.2 - data.totalPrice / 2)|currency: 'VND'}}</p>\r\n          </div>\r\n          <div *ngIf=\"checkDate ==2\">\r\n            <p style=\"font-weight: bold; text-align: center; font-size: 24px\"\r\n               *ngIf=\"this.data.voucher > 100\">Số tiền bạn cần thanh toán\r\n              là: {{((priceService + priceHomeStay - data.voucher) - data.totalPrice / 2)|currency: 'VND'}}</p>\r\n            <p style=\"font-weight: bold; text-align: center; font-size: 24px\"\r\n               *ngIf=\"this.data.voucher < 100\">Số tiền bạn cần thanh toán\r\n              là: {{(((priceService + priceHomeStay) * ((100 - data.voucher) / 100))) - data.totalPrice / 2|currency: 'VND'}}</p>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <span style=\"font-weight: bold; color: red\"><i class=\"fas fa-exclamation-circle\"></i> Lưu ý: </span>\r\n          <span>Nếu khách hàng trả\r\n          phòng trước hợp đồng thì cộng 20% tổng hóa\r\n          đơn</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"form-group\">\r\n          <label>Ngày đặt</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"bookingDate\"\r\n            id=\"bookingDate\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field appearance=\"fill\" style=\"width: 100%\">\r\n            <mat-label>Ngày nhận HomeStay</mat-label>\r\n            <input matInput [matDatepicker]=\"startDate\" [min]=\"minDate\" [matDatepickerFilter]=\"myDateFilter\"\r\n                   formControlName=\"startDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #startDate></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field appearance=\"fill\" style=\"width: 100%\">\r\n            <mat-label>Ngày trả HomeStay</mat-label>\r\n            <input matInput [matDatepicker]=\"endDate\" [min]=\"minDate\" [matDatepickerFilter]=\"myDateFilter\"\r\n                   formControlName=\"endDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #endDate></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Dịch vụ sử dụng</label>\r\n          <button *ngIf=\"data.status !== 'Đã thanh toán'\"\r\n                  type=\"button\"\r\n                  (click)=\"addMeta($event)\"\r\n                  style=\"float: right; margin-bottom: 10px; border-radius: 5px\"\r\n                  class=\"btn-success\"\r\n          >\r\n            <i class=\"fas fa-plus\"></i>\r\n          </button>\r\n          <select *ngIf=\"data.status !== 'Đã thanh toán'\" class=\"form-control select2 select2-primary\" id=\"service\"\r\n                  name=\"service\"\r\n                  formControlName=\"service\" data-dropdown-css-class=\"select2-primary\"\r\n                  style=\"width: 100%; margin-left: 0px;\r\n    height: 46px;\r\n    border: 1px solid #ebebeb;\r\n    padding-left: 20px;\r\n    font-size: 16px;\r\n    color: #b2b2b2;\r\n    border-radius: 4px\" (ngModelChange)=\"addServiceToHouse($event)\">\r\n            <option *ngFor=\"let service of listServiceHouse\"\r\n                    [value]=\"service.id\">{{service.name}}, giá {{service.price |currency: 'VND'}}</option>\r\n          </select>\r\n        </div>\r\n        <table id=\"basicTable\">\r\n          <tbody>\r\n          <tr\r\n            *ngFor=\"let data of grid.rowData\">\r\n            <td><input matInput\r\n                       [ngModelOptions]=\"{ standalone: true }\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"data.name\"\r\n                       placeholder=\"Tên dịch vụ\"\r\n            />\r\n            </td>\r\n            <td><input matInput\r\n                       [ngModelOptions]=\"{ standalone: true }\"\r\n                       type=\"number\"\r\n                       [(ngModel)]=\"data.price\"\r\n                       placeholder=\"Giá dịch vụ\"\r\n            />\r\n            </td>\r\n            <td>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-danger\"\r\n                (click)=\"btnDeleteClickedHandler(data)\"\r\n                title=\"Xóa\"\r\n              >\r\n                <i class=\"fas fa-trash-alt\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <p class=\"btn btn-success\" style=\"font-weight: bold; float: right; margin-top: 10px\" (click)=\"addService()\"\r\n           *ngIf=\"grid.rowData.length\">Thêm</p>\r\n        <table style=\"width: 100%; margin-top: 15px\" id=\"list-Utilitie\">\r\n          <tr\r\n            *ngFor=\"\r\n                      let service of listServiceOfHouse  | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize;\r\n                      let i = index\r\n                    \">\r\n            <td><label>- {{service.name}}, giá {{service.price |currency: 'VND'}}</label></td>\r\n          </tr>\r\n        </table>\r\n        <div class=\"col-12\"\r\n             style=\"display: flex; justify-content: center;align-items: center; margin-top: 15px; margin-bottom: 15px\">\r\n          <ngb-pagination *ngIf=\"listServiceOfHouse.length\"\r\n                          [ellipses]=\"true\" [rotate]=\"true\"\r\n                          [boundaryLinks]=\"true\" [(page)]=\"page\"\r\n                          [pageSize]=\"pageSize\"\r\n                          [collectionSize]=\"this.listServiceOfHouse.length\"></ngb-pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--      <div class=\"form-group\" style=\"display:inline\" *ngIf=\"!isInfo\">-->\r\n    <!--        <label for=\"status\">Trạng thái: </label>-->\r\n    <!--        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>-->\r\n    <!--        <label class=\"status\"-->\r\n    <!--               style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;-->\r\n    <!--  padding-right: 10px;-->\r\n    <!--  border-radius: 5px;vertical-align: middle;\"-->\r\n    <!--               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Xác nhận</label>-->\r\n    <!--        <label class=\"status\"-->\r\n    <!--               style=\"background-color: red; color: #fff;text-align: center; padding-left: 10px;-->\r\n    <!--  padding-right: 10px;-->\r\n    <!--  border-radius: 5px;vertical-align: middle;\"-->\r\n    <!--               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Hủy</label>-->\r\n    <!--      </div>-->\r\n  </form>\r\n  <div id=\"pdf\" [hidden]=\"true\">\r\n    <div class=\"in-bao-gia-container\">\r\n      <div class=\"in-bao-gia-header\">\r\n        <div class=\"in-bao-gia-header-left\"><img src=\"../../../../assets/static/img/logo.png\"/></div>\r\n        <div class=\"in-bao-gia-header-right\">\r\n          <p class=\"ten-cong-ty\">CÔNG TY CHUYÊN CUNG CẤP DỊCH VỤ HOMESTAY</p>\r\n          <p>Trụ sở chính: Đồng Mạc - Tiên Hội - Đại Từ - Thái Nguyên</p>\r\n          <p>Số nhà 4 ngách 34 ngõ 27 Lạc Long Quân - Nghĩa Đô - Cầu giấy - Hà Nội</p>\r\n          <p>Hotline: 0396355470 * Website: www.ogani.vn</p>\r\n        </div>\r\n      </div>\r\n      <div style=\"margin-top: 20px\" class=\"in-bao-gia-title\">HÓA ĐƠN ĐẶT THUÊ HOMESTAY VÀ DỊCH VỤ</div>\r\n      <div class=\"date-currency\">\r\n        <p>Ngày xuất hóa đơn: <span id=\"price_time\">{{minDate | date: 'dd/MM/yyyy HH:mm:ss'}}</span></p>\r\n        <p>Đơn vị tính: <span class=\"currency\">VND</span></p>\r\n      </div>\r\n      <div class=\"in-bao-gia-title\"><h3>HomeStay</h3></div>\r\n      <table class=\"list_table\">\r\n        <tbody>\r\n        <tr style=\"white-space: nowrap;background-color: #f5f5f5;\">\r\n          <td style=\"text-align: center\"><strong>Thông tin HomeStay</strong></td>\r\n          <td style=\"text-align: center\"><strong>Ngày nhận HomeStay</strong></td>\r\n          <td style=\"text-align: center\"><strong>Ngày trả HomeStay</strong></td>\r\n          <td style=\"text-align: center\"><strong>Giảm giá từ chủ nhà</strong></td>\r\n          <td style=\"text-align: center; width: 200px\"><strong>Giá thuê</strong></td>\r\n          <td style=\"text-align: center\"><strong>Thành tiền</strong></td>\r\n        </tr> <!--  -->\r\n        <tr valign=\"middle\">\r\n          <td>- Tên HomeStay: {{data.houseBill.name}} <br> - Địa chỉ: {{data.houseBill.address}} <br> - Thể\r\n            loại: {{data.houseBill.category.name}}\r\n            <br> - Số lượng phòng: {{data.houseBill.numberRoom}}</td>\r\n          <td style=\"text-align: center\">{{data.startDate | date:'dd/MM/yyyy' }}</td>\r\n          <td style=\"text-align: center\">{{endDateFinal | date:'dd/MM/yyyy' }}</td>\r\n          <td style=\"text-align: center\"> {{data.houseBill.discount}}%</td>\r\n          <td style=\"text-align: center\">{{data.houseBill.price | currency: 'VND'}} / đêm</td>\r\n          <td style=\"text-align: center\">\r\n            {{(priceHomeStay)}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\"></td>\r\n          <td style=\"text-align: center\" colspan=\"-1\"><strong>Tổng tiền</strong></td>\r\n          <td><strong style=\"color: red; text-align: center\">{{(priceHomeStay)}}đ</strong>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n      <div *ngIf=\"data.service\" class=\"in-bao-gia-title\"><h3>Dịch vụ</h3>\r\n      </div>\r\n\r\n      <table class=\"list_table\" *ngIf=\"listServiceOfHouse\">\r\n        <tbody>\r\n        <tr style=\"white-space: nowrap;background-color: #f5f5f5;\">\r\n          <td style=\"text-align: center\"><strong>STT</strong></td>\r\n          <td style=\"text-align: center\"><strong>Tên dịch vụ</strong></td>\r\n          <td style=\"text-align: center\"><strong>Giá</strong></td>\r\n        </tr>\r\n        <tr *ngFor=\"let service of listServiceOfHouse;let i = index\">\r\n          <td style=\"text-align: center\">\r\n            {{i + 1}}\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            {{service.name}}\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            {{service.price}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"text-align: center\" colspan=\"1\"></td>\r\n          <td style=\"text-align: center\" colspan=\"-1\"><strong>Tổng tiền</strong></td>\r\n          <td style=\"text-align: center\"><strong\r\n            style=\"color: red;\">{{priceService | currency:'VND'}}</strong></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <div class=\"in-bao-gia-footer\">\r\n        <p *ngIf=\"data.voucher > 100\">Bạn sử dụng voucher: Giảm {{data.voucher | currency: 'VND'}} tổng hóa đơn</p>\r\n        <p *ngIf=\"data.voucher < 100\">Bạn sử dụng voucher: Giảm {{data.voucher}}% tổng hóa đơn</p>\r\n        <p *ngIf=\"!data.voucher\">Bạn không sử dụng vocher </p>\r\n        <h3 *ngIf=\"data.voucher > 100\" style=\"color: red; text-align: center\">Tổng tiền cần phải thanh toán\r\n          là: {{((priceService + priceHomeStay - data.voucher) - data.totalPrice / 2)|currency: 'VND'}}</h3>\r\n        <h3 *ngIf=\"data.voucher < 100\" style=\"color: red; text-align: center\">Tổng tiền cần phải thanh toán\r\n          là: {{(((priceService + priceHomeStay) * ((100 - data.voucher) / 100))) - data.totalPrice / 2|currency: 'VND'}}</h3>\r\n\r\n        <p><i class=\"fas fa-exclamation-circle\"></i> Quý khách lưu ý: Khách hàng kiểm tra kỹ hóa đơn trước khi thanh\r\n          toán, xin cảm ơn !</p>\r\n      </div>\r\n      <div class=\"in-bao-gia-footer center\">\r\n        <p>Để biết thêm chi tiết, vui lòng liên hệ:</p>\r\n        <p>Hotline: 0396355470 (8h00-21h30 hàng ngày)</p>\r\n        <p>Email: <a href=\"mailto:haidevutc@gmail.com\">haidevutc@gmail.com</a></p>\r\n        <p>CHÂN THÀNH CẢM ƠN QUÝ KHÁCH HÀNG ĐÃ SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI !</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<mat-divider></mat-divider>\r\n<mat-dialog-actions align=\"center\" class=\"button-dialog\">\r\n  <button mat-button *ngIf=\"data.status == 'Đã thuê thành công'\" class=\"btn btn-success\"\r\n          style=\"margin-left: 20px; margin-top: 20px; margin-bottom: 20px\"\r\n          (click)=\"PrintElem('pdf')\">Xuất hóa đơn <i class=\"fas fa-file-pdf\"></i>\r\n  </button>\r\n  <button mat-button (click)=\"onNoClick()\" class=\"btn btn-danger\"\r\n          style=\"margin-left: 20px; margin-top: 20px; margin-bottom: 20px\">Đóng <i class=\"fas fa-times-circle\"></i>\r\n  </button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/category/category-item/category-item.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/category/category-item/category-item.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên thể loại</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên thể loại không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\" *ngIf=\"hasRoleAdmin\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Chờ xác nhận</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/category/category.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/category/category.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách thể loại</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách thể loại</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Chờ xác nhận</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleUser\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-category\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Thể loại</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleUser\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let category of listCategory; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listCategory[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ category.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{category.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"category.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"category.status === false\">Chờ xác nhận</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(category, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(category, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getCategoryId(category.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa thể loại</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa thể loại này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCategory()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách thể loại</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách thể loại này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListCategory()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-category-item (eventEmit)=\"getAllCategory()\"></app-category-item>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/chart/chart.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/chart/chart.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Biểu đồ doanh thu</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/#\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Biểu đồ doanh thu</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div>\r\n        <h3 class=\"card-title\"><span>Biểu đồ doanh thu theo tháng </span> <span\r\n          *ngIf=\"currentHouse\">của {{currentHouse.name}}</span>\r\n          <span> năm {{currentYear}}</span></h3>\r\n      </div>\r\n      <div style=\"float: right\">\r\n        <h3 class=\"card-title\">Xem biểu đồ theo từng nhà : </h3>\r\n        <select (change)=\"changeHouse($event.target.value)\" class=\"custom-select\"\r\n                style=\" width: 200px; margin-top: -10px\">\r\n          <option [selected]=\"isSelected\" disabled>--- Chọn HomeStay ---</option>\r\n          <option *ngFor=\"let house of listHouseOfHost\" [value]=\"house.id\">{{house.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"chart\">\r\n        <canvas id=\"stackedBarChart\"\r\n                style=\"min-height: 700px; height: 700px; max-height: 700px; max-width: 100%;\"></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/house/house.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/house/house.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách HomeStay</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách HomeStay</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Chờ xác nhận</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleUser\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleUser\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-category\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleUser\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên nhà</th>\r\n          <th style=\"text-align: center\">Địa chỉ</th>\r\n          <th style=\"text-align: center\">Số lượng phòng</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleUser\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let house of listHouse; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleUser\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listHouse[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ house.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{house.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{house.address}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{house.numberRoom}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"house.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"house.status === false\">Chờ xác nhận</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(house, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(house, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getHouseId(house.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa HomeStay</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa HomeStay này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteHouse()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách HomeStay</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách HomeStay này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListHouse()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n\r\n<app-item-house (eventEmit)=\"getAllHouse()\"></app-item-house>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/house/item-house/item-house.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/house/item-house/item-house.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"form-group\">\r\n            <label>Tên nhà</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"\"\r\n              class=\"form-control\"\r\n              formControlName=\"name\"\r\n              id=\"name\"\r\n            />\r\n            <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n              <div\r\n                *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n                style=\"color: red\"\r\n              >\r\n                * Không để trống\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Địa chỉ</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"\"\r\n              class=\"form-control\"\r\n              formControlName=\"address\"\r\n              id=\"address\"\r\n            />\r\n            <div *ngIf=\"submitted && formGroup.controls['address'].errors?.required\">\r\n              <div\r\n                *ngIf=\"formGroup.controls['address'].errors?.required\"\r\n                style=\"color: red\"\r\n              >\r\n                * Không để trống\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-9\">\r\n              <label for=\"category\">Thêm tiện ích cho HomeStay</label>\r\n              <select class=\"form-control select2 select2-primary\" id=\"utilitie\" name=\"utilitie\"\r\n                      formControlName=\"utilitie\" data-dropdown-css-class=\"select2-primary\"\r\n                      style=\"width: 100%; margin-left: 0px\" (ngModelChange)=\"addUtilitieToHouse($event)\">\r\n                <option *ngFor=\"let utilitie of listUtilitie\"\r\n                        [value]=\"utilitie.id\">{{utilitie.name}}</option>\r\n              </select>\r\n\r\n              <table style=\"width: 100%; margin-top: 15px\" id=\"list-Utilitie\">\r\n                <tr *ngIf=\"listUtilitieAddToHouse.length !== 0\">\r\n                  <td><label>Danh sách tiện ích</label></td>\r\n                </tr>\r\n                <tr\r\n                  *ngFor=\"\r\n                      let utilitieAddToHouse of listUtilitieAddToHouse  | slice: (pageUtilitie-1) * pageSizeUtilitie : (pageUtilitie-1) * pageSizeUtilitie + pageSizeUtilitie;\r\n                      let i = index\r\n                    \">\r\n                  <td><label>- {{utilitieAddToHouse.name}}</label></td>\r\n                  <td style=\"width: 30px\">\r\n                    <button [hidden]=\"isInfo\" type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\"\r\n                            (click)=\"delete(utilitieAddToHouse)\">\r\n                      <i class=\"fas fa-trash-alt\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n              <div class=\"col-12\" style=\"display: flex; justify-content: center;align-items: center; margin-top: 15px\">\r\n                <ngb-pagination *ngIf=\"listUtilitieAddToHouse.length\"\r\n                                [ellipses]=\"true\" [rotate]=\"true\"\r\n                                [boundaryLinks]=\"true\" [(page)]=\"pageUtilitie\"\r\n                                [pageSize]=\"pageSizeUtilitie\"\r\n                                [collectionSize]=\"this.listUtilitieAddToHouse.length\"></ngb-pagination>\r\n              </div>\r\n              <div *ngIf=\"submitted && formGroup.controls['utilitie'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['utilitie'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"discount\">Giảm giá (%)</label>\r\n              <select class=\"form-control select2 select2-primary\" id=\"discount\" name=\"discount\"\r\n                      formControlName=\"discount\" data-dropdown-css-class=\"select2-primary\"\r\n                      style=\"width: 100%; margin-left: 0px\">\r\n                <option value=\"0\">0</option>\r\n                <option value=\"5\">5</option>\r\n                <option value=\"10\">10</option>\r\n                <option value=\"15\">15</option>\r\n                <option value=\"20\">20</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"30\">30</option>\r\n                <option value=\"35\">35</option>\r\n                <option value=\"40\">40</option>\r\n              </select>\r\n              <div *ngIf=\"submitted && formGroup.controls['discount'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['discount'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-6\">\r\n              <label>Giá thuê (VND / đêm)</label>\r\n              <input\r\n                type=\"number\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"price\"\r\n                id=\"price\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['price'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['price'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-6\">\r\n              <label>Số lượng phòng</label>\r\n              <input\r\n                type=\"number\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"numberRoom\"\r\n                id=\"numberRoom\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['numberRoom'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['numberRoom'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-6\">\r\n              <label>Diện tích (m²)</label>\r\n              <input\r\n                type=\"number\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"acreage\"\r\n                id=\"acreage\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['acreage'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['acreage'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"category\">Thể loại</label>\r\n              <select class=\"form-control select2 select2-primary\" id=\"category\" name=\"category\"\r\n                      formControlName=\"category\" data-dropdown-css-class=\"select2-primary\"\r\n                      style=\"width: 100%; margin-left: 0px\">\r\n                <option *ngFor=\"let category of listCategory\" [value]=\"category.id\">{{category.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"submitted && formGroup.controls['category'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['category'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"category\">Thêm dịch vụ cho HomeStay</label>\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"addMeta($event)\"\r\n              style=\"float: right; margin-bottom: 10px; border-radius: 5px\"\r\n              class=\"btn-success\"\r\n              [hidden]=\"isInfo\"\r\n            >\r\n              <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n            <table id=\"basicTable\">\r\n              <tbody>\r\n              <tr\r\n                *ngFor=\"let data of grid.rowData | slice: (pageService - 1) * pageSizeService:(pageService - 1) * pageSizeService + pageSizeService; let i = index\">\r\n                <td><input\r\n                  [disabled]=\"isInfo\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"data.name\"\r\n                  placeholder=\"Tên dịch vụ\"\r\n                />\r\n                  <div *ngIf=\"submitted\">\r\n                    <div\r\n                      *ngIf=\"data.validName\"\r\n                      style=\"color: red\"\r\n                    >\r\n                      * Không để trống\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td><input\r\n                  [disabled]=\"isInfo\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"data.price\"\r\n                  placeholder=\"Giá dịch vụ\"\r\n                />\r\n                  <div *ngIf=\"submitted\">\r\n                    <div\r\n                      *ngIf=\"data.validPrice\"\r\n                      style=\"color: red\"\r\n                    >\r\n                      * Không để trống\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <button\r\n                    [disabled]=\"isInfo\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-danger\"\r\n                    (click)=\"btnDeleteClickedHandler(data)\"\r\n                    title=\"Xóa\"\r\n                    [hidden]=\"isInfo\"\r\n                  >\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"col-12\" style=\"display: flex; justify-content: center;align-items: center; margin-top: 15px\">\r\n              <ngb-pagination *ngIf=\"grid.rowData.length \"\r\n                              [ellipses]=\"true\" [rotate]=\"true\"\r\n                              [boundaryLinks]=\"true\" [(page)]=\"pageService\"\r\n                              [pageSize]=\"pageSizeImage\"\r\n                              [collectionSize]=\"grid.rowData.length\"></ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group pad\">\r\n            <label for=\"description\">Mô tả chi tiết</label>\r\n            <ckeditor [editor]=\"Editor\" formControlName=\"description\"\r\n                      id=\"description\">>\r\n            </ckeditor>\r\n          </div>\r\n          <div *ngIf=\"submitted && formGroup.controls['description'].errors?.required\">\r\n            <div\r\n              *ngIf=\"formGroup.controls['description'].errors?.required\"\r\n              style=\"color: red\"\r\n            >\r\n              * Không để trống\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"image\">Chọn ảnh HomeStay</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"custom-file\">\r\n                <input [disabled]=\"isInfo\" type=\"file\" class=\"custom-file-input\" (change)=\"uploadFile($event)\"\r\n                       multiple=\"multiple\" id=\"image\" name=\"image\">\r\n                <label class=\"custom-file-label\">Choose file</label>\r\n              </div>\r\n              <div *ngIf=\"isLoading\" class=\" spinner-border\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" [hidden]=\"isInfo\">\r\n          <div class=\" clearfix col-lg-3 col-md-4 col-6 float-left\"\r\n               *ngFor=\"let image of urlPicture | slice: (pageImage-1) * pageSizeImage : (pageImage-1) * pageSizeImage + pageSizeImage index as i \">\r\n            <div class=\"img-galary\">\r\n              <p class=\"d-block mb-4 h-100\">\r\n                <span (click)=\"pushDeleteImage(image)\" class=\"close\">×</span>\r\n                <img class=\"img-fluid img-thumbnail\" [src]=\"image.link\" alt=\"\" style=\"width: 200px; height: 200px\">\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" style=\"display: flex; justify-content: center;align-items: center; margin-bottom: 30px\"\r\n             *ngIf=\"!isInfo\">\r\n          <ngb-pagination *ngIf=\"urlPicture.length\"\r\n                          [ellipses]=\"true\" [rotate]=\"true\"\r\n                          [boundaryLinks]=\"true\" [(page)]=\"pageImage\"\r\n                          [pageSize]=\"pageSizeImage\"\r\n                          [collectionSize]=\"this.urlPicture.length\"></ngb-pagination>\r\n        </div>\r\n        <div class=\"col-12\" [hidden]=\"!isInfo\">\r\n          <div\r\n            style=\"width: 1100px; text-align:center;margin:0; padding:0;\">\r\n            <ng-image-slider #nav\r\n                             [images]=\"imageObject\"\r\n                             [infinite]=\"false\"\r\n                             [autoSlide]=\"1\"\r\n                             [imageSize]=\"{width: '25%', height: 200}\"\r\n                             slideImage=\"1\"></ng-image-slider>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"hasRoleAdmin\">\r\n          <div class=\"form-group\" style=\"display:inline\">\r\n            <label for=\"status\">Trạng thái: </label>\r\n            <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n                   for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n                   for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Chờ xác nhận</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/service/service-item/service-item.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/service/service-item/service-item.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên dịch vụ</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên dịch vụ không được để trống\r\n          </div>\r\n        </div>\r\n        <label>Giá tiền dịch vụ ( VNĐ )</label>\r\n        <input\r\n          type=\"number\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"price\"\r\n          id=\"price\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['price'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['price'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Giá tiền dịch vụ\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\" *ngIf=\"hasRoleAdmin\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Chờ xác nhận</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-outline-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-outline-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/service/service.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/service/service.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách dịch vụ</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách dịch vụ</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Chờ xác nhận</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleUser\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-service\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên dịch vụ</th>\r\n          <th style=\"text-align: center\">Giá (VNĐ)</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleUser\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let service of listService; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listService[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ service.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{service.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{service.price}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"service.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"service.status === false\">Chờ xác nhận</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(service, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(service, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getserviceId(service.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa dịch vụ</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa dịch vụ này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteservice()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa dịch vụ</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách dịch vụ này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListService()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n<app-service-item (eventEmit)=\"getAllservice()\"></app-service-item>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/utilities/utilities-item/utilities-item.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/utilities/utilities-item/utilities-item.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên tiện ích</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên tiện ích không được để trống\r\n          </div>\r\n        </div>\r\n        <label>Mô tả</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"description\"\r\n          id=\"description\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['description'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['description'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Mô tả không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\" *ngIf=\"hasRoleAdmin\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Chờ xác nhận</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-outline-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-outline-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/utilities/utilities.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host/utilities/utilities.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách tiện ích</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách tiện ích</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Chờ xác nhận</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleUser\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-utilitie\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên tiện ích</th>\r\n          <th style=\"text-align: center\">Mô tả</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleUser\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let utilitie of listUtilitie; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listUtilitie[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ utilitie.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{utilitie.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{utilitie.description}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"utilitie.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"utilitie.status === false\">Chờ xác nhận</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(utilitie, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(utilitie, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getUtilitieId(utilitie.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa tiện ích</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa tiện ích này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUtilitie()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách tiện ích</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách tiện ích này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListUtilitie()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n<app-utilities-item (eventEmit)=\"getAllUtilitie()\"></app-utilities-item>\r\n");

/***/ }),

/***/ "./src/app/host/bill/bill.component.scss":
/*!***********************************************!*\
  !*** ./src/app/host/bill/bill.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvYmlsbC9iaWxsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/host/bill/bill.component.ts":
/*!*********************************************!*\
  !*** ./src/app/host/bill/bill.component.ts ***!
  \*********************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_house_house_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/house/house.service */ "./src/app/service/house/house.service.ts");
/* harmony import */ var _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/bill/bill.service */ "./src/app/service/bill/bill.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example-dialog/example-dialog.component */ "./src/app/host/bill/example-dialog/example-dialog.component.ts");









let BillComponent = class BillComponent {
    constructor(categoryService, modalService, billService, dialog, houseService, authenticationService) {
        this.categoryService = categoryService;
        this.modalService = modalService;
        this.billService = billService;
        this.dialog = dialog;
        this.houseService = houseService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listDelete = [];
        this.listFilterResult = [];
        this.listHouseDay = [];
        this.isSelected = true;
        this.minDate = new Date();
        this.myDateFilter = (d) => {
            const day = (d || new Date());
            let isHide = false;
            for (let i = 0; i < this.listHouseDay.length; i++) {
                const date = new Date(this.listHouseDay[i].date);
                if ((day.getDate() === date.getDate()) && (day.getMonth() === date.getMonth()) && (day.getFullYear() === date.getFullYear())) {
                    isHide = true;
                    break;
                }
            }
            return !isHide;
        };
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
    openDialog(bill) {
        const dialogRef = this.dialog.open(_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ExampleDialogComponent"], {
            width: '1000px',
            data: bill
        });
    }
    ngOnInit() {
        this.getllHouseByHost();
        this.houseService.currentMessage.subscribe(id => {
            if (id != null && id !== undefined && id !== '') {
                this.changeHouse(id);
            }
        });
    }
    getBill(item) {
        this.bill = item;
    }
    checkAllCheckBox(ev) {
        this.listBill.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedCategory = [...this.listBill]
            .filter((bill) => bill.checked)
            .map((p) => p.id);
        if (selectedCategory.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    deleteBill() {
        this.billService.cancelOrder(this.bill).subscribe(res => {
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
                    title: 'Hủy đơn đặt thành công'
                });
            });
            this.changeHouse(this.idHouse);
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
                    title: 'Hủy đơn đặt thất bại'
                });
            });
        });
    }
    getllHouseByHost() {
        const user = {
            id: this.currentUser.id
        };
        this.houseService.getAllHouseByUser(user).subscribe(listHouseOfHost => {
            this.listHouseOfHost = listHouseOfHost;
        });
    }
    deleteListBill() {
        for (var i = 0; i < this.listBill.length; i++) {
            if (this.listBill[i].checked === true) {
                this.listDelete.push(this.listBill[i].id);
            }
        }
        this.billService.deleteListBill(this.listDelete).subscribe(res => {
            // this.getAllCategory();
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
            this.changeHouse(this.idHouse);
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
    }
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listBill = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listBill = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listBill = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
    getHouse(id) {
        return this.houseService.getHouse(id).toPromise();
    }
    changeHouse(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.idHouse = event;
            const bill = {
                id: event
            };
            this.currentHouse = yield this.getHouse(this.idHouse);
            this.billService.getAllHouseDayByHouse(bill).subscribe(listDateByHouse => {
                this.listHouseDay = listDateByHouse;
            });
            this.billService.getAllBillByHouse(bill).subscribe(listBill => {
                this.listBill = listBill;
                this.listFilterResult = this.listBill;
                $(function () {
                    $('#table-category').DataTable({
                        'paging': true,
                        'lengthChange': true,
                        'retrieve': true,
                        'searching': true,
                        'ordering': false,
                        'info': false,
                        'autoWidth': true,
                    });
                });
            });
        });
    }
};
BillComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_5__["HouseService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
BillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/bill/bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bill.component.scss */ "./src/app/host/bill/bill.component.scss")).default]
    })
], BillComponent);



/***/ }),

/***/ "./src/app/host/bill/example-dialog/example-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/host/bill/example-dialog/example-dialog.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n}\n\n.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {\n  height: 500px !important;\n}\n\ntd,\nth {\n  padding: 8px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC9iaWxsL2V4YW1wbGUtZGlhbG9nL0M6XFxVc2Vyc1xcUGhhbnRvbVxcRG93bmxvYWRzXFxEQVRORkUvc3JjXFxhcHBcXGhvc3RcXGJpbGxcXGV4YW1wbGUtZGlhbG9nXFxleGFtcGxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9zdC9iaWxsL2V4YW1wbGUtZGlhbG9nL2V4YW1wbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9zdC9iaWxsL2V4YW1wbGUtZGlhbG9nL2V4YW1wbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uY2suY2stZWRpdG9yX19tYWluID4gLmNrLWVkaXRvcl9fZWRpdGFibGU6bm90KC5jay1mb2N1c2VkKSB7XHJcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uY2suY2stZWRpdG9yX19tYWluID4gLmNrLWVkaXRvcl9fZWRpdGFibGU6bm90KC5jay1mb2N1c2VkKSB7XG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/host/bill/example-dialog/example-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/host/bill/example-dialog/example-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDialogComponent", function() { return ExampleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/bill/bill.service */ "./src/app/service/bill/bill.service.ts");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_house_house_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/house/house.service */ "./src/app/service/house/house.service.ts");
/* harmony import */ var _service_service_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/service/service.service */ "./src/app/service/service/service.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_usageBill_usage_bill_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/usageBill/usage-bill.service */ "./src/app/service/usageBill/usage-bill.service.ts");










let ExampleDialogComponent = class ExampleDialogComponent {
    constructor(dialogRef, dialog, data, fb, usageBillService, categoryService, billService, houseService, serviceService, authenticationService) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        this.usageBillService = usageBillService;
        this.categoryService = categoryService;
        this.billService = billService;
        this.houseService = houseService;
        this.serviceService = serviceService;
        this.authenticationService = authenticationService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.listService = [];
        this.listServiceHouse = [];
        this.listServiceOfHouse = [];
        this.page = 1;
        this.pageSize = 2;
        this.submitted = false;
        this.grid = {
            rowData: []
        };
        this.listHouseDay = [];
        this.minDate = new Date();
        this.myDateFilter = (d) => {
            this.checkDate = 0;
            this.priceHomeStay = 0;
            const sd = new Date(this.formGroup.get('startDate').value).getTime();
            const ed = new Date(this.formGroup.get('endDate').value).getTime();
            this.endDateFinal = new Date(this.formGroup.get('endDate').value);
            this.date = new Date(this.data.endDate);
            if (this.date.getTime() - ed > 0) {
                this.checkDate = 1;
            }
            else {
                this.checkDate = 2;
            }
            this.priceHomeStay = ((((ed - sd) / 86400000)) * this.data.houseBill.price) * ((100 - this.data.houseBill.discount) / 100);
            const day = (d || new Date());
            let isHide = false;
            for (let i = 0; i < this.listHouseDay.length; i++) {
                const date = new Date(this.listHouseDay[i].date);
                if ((day.getDate() === date.getDate()) && (day.getMonth() === date.getMonth()) && (day.getFullYear() === date.getFullYear())) {
                    isHide = true;
                    break;
                }
            }
            return !isHide;
        };
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
        if (this.data.status == 'Đã thanh toán') {
            this.formGroup = fb.group({
                nameUser: [{ value: this.data.nameUser, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                telephoneNumber: [{ value: this.data.telephoneNumber, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                totalPrice: [{ value: this.data.totalPrice / 2, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [{ value: this.data.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                bookingDate: [{ value: this.data.bookingDate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                startDate: [{ value: this.data.startDate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                endDate: [{ value: this.data.endDate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                service: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
        else {
            this.formGroup = fb.group({
                nameUser: [{ value: this.data.nameUser, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                telephoneNumber: [{ value: this.data.telephoneNumber, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                totalPrice: [{ value: this.data.totalPrice / 2, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [{ value: this.data.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                bookingDate: [{ value: this.data.bookingDate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                startDate: [{ value: this.data.startDate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                endDate: [{ value: this.data.endDate, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                service: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
    }
    ngOnInit() {
        this.listServiceOfHouse = this.data.service;
        const house = {
            id: this.data.houseBill.id
        };
        this.serviceService.getAllServiceStatusTrue(house).subscribe(listService => {
            this.listServiceHouse = listService;
        });
        const bill = {
            endDate: this.data.endDate,
            houseBill: {
                id: this.data.houseBill.id
            }
        };
        this.billService.getAllHouseDayByHouseBill(bill).subscribe(listDateByHouse => {
            this.listHouseDay = listDateByHouse;
        });
        this.priceService = 0;
        for (let i = 0; i < this.listServiceOfHouse.length; i++) {
            this.priceService += this.listServiceOfHouse[i].price;
        }
    }
    addServiceToHouse(id) {
        const utilitie1 = this.listServiceHouse
            .filter((utilitie) => utilitie.id == id);
        const utilitie2 = this.listServiceOfHouse
            .filter((utilitie) => utilitie1[0].id == utilitie.id);
        if (utilitie2.length == 0) {
            this.listServiceOfHouse.push(utilitie1[0]);
        }
        this.countPrice();
    }
    addMeta(event) {
        const model = {
            name: '',
            price: '',
            status: true,
        };
        this.grid.rowData.push(model);
    }
    btnDeleteClickedHandler(event) {
        const indexOfItem = this.grid.rowData.indexOf(event);
        this.grid.rowData.splice(indexOfItem, 1);
    }
    countPrice() {
        // tslint:disable-next-line:prefer-const
        this.priceService = 0;
        for (let i = 0; i < this.listServiceOfHouse.length; i++) {
            this.priceService += this.listServiceOfHouse[i].price;
        }
    }
    addService() {
        this.grid.rowData.map((item) => {
            if (item.price > 0) {
                this.listServiceOfHouse.push(item);
                this.countPrice();
            }
            else {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Kiểm tra lại giá dịch vụ'
                    });
                });
            }
        });
    }
    PrintElem(elem) {
        var mywindow = window.open('', 'PRINT', 'height=' + screen.height + ',width=' + screen.width + ' fullscreen=yes');
        mywindow.document.write('<html>');
        mywindow.document.write('<head>');
        mywindow.document.write('<link rel="stylesheet" href="../../../../assets/static/css/bootstrap.min.css" type="text/css">');
        mywindow.document.write('<link media="all" rel="stylesheet" href="../../../../assets/static/css/styleprint.css"/>');
        mywindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>');
        mywindow.document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>');
        mywindow.document.write('<script media="all" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>');
        mywindow.document.write('</head>');
        mywindow.document.write('<body >');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        if (this.data.voucher != null || this.data.voucher !== undefined) {
            if (this.data.voucher > 100) {
                // tslint:disable-next-line:max-line-length
                this.totalPrice = (this.priceService + this.priceHomeStay) - this.data.voucher;
            }
            else {
                // tslint:disable-next-line:max-line-length
                this.totalPrice = (this.priceService + this.priceHomeStay) * ((100 - this.data.voucher) / 100);
            }
        }
        else {
            this.totalPrice = (this.priceService + this.priceHomeStay);
        }
        this.bill = {
            nameUser: this.data.nameUser,
            telephoneNumber: this.data.telephoneNumber,
            bookingDate: this.data.bookingDate,
            startDate: this.data.startDate,
            endDate: this.data.endDate,
            endDateFinal: this.formGroup.get('endDate').value,
            email: this.data.email,
            totalPrice: this.totalPrice,
            service: JSON.stringify(this.listServiceOfHouse),
            bill: { id: this.data.id },
            voucher: this.data.voucher,
            houseBill: {
                id: this.data.houseBill.id
            },
            idHost: this.data.houseBill.user.id
        };
        let bill;
        bill = {
            id: this.data.id
        };
        this.usageBillService.createUsageBill(this.bill).subscribe(res1 => {
            this.billService.pay(bill).subscribe(res => {
                setTimeout(function () {
                    mywindow.print();
                    mywindow.close();
                }, 1000);
                this.createMessage();
                this.dialogRef.close();
            });
        });
    }
    onNoClick() {
        this.listServiceOfHouse = [];
        this.dialogRef.close();
    }
    createMessage() {
        this.houseService.changeMessage(this.data.houseBill.id);
    }
};
ExampleDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _service_usageBill_usage_bill_service__WEBPACK_IMPORTED_MODULE_9__["UsageBillService"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"] },
    { type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_6__["HouseService"] },
    { type: _service_service_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ExampleDialogComponent.prototype, "eventEmit", void 0);
ExampleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/bill/example-dialog/example-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example-dialog.component.scss */ "./src/app/host/bill/example-dialog/example-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ExampleDialogComponent);



/***/ }),

/***/ "./src/app/host/category/category-item/category-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/host/category/category-item/category-item.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvY2F0ZWdvcnkvY2F0ZWdvcnktaXRlbS9jYXRlZ29yeS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/host/category/category-item/category-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/host/category/category-item/category-item.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function() { return CategoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");






let CategoryItemComponent = class CategoryItemComponent {
    constructor(modalService, fb, categoryService, authenticationService) {
        this.modalService = modalService;
        this.fb = fb;
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'thể loại';
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
                this.title = `Chỉnh sửa thông tin ${this.formName}`;
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
        this.arrCheck = this.listcategorys;
        this.open(this.childModal);
        this.type = type;
        this.model = model;
        this.submitted = false;
        this.updateFormType(type);
        if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
                name: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: false, disabled: true }],
            });
        }
        else {
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: true }]
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
        let category;
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
            category = {
                name: this.formGroup.get('name').value,
                status: this.formGroup.get('status').value,
                id: this.model.id,
            };
        }
        else {
            category = {
                name: this.formGroup.get('name').value,
                status: this.formGroup.get('status').value,
            };
        }
        if (this.isAdd) {
            this.categoryService.createCategory(category).subscribe(res => {
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
            this.categoryService.updateCategory(category.id, category).subscribe(res => {
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
CategoryItemComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], CategoryItemComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoryItemComponent.prototype, "listcategorys", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoryItemComponent.prototype, "eventEmit", void 0);
CategoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/category/category-item/category-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-item.component.scss */ "./src/app/host/category/category-item/category-item.component.scss")).default]
    })
], CategoryItemComponent);



/***/ }),

/***/ "./src/app/host/category/category.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/host/category/category.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/host/category/category.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/host/category/category.component.ts ***!
  \*****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _category_item_category_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-item/category-item.component */ "./src/app/host/category/category-item/category-item.component.ts");






let CategoryComponent = class CategoryComponent {
    constructor(categoryService, modalService, authenticationService) {
        this.categoryService = categoryService;
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
        this.getAllCategory();
    }
    getCategoryId(id) {
        this.id = id;
    }
    initModal(model, type = null) {
        this.view.view(model, type);
    }
    checkAllCheckBox(ev) {
        this.listCategory.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedCategory = [...this.listCategory]
            .filter((category) => category.checked)
            .map((p) => p.id);
        if (selectedCategory.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    deleteCategory() {
        this.categoryService.deleteCategory(this.id).subscribe(() => {
            this.categoryService.getAllCategory().subscribe(listCategory => {
                this.listCategory = listCategory;
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
    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
            this.listFilterResult = this.listCategory;
            $(function () {
                $('#table-category').DataTable({
                    'paging': true,
                    'lengthChange': true,
                    'retrieve': true,
                    'searching': true,
                    'ordering': false,
                    'info': false,
                    'autoWidth': true,
                });
            });
        });
    }
    deleteListCategory() {
        for (var i = 0; i < this.listCategory.length; i++) {
            if (this.listCategory[i].checked === true) {
                this.listDelete.push(this.listCategory[i].id);
            }
        }
        this.categoryService.deleteListCategory(this.listDelete).subscribe(res => {
            this.getAllCategory();
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
        this.getAllCategory();
    }
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listCategory = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listCategory = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listCategory = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_5__["CategoryItemComponent"])
], CategoryComponent.prototype, "view", void 0);
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.scss */ "./src/app/host/category/category.component.scss")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/host/chart/chart.component.scss":
/*!*************************************************!*\
  !*** ./src/app/host/chart/chart.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/host/chart/chart.component.ts":
/*!***********************************************!*\
  !*** ./src/app/host/chart/chart.component.ts ***!
  \***********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_usageBill_usage_bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/usageBill/usage-bill.service */ "./src/app/service/usageBill/usage-bill.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_house_house_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/house/house.service */ "./src/app/service/house/house.service.ts");





let ChartComponent = class ChartComponent {
    constructor(usageBillService, authenticationService, houseService) {
        this.usageBillService = usageBillService;
        this.authenticationService = authenticationService;
        this.houseService = houseService;
        this.isSelected = true;
        this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    }
    ngOnInit() {
        if (this.idHouse == null || this.idHouse === undefined) {
            this.drawChart();
        }
        this.getllHouseByHost();
    }
    drawChart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentYear = new Date().getFullYear();
            let monthTotalBought = [];
            for (let i = 0; i < 12; i++) {
                let totalSpendByBought = yield this.sumTotalPrice(i + 1, this.currentYear, this.currentUser.id);
                if (totalSpendByBought == null) {
                    totalSpendByBought = 0;
                }
                monthTotalBought.push(totalSpendByBought);
            }
            let areaChartData = {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
                    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',],
                datasets: [
                    {
                        label: 'Tổng doanh thu',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: monthTotalBought
                    },
                ]
            };
            // @ts-ignore
            let barChartData = jQuery.extend(true, {}, areaChartData);
            let stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d');
            // @ts-ignore
            let stackedBarChartData = jQuery.extend(true, {}, barChartData);
            let stackedBarChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true
                        }]
                }
            };
            let stackedBarChart = new Chart(stackedBarChartCanvas, {
                type: 'bar',
                data: stackedBarChartData,
                options: stackedBarChartOptions
            });
        });
    }
    sumTotalPrice(month, year, id) {
        return this.usageBillService.sumPrice(month, year, id).toPromise();
    }
    sumTotalPriceByHouse(month, year, idHost, idHouse) {
        return this.usageBillService.sumPriceByHouse(month, year, idHost, idHouse).toPromise();
    }
    changeHouse(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.idHouse = event;
            const bill = {
                id: event
            };
            this.currentHouse = yield this.getHouse(this.idHouse);
            this.currentYear = new Date().getFullYear();
            let monthTotalBought = [];
            let monthTotalGet = [];
            for (let i = 0; i < 12; i++) {
                let totalSpendByBought = yield this.sumTotalPrice(i + 1, this.currentYear, this.currentUser.id);
                let totalGetByMonth = yield this.sumTotalPriceByHouse(i + 1, this.currentYear, this.currentUser.id, this.idHouse);
                if (totalSpendByBought == null) {
                    totalSpendByBought = 0;
                }
                if (totalGetByMonth == null) {
                    totalGetByMonth = 0;
                }
                monthTotalBought.push(totalSpendByBought);
                monthTotalGet.push(totalGetByMonth);
            }
            let areaChartData = {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
                    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',],
                datasets: [
                    {
                        label: this.currentHouse.name,
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: monthTotalGet
                    },
                    {
                        label: 'Tổng doanh thu',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: monthTotalBought
                    }
                ]
            };
            // @ts-ignore
            let barChartData = jQuery.extend(true, {}, areaChartData);
            let stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d');
            // @ts-ignore
            let stackedBarChartData = jQuery.extend(true, {}, barChartData);
            let stackedBarChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true
                        }]
                }
            };
            let stackedBarChart = new Chart(stackedBarChartCanvas, {
                type: 'bar',
                data: stackedBarChartData,
                options: stackedBarChartOptions
            });
        });
    }
    getHouse(id) {
        return this.houseService.getHouse(id).toPromise();
    }
    getllHouseByHost() {
        const user = {
            id: this.currentUser.id
        };
        this.houseService.getAllHouseByUser(user).subscribe(listHouseOfHost => {
            this.listHouseOfHost = listHouseOfHost;
        });
    }
};
ChartComponent.ctorParameters = () => [
    { type: _service_usageBill_usage_bill_service__WEBPACK_IMPORTED_MODULE_2__["UsageBillService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_4__["HouseService"] }
];
ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/chart/chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart.component.scss */ "./src/app/host/chart/chart.component.scss")).default]
    })
], ChartComponent);



/***/ }),

/***/ "./src/app/host/host-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/host/host-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostRoutingModule", function() { return HostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./house/house.component */ "./src/app/host/house/house.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/host/category/category.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/service.component */ "./src/app/host/service/service.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/host/bill/bill.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/host/utilities/utilities.component.ts");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/host/chart/chart.component.ts");










const routes = [
    {
        path: '',
        redirectTo: 'chart',
        pathMatch: 'full'
    },
    {
        path: 'house',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _house_house_component__WEBPACK_IMPORTED_MODULE_3__["HouseComponent"],
    }, {
        path: 'category',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
    }, {
        path: 'service',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _service_service_component__WEBPACK_IMPORTED_MODULE_5__["ServiceComponent"],
    }, {
        path: 'bill',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__["BillComponent"],
    }, {
        path: 'utilities',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_7__["UtilitiesComponent"],
    },
    {
        path: 'chart',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"],
    }
];
let HostRoutingModule = class HostRoutingModule {
};
HostRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HostRoutingModule);



/***/ }),

/***/ "./src/app/host/host.module.ts":
/*!*************************************!*\
  !*** ./src/app/host/host.module.ts ***!
  \*************************************/
/*! exports provided: HostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostModule", function() { return HostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _host_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./host-routing.module */ "./src/app/host/host-routing.module.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./house/house.component */ "./src/app/host/house/house.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/category.component */ "./src/app/host/category/category.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.component */ "./src/app/host/service/service.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/host/bill/bill.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/host/utilities/utilities.component.ts");
/* harmony import */ var _category_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category-item/category-item.component */ "./src/app/host/category/category-item/category-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_service_item_service_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/service-item/service-item.component */ "./src/app/host/service/service-item/service-item.component.ts");
/* harmony import */ var _utilities_utilities_item_utilities_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilities/utilities-item/utilities-item.component */ "./src/app/host/utilities/utilities-item/utilities-item.component.ts");
/* harmony import */ var _house_item_house_item_house_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./house/item-house/item-house.component */ "./src/app/host/house/item-house/item-house.component.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bill_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bill/example-dialog/example-dialog.component */ "./src/app/host/bill/example-dialog/example-dialog.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/host/chart/chart.component.ts");




















let HostModule = class HostModule {
};
HostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_house_house_component__WEBPACK_IMPORTED_MODULE_4__["HouseComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_7__["BillComponent"], _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_8__["UtilitiesComponent"], _category_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_9__["CategoryItemComponent"], _service_service_item_service_item_component__WEBPACK_IMPORTED_MODULE_12__["ServiceItemComponent"], _utilities_utilities_item_utilities_item_component__WEBPACK_IMPORTED_MODULE_13__["UtilitiesItemComponent"], _house_item_house_item_house_component__WEBPACK_IMPORTED_MODULE_14__["ItemHouseComponent"], _bill_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ExampleDialogComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_19__["ChartComponent"]],
        entryComponents: [_bill_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ExampleDialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _host_routing_module__WEBPACK_IMPORTED_MODULE_3__["HostRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_15__["NgImageSliderModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]
        ]
    })
], HostModule);



/***/ }),

/***/ "./src/app/host/house/house.component.scss":
/*!*************************************************!*\
  !*** ./src/app/host/house/house.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG91c2UvaG91c2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/host/house/house.component.ts":
/*!***********************************************!*\
  !*** ./src/app/host/house/house.component.ts ***!
  \***********************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_house_house_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/house/house.service */ "./src/app/service/house/house.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _item_house_item_house_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-house/item-house.component */ "./src/app/host/house/item-house/item-house.component.ts");






let HouseComponent = class HouseComponent {
    constructor(houseService, modalService, authenticationService) {
        this.houseService = houseService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listFilterResult = [];
        this.listDelete = [];
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
        this.getAllHouse();
    }
    getHouseId(id) {
        this.id = id;
    }
    initModal(model, type = null) {
        this.view.view(model, type);
    }
    checkAllCheckBox(ev) {
        this.listHouse.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedHouse = [...this.listHouse]
            .filter((house) => house.checked)
            .map((p) => p.id);
        if (selectedHouse.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    deleteHouse() {
        this.houseService.deleteHouse(this.id).subscribe(() => {
            this.getAllHouse();
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
    getAllHouse() {
        let user;
        user = {
            id: this.currentUser.id
        };
        this.houseService.getAllHouseByUser(user).subscribe(listHouse => {
            this.listHouse = listHouse;
            this.listFilterResult = this.listHouse;
            $(function () {
                $('#table-category').DataTable({
                    'paging': true,
                    'lengthChange': true,
                    'retrieve': true,
                    'searching': true,
                    'ordering': false,
                    'info': false,
                    'autoWidth': true,
                });
            });
        });
    }
    deleteListHouse() {
        for (var i = 0; i < this.listHouse.length; i++) {
            if (this.listHouse[i].checked === true) {
                this.listDelete.push(this.listHouse[i].id);
            }
        }
        this.houseService.deleteListHouse(this.listDelete).subscribe(res => {
            this.getAllHouse();
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
        this.getAllHouse();
    }
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listHouse = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listHouse = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listHouse = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
};
HouseComponent.ctorParameters = () => [
    { type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_3__["HouseService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_house_item_house_component__WEBPACK_IMPORTED_MODULE_5__["ItemHouseComponent"])
], HouseComponent.prototype, "view", void 0);
HouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./house.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/house/house.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./house.component.scss */ "./src/app/host/house/house.component.scss")).default]
    })
], HouseComponent);



/***/ }),

/***/ "./src/app/host/house/item-house/item-house.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/host/house/item-house/item-house.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n}\n\n.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {\n  height: 500px !important;\n}\n\ntd,\nth {\n  padding: 8px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC9ob3VzZS9pdGVtLWhvdXNlL0M6XFxVc2Vyc1xcUGhhbnRvbVxcRG93bmxvYWRzXFxEQVRORkUvc3JjXFxhcHBcXGhvc3RcXGhvdXNlXFxpdGVtLWhvdXNlXFxpdGVtLWhvdXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob3N0L2hvdXNlL2l0ZW0taG91c2UvaXRlbS1ob3VzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG91c2UvaXRlbS1ob3VzZS9pdGVtLWhvdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uY2suY2stZWRpdG9yX19tYWluID4gLmNrLWVkaXRvcl9fZWRpdGFibGU6bm90KC5jay1mb2N1c2VkKSB7XHJcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uY2suY2stZWRpdG9yX19tYWluID4gLmNrLWVkaXRvcl9fZWRpdGFibGU6bm90KC5jay1mb2N1c2VkKSB7XG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/host/house/item-house/item-house.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/host/house/item-house/item-house.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemHouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHouseComponent", function() { return ItemHouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_house_house_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/house/house.service */ "./src/app/service/house/house.service.ts");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/utilitie/utilitie.service */ "./src/app/service/utilitie/utilitie.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__);










let ItemHouseComponent = class ItemHouseComponent {
    constructor(modalService, fb, houseService, categoryService, utilitieService, authenticationService) {
        this.modalService = modalService;
        this.fb = fb;
        this.houseService = houseService;
        this.categoryService = categoryService;
        this.utilitieService = utilitieService;
        this.authenticationService = authenticationService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.listUtilitieAddToHouse = [];
        this.myItems = [];
        this.arrayPicture = [];
        this.urlPicture = [];
        this.isLoading = false;
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'HomeStay';
        this.imageObject = [];
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.grid = {
            rowData: []
        };
        this.pageUtilitie = 1;
        this.pageSizeUtilitie = 2;
        this.pageImage = 1;
        this.pageSizeImage = 4;
        this.pageService = 1;
        this.pageSizeService = 4;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__;
        this.config = {
            toolbar: [
                'heading',
                '|',
                'bold',
                'italic',
                'Alignment',
                'Autoformat',
                'BlockQuote',
                'CKFinder',
                'CKFinderUploadAdapter',
                'Image',
                'Link',
                'Table',
                'TableToolbar',
                'TextTransformation',
                'MediaEmbed',
            ],
        };
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
                this.title = `Chỉnh sửa thông tin ${this.formName}`;
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
        this.getAllCategory();
        this.getAllUtilitie();
        this.idUser = JSON.parse(localStorage.getItem('user') || '{id}').id;
    }
    view(model, type = null) {
        this.open(this.childModal);
        this.type = type;
        this.model = model;
        this.submitted = false;
        this.updateFormType(type);
        if (model.id === null || model.id === undefined) {
            this.grid.rowData = [];
            this.formGroup = this.fb.group({
                name: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                address: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                description: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                numberRoom: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                category: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                utilitie: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                acreage: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: false, disabled: true }],
            });
        }
        else {
            this.listUtilitieAddToHouse = this.model.utilitie;
            this.grid.rowData = this.model.services;
            this.urlPicture = this.model.images;
            this.listUtilitieAddToHouse = this.model.utilitie;
            for (var i = 0; i < this.urlPicture.length; i++) {
                this.imageObject[i] = {
                    image: this.urlPicture[i].link,
                    thumbImage: this.urlPicture[i].link
                };
            }
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                address: [{ value: this.model.address, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                description: [{ value: this.model.description, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                numberRoom: [{ value: this.model.numberRoom, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [{ value: this.model.price, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: [{ value: this.model.discount, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                category: [{ value: this.model.category.id, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                utilitie: [{ value: this.model.utilitie, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                acreage: [{ value: this.model.acreage, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: true }]
            });
        }
    }
    // tslint:disable-next-line:typedef
    open(content) {
        this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'xl',
        });
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    save() {
        let house;
        this.submitted = true;
        if (this.formGroup.invalid && this.validCategoryMeta() === false) {
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
            house = {
                name: this.formGroup.get('name').value,
                address: this.formGroup.get('address').value,
                description: this.formGroup.get('description').value,
                acreage: this.formGroup.get('acreage').value,
                numberRoom: this.formGroup.get('numberRoom').value,
                discount: this.formGroup.get('discount').value,
                status: this.formGroup.get('status').value,
                price: this.formGroup.get('price').value,
                category: {
                    id: this.formGroup.get('category').value
                },
                utilitie: this.listUtilitieAddToHouse,
                user: {
                    id: this.idUser
                },
                id: this.model.id,
                images: this.urlPicture,
                services: this.grid.rowData
            };
        }
        else {
            house = {
                name: this.formGroup.get('name').value,
                address: this.formGroup.get('address').value,
                description: this.formGroup.get('description').value,
                acreage: this.formGroup.get('acreage').value,
                numberRoom: this.formGroup.get('numberRoom').value,
                discount: this.formGroup.get('discount').value,
                status: this.formGroup.get('status').value,
                price: this.formGroup.get('price').value,
                numberHires: 0,
                category: {
                    id: this.formGroup.get('category').value
                },
                utilitie: this.listUtilitieAddToHouse,
                user: {
                    id: this.idUser
                },
                images: this.urlPicture,
                services: this.grid.rowData
            };
        }
        if (this.isAdd) {
            this.houseService.createHouse(house).subscribe(res => {
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
                // this.grid.rowData = [];
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
            this.houseService.updateHouse(house.id, house).subscribe(res => {
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
                this.imageObject = [];
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
            this.listUtilitieAddToHouse = [];
            this.urlPicture = [];
            return 'by clicking on a backdrop';
        }
        else {
            this.listUtilitieAddToHouse = [];
            this.urlPicture = [];
            return `with: ${reason}`;
        }
    }
    closeModalReloadData() {
        this.submitted = false;
        this.eventEmit.emit('success');
    }
    getAllCategory() {
        this.categoryService.getAllCategoryStatusTrue().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllUtilitie() {
        this.utilitieService.getAllUtilitieStatusTrue().subscribe(listUtilitie => {
            this.listUtilitie = listUtilitie;
        });
    }
    addUtilitieToHouse(id) {
        const utilitie1 = this.listUtilitie
            .filter((utilitie) => utilitie.id == id);
        const utilitie2 = this.listUtilitieAddToHouse
            .filter((utilitie) => utilitie1[0].id == utilitie.id);
        if (utilitie2.length == 0) {
            this.listUtilitieAddToHouse.push(utilitie1[0]);
        }
    }
    delete(id) {
        const indexOf = this.listUtilitieAddToHouse.indexOf(id);
        this.listUtilitieAddToHouse.splice(indexOf, 1);
    }
    // Upload avt
    uploadFile(event) {
        this.myItems = [];
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            this.myItems.push(files[i]);
        }
        this.uploadAll(this.myItems);
    }
    uploadAll(imge) {
        this.isLoading = true;
        Promise.all(imge.map(file => this.putStorageItem(file)))
            .then((url) => {
            this.arrayPicture = url;
            for (var i = 0; i < this.arrayPicture.length; i++) {
                this.urlPicture.push(this.arrayPicture[i]);
                this.imageObject[i] = {
                    image: this.arrayPicture[i].link,
                    thumbImage: this.arrayPicture[i].link
                };
            }
            this.isLoading = false;
        })
            .catch((error) => {
            this.isLoading = false;
        });
    }
    putStorageItem(file) {
        // the return value will be a Promise
        const metadata = {
            contentType: 'image/jpeg',
        };
        return new Promise((resolve, reject) => {
            firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref('img/' + Date.now()).put(file, metadata)
                .then(snapshot => {
                snapshot.ref.getDownloadURL().then(downloadURL => {
                    const link = { link: downloadURL };
                    // @ts-ignore
                    resolve(link);
                });
            })
                .catch(error => reject(error));
        });
    }
    pushDeleteImage(i) {
        const indexOf = this.urlPicture.indexOf(i);
        this.urlPicture.splice(indexOf, 1);
    }
    onClick() {
        myTest();
    }
    addMeta(event) {
        const model = {
            name: '',
            price: '',
            status: true,
            validName: false,
            validPrice: false,
        };
        this.grid.rowData.push(model);
    }
    btnDeleteClickedHandler(event) {
        const indexOfItem = this.grid.rowData.indexOf(event);
        this.grid.rowData.splice(indexOfItem, 1);
    }
    validCategoryMeta() {
        let flag = false;
        this.grid.rowData.forEach((item) => {
            if (item.name === '' || item.name === null || item.name === undefined) {
                item.validName = true;
                flag = true;
            }
            else {
                item.validName = false;
                flag = false;
            }
            if (item.price === '' || item.price === null || item.price === undefined) {
                item.validPrice = true;
                flag = true;
            }
            else {
                item.validPrice = false;
                flag = false;
            }
        });
        if (flag === false) {
            return true;
        }
        return false;
    }
};
ItemHouseComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_4__["HouseService"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_6__["UtilitieService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], ItemHouseComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemHouseComponent.prototype, "listHouse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ItemHouseComponent.prototype, "eventEmit", void 0);
ItemHouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-house',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-house.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/house/item-house/item-house.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-house.component.scss */ "./src/app/host/house/item-house/item-house.component.scss")).default]
    })
], ItemHouseComponent);



/***/ }),

/***/ "./src/app/host/service/service-item/service-item.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/host/service/service-item/service-item.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3Qvc2VydmljZS9zZXJ2aWNlLWl0ZW0vc2VydmljZS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/host/service/service-item/service-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/host/service/service-item/service-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceItemComponent", function() { return ServiceItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_Service_Service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/Service/Service.service */ "./src/app/service/Service/Service.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");






let ServiceItemComponent = class ServiceItemComponent {
    constructor(modalService, fb, serviceService, authenticationService) {
        this.modalService = modalService;
        this.fb = fb;
        this.serviceService = serviceService;
        this.authenticationService = authenticationService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'dịch vụ';
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
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
                this.title = `Chỉnh sửa thông tin ${this.formName}`;
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
        this.arrCheck = this.listServices;
        this.open(this.childModal);
        this.type = type;
        this.model = model;
        this.submitted = false;
        this.updateFormType(type);
        if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
                name: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                times: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: false, disabled: true }],
            });
        }
        else {
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                times: [{ value: this.model.times, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [{ value: this.model.price, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: true }]
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
        let Service;
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
            Service = {
                name: this.formGroup.get('name').value,
                times: this.formGroup.get('times').value,
                price: this.formGroup.get('price').value,
                status: this.formGroup.get('status').value,
                id: this.model.id,
            };
        }
        else {
            Service = {
                name: this.formGroup.get('name').value,
                times: this.formGroup.get('times').value,
                price: this.formGroup.get('price').value,
                status: this.formGroup.get('status').value,
            };
        }
        if (this.isAdd) {
            this.serviceService.createService(Service).subscribe(res => {
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
            this.serviceService.updateService(Service.id, Service).subscribe(res => {
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
ServiceItemComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_Service_Service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], ServiceItemComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServiceItemComponent.prototype, "listServices", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ServiceItemComponent.prototype, "eventEmit", void 0);
ServiceItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/service/service-item/service-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-item.component.scss */ "./src/app/host/service/service-item/service-item.component.scss")).default]
    })
], ServiceItemComponent);



/***/ }),

/***/ "./src/app/host/service/service.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/host/service/service.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3Qvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/host/service/service.component.ts":
/*!***************************************************!*\
  !*** ./src/app/host/service/service.component.ts ***!
  \***************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service/service.service */ "./src/app/service/service/service.service.ts");
/* harmony import */ var _service_item_service_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-item/service-item.component */ "./src/app/host/service/service-item/service-item.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let ServiceComponent = class ServiceComponent {
    constructor(serviceService, modalService, authenticationService) {
        this.serviceService = serviceService;
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
        this.getAllservice();
    }
    initModal(model, type = null) {
        this.view.view(model, type);
    }
    checkAllCheckBox(ev) {
        this.listService.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedservice = [...this.listService]
            .filter((service) => service.checked)
            .map((p) => p.id);
        if (selectedservice.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    getserviceId(id) {
        this.id = id;
    }
    deleteservice() {
        this.serviceService.deleteService(this.id).subscribe(() => {
            this.serviceService.getAllService().subscribe(listService => {
                this.listService = listService;
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
    getAllservice() {
        this.serviceService.getAllService().subscribe(listService => {
            this.listService = listService;
            this.listFilterResult = this.listService;
            $(function () {
                $('#table-service').DataTable({
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
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listService = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listService = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listService = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
    deleteListService() {
        for (var i = 0; i < this.listService.length; i++) {
            if (this.listService[i].checked === true) {
                this.listDelete.push(this.listService[i].id);
            }
        }
        this.serviceService.deleteListService(this.listDelete).subscribe(res => {
            this.getAllservice();
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
        this.getAllservice();
    }
};
ServiceComponent.ctorParameters = () => [
    { type: _service_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_service_item_service_item_component__WEBPACK_IMPORTED_MODULE_4__["ServiceItemComponent"])
], ServiceComponent.prototype, "view", void 0);
ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/service/service.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service.component.scss */ "./src/app/host/service/service.component.scss")).default]
    })
], ServiceComponent);



/***/ }),

/***/ "./src/app/host/utilities/utilities-item/utilities-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/host/utilities/utilities-item/utilities-item.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvdXRpbGl0aWVzL3V0aWxpdGllcy1pdGVtL3V0aWxpdGllcy1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/host/utilities/utilities-item/utilities-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/host/utilities/utilities-item/utilities-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: UtilitiesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesItemComponent", function() { return UtilitiesItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_Utilitie_Utilitie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/Utilitie/Utilitie.service */ "./src/app/service/Utilitie/Utilitie.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");






let UtilitiesItemComponent = class UtilitiesItemComponent {
    constructor(modalService, fb, utilitieService, authenticationService) {
        this.modalService = modalService;
        this.fb = fb;
        this.utilitieService = utilitieService;
        this.authenticationService = authenticationService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'tiện ích';
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
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
                this.title = `Chỉnh sửa thông tin ${this.formName}`;
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
                status: [{ value: false, disabled: true }],
            });
        }
        else {
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                description: [{ value: this.model.description, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: true }]
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
UtilitiesItemComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_Utilitie_Utilitie_service__WEBPACK_IMPORTED_MODULE_4__["UtilitieService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], UtilitiesItemComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UtilitiesItemComponent.prototype, "listUtilities", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UtilitiesItemComponent.prototype, "eventEmit", void 0);
UtilitiesItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utilities-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./utilities-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/utilities/utilities-item/utilities-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./utilities-item.component.scss */ "./src/app/host/utilities/utilities-item/utilities-item.component.scss")).default]
    })
], UtilitiesItemComponent);



/***/ }),

/***/ "./src/app/host/utilities/utilities.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/host/utilities/utilities.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvdXRpbGl0aWVzL3V0aWxpdGllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/host/utilities/utilities.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/host/utilities/utilities.component.ts ***!
  \*******************************************************/
/*! exports provided: UtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesComponent", function() { return UtilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_Utilitie_Utilitie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/Utilitie/Utilitie.service */ "./src/app/service/Utilitie/Utilitie.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _utilities_item_utilities_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities-item/utilities-item.component */ "./src/app/host/utilities/utilities-item/utilities-item.component.ts");






let UtilitiesComponent = class UtilitiesComponent {
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
                $('#modal-delete-list').modal('hide');
            });
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
UtilitiesComponent.ctorParameters = () => [
    { type: _service_Utilitie_Utilitie_service__WEBPACK_IMPORTED_MODULE_2__["UtilitieService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_utilities_item_utilities_item_component__WEBPACK_IMPORTED_MODULE_5__["UtilitiesItemComponent"])
], UtilitiesComponent.prototype, "view", void 0);
UtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utilities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./utilities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host/utilities/utilities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./utilities.component.scss */ "./src/app/host/utilities/utilities.component.scss")).default]
    })
], UtilitiesComponent);



/***/ }),

/***/ "./src/app/service/Service/Service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/Service/Service.service.ts ***!
  \****************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`;
let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
    }
    getAllService() {
        return this.http.get(API_URL + '/services');
    }
    getAllServiceStatusTrue(house) {
        return this.http.post(API_URL + '/services/statusTrue', house);
    }
    createService(service) {
        return this.http.post(API_URL + '/services', service);
    }
    getService(id) {
        return this.http.get(API_URL + `/services/${id}`);
    }
    updateService(id, service) {
        return this.http.put(API_URL + `/services/${id}`, service);
    }
    deleteService(id) {
        return this.http.delete(API_URL + `/services/${id}`);
    }
    deleteListService(id) {
        return this.http.post(API_URL + '/services/deleteList', id);
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ "./src/app/service/Utilitie/Utilitie.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/Utilitie/Utilitie.service.ts ***!
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

/***/ "./src/app/service/usageBill/usage-bill.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/usageBill/usage-bill.service.ts ***!
  \*********************************************************/
/*! exports provided: UsageBillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageBillService", function() { return UsageBillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let UsageBillService = class UsageBillService {
    constructor(http) {
        this.http = http;
    }
    getAllUsageBill() {
        return this.http.get(API_URL + '/usageBill');
    }
    createUsageBill(object) {
        return this.http.post(API_URL + '/usageBill', object);
    }
    deleteUsageBill(id) {
        return this.http.delete(API_URL + `/usageBill/${id}`);
    }
    getUsageBill(id) {
        return this.http.get(API_URL + `/usageBill/${id}`);
    }
    sumPrice(month, year, id) {
        return this.http.get(API_URL + `/usageBill/total-price?month=` + month + '&year=' + year + '&id=' + id);
    }
    sumPriceByHouse(month, year, idHost, idHouse) {
        return this.http.get(API_URL + `/usageBill/total-price-by-house?month=` + month + '&year=' + year + '&idHost=' + idHost + '&idHouse=' + idHouse);
    }
};
UsageBillService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UsageBillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsageBillService);



/***/ })

}]);
//# sourceMappingURL=host-host-module-es2015.js.map