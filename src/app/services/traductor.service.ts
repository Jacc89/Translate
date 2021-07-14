import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {


  constructor(private traslate: TranslateService) {
    this.traslate.setDefaultLang('en');
    this.traslate.use('en');
    console.log(this.traslate);
   }
}
