import { Injectable } from '@angular/core';
import { CursoModel } from '../models/curso.model';
import { CURSOS } from '../data/cursos.data';

@Injectable({
  providedIn: 'root',
})

export class CursoService {
  obtenerCursos(): CursoModel[] {
    return CURSOS;
  }

  getCursosDestacados(): CursoModel[] {
    return CURSOS.filter(curso => curso.destacado === true);
  }
}
