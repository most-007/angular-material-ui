import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {MatSnackBar} from  '@angular/material';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  loading = true;
  displayedColumns = ['id', 'name', 'job', 'operations'];
  customers: Customer[] = [
    { id: 1, name: 'Customer 001', job: 'Programmer' },

  ];
  dataSource = new MatTableDataSource<Customer>(this.customers);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:  MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort  =  this.sort;
  }
  constructor(public  snackBar:  MatSnackBar) { }

  ngOnInit() {
    setTimeout(() => {

      this.loading = false;

    }, 2000);
  }
  deleteCustomer(id) {
    let snackBarRef = this.snackBar.open(`Deleting customer #${id}`);
  }
  editCustomer(id) {
    let snackBarRef = this.snackBar.open(`Editing customer #${id}`);
  }

}
