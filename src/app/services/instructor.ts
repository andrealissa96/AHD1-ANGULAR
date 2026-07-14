import { Injectable } from '@angular/core';
import { InstructorModel } from '../models/instructor.model';
import { INSTRUCTORES } from '../data/instructores.data';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  obtenerInstructores(): InstructorModel[] {
    return INSTRUCTORES;
  }
}
