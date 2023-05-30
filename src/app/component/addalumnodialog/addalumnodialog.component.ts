import { Component } from '@angular/core';
import { AlumnoModel } from '../../model/alumno-model';
import { MatDialogRef } from '@angular/material/dialog';
//import { AlumnoService } from '../../service/alumno.service';


@Component({
  selector: 'app-addalumnodialog',
  templateUrl: './addalumnodialog.component.html',
  styleUrls: ['./addalumnodialog.component.css']
})
export class AddalumnodialogComponent {

  
  alumno: AlumnoModel = new AlumnoModel();

  constructor(
    public dialogRef: MatDialogRef<AddalumnodialogComponent>
    //private alumnoService: AlumnoService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addAlumno(): void {
    /*
    this.alumnoService.addAlumno(this.alumno).subscribe(() => {
      this.dialogRef.close();
    });
    */
  }
}
