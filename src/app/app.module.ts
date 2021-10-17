import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { CompaniesPage } from './pages/companies/companies.page';
import { HomePage } from './pages/home/home.page';
import { SideMenuComponent } from './components/side.menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyAddPage } from './pages/add-company/add-company.page';
import { FormsModule } from '@angular/forms';
import { CompanyEditPage } from './pages/edit-company/edit-company.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { EmployeeAddPage } from './pages/add-employee/add-employee.page';
import { EmployeeEditPage } from './pages/edit-employee/edit-employee.page';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    CompaniesPage,
    CompanyAddPage,
    CompanyEditPage,
    EmployeesPage,
    EmployeeAddPage,
    EmployeeEditPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
