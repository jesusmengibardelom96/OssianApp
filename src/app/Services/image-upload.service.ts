import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }

  uploadImage(uploadData){
    //console.log(uploadData);
    this.http.post('http://localhost:80/uploadImage.php', uploadData)
    .subscribe(event => {
    });
  }
}
