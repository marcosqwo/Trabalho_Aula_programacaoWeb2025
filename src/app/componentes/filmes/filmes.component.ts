import { Component, OnInit } from '@angular/core';
import {Series} from "../../app-core/model/series";
import {Filmes} from "../../app-core/model/filmes";

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
