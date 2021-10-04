import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'angular-translations';
  text = '';
  lang = 'en';
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang(this.lang);
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
    this.translateService.use(this.lang);
    this.load();
  }
  click(): void {
    this.http.post('http://localhost:8000/like', {}).subscribe((res: any) => {
      this.translateService
        .get(res.message)
        .subscribe((text: any) => alert(text));
    });
  }
}
