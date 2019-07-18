import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB4v-e0xzgbShqtYejaIhGnS9NA8ir5l6jgXAy6iKmtaTNB-flOUAi2w34m2lmcII2_MGok7SJjXPZV8gU',
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(resp => resp.albums.items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`)
    .pipe( map(resp => resp.artists.items ));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    // .pipe( map(resp => resp.artists.items ));
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map(resp => resp.tracks ));
  }
}
