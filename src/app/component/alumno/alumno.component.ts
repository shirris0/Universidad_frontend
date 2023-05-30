import { Component } from '@angular/core';
import { AlumnoService } from '../../service/alumno.service';
import {AlumnoModel} from '../../model/alumno-model';
import {MatTableDataSource} from '@angular/material/table';





@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})


export class AlumnoComponent {

  displayedColumns: string[] = ['id', 'matricula', 'nombre', 'primerApellido', 'segundoApellido', 'activo'];
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
