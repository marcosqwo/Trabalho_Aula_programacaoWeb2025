import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesServiceService } from 'src/app/app-core/service/filmes-service.service';
import { Filmes } from 'src/app/app-core/model/filmes';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-player-filmes',
  templateUrl: './player-filmes.component.html',
  styleUrls: ['./player-filmes.component.css']
})
export class PlayerFilmesComponent implements OnInit {
  filme: Filmes | undefined;
  safeIframe: SafeHtml | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private filmesService: FilmesServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarFilme(id);


    const cachedFilme = sessionStorage.getItem('currentFilme');
    if (cachedFilme) {
      this.filme = JSON.parse(cachedFilme);
      if (this.filme?.link) {
        this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(this.filme.link);
        this.loading = false;
      }
    }
  }

  async carregarFilme(id: number) {
    try {
      const filmes = await this.filmesService.buscarfilmes();
      this.filme = filmes.find(f => f.id === id);

      if (this.filme) {

        sessionStorage.setItem('currentFilme', JSON.stringify(this.filme));

        if (this.filme.link) {
          this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(this.filme.link);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar filme:', error);
    } finally {
      this.loading = false;
    }
  }
}
