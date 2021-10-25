import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from './guard/auth.guard';
import { CompanyAddPage } from './pages/add-company/add-company.page';
import { EmployeeAddPage } from './pages/add-employee/add-employee.page';
import { CompaniesPage } from './pages/companies/companies.page';
import { CompanyEditPage } from './pages/edit-company/edit-company.page';
import { EmployeeEditPage } from './pages/edit-employee/edit-employee.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { LoginComponent } from './pages/login/login.page';
import { RegisterComponent } from './pages/register/register.page';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'companies', component: CompaniesPage }, //, canActivate: [AuthorizeGuard], children: [] },
  { path: 'companies/add', component: CompanyAddPage },
  { path: 'companies/:id', component: CompanyEditPage },
  { path: 'companies/:id/employee/add', component: EmployeeAddPage},
  { path: 'companies/:id/employees', component: EmployeesPage },  
  { path: 'companies/:id/employee/:idEmployee', component: EmployeeEditPage}, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
