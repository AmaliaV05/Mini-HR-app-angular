import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompanyAddPage } from './pages/add-company/add-company.page';
import { CompaniesPage } from './pages/companies/companies.page';
import { CompanyEditPage } from './pages/edit-company/edit-company.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'companies', component: CompaniesPage },
  { path: 'companies/add', component: CompanyAddPage },
  { path: 'companies/:id', component: CompanyEditPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
