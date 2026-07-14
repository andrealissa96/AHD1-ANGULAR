import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { Instructores } from './pages/instructores/instructores';
import { Inscripcion } from './pages/inscripcion/inscripcion';
import { Contacto } from './pages/contacto/contacto';


export const routes: Routes = [
{
path: '',
component: Home
},


{
path: 'cursos',
component: Cursos
},

{
    path: 'instructores',
    component: Instructores
},

{
    path: 'inscripcion',
    component: Inscripcion  
},

{
    path: 'contacto',
    component: Contacto
},
{
    path: '**',
    redirectTo: ' '
}



];
