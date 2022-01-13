import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { BehaviorSubject } from "rxjs";
import { Employee } from "src/app/models/employee.model";
import { Photo } from "src/app/models/photo.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-employee',
    templateUrl: 'add-employee.page.html',
    styleUrls: ['add-employee.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeAddComponent implements OnInit {
    employee = new Employee();
    idCompany: string;
    addPhoto = false;
    idEmployee: string;
    subject = new BehaviorSubject(this.employee);

    photo = new Photo();
    uploader: FileUploader;
    hasBaseDropZoneOver = false;
    baseUrl = 'https://localhost:5001/';

    constructor(private apiSvc: ApiService,
        private router: Router,
        private route: ActivatedRoute) { }
        
    ngOnInit() {
        this.idCompany = this.route.snapshot.paramMap.get('id');
    }

    addEmployee() {
        this.apiSvc.post(`api/Companies/${this.idCompany}/Employee`, this.employee).subscribe(data => {
            this.addPhoto = true;
        });
    }  

    goToEmployees() {
        this.router.navigateByUrl(`companies/${this.idCompany}/employees`);
    }

    fileOverBase(e: any) {
        this.hasBaseDropZoneOver = e;
    }

    initializeUploader() {     
        this.uploader = new FileUploader({
          url: this.baseUrl + `api/Employees/${this.idEmployee.toString()}/Add-Photo`,
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
}