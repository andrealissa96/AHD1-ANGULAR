import { Component, Input } from '@angular/core';
import { InstructorModel } from '../../models/instructor.model';

@Component({
  selector: 'app-instructor-card',
  imports: [],
  templateUrl: './instructor-card.html',
  styleUrl: './instructor-card.css',
})
export class InstructorCard {
  @Input() instructor!: InstructorModel;
}
