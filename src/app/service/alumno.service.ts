import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrlAlumno = 'http://localhost:8080/alumno';

 

  constructor(private http: HttpClient) { }

 
  getAlumnosList(){
    return this.http.get<any>(this.apiUrlAlumno+"/getList/")
    .toPromise()
    .then( data =>{
      return data;
    }).catch((data:any) =>{
      console.log("Algo salio mal!");
    })
  }

}
