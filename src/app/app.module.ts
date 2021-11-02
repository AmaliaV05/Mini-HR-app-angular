import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { CompaniesComponent } from './pages/companies/list-companies/companies.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompanyAddComponent } from './pages/companies/add-company/add-company.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyEditComponent } from './pages/companies/edit-company/edit-company.page';
import { EmployeesComponent } from './pages/employees/list-employees/employees.page';
import { EmployeeAddComponent } from './pages/employees/add-employee/add-employee.page';
import { EmployeeEditComponent } from './pages/employees/edit-employee/edit-employee.page';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './pages/authentication/register/register.page';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { NavComponent } from './components/nav/nav.component';
import { JwtInterceptor } from './interceptors/auth.token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CompaniesComponent,
    CompanyAddComponent,
    CompanyEditComponent,
    EmployeesComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,    
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSortModule,
    FileUploadModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [
    ApiService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  exports: [
    MatSortModule, 
    FileUploadModule,
    MatPaginatorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
