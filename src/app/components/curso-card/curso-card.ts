import { Component, Input } from '@angular/core';
import { CursoModel } from '../../models/curso.model';




@Component({
  selector: 'app-curso-card',
  imports: [],
  templateUrl: './curso-card.html',
  styleUrl: './curso-card.css',
})
export class CursoCard {
  @Input() curso!: CursoModel;
}
