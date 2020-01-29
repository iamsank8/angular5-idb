import { Component } from '@angular/core';
import { openDB, deleteDB, wrap, unwrap } from 'idb';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
