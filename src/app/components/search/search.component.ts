import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  artistas: any[] = [];
  loading: boolean;

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtistas(termino)
    .subscribe( (resp: any) => {
      this.artistas = resp;
      this.loading = false;

    });
  }

}
