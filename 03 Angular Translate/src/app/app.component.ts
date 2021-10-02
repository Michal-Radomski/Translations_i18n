import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'angular-translations';
  text = '';
  lang = 'en';
  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    const headers = new HttpHeaders({
      'Accept-Language': this.lang,
    });

    this.http
      .get('http://localhost:8000/text', { headers: headers })
      .subscribe((res: any) => (this.text = res.text));
  }
  change(lang: any): void {
    this.lang = lang;
    this.load();
  }
}
