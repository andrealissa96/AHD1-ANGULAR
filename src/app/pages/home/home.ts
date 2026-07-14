import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { CursoCard } from '../../components/curso-card/curso-card';

@Component({
  selector: 'app-home',
  imports: [Banner, CursoCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
