import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];

  // constructor(private http: HttpClient) {
  //   console.log('Consstructor');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe((resp: any) => {
  //     this.paises = resp;
  //     console.log(resp);
  //   });
  //  }

  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  mensaje: string;
  codeErr: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe((resp: any) => {
      this.nuevasCanciones = resp;
      this.loading = false;
    }, (err =>{
      this.loading = false;
      this.error = true;
      console.log(err);
      this.mensaje = err.error.error.message;
      this.codeErr = err.error.error.status;
    }));
  }

  ngOnInit() {
  }

}
