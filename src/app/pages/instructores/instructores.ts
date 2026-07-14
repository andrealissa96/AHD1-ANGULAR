import { Component } from '@angular/core';
import { InstructorCard } from '../../components/instructor-card/instructor-card';
import { InstructorModel } from '../../models/instructor.model';
import { InstructorService } from '../../services/instructor';

@Component({
  selector: 'app-instructores',
  imports: [InstructorCard],
  templateUrl: './instructores.html',
  styleUrl: './instructores.css',
})
export class Instructores {
  instructores: InstructorModel[] = [];

  constructor(private instructorservice: InstructorService) {}

  ngOnInit() {
    this.instructores = this.instructorservice.obtenerInstructores();
  }
}
