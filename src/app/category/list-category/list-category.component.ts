import {Component, OnInit, ViewChild} from '@angular/core';
import {UserToken} from '../../model/user-token';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {CategoryItemComponent} from '../../host/category/category-item/category-item.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ItemCategoryComponent} from './item-category/item-category.component';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  // @ts-ignore
  @ViewChild(ItemCategoryComponent) view!: ItemCategoryComponent;
  listCategory: Category[];
  currentUser: UserToken;
  hasRoleUser = false;
  hasRoleAdmin = false;
  isDelete = true;
  id: number;
  listFilterResult: Category[] = [];
  listDelete: number[] = [];
  isSelected = true;

  constructor(private categoryService: CategoryService,
              private modalService: NgbModal,
              private authenticationService: AuthenticationService) {
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

  getCategoryId(id: number) {
    this.id = id;
  }

  initModal(model: any, type = null): void {
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
    } else {
      this.isDelete = true;
    }
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.id).subscribe(() => {
      this.categoryService.getAllCategory().subscribe(listCategory => {
        this.listCategory = listCategory;
      });
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#modal-delete').modal('hide');
      });
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
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
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
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
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#table-category').DataTable({
          paging: true,
          lengthChange: true,
          retrieve: true,
          searching: true,
          ordering: false,
          info: false,
          autoWidth: true,
        });
      });
    });
  }

  deleteListCategory() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listCategory.length; i++) {
      if (this.listCategory[i].checked === true) {
        this.listDelete.push(this.listCategory[i].id);
      }
    }
    this.categoryService.deleteListCategory(this.listDelete).subscribe(res => {
        this.getAllCategory();
        // tslint:disable-next-line:only-arrow-functions
        $(function() {
          $('#modal-delete-list').modal('hide');
        });
        // tslint:disable-next-line:only-arrow-functions
        $(function() {
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
      },
      err => {
        // tslint:disable-next-line:only-arrow-functions
        $(function() {
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

  changeStatus(event: any) {
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
}
