import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MenuComponent } from './menu/menu.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
//import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MenuComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DetailsEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
