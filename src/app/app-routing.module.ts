import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { CursoComponent } from './component/curso/curso.component';

const routes: Routes = [
  { path: 'app-alumno', component: AlumnoComponent },
  { path: 'app-curso', component: CursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
