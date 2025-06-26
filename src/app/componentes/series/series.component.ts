import { Component, OnInit } from '@angular/core';
import {Series} from "../../app-core/model/series";
import {SerieserviceService} from "../../app-core/service/serieservice.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
 declare let $: any;
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  listaseries:Series[]=[];
  safeIframe: SafeHtml = '';
  private sanitizer: any;
  serievisualizar:any;


  constructor(serieservice : SerieserviceService,sanitizer: DomSanitizer) {
    serieservice.buscarseries().then(series => {
      this.listaseries = series;
    });
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {

  }
  openModalSeries() {
    $('#visualizar-serie').modal('show');
  }
  closeModalSerie() {
    $('#visualizar-serie').modal('hide');
  }
  setSerieAtual(t:Series){
    this.serievisualizar=t;
    this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(t.link);
  }

}
