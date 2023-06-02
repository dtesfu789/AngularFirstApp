import { Component } from '@angular/core';
import { HomeComponent} from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<main>
              <header class="brand-name">
                <img class="brand-logo" src = "./assets/logo.svg" alt="logo" aria-hidden="true">
                <section class="content">
                  <app-home></app-home>
                </section>
              </header>
            </main>`,
  //templateUrl:'./src/index.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
