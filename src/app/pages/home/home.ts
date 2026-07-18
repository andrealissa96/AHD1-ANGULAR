import { Component, OnInit } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CursoCard } from '../../components/curso-card/curso-card';
import { CursoModel } from '../../models/curso.model';
import { CursoService } from '../../services/curso';
import { InstructorCard } from '../../components/instructor-card/instructor-card';
import { InstructorModel } from '../../models/instructor.model';
import { InstructorService } from '../../services/instructor';

@Component({
  selector: 'app-home',
  imports: [Banner, CursoCard, InstructorCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  cursos: CursoModel[] = [];
  instructores: InstructorModel[] = [];

  constructor(
    private cursoService: CursoService,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursosDestacados();
    this.instructores = this.instructorService.getInstructoresDestacados();
  }

}
