//--------------------Imports----------------
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../main/config.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//--------------------End of Imports----------------
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  //URL of the API
  configUrl = 'http://internal.ossian.tech/api/Sample';
  
  //Get the images from the API
  getConfigFromAPi() {
    this.http.get(this.configUrl,{observe: 'body'}).subscribe((data: Config) => {
      localStorage.setItem("Images", JSON.stringify(data.result));
    });
  }

  //Get the images from the DB
  getConfigFromDB() {
    this.http.get('http://localhost:80/selectImagesDB.php',{observe: 'body'}).subscribe((res: Response) => {
      console.log(res);
      localStorage.setItem("Images", JSON.stringify(res));
    });
  }

  //Set the API images into DB
  setAPIToDB(json){
    this.http.post('http://localhost:80/insertApiImagesToDB.php',JSON.stringify(json), {observe: 'body'})
    .subscribe((data: Config) => {
    }, (err)=>{
      console.log(err);
    });
  }

  //Update the image from DB
  updateImageFromDB(json){
    this.http.post('http://localhost:80/updateImageFromDB.php',JSON.stringify(json), {observe: 'body'})
    .subscribe((data: Config) => {
    }, (err)=>{
      console.log(err);
    });
  }

  //Delete the images from DB
  deleteImageFromDB(json){
    this.http.post('http://localhost:80/deleteImageDB.php',JSON.stringify(json), {observe: 'body'})
    .subscribe((data: Config) => {
    }, (err)=>{
      console.log(err);
    });
  }

  //Remove the localstorage of images 
  removeConfig(){
    localStorage.removeItem("Images");
  }
}
