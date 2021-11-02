import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from './guard/auth.guard';
import { CompanyAddComponent } from './pages/companies/add-company/add-company.page';
import { EmployeeAddComponent } from './pages/employees/add-employee/add-employee.page';
import { CompaniesComponent } from './pages/companies/list-companies/companies.page';
import { CompanyEditComponent } from './pages/companies/edit-company/edit-company.page';
import { EmployeeEditComponent } from './pages/employees/edit-employee/edit-employee.page';
import { EmployeesComponent } from './pages/employees/list-employees/employees.page';
import { RegisterComponent } from './pages/authentication/register/register.page';

const routes: Routes = [ 
  { path: '', component: RegisterComponent },
  { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthorizeGuard], 
    children: [
      { path: 'companies', component: CompaniesComponent },
      { path: 'companies/add', component: CompanyAddComponent },
      { path: 'companies/:id', component: CompanyEditComponent },
      { path: 'companies/:id/employee/add', component: EmployeeAddComponent },
      { path: 'companies/:id/employees', component: EmployeesComponent },  
      { path: 'companies/:id/employee/:idEmployee', component: EmployeeEditComponent }
    ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
