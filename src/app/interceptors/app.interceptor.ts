import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";


// return next.handle(request).pipe(
//     catchError((errorResponse: HttpErrorResponse) => {
//         if(errorResponse) {
//             switch (errorResponse.status) {
//                 case 401:
//                     console.warn('The autentication session expired. Please sign in again');
//                     break;
//                 case 404:
//                     this.router.navigateByUrl('/not-found');
//                     console.warn('404 was handled');
//                 default:
//                     console.warn('An unexpected error was handled. Please contact the administrator of the system');
//             }            
//         }
//     })
// );