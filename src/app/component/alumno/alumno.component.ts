import { Component } from '@angular/core';
import { AlumnoService } from '../../service/alumno.service';
import {AlumnoModel} from '../../model/alumno-model';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: AlumnoModel[] = [
  {id: 1, matricula: 'Hydrogen', nombre: "iwilson", primerApellido: 'H', activo:false}
 
];

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})


export class AlumnoComponent {

  displayedColumns: string[] = ['id', 'matricula', 'nombre', 'primerApellido', 'activo'];
  dataSource = new MatTableDataSource<AlumnoModel>([]);

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit() {
    this.getAlumnosList();
  }

  getAlumnosList(){
   this.alumnoService.getAlumnosList().then(data =>{
      debugger;
      this.dataSource.data = data;
   })
  }

  
}
