import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { Company } from "src/app/models/company.model";
import { Employee } from "src/app/models/employee.model";
import { Photo } from "src/app/models/photo.model";
import { ApiService } from "src/app/services/api.service";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-edit-employee',
    templateUrl: 'edit-employee.page.html',
    styleUrls: ['edit-employee.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeEditPage implements OnInit {
    company = new Company();
    employee = new Employee();    
    edit = false;
    idCompany: string;
    idEmployee: string;

    photo = new Photo();
    uploader: FileUploader;
    hasBaseDropZoneOver = false;
    //baseUrl = environment.apiUrl;
    baseUrl = 'https://localhost:5001/';

    constructor(private apiSvc: ApiService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.idCompany = this.route.snapshot.paramMap.get('id');
        this.idEmployee = this.route.snapshot.paramMap.get('idEmployee')
        this.getEmployee(this.idCompany, this.idEmployee);
        this.getPhoto(this.idEmployee);  
        
        this.initializeUploader();
    }

    getEmployee(idCompany: string, idEmployee: string) {
        this.apiSvc.get(`api/Companies/${idCompany}/Employee/${idEmployee}`).subscribe(data => {
            this.company = data;
            this.employee = data.employees[0];
        });
    }    

    goToEmployees() {
        this.router.navigateByUrl(`companies/${this.idCompany}/employees`);
    }

    editMode() {
        this.edit = true;
    }
    
    updateEmployee() {
        this.apiSvc.put(`api/Companies/${this.company.id}/Employee/${this.employee.id}`, this.employee).subscribe(() => {
            this.router.navigateByUrl(`/companies/${this.company.id}/employee/${this.employee.id}`);
        });
        this.edit = false;
    }

    deleteEmployee(company: Company) {
        this.apiSvc.put(`api/Companies/${this.company.id}/Employee-Change-Status-To-Inactive/${this.employee.id}`).subscribe(() => {
            this.router.navigateByUrl(`/companies/${this.company.id}/employees`);
        });
    }

    getPhoto(idEmployee: string) {
        this.apiSvc.get(`api/Employees/${idEmployee}/Photo`).subscribe(data => {
            this.photo = data.photo;
        });
    }

    fileOverBase(e: any) {
        this.hasBaseDropZoneOver = e;
    }

    initializeUploader() {
        this.uploader = new FileUploader({
          url: this.baseUrl + `api/Employees/${this.idEmployee}/Add-Photo`,
          //authToken: 'Bearer ' + this.user.token,
          isHTML5: true,
          allowedFileType: ['image'],
          removeAfterUpload: true,
          autoUpload: false,
          maxFileSize: 10 * 1024 * 1024
        });
    
        this.uploader.onAfterAddingFile = (file) => {
          file.withCredentials = false;
        }
    
        this.uploader.onSuccessItem = (item, response, status, headers) => {
          if (response) {
            const photo: Photo = JSON.parse(response);
            this.employee.photo = photo;             
          }
        }
    }

    deletePhoto(employeeId: number) {
        this.apiSvc.delete(`api/Employees/${employeeId}/Delete-Photo`).subscribe(() => {

        });
    }
}