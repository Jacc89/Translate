import { Component } from '@angular/core';
import { TraductorService } from './services/traductor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate';

  constructor (private translate: TraductorService){}
}
