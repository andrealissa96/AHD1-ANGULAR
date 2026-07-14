import { Component } from '@angular/core';
import { CursoModel } from '../../models/curso.model';
import { CursoService } from '../../services/curso';
import { CursoCard } from '../../components/curso-card/curso-card';

@Component({
  selector: 'app-cursos',
  imports: [CursoCard],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})

export class Cursos {

  cursos: CursoModel[] = [];

  constructor(private curService: CursoService) { }

  ngOnInit() {
    this.cursos = this.curService.obtenerCursos();
  }

}
